<template>
  <div class="preview_main">
    <div>
      <button id="prev" @click="onPrevPage">Previous</button>
      <button id="next" @click="onNextPage">Next</button>
      &nbsp; &nbsp;
      <span>
        Page:
        <span id="page_num"></span> /
        <span id="page_count"></span>
      </span>
    </div>

    <div>
      <canvas id="the-canvas" style="border:1px solid black"></canvas>
    </div>
  </div>
</template>
<script>
import PDFJS from "pdfjs-dist";

export default {
  data() {
    return {
      pdfDoc: {},
      pdfData: {},
      pageNum: 1,
      pageRendering: false,
      pageNumPending: null,
      scale: 0.8,
      canvas: {},
      ctx: {}
    };
  },
  methods: {
    renderPage(num) {
      let that = this;
      this.pageRendering = true;
      // Using promise to fetch the page
      this.pdfDoc.getPage(num).then(function(page) {
        let viewport = page.getViewport({ scale: that.scale });
        that.canvas.height = viewport.height;
        that.canvas.width = viewport.width;
        // Render PDF page into canvas context
        let renderContext = {
          canvasContext: that.ctx,
          viewport: viewport
        };
        let renderTask = page.render(renderContext);
        // Wait for rendering to finish
        renderTask.promise.then(function() {
          that.pageRendering = false;
          if (that.pageNumPending !== null) {
            // New page rendering is pending
            that.renderPage(that.pageNumPending);
            that.pageNumPending = null;
          }
        });
      });
      document.getElementById("page_num").textContent = num;
    },
    onPrevPage() {
    if (this.pageNum <= 1) {
      return;
    }
    this.pageNum--;
    this.queueRenderPage(this.pageNum);
  },
  onNextPage() {
    if (this.pageNum >= this.pdfDoc.numPages) {
      return;
    }
    this.pageNum++;
    this.queueRenderPage(this.pageNum);
  },
  queueRenderPage(num) {
    if (this.pageRendering) {
      this.pageNumPending = num;
    } else {
      this.renderPage(num);
    }
  },

    getBase() {
      let that = this;
      this.$httpGet(this.$path.con.toGetBase, {
        params: JSON.stringify(this.searchKey)
      })
        .then(res => {
        
          this.pdfData = atob(res);
          this.canvas = document.getElementById("the-canvas");
          this.ctx = this.canvas.getContext("2d");
          // pdfjsLib.GlobalWorkerOptions.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.js';
    
          let loadingTask = PDFJS.getDocument({
            data: this.pdfData
          });

          loadingTask.promise.then((pdfDoc_) =>{
            that.pdfDoc = pdfDoc_;
            console.log("this.pdfDoc", that.pdfDoc);

            document.getElementById(
              "page_count"
            ).textContent = that.pdfDoc.numPages;
            that.renderPage(this.pageNum);
          });
        })
        .catch(err => {});
    }
  },
  created() {},
  mounted() {
    this.getBase();
  }
};
</script>

<style scoped>
.preview_main {
  position: absolute;
  width: 98%;
  height: 98%;
  left: 1%;
  top: 1%;
  border: solid 1px red;
  border-radius: 5px;
  z-index: 5;
  background: #ffffff;
}
</style>