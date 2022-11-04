import mxgraph from '../mxgraph';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Flow = () => {
  const { mxDefaultKeyHandler, mxEditor } = mxgraph;
  const [editor, setEditor] = useState();
  // 初始化
  useEffect(() => {
    console.log('useEffect', 'init');
    window.mxgraph = mxgraph;
    const editor = new mxEditor();
    editor.setGraphContainer(document.getElementById('graphContainer'));
    const graph = editor.graph;
    // const keyHandler = new mxDefaultKeyHandler(editor);
    // keyHandler.bindAction(46, false, 'delete');
    // keyHandler.handler.bindKey(46, (...regs) => {
    //   console.log('addAction delete', regs);
    // });
    var parent = graph.getDefaultParent();
    // 绑定内置操作
    // editor.addAction('delete', (...props) => {
    //   console.log('delete 测试', props);
    //   if (editor.graph.isEnabled()) {
    //     editor.graph.removeCells();
    //   }
    // });
    editor.keyHandler.bindAction(46, 'delete', false);
    editor.keyHandler.bindAction(8, 'delete', false);

    graph.getModel().beginUpdate();
    try {
      let v1 = graph.insertVertex(parent, null, 'node-name', 100, 60, 80, 40, 'overflow=fill;');
      let v2 = graph.insertVertex(parent, null, 'node-name', 200, 60, 80, 40, 'overflow=fill;');
      let v3 = graph.insertVertex(parent, null, 'node-name', 300, 60, 80, 40, 'overflow=fill;');
    } finally {
      // Updates the display
      graph.getModel().endUpdate();
    }
    window.testEditor = editor;
    setEditor(editor);

    return () => {
      // 组件卸载后，必须调用destroy方法，要不然连续两次加载组件 会出现异常bug 画布中数据 和 存储的值不同
      editor.destroy();
    };
  }, []);
  return (
    <div className="graph-window">
      <div className="graph-ctl"></div>
      <div id="graphContainer" className="graph-container"></div>
      <div className="graph-edit"></div>
    </div>
  );
};

export default Flow;
