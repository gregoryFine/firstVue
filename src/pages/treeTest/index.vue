<template>
<div style="width:30%;">
    <Tree :data="data5" :render="renderContent" class="demo-tree-render"></Tree>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data5: [
                    {
                        title: 'parent 1',
                        expand: true,
                        
                        children: [
                            {
                                title: 'child 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'default',
                    size: 'small',
                }
            }
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return h('span', {
                    // style: {
                    //     display: 'inline-block',
                    //     width: '100%'
                    // }
                }, [
                    h('span', [
                       
                        h('span', data.title),
                        h('span', {style:{marginLeft:'1px'}}),
                        h('Tag', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }, 1111),
                    ]),
                    // h('span', {
                    //     style: {
                    //         display: 'inline-block',
                    //         float: 'right',
                    //         marginRight: '32px'
                    //     }
                    // },
                    //  [
                    //     h('Button', {
                    //         props: Object.assign({}, this.buttonProps, {
                    //             icon: 'ios-add'
                    //         }),
                    //         style: {
                    //             marginRight: '8px'
                    //         },
                    //         on: {
                    //             click: () => { this.append(data) }
                    //         }
                    //     }),
                    //     h('Button', {
                    //         props: Object.assign({}, this.buttonProps, {
                    //             icon: 'ios-remove'
                    //         }),
                    //         on: {
                    //             click: () => { this.remove(root, node, data) }
                    //         }
                    //     })
                    // ]
                    // )
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        }
    }
</script>
<style>
    .demo-tree-render .ivu-tree-title{
        width: 100%;
    }
</style>
