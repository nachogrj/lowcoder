var Ge = Object.defineProperty, Se = Object.defineProperties;
var Ae = Object.getOwnPropertyDescriptors;
var ge = Object.getOwnPropertySymbols;
var Ie = Object.prototype.hasOwnProperty, Ne = Object.prototype.propertyIsEnumerable;
var de = (r, a, o) => a in r ? Ge(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[a] = o, ke = (r, a) => {
  for (var o in a || (a = {}))
    Ie.call(a, o) && de(r, o, a[o]);
  if (ge)
    for (var o of ge(a))
      Ne.call(a, o) && de(r, o, a[o]);
  return r;
}, xe = (r, a) => Se(r, Ae(a));
import { e as v, s as He, a as Be, b as Ve, d as De, F as ze, G as je, l as B, m as D, H as qe, j as Ye, C as Fe, K as Ke, L as Ue } from "./08856db2.js";
var me = function() {
  var r = function(S, l, u, k) {
    for (u = u || {}, k = S.length; k--; u[S[k]] = l)
      ;
    return u;
  }, a = [1, 3], o = [1, 6], h = [1, 4], i = [1, 5], c = [2, 5], b = [1, 12], m = [5, 7, 13, 19, 21, 23, 24, 26, 28, 31, 37, 40, 47], x = [7, 13, 19, 21, 23, 24, 26, 28, 31, 37, 40], y = [7, 12, 13, 19, 21, 23, 24, 26, 28, 31, 37, 40], n = [7, 13, 47], C = [1, 42], _ = [1, 41], g = [7, 13, 29, 32, 35, 38, 47], f = [1, 55], d = [1, 56], p = [1, 57], E = [7, 13, 32, 35, 42, 47], z = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, GG: 5, document: 6, EOF: 7, ":": 8, DIR: 9, options: 10, body: 11, OPT: 12, NL: 13, line: 14, statement: 15, commitStatement: 16, mergeStatement: 17, cherryPickStatement: 18, acc_title: 19, acc_title_value: 20, acc_descr: 21, acc_descr_value: 22, acc_descr_multiline_value: 23, section: 24, branchStatement: 25, CHECKOUT: 26, ref: 27, BRANCH: 28, ORDER: 29, NUM: 30, CHERRY_PICK: 31, COMMIT_ID: 32, STR: 33, PARENT_COMMIT: 34, COMMIT_TAG: 35, EMPTYSTR: 36, MERGE: 37, COMMIT_TYPE: 38, commitType: 39, COMMIT: 40, commit_arg: 41, COMMIT_MSG: 42, NORMAL: 43, REVERSE: 44, HIGHLIGHT: 45, ID: 46, ";": 47, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "GG", 7: "EOF", 8: ":", 9: "DIR", 12: "OPT", 13: "NL", 19: "acc_title", 20: "acc_title_value", 21: "acc_descr", 22: "acc_descr_value", 23: "acc_descr_multiline_value", 24: "section", 26: "CHECKOUT", 28: "BRANCH", 29: "ORDER", 30: "NUM", 31: "CHERRY_PICK", 32: "COMMIT_ID", 33: "STR", 34: "PARENT_COMMIT", 35: "COMMIT_TAG", 36: "EMPTYSTR", 37: "MERGE", 38: "COMMIT_TYPE", 40: "COMMIT", 42: "COMMIT_MSG", 43: "NORMAL", 44: "REVERSE", 45: "HIGHLIGHT", 46: "ID", 47: ";" },
    productions_: [0, [3, 2], [3, 3], [3, 4], [3, 5], [6, 0], [6, 2], [10, 2], [10, 1], [11, 0], [11, 2], [14, 2], [14, 1], [15, 1], [15, 1], [15, 1], [15, 2], [15, 2], [15, 1], [15, 1], [15, 1], [15, 2], [25, 2], [25, 4], [18, 3], [18, 5], [18, 5], [18, 7], [18, 7], [18, 5], [18, 5], [18, 5], [18, 7], [18, 7], [18, 7], [18, 7], [17, 2], [17, 4], [17, 4], [17, 4], [17, 6], [17, 6], [17, 6], [17, 6], [17, 6], [17, 6], [17, 8], [17, 8], [17, 8], [17, 8], [17, 8], [17, 8], [16, 2], [16, 3], [16, 3], [16, 5], [16, 5], [16, 3], [16, 5], [16, 5], [16, 5], [16, 5], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 3], [16, 5], [16, 5], [16, 5], [16, 5], [16, 5], [16, 5], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 7], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [16, 9], [41, 0], [41, 1], [39, 1], [39, 1], [39, 1], [27, 1], [27, 1], [4, 1], [4, 1], [4, 1]],
    performAction: function(l, u, k, s, T, e, X) {
      var t = e.length - 1;
      switch (T) {
        case 2:
          return e[t];
        case 3:
          return e[t - 1];
        case 4:
          return s.setDirection(e[t - 3]), e[t - 1];
        case 6:
          s.setOptions(e[t - 1]), this.$ = e[t];
          break;
        case 7:
          e[t - 1] += e[t], this.$ = e[t - 1];
          break;
        case 9:
          this.$ = [];
          break;
        case 10:
          e[t - 1].push(e[t]), this.$ = e[t - 1];
          break;
        case 11:
          this.$ = e[t - 1];
          break;
        case 16:
          this.$ = e[t].trim(), s.setAccTitle(this.$);
          break;
        case 17:
        case 18:
          this.$ = e[t].trim(), s.setAccDescription(this.$);
          break;
        case 19:
          s.addSection(e[t].substr(8)), this.$ = e[t].substr(8);
          break;
        case 21:
          s.checkout(e[t]);
          break;
        case 22:
          s.branch(e[t]);
          break;
        case 23:
          s.branch(e[t - 2], e[t]);
          break;
        case 24:
          s.cherryPick(e[t], "", void 0);
          break;
        case 25:
          s.cherryPick(e[t - 2], "", void 0, e[t]);
          break;
        case 26:
          s.cherryPick(e[t - 2], "", e[t]);
          break;
        case 27:
          s.cherryPick(e[t - 4], "", e[t], e[t - 2]);
          break;
        case 28:
          s.cherryPick(e[t - 4], "", e[t - 2], e[t]);
          break;
        case 29:
          s.cherryPick(e[t], "", e[t - 2]);
          break;
        case 30:
          s.cherryPick(e[t], "", "");
          break;
        case 31:
          s.cherryPick(e[t - 2], "", "");
          break;
        case 32:
          s.cherryPick(e[t - 4], "", "", e[t - 2]);
          break;
        case 33:
          s.cherryPick(e[t - 4], "", "", e[t]);
          break;
        case 34:
          s.cherryPick(e[t - 2], "", e[t - 4], e[t]);
          break;
        case 35:
          s.cherryPick(e[t - 2], "", "", e[t]);
          break;
        case 36:
          s.merge(e[t], "", "", "");
          break;
        case 37:
          s.merge(e[t - 2], e[t], "", "");
          break;
        case 38:
          s.merge(e[t - 2], "", e[t], "");
          break;
        case 39:
          s.merge(e[t - 2], "", "", e[t]);
          break;
        case 40:
          s.merge(e[t - 4], e[t], "", e[t - 2]);
          break;
        case 41:
          s.merge(e[t - 4], "", e[t], e[t - 2]);
          break;
        case 42:
          s.merge(e[t - 4], "", e[t - 2], e[t]);
          break;
        case 43:
          s.merge(e[t - 4], e[t - 2], e[t], "");
          break;
        case 44:
          s.merge(e[t - 4], e[t - 2], "", e[t]);
          break;
        case 45:
          s.merge(e[t - 4], e[t], e[t - 2], "");
          break;
        case 46:
          s.merge(e[t - 6], e[t - 4], e[t - 2], e[t]);
          break;
        case 47:
          s.merge(e[t - 6], e[t], e[t - 4], e[t - 2]);
          break;
        case 48:
          s.merge(e[t - 6], e[t - 4], e[t], e[t - 2]);
          break;
        case 49:
          s.merge(e[t - 6], e[t - 2], e[t - 4], e[t]);
          break;
        case 50:
          s.merge(e[t - 6], e[t], e[t - 2], e[t - 4]);
          break;
        case 51:
          s.merge(e[t - 6], e[t - 2], e[t], e[t - 4]);
          break;
        case 52:
          s.commit(e[t]);
          break;
        case 53:
          s.commit("", "", s.commitType.NORMAL, e[t]);
          break;
        case 54:
          s.commit("", "", e[t], "");
          break;
        case 55:
          s.commit("", "", e[t], e[t - 2]);
          break;
        case 56:
          s.commit("", "", e[t - 2], e[t]);
          break;
        case 57:
          s.commit("", e[t], s.commitType.NORMAL, "");
          break;
        case 58:
          s.commit("", e[t - 2], s.commitType.NORMAL, e[t]);
          break;
        case 59:
          s.commit("", e[t], s.commitType.NORMAL, e[t - 2]);
          break;
        case 60:
          s.commit("", e[t - 2], e[t], "");
          break;
        case 61:
          s.commit("", e[t], e[t - 2], "");
          break;
        case 62:
          s.commit("", e[t - 4], e[t - 2], e[t]);
          break;
        case 63:
          s.commit("", e[t - 4], e[t], e[t - 2]);
          break;
        case 64:
          s.commit("", e[t - 2], e[t - 4], e[t]);
          break;
        case 65:
          s.commit("", e[t], e[t - 4], e[t - 2]);
          break;
        case 66:
          s.commit("", e[t], e[t - 2], e[t - 4]);
          break;
        case 67:
          s.commit("", e[t - 2], e[t], e[t - 4]);
          break;
        case 68:
          s.commit(e[t], "", s.commitType.NORMAL, "");
          break;
        case 69:
          s.commit(e[t], "", s.commitType.NORMAL, e[t - 2]);
          break;
        case 70:
          s.commit(e[t - 2], "", s.commitType.NORMAL, e[t]);
          break;
        case 71:
          s.commit(e[t - 2], "", e[t], "");
          break;
        case 72:
          s.commit(e[t], "", e[t - 2], "");
          break;
        case 73:
          s.commit(e[t], e[t - 2], s.commitType.NORMAL, "");
          break;
        case 74:
          s.commit(e[t - 2], e[t], s.commitType.NORMAL, "");
          break;
        case 75:
          s.commit(e[t - 4], "", e[t - 2], e[t]);
          break;
        case 76:
          s.commit(e[t - 4], "", e[t], e[t - 2]);
          break;
        case 77:
          s.commit(e[t - 2], "", e[t - 4], e[t]);
          break;
        case 78:
          s.commit(e[t], "", e[t - 4], e[t - 2]);
          break;
        case 79:
          s.commit(e[t], "", e[t - 2], e[t - 4]);
          break;
        case 80:
          s.commit(e[t - 2], "", e[t], e[t - 4]);
          break;
        case 81:
          s.commit(e[t - 4], e[t], e[t - 2], "");
          break;
        case 82:
          s.commit(e[t - 4], e[t - 2], e[t], "");
          break;
        case 83:
          s.commit(e[t - 2], e[t], e[t - 4], "");
          break;
        case 84:
          s.commit(e[t], e[t - 2], e[t - 4], "");
          break;
        case 85:
          s.commit(e[t], e[t - 4], e[t - 2], "");
          break;
        case 86:
          s.commit(e[t - 2], e[t - 4], e[t], "");
          break;
        case 87:
          s.commit(e[t - 4], e[t], s.commitType.NORMAL, e[t - 2]);
          break;
        case 88:
          s.commit(e[t - 4], e[t - 2], s.commitType.NORMAL, e[t]);
          break;
        case 89:
          s.commit(e[t - 2], e[t], s.commitType.NORMAL, e[t - 4]);
          break;
        case 90:
          s.commit(e[t], e[t - 2], s.commitType.NORMAL, e[t - 4]);
          break;
        case 91:
          s.commit(e[t], e[t - 4], s.commitType.NORMAL, e[t - 2]);
          break;
        case 92:
          s.commit(e[t - 2], e[t - 4], s.commitType.NORMAL, e[t]);
          break;
        case 93:
          s.commit(e[t - 6], e[t - 4], e[t - 2], e[t]);
          break;
        case 94:
          s.commit(e[t - 6], e[t - 4], e[t], e[t - 2]);
          break;
        case 95:
          s.commit(e[t - 6], e[t - 2], e[t - 4], e[t]);
          break;
        case 96:
          s.commit(e[t - 6], e[t], e[t - 4], e[t - 2]);
          break;
        case 97:
          s.commit(e[t - 6], e[t - 2], e[t], e[t - 4]);
          break;
        case 98:
          s.commit(e[t - 6], e[t], e[t - 2], e[t - 4]);
          break;
        case 99:
          s.commit(e[t - 4], e[t - 6], e[t - 2], e[t]);
          break;
        case 100:
          s.commit(e[t - 4], e[t - 6], e[t], e[t - 2]);
          break;
        case 101:
          s.commit(e[t - 2], e[t - 6], e[t - 4], e[t]);
          break;
        case 102:
          s.commit(e[t], e[t - 6], e[t - 4], e[t - 2]);
          break;
        case 103:
          s.commit(e[t - 2], e[t - 6], e[t], e[t - 4]);
          break;
        case 104:
          s.commit(e[t], e[t - 6], e[t - 2], e[t - 4]);
          break;
        case 105:
          s.commit(e[t], e[t - 4], e[t - 2], e[t - 6]);
          break;
        case 106:
          s.commit(e[t - 2], e[t - 4], e[t], e[t - 6]);
          break;
        case 107:
          s.commit(e[t], e[t - 2], e[t - 4], e[t - 6]);
          break;
        case 108:
          s.commit(e[t - 2], e[t], e[t - 4], e[t - 6]);
          break;
        case 109:
          s.commit(e[t - 4], e[t - 2], e[t], e[t - 6]);
          break;
        case 110:
          s.commit(e[t - 4], e[t], e[t - 2], e[t - 6]);
          break;
        case 111:
          s.commit(e[t - 2], e[t - 4], e[t - 6], e[t]);
          break;
        case 112:
          s.commit(e[t], e[t - 4], e[t - 6], e[t - 2]);
          break;
        case 113:
          s.commit(e[t - 2], e[t], e[t - 6], e[t - 4]);
          break;
        case 114:
          s.commit(e[t], e[t - 2], e[t - 6], e[t - 4]);
          break;
        case 115:
          s.commit(e[t - 4], e[t - 2], e[t - 6], e[t]);
          break;
        case 116:
          s.commit(e[t - 4], e[t], e[t - 6], e[t - 2]);
          break;
        case 117:
          this.$ = "";
          break;
        case 118:
          this.$ = e[t];
          break;
        case 119:
          this.$ = s.commitType.NORMAL;
          break;
        case 120:
          this.$ = s.commitType.REVERSE;
          break;
        case 121:
          this.$ = s.commitType.HIGHLIGHT;
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: a, 7: o, 13: h, 47: i }, { 1: [3] }, { 3: 7, 4: 2, 5: a, 7: o, 13: h, 47: i }, { 6: 8, 7: c, 8: [1, 9], 9: [1, 10], 10: 11, 13: b }, r(m, [2, 124]), r(m, [2, 125]), r(m, [2, 126]), { 1: [2, 1] }, { 7: [1, 13] }, { 6: 14, 7: c, 10: 11, 13: b }, { 8: [1, 15] }, r(x, [2, 9], { 11: 16, 12: [1, 17] }), r(y, [2, 8]), { 1: [2, 2] }, { 7: [1, 18] }, { 6: 19, 7: c, 10: 11, 13: b }, { 7: [2, 6], 13: [1, 22], 14: 20, 15: 21, 16: 23, 17: 24, 18: 25, 19: [1, 26], 21: [1, 27], 23: [1, 28], 24: [1, 29], 25: 30, 26: [1, 31], 28: [1, 35], 31: [1, 34], 37: [1, 33], 40: [1, 32] }, r(y, [2, 7]), { 1: [2, 3] }, { 7: [1, 36] }, r(x, [2, 10]), { 4: 37, 7: o, 13: h, 47: i }, r(x, [2, 12]), r(n, [2, 13]), r(n, [2, 14]), r(n, [2, 15]), { 20: [1, 38] }, { 22: [1, 39] }, r(n, [2, 18]), r(n, [2, 19]), r(n, [2, 20]), { 27: 40, 33: C, 46: _ }, r(n, [2, 117], { 41: 43, 32: [1, 46], 33: [1, 48], 35: [1, 44], 38: [1, 45], 42: [1, 47] }), { 27: 49, 33: C, 46: _ }, { 32: [1, 50], 35: [1, 51] }, { 27: 52, 33: C, 46: _ }, { 1: [2, 4] }, r(x, [2, 11]), r(n, [2, 16]), r(n, [2, 17]), r(n, [2, 21]), r(g, [2, 122]), r(g, [2, 123]), r(n, [2, 52]), { 33: [1, 53] }, { 39: 54, 43: f, 44: d, 45: p }, { 33: [1, 58] }, { 33: [1, 59] }, r(n, [2, 118]), r(n, [2, 36], { 32: [1, 60], 35: [1, 62], 38: [1, 61] }), { 33: [1, 63] }, { 33: [1, 64], 36: [1, 65] }, r(n, [2, 22], { 29: [1, 66] }), r(n, [2, 53], { 32: [1, 68], 38: [1, 67], 42: [1, 69] }), r(n, [2, 54], { 32: [1, 71], 35: [1, 70], 42: [1, 72] }), r(E, [2, 119]), r(E, [2, 120]), r(E, [2, 121]), r(n, [2, 57], { 35: [1, 73], 38: [1, 74], 42: [1, 75] }), r(n, [2, 68], { 32: [1, 78], 35: [1, 76], 38: [1, 77] }), { 33: [1, 79] }, { 39: 80, 43: f, 44: d, 45: p }, { 33: [1, 81] }, r(n, [2, 24], { 34: [1, 82], 35: [1, 83] }), { 32: [1, 84] }, { 32: [1, 85] }, { 30: [1, 86] }, { 39: 87, 43: f, 44: d, 45: p }, { 33: [1, 88] }, { 33: [1, 89] }, { 33: [1, 90] }, { 33: [1, 91] }, { 33: [1, 92] }, { 33: [1, 93] }, { 39: 94, 43: f, 44: d, 45: p }, { 33: [1, 95] }, { 33: [1, 96] }, { 39: 97, 43: f, 44: d, 45: p }, { 33: [1, 98] }, r(n, [2, 37], { 35: [1, 100], 38: [1, 99] }), r(n, [2, 38], { 32: [1, 102], 35: [1, 101] }), r(n, [2, 39], { 32: [1, 103], 38: [1, 104] }), { 33: [1, 105] }, { 33: [1, 106], 36: [1, 107] }, { 33: [1, 108] }, { 33: [1, 109] }, r(n, [2, 23]), r(n, [2, 55], { 32: [1, 110], 42: [1, 111] }), r(n, [2, 59], { 38: [1, 112], 42: [1, 113] }), r(n, [2, 69], { 32: [1, 115], 38: [1, 114] }), r(n, [2, 56], { 32: [1, 116], 42: [1, 117] }), r(n, [2, 61], { 35: [1, 118], 42: [1, 119] }), r(n, [2, 72], { 32: [1, 121], 35: [1, 120] }), r(n, [2, 58], { 38: [1, 122], 42: [1, 123] }), r(n, [2, 60], { 35: [1, 124], 42: [1, 125] }), r(n, [2, 73], { 35: [1, 127], 38: [1, 126] }), r(n, [2, 70], { 32: [1, 129], 38: [1, 128] }), r(n, [2, 71], { 32: [1, 131], 35: [1, 130] }), r(n, [2, 74], { 35: [1, 133], 38: [1, 132] }), { 39: 134, 43: f, 44: d, 45: p }, { 33: [1, 135] }, { 33: [1, 136] }, { 33: [1, 137] }, { 33: [1, 138] }, { 39: 139, 43: f, 44: d, 45: p }, r(n, [2, 25], { 35: [1, 140] }), r(n, [2, 26], { 34: [1, 141] }), r(n, [2, 31], { 34: [1, 142] }), r(n, [2, 29], { 34: [1, 143] }), r(n, [2, 30], { 34: [1, 144] }), { 33: [1, 145] }, { 33: [1, 146] }, { 39: 147, 43: f, 44: d, 45: p }, { 33: [1, 148] }, { 39: 149, 43: f, 44: d, 45: p }, { 33: [1, 150] }, { 33: [1, 151] }, { 33: [1, 152] }, { 33: [1, 153] }, { 33: [1, 154] }, { 33: [1, 155] }, { 33: [1, 156] }, { 39: 157, 43: f, 44: d, 45: p }, { 33: [1, 158] }, { 33: [1, 159] }, { 33: [1, 160] }, { 39: 161, 43: f, 44: d, 45: p }, { 33: [1, 162] }, { 39: 163, 43: f, 44: d, 45: p }, { 33: [1, 164] }, { 33: [1, 165] }, { 33: [1, 166] }, { 39: 167, 43: f, 44: d, 45: p }, { 33: [1, 168] }, r(n, [2, 43], { 35: [1, 169] }), r(n, [2, 44], { 38: [1, 170] }), r(n, [2, 42], { 32: [1, 171] }), r(n, [2, 45], { 35: [1, 172] }), r(n, [2, 40], { 38: [1, 173] }), r(n, [2, 41], { 32: [1, 174] }), { 33: [1, 175], 36: [1, 176] }, { 33: [1, 177] }, { 33: [1, 178] }, { 33: [1, 179] }, { 33: [1, 180] }, r(n, [2, 66], { 42: [1, 181] }), r(n, [2, 79], { 32: [1, 182] }), r(n, [2, 67], { 42: [1, 183] }), r(n, [2, 90], { 38: [1, 184] }), r(n, [2, 80], { 32: [1, 185] }), r(n, [2, 89], { 38: [1, 186] }), r(n, [2, 65], { 42: [1, 187] }), r(n, [2, 78], { 32: [1, 188] }), r(n, [2, 64], { 42: [1, 189] }), r(n, [2, 84], { 35: [1, 190] }), r(n, [2, 77], { 32: [1, 191] }), r(n, [2, 83], { 35: [1, 192] }), r(n, [2, 63], { 42: [1, 193] }), r(n, [2, 91], { 38: [1, 194] }), r(n, [2, 62], { 42: [1, 195] }), r(n, [2, 85], { 35: [1, 196] }), r(n, [2, 86], { 35: [1, 197] }), r(n, [2, 92], { 38: [1, 198] }), r(n, [2, 76], { 32: [1, 199] }), r(n, [2, 87], { 38: [1, 200] }), r(n, [2, 75], { 32: [1, 201] }), r(n, [2, 81], { 35: [1, 202] }), r(n, [2, 82], { 35: [1, 203] }), r(n, [2, 88], { 38: [1, 204] }), { 33: [1, 205] }, { 39: 206, 43: f, 44: d, 45: p }, { 33: [1, 207] }, { 33: [1, 208] }, { 39: 209, 43: f, 44: d, 45: p }, { 33: [1, 210] }, r(n, [2, 27]), r(n, [2, 32]), r(n, [2, 28]), r(n, [2, 33]), r(n, [2, 34]), r(n, [2, 35]), { 33: [1, 211] }, { 33: [1, 212] }, { 33: [1, 213] }, { 39: 214, 43: f, 44: d, 45: p }, { 33: [1, 215] }, { 39: 216, 43: f, 44: d, 45: p }, { 33: [1, 217] }, { 33: [1, 218] }, { 33: [1, 219] }, { 33: [1, 220] }, { 33: [1, 221] }, { 33: [1, 222] }, { 33: [1, 223] }, { 39: 224, 43: f, 44: d, 45: p }, { 33: [1, 225] }, { 33: [1, 226] }, { 33: [1, 227] }, { 39: 228, 43: f, 44: d, 45: p }, { 33: [1, 229] }, { 39: 230, 43: f, 44: d, 45: p }, { 33: [1, 231] }, { 33: [1, 232] }, { 33: [1, 233] }, { 39: 234, 43: f, 44: d, 45: p }, r(n, [2, 46]), r(n, [2, 48]), r(n, [2, 47]), r(n, [2, 49]), r(n, [2, 51]), r(n, [2, 50]), r(n, [2, 107]), r(n, [2, 108]), r(n, [2, 105]), r(n, [2, 106]), r(n, [2, 110]), r(n, [2, 109]), r(n, [2, 114]), r(n, [2, 113]), r(n, [2, 112]), r(n, [2, 111]), r(n, [2, 116]), r(n, [2, 115]), r(n, [2, 104]), r(n, [2, 103]), r(n, [2, 102]), r(n, [2, 101]), r(n, [2, 99]), r(n, [2, 100]), r(n, [2, 98]), r(n, [2, 97]), r(n, [2, 96]), r(n, [2, 95]), r(n, [2, 93]), r(n, [2, 94])],
    defaultActions: { 7: [2, 1], 13: [2, 2], 18: [2, 3], 36: [2, 4] },
    parseError: function(l, u) {
      if (u.recoverable)
        this.trace(l);
      else {
        var k = new Error(l);
        throw k.hash = u, k;
      }
    },
    parse: function(l) {
      var u = this, k = [0], s = [], T = [null], e = [], X = this.table, t = "", re = 0, fe = 0, ve = 2, pe = 1, Ce = e.slice.call(arguments, 1), O = Object.create(this.lexer), F = { yy: {} };
      for (var ce in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, ce) && (F.yy[ce] = this.yy[ce]);
      O.setInput(l, F.yy), F.yy.lexer = O, F.yy.parser = this, typeof O.yylloc == "undefined" && (O.yylloc = {});
      var oe = O.yylloc;
      e.push(oe);
      var Oe = O.options && O.options.ranges;
      typeof F.yy.parseError == "function" ? this.parseError = F.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Pe() {
        var q;
        return q = s.pop() || O.lex() || pe, typeof q != "number" && (q instanceof Array && (s = q, q = s.pop()), q = u.symbols_[q] || q), q;
      }
      for (var N, K, V, le, J = {}, ie, j, be, se; ; ) {
        if (K = k[k.length - 1], this.defaultActions[K] ? V = this.defaultActions[K] : ((N === null || typeof N == "undefined") && (N = Pe()), V = X[K] && X[K][N]), typeof V == "undefined" || !V.length || !V[0]) {
          var he = "";
          se = [];
          for (ie in X[K])
            this.terminals_[ie] && ie > ve && se.push("'" + this.terminals_[ie] + "'");
          O.showPosition ? he = "Parse error on line " + (re + 1) + `:
` + O.showPosition() + `
Expecting ` + se.join(", ") + ", got '" + (this.terminals_[N] || N) + "'" : he = "Parse error on line " + (re + 1) + ": Unexpected " + (N == pe ? "end of input" : "'" + (this.terminals_[N] || N) + "'"), this.parseError(he, {
            text: O.match,
            token: this.terminals_[N] || N,
            line: O.yylineno,
            loc: oe,
            expected: se
          });
        }
        if (V[0] instanceof Array && V.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + K + ", token: " + N);
        switch (V[0]) {
          case 1:
            k.push(N), T.push(O.yytext), e.push(O.yylloc), k.push(V[1]), N = null, fe = O.yyleng, t = O.yytext, re = O.yylineno, oe = O.yylloc;
            break;
          case 2:
            if (j = this.productions_[V[1]][1], J.$ = T[T.length - j], J._$ = {
              first_line: e[e.length - (j || 1)].first_line,
              last_line: e[e.length - 1].last_line,
              first_column: e[e.length - (j || 1)].first_column,
              last_column: e[e.length - 1].last_column
            }, Oe && (J._$.range = [
              e[e.length - (j || 1)].range[0],
              e[e.length - 1].range[1]
            ]), le = this.performAction.apply(J, [
              t,
              fe,
              re,
              F.yy,
              V[1],
              T,
              e
            ].concat(Ce)), typeof le != "undefined")
              return le;
            j && (k = k.slice(0, -1 * j * 2), T = T.slice(0, -1 * j), e = e.slice(0, -1 * j)), k.push(this.productions_[V[1]][0]), T.push(J.$), e.push(J._$), be = X[k[k.length - 2]][k[k.length - 1]], k.push(be);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, R = function() {
    var S = {
      EOF: 1,
      parseError: function(u, k) {
        if (this.yy.parser)
          this.yy.parser.parseError(u, k);
        else
          throw new Error(u);
      },
      // resets the lexer, sets new input
      setInput: function(l, u) {
        return this.yy = u || this.yy || {}, this._input = l, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var l = this._input[0];
        this.yytext += l, this.yyleng++, this.offset++, this.match += l, this.matched += l;
        var u = l.match(/(?:\r\n?|\n).*/g);
        return u ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), l;
      },
      // unshifts one char (or a string) into the input
      unput: function(l) {
        var u = l.length, k = l.split(/(?:\r\n?|\n)/g);
        this._input = l + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - u), this.offset -= u;
        var s = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), k.length - 1 && (this.yylineno -= k.length - 1);
        var T = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: k ? (k.length === s.length ? this.yylloc.first_column : 0) + s[s.length - k.length].length - k[0].length : this.yylloc.first_column - u
        }, this.options.ranges && (this.yylloc.range = [T[0], T[0] + this.yyleng - u]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(l) {
        this.unput(this.match.slice(l));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var l = this.matched.substr(0, this.matched.length - this.match.length);
        return (l.length > 20 ? "..." : "") + l.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var l = this.match;
        return l.length < 20 && (l += this._input.substr(0, 20 - l.length)), (l.substr(0, 20) + (l.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var l = this.pastInput(), u = new Array(l.length + 1).join("-");
        return l + this.upcomingInput() + `
` + u + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(l, u) {
        var k, s, T;
        if (this.options.backtrack_lexer && (T = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (T.yylloc.range = this.yylloc.range.slice(0))), s = l[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + l[0].length
        }, this.yytext += l[0], this.match += l[0], this.matches = l, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(l[0].length), this.matched += l[0], k = this.performAction.call(this, this.yy, this, u, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), k)
          return k;
        if (this._backtrack) {
          for (var e in T)
            this[e] = T[e];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var l, u, k, s;
        this._more || (this.yytext = "", this.match = "");
        for (var T = this._currentRules(), e = 0; e < T.length; e++)
          if (k = this._input.match(this.rules[T[e]]), k && (!u || k[0].length > u[0].length)) {
            if (u = k, s = e, this.options.backtrack_lexer) {
              if (l = this.test_match(k, T[e]), l !== !1)
                return l;
              if (this._backtrack) {
                u = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return u ? (l = this.test_match(u, T[s]), l !== !1 ? l : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var u = this.next();
        return u || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(u) {
        this.conditionStack.push(u);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var u = this.conditionStack.length - 1;
        return u > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(u) {
        return u = this.conditionStack.length - 1 - Math.abs(u || 0), u >= 0 ? this.conditionStack[u] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(u) {
        this.begin(u);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(u, k, s, T) {
        switch (s) {
          case 0:
            return this.begin("acc_title"), 19;
          case 1:
            return this.popState(), "acc_title_value";
          case 2:
            return this.begin("acc_descr"), 21;
          case 3:
            return this.popState(), "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            return 13;
          case 8:
            break;
          case 9:
            break;
          case 10:
            return 5;
          case 11:
            return 40;
          case 12:
            return 32;
          case 13:
            return 38;
          case 14:
            return 42;
          case 15:
            return 43;
          case 16:
            return 44;
          case 17:
            return 45;
          case 18:
            return 35;
          case 19:
            return 28;
          case 20:
            return 29;
          case 21:
            return 37;
          case 22:
            return 31;
          case 23:
            return 34;
          case 24:
            return 26;
          case 25:
            return 9;
          case 26:
            return 9;
          case 27:
            return 8;
          case 28:
            return "CARET";
          case 29:
            this.begin("options");
            break;
          case 30:
            this.popState();
            break;
          case 31:
            return 12;
          case 32:
            return 36;
          case 33:
            this.begin("string");
            break;
          case 34:
            this.popState();
            break;
          case 35:
            return 33;
          case 36:
            return 30;
          case 37:
            return 46;
          case 38:
            return 7;
        }
      },
      rules: [/^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:(\r?\n)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:gitGraph\b)/i, /^(?:commit(?=\s|$))/i, /^(?:id:)/i, /^(?:type:)/i, /^(?:msg:)/i, /^(?:NORMAL\b)/i, /^(?:REVERSE\b)/i, /^(?:HIGHLIGHT\b)/i, /^(?:tag:)/i, /^(?:branch(?=\s|$))/i, /^(?:order:)/i, /^(?:merge(?=\s|$))/i, /^(?:cherry-pick(?=\s|$))/i, /^(?:parent:)/i, /^(?:checkout(?=\s|$))/i, /^(?:LR\b)/i, /^(?:TB\b)/i, /^(?::)/i, /^(?:\^)/i, /^(?:options\r?\n)/i, /^(?:[ \r\n\t]+end\b)/i, /^(?:[\s\S]+(?=[ \r\n\t]+end))/i, /^(?:["]["])/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[0-9]+(?=\s|$))/i, /^(?:\w([-\./\w]*[-\w])?)/i, /^(?:$)/i, /^(?:\s+)/i],
      conditions: { acc_descr_multiline: { rules: [5, 6], inclusive: !1 }, acc_descr: { rules: [3], inclusive: !1 }, acc_title: { rules: [1], inclusive: !1 }, options: { rules: [30, 31], inclusive: !1 }, string: { rules: [34, 35], inclusive: !1 }, INITIAL: { rules: [0, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 36, 37, 38, 39], inclusive: !0 } }
    };
    return S;
  }();
  z.lexer = R;
  function A() {
    this.yy = {};
  }
  return A.prototype = z, z.Parser = A, new A();
}();
me.parser = me;
const We = me;
let ae = v().gitGraph.mainBranchName, Je = v().gitGraph.mainBranchOrder, M = {}, I = null, ee = {};
ee[ae] = { name: ae, order: Je };
let L = {};
L[ae] = I;
let G = ae, Ee = "LR", W = 0;
function ue() {
  return Ue({ length: 7 });
}
function Qe(r, a) {
  const o = /* @__PURE__ */ Object.create(null);
  return r.reduce((h, i) => {
    const c = a(i);
    return o[c] || (o[c] = !0, h.push(i)), h;
  }, []);
}
const Xe = function(r) {
  Ee = r;
};
let Te = {};
const Ze = function(r) {
  B.debug("options str", r), r = r && r.trim(), r = r || "{}";
  try {
    Te = JSON.parse(r);
  } catch (a) {
    B.error("error while parsing gitGraph options", a.message);
  }
}, $e = function() {
  return Te;
}, et = function(r, a, o, h) {
  B.debug("Entering commit:", r, a, o, h), a = D.sanitizeText(a, v()), r = D.sanitizeText(r, v()), h = D.sanitizeText(h, v());
  const i = {
    id: a || W + "-" + ue(),
    message: r,
    seq: W++,
    type: o || Q.NORMAL,
    tag: h || "",
    parents: I == null ? [] : [I.id],
    branch: G
  };
  I = i, M[i.id] = i, L[G] = i.id, B.debug("in pushCommit " + i.id);
}, tt = function(r, a) {
  if (r = D.sanitizeText(r, v()), L[r] === void 0)
    L[r] = I != null ? I.id : null, ee[r] = { name: r, order: a ? parseInt(a, 10) : null }, we(r), B.debug("in createBranch");
  else {
    let o = new Error(
      'Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ' + r + '")'
    );
    throw o.hash = {
      text: "branch " + r,
      token: "branch " + r,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"checkout ' + r + '"']
    }, o;
  }
}, rt = function(r, a, o, h) {
  r = D.sanitizeText(r, v()), a = D.sanitizeText(a, v());
  const i = M[L[G]], c = M[L[r]];
  if (G === r) {
    let m = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
    throw m.hash = {
      text: "merge " + r,
      token: "merge " + r,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["branch abc"]
    }, m;
  } else if (i === void 0 || !i) {
    let m = new Error(
      'Incorrect usage of "merge". Current branch (' + G + ")has no commits"
    );
    throw m.hash = {
      text: "merge " + r,
      token: "merge " + r,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["commit"]
    }, m;
  } else if (L[r] === void 0) {
    let m = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r + ") does not exist"
    );
    throw m.hash = {
      text: "merge " + r,
      token: "merge " + r,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["branch " + r]
    }, m;
  } else if (c === void 0 || !c) {
    let m = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r + ") has no commits"
    );
    throw m.hash = {
      text: "merge " + r,
      token: "merge " + r,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"commit"']
    }, m;
  } else if (i === c) {
    let m = new Error('Incorrect usage of "merge". Both branches have same head');
    throw m.hash = {
      text: "merge " + r,
      token: "merge " + r,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["branch abc"]
    }, m;
  } else if (a && M[a] !== void 0) {
    let m = new Error(
      'Incorrect usage of "merge". Commit with id:' + a + " already exists, use different custom Id"
    );
    throw m.hash = {
      text: "merge " + r + a + o + h,
      token: "merge " + r + a + o + h,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: [
        "merge " + r + " " + a + "_UNIQUE " + o + " " + h
      ]
    }, m;
  }
  const b = {
    id: a || W + "-" + ue(),
    message: "merged branch " + r + " into " + G,
    seq: W++,
    parents: [I == null ? null : I.id, L[r]],
    branch: G,
    type: Q.MERGE,
    customType: o,
    customId: !!a,
    tag: h || ""
  };
  I = b, M[b.id] = b, L[G] = b.id, B.debug(L), B.debug("in mergeBranch");
}, it = function(r, a, o, h) {
  if (B.debug("Entering cherryPick:", r, a, o), r = D.sanitizeText(r, v()), a = D.sanitizeText(a, v()), o = D.sanitizeText(o, v()), h = D.sanitizeText(h, v()), !r || M[r] === void 0) {
    let b = new Error(
      'Incorrect usage of "cherryPick". Source commit id should exist and provided'
    );
    throw b.hash = {
      text: "cherryPick " + r + " " + a,
      token: "cherryPick " + r + " " + a,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["cherry-pick abc"]
    }, b;
  }
  let i = M[r], c = i.branch;
  if (h && !(Array.isArray(i.parents) && i.parents.includes(h)))
    throw new Error(
      "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit."
    );
  if (i.type === Q.MERGE && !h)
    throw new Error(
      "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified."
    );
  if (!a || M[a] === void 0) {
    if (c === G) {
      let x = new Error(
        'Incorrect usage of "cherryPick". Source commit is already on current branch'
      );
      throw x.hash = {
        text: "cherryPick " + r + " " + a,
        token: "cherryPick " + r + " " + a,
        line: "1",
        loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
        expected: ["cherry-pick abc"]
      }, x;
    }
    const b = M[L[G]];
    if (b === void 0 || !b) {
      let x = new Error(
        'Incorrect usage of "cherry-pick". Current branch (' + G + ")has no commits"
      );
      throw x.hash = {
        text: "cherryPick " + r + " " + a,
        token: "cherryPick " + r + " " + a,
        line: "1",
        loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
        expected: ["cherry-pick abc"]
      }, x;
    }
    const m = {
      id: W + "-" + ue(),
      message: "cherry-picked " + i + " into " + G,
      seq: W++,
      parents: [I == null ? null : I.id, i.id],
      branch: G,
      type: Q.CHERRY_PICK,
      tag: o != null ? o : `cherry-pick:${i.id}${i.type === Q.MERGE ? `|parent:${h}` : ""}`
    };
    I = m, M[m.id] = m, L[G] = m.id, B.debug(L), B.debug("in cherryPick");
  }
}, we = function(r) {
  if (r = D.sanitizeText(r, v()), L[r] === void 0) {
    let a = new Error(
      'Trying to checkout branch which is not yet created. (Help try using "branch ' + r + '")'
    );
    throw a.hash = {
      text: "checkout " + r,
      token: "checkout " + r,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"branch ' + r + '"']
    }, a;
  } else {
    G = r;
    const a = L[G];
    I = M[a];
  }
};
function ye(r, a, o) {
  const h = r.indexOf(a);
  h === -1 ? r.push(o) : r.splice(h, 1, o);
}
function Le(r) {
  const a = r.reduce((i, c) => i.seq > c.seq ? i : c, r[0]);
  let o = "";
  r.forEach(function(i) {
    i === a ? o += "	*" : o += "	|";
  });
  const h = [o, a.id, a.seq];
  for (let i in L)
    L[i] === a.id && h.push(i);
  if (B.debug(h.join(" ")), a.parents && a.parents.length == 2) {
    const i = M[a.parents[0]];
    ye(r, a, i), r.push(M[a.parents[1]]);
  } else {
    if (a.parents.length == 0)
      return;
    {
      const i = M[a.parents];
      ye(r, a, i);
    }
  }
  r = Qe(r, (i) => i.id), Le(r);
}
const st = function() {
  B.debug(M);
  const r = Re()[0];
  Le([r]);
}, at = function() {
  M = {}, I = null;
  let r = v().gitGraph.mainBranchName, a = v().gitGraph.mainBranchOrder;
  L = {}, L[r] = null, ee = {}, ee[r] = { name: r, order: a }, G = r, W = 0, qe();
}, nt = function() {
  return Object.values(ee).map((a, o) => a.order !== null ? a : xe(ke({}, a), {
    order: parseFloat(`0.${o}`, 10)
  })).sort((a, o) => a.order - o.order).map(({ name: a }) => ({ name: a }));
}, ct = function() {
  return L;
}, ot = function() {
  return M;
}, Re = function() {
  const r = Object.keys(M).map(function(a) {
    return M[a];
  });
  return r.forEach(function(a) {
    B.debug(a.id);
  }), r.sort((a, o) => a.seq - o.seq), r;
}, lt = function() {
  return G;
}, ht = function() {
  return Ee;
}, mt = function() {
  return I;
}, Q = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
}, ut = {
  getConfig: () => v().gitGraph,
  setDirection: Xe,
  setOptions: Ze,
  getOptions: $e,
  commit: et,
  branch: tt,
  merge: rt,
  cherryPick: it,
  checkout: we,
  //reset,
  prettyPrint: st,
  clear: at,
  getBranchesAsObjArray: nt,
  getBranches: ct,
  getCommits: ot,
  getCommitsArray: Re,
  getCurrentBranch: lt,
  getDirection: ht,
  getHead: mt,
  setAccTitle: He,
  getAccTitle: Be,
  getAccDescription: Ve,
  setAccDescription: De,
  setDiagramTitle: ze,
  getDiagramTitle: je,
  commitType: Q
};
let Z = {};
const P = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
}, U = 8;
let H = {}, Y = {}, ne = [], te = 0, w = "LR";
const ft = () => {
  H = {}, Y = {}, Z = {}, te = 0, ne = [], w = "LR";
}, Me = (r) => {
  const a = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let o = [];
  typeof r == "string" ? o = r.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(r) ? o = r : o = [];
  for (const h of o) {
    const i = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    i.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), i.setAttribute("dy", "1em"), i.setAttribute("x", "0"), i.setAttribute("class", "row"), i.textContent = h.trim(), a.appendChild(i);
  }
  return a;
}, pt = (r) => {
  let a = "", o = 0;
  return r.forEach((h) => {
    const i = w === "TB" ? Y[h].y : Y[h].x;
    i >= o && (a = h, o = i);
  }), a || void 0;
}, _e = (r, a, o) => {
  const h = v().gitGraph, i = r.append("g").attr("class", "commit-bullets"), c = r.append("g").attr("class", "commit-labels");
  let b = 0;
  w === "TB" && (b = 30);
  const x = Object.keys(a).sort((_, g) => a[_].seq - a[g].seq), y = h.parallelCommits, n = 10, C = 40;
  x.forEach((_) => {
    const g = a[_];
    if (y)
      if (g.parents.length) {
        const E = pt(g.parents);
        b = w === "TB" ? Y[E].y + C : Y[E].x + C;
      } else
        b = 0, w === "TB" && (b = 30);
    const f = b + n, d = w === "TB" ? f : H[g.branch].pos, p = w === "TB" ? H[g.branch].pos : f;
    if (o) {
      let E, z = g.customType !== void 0 && g.customType !== "" ? g.customType : g.type;
      switch (z) {
        case P.NORMAL:
          E = "commit-normal";
          break;
        case P.REVERSE:
          E = "commit-reverse";
          break;
        case P.HIGHLIGHT:
          E = "commit-highlight";
          break;
        case P.MERGE:
          E = "commit-merge";
          break;
        case P.CHERRY_PICK:
          E = "commit-cherry-pick";
          break;
        default:
          E = "commit-normal";
      }
      if (z === P.HIGHLIGHT) {
        const R = i.append("rect");
        R.attr("x", p - 10), R.attr("y", d - 10), R.attr("height", 20), R.attr("width", 20), R.attr(
          "class",
          `commit ${g.id} commit-highlight${H[g.branch].index % U} ${E}-outer`
        ), i.append("rect").attr("x", p - 6).attr("y", d - 6).attr("height", 12).attr("width", 12).attr(
          "class",
          `commit ${g.id} commit${H[g.branch].index % U} ${E}-inner`
        );
      } else if (z === P.CHERRY_PICK)
        i.append("circle").attr("cx", p).attr("cy", d).attr("r", 10).attr("class", `commit ${g.id} ${E}`), i.append("circle").attr("cx", p - 3).attr("cy", d + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${g.id} ${E}`), i.append("circle").attr("cx", p + 3).attr("cy", d + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${g.id} ${E}`), i.append("line").attr("x1", p + 3).attr("y1", d + 1).attr("x2", p).attr("y2", d - 5).attr("stroke", "#fff").attr("class", `commit ${g.id} ${E}`), i.append("line").attr("x1", p - 3).attr("y1", d + 1).attr("x2", p).attr("y2", d - 5).attr("stroke", "#fff").attr("class", `commit ${g.id} ${E}`);
      else {
        const R = i.append("circle");
        if (R.attr("cx", p), R.attr("cy", d), R.attr("r", g.type === P.MERGE ? 9 : 10), R.attr(
          "class",
          `commit ${g.id} commit${H[g.branch].index % U}`
        ), z === P.MERGE) {
          const A = i.append("circle");
          A.attr("cx", p), A.attr("cy", d), A.attr("r", 6), A.attr(
            "class",
            `commit ${E} ${g.id} commit${H[g.branch].index % U}`
          );
        }
        z === P.REVERSE && i.append("path").attr("d", `M ${p - 5},${d - 5}L${p + 5},${d + 5}M${p - 5},${d + 5}L${p + 5},${d - 5}`).attr(
          "class",
          `commit ${E} ${g.id} commit${H[g.branch].index % U}`
        );
      }
    }
    if (w === "TB" ? Y[g.id] = { x: p, y: f } : Y[g.id] = { x: f, y: d }, o) {
      if (g.type !== P.CHERRY_PICK && (g.customId && g.type === P.MERGE || g.type !== P.MERGE) && h.showCommitLabel) {
        const R = c.append("g"), A = R.insert("rect").attr("class", "commit-label-bkg"), S = R.append("text").attr("x", b).attr("y", d + 25).attr("class", "commit-label").text(g.id);
        let l = S.node().getBBox();
        if (A.attr("x", f - l.width / 2 - 2).attr("y", d + 13.5).attr("width", l.width + 2 * 2).attr("height", l.height + 2 * 2), w === "TB" && (A.attr("x", p - (l.width + 4 * 4 + 5)).attr("y", d - 12), S.attr("x", p - (l.width + 4 * 4)).attr("y", d + l.height - 12)), w !== "TB" && S.attr("x", f - l.width / 2), h.rotateCommitLabel)
          if (w === "TB")
            S.attr("transform", "rotate(-45, " + p + ", " + d + ")"), A.attr("transform", "rotate(-45, " + p + ", " + d + ")");
          else {
            let u = -7.5 - (l.width + 10) / 25 * 9.5, k = 10 + l.width / 25 * 8.5;
            R.attr(
              "transform",
              "translate(" + u + ", " + k + ") rotate(-45, " + b + ", " + d + ")"
            );
          }
      }
      if (g.tag) {
        const R = c.insert("polygon"), A = c.append("circle"), S = c.append("text").attr("y", d - 16).attr("class", "tag-label").text(g.tag);
        let l = S.node().getBBox();
        S.attr("x", f - l.width / 2);
        const u = l.height / 2, k = d - 19.2;
        R.attr("class", "tag-label-bkg").attr(
          "points",
          `
          ${b - l.width / 2 - 4 / 2},${k + 2}
          ${b - l.width / 2 - 4 / 2},${k - 2}
          ${f - l.width / 2 - 4},${k - u - 2}
          ${f + l.width / 2 + 4},${k - u - 2}
          ${f + l.width / 2 + 4},${k + u + 2}
          ${f - l.width / 2 - 4},${k + u + 2}`
        ), A.attr("cx", b - l.width / 2 + 4 / 2).attr("cy", k).attr("r", 1.5).attr("class", "tag-hole"), w === "TB" && (R.attr("class", "tag-label-bkg").attr(
          "points",
          `
            ${p},${b + 2}
            ${p},${b - 2}
            ${p + n},${b - u - 2}
            ${p + n + l.width + 4},${b - u - 2}
            ${p + n + l.width + 4},${b + u + 2}
            ${p + n},${b + u + 2}`
        ).attr("transform", "translate(12,12) rotate(45, " + p + "," + b + ")"), A.attr("cx", p + 4 / 2).attr("cy", b).attr("transform", "translate(12,12) rotate(45, " + p + "," + b + ")"), S.attr("x", p + 5).attr("y", b + 3).attr("transform", "translate(14,14) rotate(45, " + p + "," + b + ")"));
      }
    }
    b += C + n, b > te && (te = b);
  });
}, bt = (r, a, o, h, i) => {
  const b = (w === "TB" ? o.x < h.x : o.y < h.y) ? a.branch : r.branch, m = (y) => y.branch === b, x = (y) => y.seq > r.seq && y.seq < a.seq;
  return Object.values(i).some((y) => x(y) && m(y));
}, $ = (r, a, o = 0) => {
  const h = r + Math.abs(r - a) / 2;
  if (o > 5)
    return h;
  if (ne.every((b) => Math.abs(b - h) >= 10))
    return ne.push(h), h;
  const c = Math.abs(r - a);
  return $(r, a - c / 5, o + 1);
}, gt = (r, a, o, h) => {
  const i = Y[a.id], c = Y[o.id], b = bt(a, o, i, c, h);
  let m = "", x = "", y = 0, n = 0, C = H[o.branch].index;
  o.type === P.MERGE && a.id !== o.parents[0] && (C = H[a.branch].index);
  let _;
  if (b) {
    m = "A 10 10, 0, 0, 0,", x = "A 10 10, 0, 0, 1,", y = 10, n = 10;
    const g = i.y < c.y ? $(i.y, c.y) : $(c.y, i.y), f = i.x < c.x ? $(i.x, c.x) : $(c.x, i.x);
    w === "TB" ? i.x < c.x ? _ = `M ${i.x} ${i.y} L ${f - y} ${i.y} ${x} ${f} ${i.y + n} L ${f} ${c.y - y} ${m} ${f + n} ${c.y} L ${c.x} ${c.y}` : (C = H[a.branch].index, _ = `M ${i.x} ${i.y} L ${f + y} ${i.y} ${m} ${f} ${i.y + n} L ${f} ${c.y - y} ${x} ${f - n} ${c.y} L ${c.x} ${c.y}`) : i.y < c.y ? _ = `M ${i.x} ${i.y} L ${i.x} ${g - y} ${m} ${i.x + n} ${g} L ${c.x - y} ${g} ${x} ${c.x} ${g + n} L ${c.x} ${c.y}` : (C = H[a.branch].index, _ = `M ${i.x} ${i.y} L ${i.x} ${g + y} ${x} ${i.x + n} ${g} L ${c.x - y} ${g} ${m} ${c.x} ${g - n} L ${c.x} ${c.y}`);
  } else
    m = "A 20 20, 0, 0, 0,", x = "A 20 20, 0, 0, 1,", y = 20, n = 20, w === "TB" ? (i.x < c.x && (o.type === P.MERGE && a.id !== o.parents[0] ? _ = `M ${i.x} ${i.y} L ${i.x} ${c.y - y} ${m} ${i.x + n} ${c.y} L ${c.x} ${c.y}` : _ = `M ${i.x} ${i.y} L ${c.x - y} ${i.y} ${x} ${c.x} ${i.y + n} L ${c.x} ${c.y}`), i.x > c.x && (m = "A 20 20, 0, 0, 0,", x = "A 20 20, 0, 0, 1,", y = 20, n = 20, o.type === P.MERGE && a.id !== o.parents[0] ? _ = `M ${i.x} ${i.y} L ${i.x} ${c.y - y} ${x} ${i.x - n} ${c.y} L ${c.x} ${c.y}` : _ = `M ${i.x} ${i.y} L ${c.x + y} ${i.y} ${m} ${c.x} ${i.y + n} L ${c.x} ${c.y}`), i.x === c.x && (_ = `M ${i.x} ${i.y} L ${c.x} ${c.y}`)) : (i.y < c.y && (o.type === P.MERGE && a.id !== o.parents[0] ? _ = `M ${i.x} ${i.y} L ${c.x - y} ${i.y} ${x} ${c.x} ${i.y + n} L ${c.x} ${c.y}` : _ = `M ${i.x} ${i.y} L ${i.x} ${c.y - y} ${m} ${i.x + n} ${c.y} L ${c.x} ${c.y}`), i.y > c.y && (o.type === P.MERGE && a.id !== o.parents[0] ? _ = `M ${i.x} ${i.y} L ${c.x - y} ${i.y} ${m} ${c.x} ${i.y - n} L ${c.x} ${c.y}` : _ = `M ${i.x} ${i.y} L ${i.x} ${c.y + y} ${x} ${i.x + n} ${c.y} L ${c.x} ${c.y}`), i.y === c.y && (_ = `M ${i.x} ${i.y} L ${c.x} ${c.y}`));
  r.append("path").attr("d", _).attr("class", "arrow arrow" + C % U);
}, dt = (r, a) => {
  const o = r.append("g").attr("class", "commit-arrows");
  Object.keys(a).forEach((h) => {
    const i = a[h];
    i.parents && i.parents.length > 0 && i.parents.forEach((c) => {
      gt(o, a[c], i, a);
    });
  });
}, kt = (r, a) => {
  const o = v().gitGraph, h = r.append("g");
  a.forEach((i, c) => {
    const b = c % U, m = H[i.name].pos, x = h.append("line");
    x.attr("x1", 0), x.attr("y1", m), x.attr("x2", te), x.attr("y2", m), x.attr("class", "branch branch" + b), w === "TB" && (x.attr("y1", 30), x.attr("x1", m), x.attr("y2", te), x.attr("x2", m)), ne.push(m);
    let y = i.name;
    const n = Me(y), C = h.insert("rect"), g = h.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + b);
    g.node().appendChild(n);
    let f = n.getBBox();
    C.attr("class", "branchLabelBkg label" + b).attr("rx", 4).attr("ry", 4).attr("x", -f.width - 4 - (o.rotateCommitLabel === !0 ? 30 : 0)).attr("y", -f.height / 2 + 8).attr("width", f.width + 18).attr("height", f.height + 4), g.attr(
      "transform",
      "translate(" + (-f.width - 14 - (o.rotateCommitLabel === !0 ? 30 : 0)) + ", " + (m - f.height / 2 - 1) + ")"
    ), w === "TB" && (C.attr("x", m - f.width / 2 - 10).attr("y", 0), g.attr("transform", "translate(" + (m - f.width / 2 - 5) + ", 0)")), w !== "TB" && C.attr("transform", "translate(-19, " + (m - f.height / 2) + ")");
  });
}, xt = function(r, a, o, h) {
  var y;
  ft();
  const i = v(), c = i.gitGraph;
  B.debug("in gitgraph renderer", r + `
`, "id:", a, o), Z = h.db.getCommits();
  const b = h.db.getBranchesAsObjArray();
  w = h.db.getDirection();
  const m = Ye(`[id="${a}"]`);
  let x = 0;
  b.forEach((n, C) => {
    const _ = Me(n.name), g = m.append("g"), f = g.insert("g").attr("class", "branchLabel"), d = f.insert("g").attr("class", "label branch-label");
    d.node().appendChild(_);
    let p = _.getBBox();
    H[n.name] = { pos: x, index: C }, x += 50 + (c.rotateCommitLabel ? 40 : 0) + (w === "TB" ? p.width / 2 : 0), d.remove(), f.remove(), g.remove();
  }), _e(m, Z, !1), c.showBranches && kt(m, b), dt(m, Z), _e(m, Z, !0), Fe.insertTitle(
    m,
    "gitTitleText",
    c.titleTopMargin,
    h.db.getDiagramTitle()
  ), Ke(
    void 0,
    m,
    c.diagramPadding,
    (y = c.useMaxWidth) != null ? y : i.useMaxWidth
  );
}, yt = {
  draw: xt
}, _t = (r) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(
  (a) => `
        .branch-label${a} { fill: ${r["gitBranchLabel" + a]}; }
        .commit${a} { stroke: ${r["git" + a]}; fill: ${r["git" + a]}; }
        .commit-highlight${a} { stroke: ${r["gitInv" + a]}; fill: ${r["gitInv" + a]}; }
        .label${a}  { fill: ${r["git" + a]}; }
        .arrow${a} { stroke: ${r["git" + a]}; }
        `
).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${r.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelColor};}
  .commit-label-bkg { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${r.tagLabelFontSize}; fill: ${r.tagLabelColor};}
  .tag-label-bkg { fill: ${r.tagLabelBackground}; stroke: ${r.tagLabelBorder}; }
  .tag-hole { fill: ${r.textColor}; }

  .commit-merge {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }
  .commit-reverse {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${r.textColor};
  }
`, Et = _t, Lt = {
  parser: We,
  db: ut,
  renderer: yt,
  styles: Et
};
export {
  Lt as diagram
};
