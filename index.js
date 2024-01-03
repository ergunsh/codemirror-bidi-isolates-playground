import { bidiIsolates, defaultHighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import {javascript} from "@codemirror/lang-javascript";

const root = document.querySelector('#root');

function createEditorView(text) {
    const state = EditorState.create({
        doc: text,
        extensions: [
            javascript(),
            bidiIsolates(),
            syntaxHighlighting(defaultHighlightStyle),
        ]
    });
    return new EditorView({ state });
}

// The text authored below is this: ./assets/ltr-rendered-fn.png when read left to right.
// However, editors renders that text in a combination of LTR and RTL reading.
// So, it looks different in the following line.
const editorView = createEditorView(`f("ت", 10);`);
root.appendChild(editorView.dom);