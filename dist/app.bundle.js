(() => {
  "use strict";
  var n = {
      731: (n, e, r) => {
        r.d(e, { Z: () => a });
        var t = r(537),
          o = r.n(t),
          A = r(645),
          i = r.n(A)()(o());
        i.push([
          n.id,
          "#content{\n    flex:1;\n    display:grid;\n    grid-template: repeat(auto-fill,360px) / repeat(auto-fill,360px);\n    padding-inline:3vw;\n    gap:3vw;\n    padding-bottom: 10vh;\n}\n.contentItem{\n    background-color: black;\n    border:1px solid var(--subcolor);\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.contentItemImage{\n    width:300px;\n    height:200px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n.contentDescription{\n    border:1px solid black;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    height:100px;\n    width: 300px;\n    overflow: auto;\n}\n.high{\n    background-color: lightgreen;\n}\n.middle{\n    background-color: yellow;\n}\n.low{\n    background-color: red;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/css/content.css"],
            names: [],
            mappings:
              "AAAA;IACI,MAAM;IACN,YAAY;IACZ,gEAAgE;IAChE,kBAAkB;IAClB,OAAO;IACP,oBAAoB;AACxB;AACA;IACI,uBAAuB;IACvB,gCAAgC;IAChC,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,6BAA6B;AACjC;AACA;IACI,sBAAsB;IACtB,+BAA+B;IAC/B,gCAAgC;IAChC,YAAY;IACZ,YAAY;IACZ,cAAc;AAClB;AACA;IACI,4BAA4B;AAChC;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,qBAAqB;AACzB",
            sourcesContent: [
              "#content{\r\n    flex:1;\r\n    display:grid;\r\n    grid-template: repeat(auto-fill,360px) / repeat(auto-fill,360px);\r\n    padding-inline:3vw;\r\n    gap:3vw;\r\n    padding-bottom: 10vh;\r\n}\r\n.contentItem{\r\n    background-color: black;\r\n    border:1px solid var(--subcolor);\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.contentItemImage{\r\n    width:300px;\r\n    height:200px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n.contentDescription{\r\n    border:1px solid black;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    height:100px;\r\n    width: 300px;\r\n    overflow: auto;\r\n}\r\n.high{\r\n    background-color: lightgreen;\r\n}\r\n.middle{\r\n    background-color: yellow;\r\n}\r\n.low{\r\n    background-color: red;\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const a = i;
      },
      744: (n, e, r) => {
        r.d(e, { Z: () => a });
        var t = r(537),
          o = r.n(t),
          A = r(645),
          i = r.n(A)()(o());
        i.push([
          n.id,
          'dialog{\n    border-radius: 1.5rem;\n    background-color: black;\n    color:white;\n    border: 1px solid var(--subcolor)\n}\ninput::selection,textarea::selection{\n    background-color: yellow;\n}\ndialog::backdrop{\n    background-color: rgba(0, 0, 0, 0.507);\n}\nfieldset{\n    border-radius: 1.5rem;\n}\n.addTabPopUp{\n    display:flex;\n    flex-direction: column;\n    justify-content: space-around;\n    width:30rem;\n    height:50rem;\n    padding-inline: 1rem;\n}\ninput{\n    appearance: none;\n    border-radius: 1rem;\n    font-size: 1.5rem;\n    padding-inline: 1rem;\n    border:1px solid var(--subcolor);\n}\ninput:invalid,textarea:invalid{\n    border:3px solid red;\n    box-sizing: border-box;\n}\ninput:valid,textarea:valid{\n    border:3px solid lightgreen;\n    box-sizing: border-box;\n}\ninput[type="file"]{\n    display: none;\n}\nlabel[for="imageSelector"]{\n    display: block;\n    color:black;\n    appearance: none;\n    border-radius: 1rem;\n    font-size: 1.5rem;\n    padding-inline: 1rem;\n    border:1px solid var(--subcolor);\n    height:10rem;\n    background-color: white;\n}\ntextarea{\n    resize: none;\n    border-radius: 1rem;\n    font-size: 1rem;\n    padding: 1rem;\n    font-family: inherit;\n    letter-spacing: 0.2rem;\n    width: 100%;\n    box-sizing: border-box;\n}\n.setPriorityContainer{\n    display:flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.setPriority{\n    display:flex;\n    gap:2rem;\n    align-items: center;\n}\ninput[name="priority"]{\n    display: none;\n}\n#buttonDialog{\n    display: flex;\n}\n#buttonDialog>*{\n    flex:1;\n    margin:0rem 2rem;\n    border-radius: 1rem;\n    font-family: inherit;\n    font-size: 1.5rem;\n    letter-spacing: 0.3rem;\n    color:white;\n}\n#buttonDialog>*:hover{\n    color:var(--subcolor);\n}\nlabel{\n    font-size:1.5rem;\n}\nlabel:hover{\n    cursor: pointer;\n}\n.selectedPriority{\n    color:red;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/css/dialog.css"],
            names: [],
            mappings:
              "AAAA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,WAAW;IACX;AACJ;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,sBAAsB;IACtB,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,gCAAgC;AACpC;AACA;IACI,oBAAoB;IACpB,sBAAsB;AAC1B;AACA;IACI,2BAA2B;IAC3B,sBAAsB;AAC1B;AACA;IACI,aAAa;AACjB;AACA;IACI,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,gCAAgC;IAChC,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,oBAAoB;IACpB,sBAAsB;IACtB,WAAW;IACX,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,QAAQ;IACR,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,MAAM;IACN,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;IACpB,iBAAiB;IACjB,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,SAAS;AACb",
            sourcesContent: [
              'dialog{\r\n    border-radius: 1.5rem;\r\n    background-color: black;\r\n    color:white;\r\n    border: 1px solid var(--subcolor)\r\n}\r\ninput::selection,textarea::selection{\r\n    background-color: yellow;\r\n}\r\ndialog::backdrop{\r\n    background-color: rgba(0, 0, 0, 0.507);\r\n}\r\nfieldset{\r\n    border-radius: 1.5rem;\r\n}\r\n.addTabPopUp{\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width:30rem;\r\n    height:50rem;\r\n    padding-inline: 1rem;\r\n}\r\ninput{\r\n    appearance: none;\r\n    border-radius: 1rem;\r\n    font-size: 1.5rem;\r\n    padding-inline: 1rem;\r\n    border:1px solid var(--subcolor);\r\n}\r\ninput:invalid,textarea:invalid{\r\n    border:3px solid red;\r\n    box-sizing: border-box;\r\n}\r\ninput:valid,textarea:valid{\r\n    border:3px solid lightgreen;\r\n    box-sizing: border-box;\r\n}\r\ninput[type="file"]{\r\n    display: none;\r\n}\r\nlabel[for="imageSelector"]{\r\n    display: block;\r\n    color:black;\r\n    appearance: none;\r\n    border-radius: 1rem;\r\n    font-size: 1.5rem;\r\n    padding-inline: 1rem;\r\n    border:1px solid var(--subcolor);\r\n    height:10rem;\r\n    background-color: white;\r\n}\r\ntextarea{\r\n    resize: none;\r\n    border-radius: 1rem;\r\n    font-size: 1rem;\r\n    padding: 1rem;\r\n    font-family: inherit;\r\n    letter-spacing: 0.2rem;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n.setPriorityContainer{\r\n    display:flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.setPriority{\r\n    display:flex;\r\n    gap:2rem;\r\n    align-items: center;\r\n}\r\ninput[name="priority"]{\r\n    display: none;\r\n}\r\n#buttonDialog{\r\n    display: flex;\r\n}\r\n#buttonDialog>*{\r\n    flex:1;\r\n    margin:0rem 2rem;\r\n    border-radius: 1rem;\r\n    font-family: inherit;\r\n    font-size: 1.5rem;\r\n    letter-spacing: 0.3rem;\r\n    color:white;\r\n}\r\n#buttonDialog>*:hover{\r\n    color:var(--subcolor);\r\n}\r\nlabel{\r\n    font-size:1.5rem;\r\n}\r\nlabel:hover{\r\n    cursor: pointer;\r\n}\r\n.selectedPriority{\r\n    color:red;\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]);
        const a = i;
      },
      594: (n, e, r) => {
        r.d(e, { Z: () => a });
        var t = r(537),
          o = r.n(t),
          A = r(645),
          i = r.n(A)()(o());
        i.push([
          n.id,
          "#loadingbackground{\n    position:fixed;\n    height:100vh;\n    width:100vw;\n    background-image: radial-gradient(rgb(255, 7, 7)1%,rgb(177, 0, 0)30%,black 70%);\n    background-size: 300% 300%;\n    background-position: center;\n    animation: 2s linear 1 load;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n@keyframes load {\n    100%{\n        background-size:100% 100%;\n        background-image: radial-gradient(rgb(255, 7, 7)0%,rgb(177, 0, 0)0%,black 100%);\n    }\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/css/loading.css"],
            names: [],
            mappings:
              "AAAA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,+EAA+E;IAC/E,0BAA0B;IAC1B,2BAA2B;IAC3B,2BAA2B;IAC3B,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI;QACI,yBAAyB;QACzB,+EAA+E;IACnF;AACJ",
            sourcesContent: [
              "#loadingbackground{\r\n    position:fixed;\r\n    height:100vh;\r\n    width:100vw;\r\n    background-image: radial-gradient(rgb(255, 7, 7)1%,rgb(177, 0, 0)30%,black 70%);\r\n    background-size: 300% 300%;\r\n    background-position: center;\r\n    animation: 2s linear 1 load;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@keyframes load {\r\n    100%{\r\n        background-size:100% 100%;\r\n        background-image: radial-gradient(rgb(255, 7, 7)0%,rgb(177, 0, 0)0%,black 100%);\r\n    }\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const a = i;
      },
      402: (n, e, r) => {
        r.d(e, { Z: () => u });
        var t = r(537),
          o = r.n(t),
          A = r(645),
          i = r.n(A),
          a = r(667),
          l = r.n(a),
          c = new URL(r(275), r.b),
          s = i()(o()),
          d = l()(c);
        s.push([
          n.id,
          `@font-face {\n    font-family: 'Myfont';\n    src: url(${d});\n    font-weight: bold;\n    font-style: normal;\n}\n::selection{\n    background: none;\n}\n\n:root{\n    --maincolor: red;\n    --subcolor: rgb(224, 224, 224);\n    --hovermaincolor:  rgb(193,17,25);\n}\nhtml{\n    font-family: 'Myfont';\n    margin:0;\n    background-color: black;\n    color:white;\n    height:100vh;\n    letter-spacing: 0.2rem;\n}\nbody{\n    margin:0;\n    height: 100%;\n    display:flex;\n    flex-direction: column;\n}\nheader{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.homelogo{\n    width:15rem;\n}\n.symbolMenu{\n    display: flex;\n    gap:1rem;\n}\n.symbolButton{\n    background-color: var(--maincolor);\n    border:none;\n    border-radius: 10px;\n}\n.symbolButton:hover{\n    cursor: pointer;\n    background-color: var(--hovermaincolor);\n}\n.material-symbols-outlined{\n    color:white;\n    background-color: inherit;\n    font-size: 2.5rem;\n}\n.material-symbols-outlined:hover{\n    color:var(--subcolor);\n}\nmain{\n    display:flex;\n    padding-bottom: 31px;\n    margin-inline: 5vw;\n    flex:1 0 0;\n}\nmenu{\n    width:150px;\n    margin: 0;\n    border-radius: 10px;\n    padding:0;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap:2rem;\n}\nmenu>*{\n    font-size: 2rem;\n    color:var(--subcolor);\n}\nmenu>*:hover{\n    color:var(--subcolor);\n}\nfooter{\n    position:fixed;\n    bottom:0;\n    width: 100%;\n    text-align: center;\n    color:gray;\n    background-color: black;\n    border-top:1px solid gray;\n}\np{\n    margin:0;\n}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/css/style.css"],
            names: [],
            mappings:
              "AAAA;IACI,qBAAqB;IACrB,4CAA4D;IAC5D,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,8BAA8B;IAC9B,iCAAiC;AACrC;AACA;IACI,qBAAqB;IACrB,QAAQ;IACR,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,kCAAkC;IAClC,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,uCAAuC;AAC3C;AACA;IACI,WAAW;IACX,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,QAAQ;IACR,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,yBAAyB;AAC7B;AACA;IACI,QAAQ;AACZ",
            sourcesContent: [
              "@font-face {\r\n    font-family: 'Myfont';\r\n    src: url('/src/asset/font/Bebas_Neue/BebasNeue-Regular.ttf');\r\n    font-weight: bold;\r\n    font-style: normal;\r\n}\r\n::selection{\r\n    background: none;\r\n}\r\n\r\n:root{\r\n    --maincolor: red;\r\n    --subcolor: rgb(224, 224, 224);\r\n    --hovermaincolor:  rgb(193,17,25);\r\n}\r\nhtml{\r\n    font-family: 'Myfont';\r\n    margin:0;\r\n    background-color: black;\r\n    color:white;\r\n    height:100vh;\r\n    letter-spacing: 0.2rem;\r\n}\r\nbody{\r\n    margin:0;\r\n    height: 100%;\r\n    display:flex;\r\n    flex-direction: column;\r\n}\r\nheader{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n.homelogo{\r\n    width:15rem;\r\n}\r\n.symbolMenu{\r\n    display: flex;\r\n    gap:1rem;\r\n}\r\n.symbolButton{\r\n    background-color: var(--maincolor);\r\n    border:none;\r\n    border-radius: 10px;\r\n}\r\n.symbolButton:hover{\r\n    cursor: pointer;\r\n    background-color: var(--hovermaincolor);\r\n}\r\n.material-symbols-outlined{\r\n    color:white;\r\n    background-color: inherit;\r\n    font-size: 2.5rem;\r\n}\r\n.material-symbols-outlined:hover{\r\n    color:var(--subcolor);\r\n}\r\nmain{\r\n    display:flex;\r\n    padding-bottom: 31px;\r\n    margin-inline: 5vw;\r\n    flex:1 0 0;\r\n}\r\nmenu{\r\n    width:150px;\r\n    margin: 0;\r\n    border-radius: 10px;\r\n    padding:0;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap:2rem;\r\n}\r\nmenu>*{\r\n    font-size: 2rem;\r\n    color:var(--subcolor);\r\n}\r\nmenu>*:hover{\r\n    color:var(--subcolor);\r\n}\r\nfooter{\r\n    position:fixed;\r\n    bottom:0;\r\n    width: 100%;\r\n    text-align: center;\r\n    color:gray;\r\n    background-color: black;\r\n    border-top:1px solid gray;\r\n}\r\np{\r\n    margin:0;\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const u = s;
      },
      476: (n, e, r) => {
        r.d(e, { Z: () => a });
        var t = r(537),
          o = r.n(t),
          A = r(645),
          i = r.n(A)()(o());
        i.push([
          n.id,
          "menu *::selection{\n    background-color: black;\n}\nmenu p:hover{\n    cursor: pointer;\n}\n.addTabInput{\n    appearance: none;\n    width:150px;\n    border:0;\n    padding: 0.5rem;\n    border-radius: 10px;\n    box-sizing: border-box;\n    border: 1px groove white;\n    background-color: var(--subcolor);\n    font-family: Myfont;\n    letter-spacing: 0.1rem;\n}\n.addTabButton{\n    display:none;\n}\n\n.hovered{\n    text-decoration: var(--subcolor) underline;\n    color:white;\n}\n.selected{\n    color:red;\n}\n.selected:hover{\n    color:red;\n}\n.removeTabButton{\n    background: none;\n    border: none;\n    height:1.5rem;\n}\n.tab{\n    font-size: 1.5rem;\n    display: inline-block;\n}\n.tabcomponent{\n    height:fit-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.minusbutton{\n    font-size: 1rem;\n}\n.minusbutton:hover{\n    cursor: pointer;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/css/tab.css"],
            names: [],
            mappings:
              "AAAA;IACI,uBAAuB;AAC3B;AACA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,QAAQ;IACR,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,wBAAwB;IACxB,iCAAiC;IACjC,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,YAAY;AAChB;;AAEA;IACI,0CAA0C;IAC1C,WAAW;AACf;AACA;IACI,SAAS;AACb;AACA;IACI,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB",
            sourcesContent: [
              "menu *::selection{\r\n    background-color: black;\r\n}\r\nmenu p:hover{\r\n    cursor: pointer;\r\n}\r\n.addTabInput{\r\n    appearance: none;\r\n    width:150px;\r\n    border:0;\r\n    padding: 0.5rem;\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    border: 1px groove white;\r\n    background-color: var(--subcolor);\r\n    font-family: Myfont;\r\n    letter-spacing: 0.1rem;\r\n}\r\n.addTabButton{\r\n    display:none;\r\n}\r\n\r\n.hovered{\r\n    text-decoration: var(--subcolor) underline;\r\n    color:white;\r\n}\r\n.selected{\r\n    color:red;\r\n}\r\n.selected:hover{\r\n    color:red;\r\n}\r\n.removeTabButton{\r\n    background: none;\r\n    border: none;\r\n    height:1.5rem;\r\n}\r\n.tab{\r\n    font-size: 1.5rem;\r\n    display: inline-block;\r\n}\r\n.tabcomponent{\r\n    height:fit-content;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n.minusbutton{\r\n    font-size: 1rem;\r\n}\r\n.minusbutton:hover{\r\n    cursor: pointer;\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const a = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  t = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  t &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (r += n(e)),
                  t && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (n, r, t, o, A) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (t)
                for (var a = 0; a < this.length; a++) {
                  var l = this[a][0];
                  null != l && (i[l] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var s = [].concat(n[c]);
                (t && i[s[0]]) ||
                  (void 0 !== A &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = A)),
                  r &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = r))
                      : (s[2] = r)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      667: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : n)
              : n
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var e = n[1],
            r = n[3];
          if (!r) return e;
          if ("function" == typeof btoa) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  t,
                ),
              A = "/*# ".concat(o, " */");
            return [e].concat([A]).join("\n");
          }
          return [e].join("\n");
        };
      },
      379: (n) => {
        var e = [];
        function r(n) {
          for (var r = -1, t = 0; t < e.length; t++)
            if (e[t].identifier === n) {
              r = t;
              break;
            }
          return r;
        }
        function t(n, t) {
          for (var A = {}, i = [], a = 0; a < n.length; a++) {
            var l = n[a],
              c = t.base ? l[0] + t.base : l[0],
              s = A[c] || 0,
              d = "".concat(c, " ").concat(s);
            A[c] = s + 1;
            var u = r(d),
              m = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(m);
            else {
              var p = o(m, t);
              (t.byIndex = a),
                e.splice(a, 0, { identifier: d, updater: p, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function o(n, e) {
          var r = e.domAPI(e);
          return (
            r.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                r.update((n = e));
              } else r.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var A = t((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < A.length; i++) {
              var a = r(A[i]);
              e[a].references--;
            }
            for (var l = t(n, o), c = 0; c < A.length; c++) {
              var s = r(A[c]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            A = l;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, r) {
          var t = (function (n) {
            if (void 0 === e[n]) {
              var r = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (n) {
                  r = null;
                }
              e[n] = r;
            }
            return e[n];
          })(n);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          t.appendChild(r);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, r) => {
        n.exports = function (n) {
          var e = r.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (r) {
              !(function (n, e, r) {
                var t = "";
                r.supports && (t += "@supports (".concat(r.supports, ") {")),
                  r.media && (t += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (t += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {",
                  )),
                  (t += r.css),
                  o && (t += "}"),
                  r.media && (t += "}"),
                  r.supports && (t += "}");
                var A = r.sourceMap;
                A &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(A)))),
                      " */",
                    )),
                  e.styleTagTransform(t, n, e.options);
              })(e, n, r);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      275: (n, e, r) => {
        n.exports = r.p + "12e3683f9192436a7be8.ttf";
      },
    },
    e = {};
  function r(t) {
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var A = (e[t] = { id: t, exports: {} });
    return n[t](A, A.exports, r), A.exports;
  }
  (r.m = n),
    (r.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return r.d(e, { a: e }), e;
    }),
    (r.d = (n, e) => {
      for (var t in e)
        r.o(e, t) &&
          !r.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      r.g.importScripts && (n = r.g.location + "");
      var e = r.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var t = e.getElementsByTagName("script");
        if (t.length) for (var o = t.length - 1; o > -1 && !n; ) n = t[o--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = n);
    })(),
    (r.b = document.baseURI || self.location.href),
    (r.nc = void 0),
    (() => {
      var n = r(379),
        e = r.n(n),
        t = r(795),
        o = r.n(t),
        A = r(569),
        i = r.n(A),
        a = r(565),
        l = r.n(a),
        c = r(216),
        s = r.n(c),
        d = r(589),
        u = r.n(d),
        m = r(402),
        p = {};
      (p.styleTagTransform = u()),
        (p.setAttributes = l()),
        (p.insert = i().bind(null, "head")),
        (p.domAPI = o()),
        (p.insertStyleElement = s()),
        e()(m.Z, p),
        m.Z && m.Z.locals && m.Z.locals;
      var C = r(731),
        b = {};
      (b.styleTagTransform = u()),
        (b.setAttributes = l()),
        (b.insert = i().bind(null, "head")),
        (b.domAPI = o()),
        (b.insertStyleElement = s()),
        e()(C.Z, b),
        C.Z && C.Z.locals && C.Z.locals;
      var g = r(476),
        B = {};
      (B.styleTagTransform = u()),
        (B.setAttributes = l()),
        (B.insert = i().bind(null, "head")),
        (B.domAPI = o()),
        (B.insertStyleElement = s()),
        e()(g.Z, B),
        g.Z && g.Z.locals && g.Z.locals;
      var I = r(744),
        f = {};
      (f.styleTagTransform = u()),
        (f.setAttributes = l()),
        (f.insert = i().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = s()),
        e()(I.Z, f),
        I.Z && I.Z.locals && I.Z.locals;
      var h = r(594),
        v = {};
      (v.styleTagTransform = u()),
        (v.setAttributes = l()),
        (v.insert = i().bind(null, "head")),
        (v.domAPI = o()),
        (v.insertStyleElement = s()),
        e()(h.Z, v),
        h.Z && h.Z.locals && h.Z.locals;
      const y = r.p + "55369c575a0f85710184.png";
      function x(n, e, r = !1) {
        let t = w(n, r);
        1 == r
          ? (t.push(e), localStorage.setItem(n, JSON.stringify(t)))
          : (t.push(e), localStorage.setItem(n, t));
      }
      function k(n, e, r = !1) {
        let t = w(n, r);
        1 == r
          ? ((t = t.filter((n) => n.title != e)),
            localStorage.setItem("todoList", JSON.stringify(t)))
          : ((t = t.filter((n) => n != e)),
            null != t ? localStorage.setItem(n, t) : S(n));
      }
      function w(n, e = !1) {
        return 1 == e
          ? null != localStorage.getItem(n)
            ? JSON.parse(localStorage.getItem(n))
            : []
          : localStorage.getItem(n)
            ? localStorage.getItem(n).split(",")
            : [];
      }
      function S(n) {
        localStorage.removeItem(n);
      }
      function E(n, e, r) {
        const t = document.querySelectorAll(`.${e}`);
        n.classList.contains(r) &&
          (t.forEach((n) =>
            n.classList.contains(e) ? n.classList.remove(e) : null,
          ),
          n.classList.add(e));
      }
      function q() {
        document.querySelectorAll(".tabcomponent").forEach((n) => {
          "TOTAL" != n.childNodes[0].textContent && T(n);
        }),
          S("tabList");
      }
      function T(n) {
        n.remove();
      }
      function L(n = !1, e = !1) {
        const r = document.querySelector("menu"),
          t = document.querySelector("#plustab"),
          o = document.createElement("div");
        o.classList.add("tabcomponent");
        const A = document.createElement("p");
        o.addEventListener("pointerover", (n) => {
          E(n.target, "hovered", "tab");
        });
        const i = document.createElement("button"),
          a = document.querySelector(".addTabInput");
        let l;
        1 == e
          ? ((l = a.value), document.querySelector(".addTabForm").remove())
          : (l = e),
          o.addEventListener("click", (n) => {
            E(n.target, "selected", "tab"),
              (function (n) {
                const e = w("todoList", !0);
                (document.querySelector("#content").innerHTML = ""),
                  "TOTAL" == n &&
                    e.forEach((n) => {
                      Z(!1, n);
                    }),
                  e
                    .filter((e) => e.type == n)
                    .forEach((n) => {
                      Z(!1, n);
                    });
              })(l);
          }),
          i.classList.add("removeTabButton"),
          i.addEventListener("click", () => {
            T(o), k("tabList", l);
          }),
          (i.innerHTML =
            '<span class="material-symbols-outlined minusbutton">remove</span>'),
          (A.textContent = l),
          A.classList.add("tab"),
          o.appendChild(A),
          o.appendChild(i),
          r.insertBefore(o, t),
          1 == n && x("tabList", l);
      }
      function Z(n = !1, e) {
        const r = document.getElementById("content"),
          t = document.createElement("div");
        t.classList.add("contentItem");
        const o = document.createElement("p");
        o.classList.add("contentItemTitle"), (o.textContent = e.title);
        const A = document.createElement("img");
        A.classList.add("contentItemImage"),
          A.setAttribute("src", e.file),
          A.setAttribute("alt", e.title);
        const i = document.createElement("div");
        i.classList.add("contentDescription"), (i.textContent = e.description);
        const a = document.createElement("p");
        a.classList.add("contentDate"), (a.textContent = e.date);
        const l = document.createElement("div");
        l.classList.add("todobuttons");
        const c = document.createElement("button");
        c.classList.add(e.priority, "Priority"), (c.textContent = e.priority);
        const s = document.createElement("button");
        s.classList.add("removePriority"),
          (s.textContent = "remove"),
          t.appendChild(o),
          t.appendChild(A),
          t.appendChild(i),
          i.appendChild(a),
          t.appendChild(l),
          l.appendChild(c),
          l.appendChild(s),
          s.addEventListener("click", () => {
            T(t), k("todoList", e.title, !0);
          }),
          r.appendChild(t),
          1 == n && x("todoList", e, !0);
      }
      function z() {
        if (null == document.querySelector(".addTabForm"))
          return (function () {
            const n = document.createElement("form");
            n.classList.add("addTabForm");
            const e = document.createElement("input"),
              r = document.createElement("button");
            e.classList.add("addTabInput"),
              r.classList.add("addTabButton"),
              r.addEventListener("click", (n) => {
                n.preventDefault(), L(!0, !0);
              });
            const t = document.querySelector("#plustab"),
              o = document.querySelector("menu");
            n.appendChild(e), n.appendChild(r), o.insertBefore(n, t), e.focus();
          })();
        {
          const n = document.querySelector(".addTabInput");
          "" == n.value ? n.focus() : L(!0, !0);
        }
      }
      !(function () {
        const n = document.querySelector("h1"),
          e = new Image(),
          r = document.querySelector("#plustab"),
          t = document.querySelector("#clearTab"),
          o = w("tabList"),
          A = document.querySelector("#openForm"),
          i = document.querySelector("#SubmitForm"),
          a = document.querySelector("#CancelForm");
        !(function () {
          const n = document.querySelector("#loadingbackground");
          window.onload = setTimeout(() => {
            n.setAttribute("style", "display:none");
          }, 2e3);
        })(),
          e.classList.add("homelogo"),
          (e.src = y),
          n.appendChild(e),
          r.addEventListener("click", z),
          t.addEventListener("click", q),
          (A.onclick = () => {
            document.querySelector("dialog").showModal(),
              document
                .querySelector("#imageSelector")
                .addEventListener("change", () => {
                  !(function () {
                    var n = document.getElementById("imageSelector");
                    const e = document.querySelector(
                      'label[for="imageSelector"]',
                    );
                    if (n.files && n.files[0]) {
                      var r = new FileReader();
                      (r.onload = function (n) {
                        var r = n.target.result;
                        e.setAttribute(
                          "style",
                          `background:url(${r});background-size:cover;`,
                        ),
                          e.setAttribute("value", r);
                      }),
                        r.readAsDataURL(n.files[0]);
                    }
                  })();
                });
          }),
          L(!1, "TOTAL"),
          document.querySelector(".removeTabButton").remove();
        const l = document.querySelector(".tab");
        l.click(),
          document.querySelectorAll('input[type="radio"]').forEach((n) => {
            n.addEventListener("click", (e) => {
              E(
                document.querySelector(`.${n.id}`),
                "selectedPriority",
                "Priority",
              );
            });
          }),
          null != o &&
            Array.from(o).map((n) => {
              L(!1, n);
            }),
          i.addEventListener("click", (n) => {
            n.preventDefault,
              l.click(),
              Z(
                !0,
                (function () {
                  const n = document.querySelector("#nameSelector").value,
                    e = document.querySelector("#imageSelectorLabel").attributes
                      .value.value,
                    r = document.querySelector("#descriptionSelector").value,
                    t = document.querySelector("#setType").value,
                    o = document.querySelector(".selectedPriority").id;
                  return {
                    title: n,
                    file: e,
                    description: r,
                    date: document.querySelector("#dateSelector").value,
                    priority: o,
                    type: t,
                  };
                })(),
              );
          }),
          a.addEventListener("click", (n) => {
            n.defaultPrevented, document.querySelector("dialog").close();
          });
      })();
    })();
})();
//# sourceMappingURL=app.bundle.js.map
