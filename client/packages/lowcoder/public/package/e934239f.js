var F = (t, e, o) => new Promise((s, i) => {
  var a = (p) => {
    try {
      l(o.next(p));
    } catch (r) {
      i(r);
    }
  }, c = (p) => {
    try {
      l(o.throw(p));
    } catch (r) {
      i(r);
    }
  }, l = (p) => p.done ? s(p.value) : Promise.resolve(p.value).then(a, c);
  l((o = o.apply(t, e)).next());
});
import { a as ve, G as _e, F as ke, e as rt, s as te, d as Pe, b as Le, H as Ie, l as J, f as Nt, m as v, h as Ae, j as It, k as Ne, C as B, a4 as ot, a5 as vt, o as ee, t as se, _ as Yt, Y as re, a6 as Se } from "./08856db2.js";
import { d as Me, a as Re, g as St, b as Ht, c as Ce, e as De } from "./0fddf2f2.js";
var Ft = function() {
  var t = function(pt, w, k, L) {
    for (k = k || {}, L = pt.length; L--; k[pt[L]] = w)
      ;
    return k;
  }, e = [1, 2], o = [1, 3], s = [1, 4], i = [2, 4], a = [1, 9], c = [1, 11], l = [1, 13], p = [1, 14], r = [1, 16], x = [1, 17], T = [1, 18], u = [1, 24], g = [1, 25], m = [1, 26], _ = [1, 27], I = [1, 28], V = [1, 29], S = [1, 30], O = [1, 31], R = [1, 32], z = [1, 33], H = [1, 34], Z = [1, 35], tt = [1, 36], U = [1, 37], K = [1, 38], W = [1, 39], q = [1, 41], Q = [1, 42], G = [1, 43], j = [1, 44], et = [1, 45], N = [1, 46], y = [1, 4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 47, 48, 49, 50, 52, 53, 54, 59, 60, 61, 62, 70], P = [4, 5, 16, 50, 52, 53], $ = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 50, 52, 53, 54, 59, 60, 61, 62, 70], it = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 49, 50, 52, 53, 54, 59, 60, 61, 62, 70], A = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 48, 50, 52, 53, 54, 59, 60, 61, 62, 70], Xt = [4, 5, 13, 14, 16, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 47, 50, 52, 53, 54, 59, 60, 61, 62, 70], dt = [68, 69, 70], ct = [1, 120], Rt = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, SPACE: 4, NEWLINE: 5, SD: 6, document: 7, line: 8, statement: 9, box_section: 10, box_line: 11, participant_statement: 12, create: 13, box: 14, restOfLine: 15, end: 16, signal: 17, autonumber: 18, NUM: 19, off: 20, activate: 21, actor: 22, deactivate: 23, note_statement: 24, links_statement: 25, link_statement: 26, properties_statement: 27, details_statement: 28, title: 29, legacy_title: 30, acc_title: 31, acc_title_value: 32, acc_descr: 33, acc_descr_value: 34, acc_descr_multiline_value: 35, loop: 36, rect: 37, opt: 38, alt: 39, else_sections: 40, par: 41, par_sections: 42, par_over: 43, critical: 44, option_sections: 45, break: 46, option: 47, and: 48, else: 49, participant: 50, AS: 51, participant_actor: 52, destroy: 53, note: 54, placement: 55, text2: 56, over: 57, actor_pair: 58, links: 59, link: 60, properties: 61, details: 62, spaceList: 63, ",": 64, left_of: 65, right_of: 66, signaltype: 67, "+": 68, "-": 69, ACTOR: 70, SOLID_OPEN_ARROW: 71, DOTTED_OPEN_ARROW: 72, SOLID_ARROW: 73, DOTTED_ARROW: 74, SOLID_CROSS: 75, DOTTED_CROSS: 76, SOLID_POINT: 77, DOTTED_POINT: 78, TXT: 79, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NEWLINE", 6: "SD", 13: "create", 14: "box", 15: "restOfLine", 16: "end", 18: "autonumber", 19: "NUM", 20: "off", 21: "activate", 23: "deactivate", 29: "title", 30: "legacy_title", 31: "acc_title", 32: "acc_title_value", 33: "acc_descr", 34: "acc_descr_value", 35: "acc_descr_multiline_value", 36: "loop", 37: "rect", 38: "opt", 39: "alt", 41: "par", 43: "par_over", 44: "critical", 46: "break", 47: "option", 48: "and", 49: "else", 50: "participant", 51: "AS", 52: "participant_actor", 53: "destroy", 54: "note", 57: "over", 59: "links", 60: "link", 61: "properties", 62: "details", 64: ",", 65: "left_of", 66: "right_of", 68: "+", 69: "-", 70: "ACTOR", 71: "SOLID_OPEN_ARROW", 72: "DOTTED_OPEN_ARROW", 73: "SOLID_ARROW", 74: "DOTTED_ARROW", 75: "SOLID_CROSS", 76: "DOTTED_CROSS", 77: "SOLID_POINT", 78: "DOTTED_POINT", 79: "TXT" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [10, 0], [10, 2], [11, 2], [11, 1], [11, 1], [9, 1], [9, 2], [9, 4], [9, 2], [9, 4], [9, 3], [9, 3], [9, 2], [9, 3], [9, 3], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [9, 4], [45, 1], [45, 4], [42, 1], [42, 4], [40, 1], [40, 4], [12, 5], [12, 3], [12, 5], [12, 3], [12, 3], [24, 4], [24, 4], [25, 3], [26, 3], [27, 3], [28, 3], [63, 2], [63, 1], [58, 3], [58, 1], [55, 1], [55, 1], [17, 5], [17, 5], [17, 4], [22, 1], [67, 1], [67, 1], [67, 1], [67, 1], [67, 1], [67, 1], [67, 1], [67, 1], [56, 1]],
    performAction: function(w, k, L, b, M, h, mt) {
      var d = h.length - 1;
      switch (M) {
        case 3:
          return b.apply(h[d]), h[d];
        case 4:
        case 9:
          this.$ = [];
          break;
        case 5:
        case 10:
          h[d - 1].push(h[d]), this.$ = h[d - 1];
          break;
        case 6:
        case 7:
        case 11:
        case 12:
          this.$ = h[d];
          break;
        case 8:
        case 13:
          this.$ = [];
          break;
        case 15:
          h[d].type = "createParticipant", this.$ = h[d];
          break;
        case 16:
          h[d - 1].unshift({ type: "boxStart", boxData: b.parseBoxData(h[d - 2]) }), h[d - 1].push({ type: "boxEnd", boxText: h[d - 2] }), this.$ = h[d - 1];
          break;
        case 18:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number(h[d - 2]), sequenceIndexStep: Number(h[d - 1]), sequenceVisible: !0, signalType: b.LINETYPE.AUTONUMBER };
          break;
        case 19:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number(h[d - 1]), sequenceIndexStep: 1, sequenceVisible: !0, signalType: b.LINETYPE.AUTONUMBER };
          break;
        case 20:
          this.$ = { type: "sequenceIndex", sequenceVisible: !1, signalType: b.LINETYPE.AUTONUMBER };
          break;
        case 21:
          this.$ = { type: "sequenceIndex", sequenceVisible: !0, signalType: b.LINETYPE.AUTONUMBER };
          break;
        case 22:
          this.$ = { type: "activeStart", signalType: b.LINETYPE.ACTIVE_START, actor: h[d - 1] };
          break;
        case 23:
          this.$ = { type: "activeEnd", signalType: b.LINETYPE.ACTIVE_END, actor: h[d - 1] };
          break;
        case 29:
          b.setDiagramTitle(h[d].substring(6)), this.$ = h[d].substring(6);
          break;
        case 30:
          b.setDiagramTitle(h[d].substring(7)), this.$ = h[d].substring(7);
          break;
        case 31:
          this.$ = h[d].trim(), b.setAccTitle(this.$);
          break;
        case 32:
        case 33:
          this.$ = h[d].trim(), b.setAccDescription(this.$);
          break;
        case 34:
          h[d - 1].unshift({ type: "loopStart", loopText: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.LOOP_START }), h[d - 1].push({ type: "loopEnd", loopText: h[d - 2], signalType: b.LINETYPE.LOOP_END }), this.$ = h[d - 1];
          break;
        case 35:
          h[d - 1].unshift({ type: "rectStart", color: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.RECT_START }), h[d - 1].push({ type: "rectEnd", color: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.RECT_END }), this.$ = h[d - 1];
          break;
        case 36:
          h[d - 1].unshift({ type: "optStart", optText: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.OPT_START }), h[d - 1].push({ type: "optEnd", optText: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.OPT_END }), this.$ = h[d - 1];
          break;
        case 37:
          h[d - 1].unshift({ type: "altStart", altText: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.ALT_START }), h[d - 1].push({ type: "altEnd", signalType: b.LINETYPE.ALT_END }), this.$ = h[d - 1];
          break;
        case 38:
          h[d - 1].unshift({ type: "parStart", parText: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.PAR_START }), h[d - 1].push({ type: "parEnd", signalType: b.LINETYPE.PAR_END }), this.$ = h[d - 1];
          break;
        case 39:
          h[d - 1].unshift({ type: "parStart", parText: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.PAR_OVER_START }), h[d - 1].push({ type: "parEnd", signalType: b.LINETYPE.PAR_END }), this.$ = h[d - 1];
          break;
        case 40:
          h[d - 1].unshift({ type: "criticalStart", criticalText: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.CRITICAL_START }), h[d - 1].push({ type: "criticalEnd", signalType: b.LINETYPE.CRITICAL_END }), this.$ = h[d - 1];
          break;
        case 41:
          h[d - 1].unshift({ type: "breakStart", breakText: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.BREAK_START }), h[d - 1].push({ type: "breakEnd", optText: b.parseMessage(h[d - 2]), signalType: b.LINETYPE.BREAK_END }), this.$ = h[d - 1];
          break;
        case 43:
          this.$ = h[d - 3].concat([{ type: "option", optionText: b.parseMessage(h[d - 1]), signalType: b.LINETYPE.CRITICAL_OPTION }, h[d]]);
          break;
        case 45:
          this.$ = h[d - 3].concat([{ type: "and", parText: b.parseMessage(h[d - 1]), signalType: b.LINETYPE.PAR_AND }, h[d]]);
          break;
        case 47:
          this.$ = h[d - 3].concat([{ type: "else", altText: b.parseMessage(h[d - 1]), signalType: b.LINETYPE.ALT_ELSE }, h[d]]);
          break;
        case 48:
          h[d - 3].draw = "participant", h[d - 3].type = "addParticipant", h[d - 3].description = b.parseMessage(h[d - 1]), this.$ = h[d - 3];
          break;
        case 49:
          h[d - 1].draw = "participant", h[d - 1].type = "addParticipant", this.$ = h[d - 1];
          break;
        case 50:
          h[d - 3].draw = "actor", h[d - 3].type = "addParticipant", h[d - 3].description = b.parseMessage(h[d - 1]), this.$ = h[d - 3];
          break;
        case 51:
          h[d - 1].draw = "actor", h[d - 1].type = "addParticipant", this.$ = h[d - 1];
          break;
        case 52:
          h[d - 1].type = "destroyParticipant", this.$ = h[d - 1];
          break;
        case 53:
          this.$ = [h[d - 1], { type: "addNote", placement: h[d - 2], actor: h[d - 1].actor, text: h[d] }];
          break;
        case 54:
          h[d - 2] = [].concat(h[d - 1], h[d - 1]).slice(0, 2), h[d - 2][0] = h[d - 2][0].actor, h[d - 2][1] = h[d - 2][1].actor, this.$ = [h[d - 1], { type: "addNote", placement: b.PLACEMENT.OVER, actor: h[d - 2].slice(0, 2), text: h[d] }];
          break;
        case 55:
          this.$ = [h[d - 1], { type: "addLinks", actor: h[d - 1].actor, text: h[d] }];
          break;
        case 56:
          this.$ = [h[d - 1], { type: "addALink", actor: h[d - 1].actor, text: h[d] }];
          break;
        case 57:
          this.$ = [h[d - 1], { type: "addProperties", actor: h[d - 1].actor, text: h[d] }];
          break;
        case 58:
          this.$ = [h[d - 1], { type: "addDetails", actor: h[d - 1].actor, text: h[d] }];
          break;
        case 61:
          this.$ = [h[d - 2], h[d]];
          break;
        case 62:
          this.$ = h[d];
          break;
        case 63:
          this.$ = b.PLACEMENT.LEFTOF;
          break;
        case 64:
          this.$ = b.PLACEMENT.RIGHTOF;
          break;
        case 65:
          this.$ = [
            h[d - 4],
            h[d - 1],
            { type: "addMessage", from: h[d - 4].actor, to: h[d - 1].actor, signalType: h[d - 3], msg: h[d], activate: !0 },
            { type: "activeStart", signalType: b.LINETYPE.ACTIVE_START, actor: h[d - 1] }
          ];
          break;
        case 66:
          this.$ = [
            h[d - 4],
            h[d - 1],
            { type: "addMessage", from: h[d - 4].actor, to: h[d - 1].actor, signalType: h[d - 3], msg: h[d] },
            { type: "activeEnd", signalType: b.LINETYPE.ACTIVE_END, actor: h[d - 4] }
          ];
          break;
        case 67:
          this.$ = [h[d - 3], h[d - 1], { type: "addMessage", from: h[d - 3].actor, to: h[d - 1].actor, signalType: h[d - 2], msg: h[d] }];
          break;
        case 68:
          this.$ = { type: "addParticipant", actor: h[d] };
          break;
        case 69:
          this.$ = b.LINETYPE.SOLID_OPEN;
          break;
        case 70:
          this.$ = b.LINETYPE.DOTTED_OPEN;
          break;
        case 71:
          this.$ = b.LINETYPE.SOLID;
          break;
        case 72:
          this.$ = b.LINETYPE.DOTTED;
          break;
        case 73:
          this.$ = b.LINETYPE.SOLID_CROSS;
          break;
        case 74:
          this.$ = b.LINETYPE.DOTTED_CROSS;
          break;
        case 75:
          this.$ = b.LINETYPE.SOLID_POINT;
          break;
        case 76:
          this.$ = b.LINETYPE.DOTTED_POINT;
          break;
        case 77:
          this.$ = b.parseMessage(h[d].trim().substring(1));
          break;
      }
    },
    table: [{ 3: 1, 4: e, 5: o, 6: s }, { 1: [3] }, { 3: 5, 4: e, 5: o, 6: s }, { 3: 6, 4: e, 5: o, 6: s }, t([1, 4, 5, 13, 14, 18, 21, 23, 29, 30, 31, 33, 35, 36, 37, 38, 39, 41, 43, 44, 46, 50, 52, 53, 54, 59, 60, 61, 62, 70], i, { 7: 7 }), { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3], 4: a, 5: c, 8: 8, 9: 10, 12: 12, 13: l, 14: p, 17: 15, 18: r, 21: x, 22: 40, 23: T, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: u, 30: g, 31: m, 33: _, 35: I, 36: V, 37: S, 38: O, 39: R, 41: z, 43: H, 44: Z, 46: tt, 50: U, 52: K, 53: W, 54: q, 59: Q, 60: G, 61: j, 62: et, 70: N }, t(y, [2, 5]), { 9: 47, 12: 12, 13: l, 14: p, 17: 15, 18: r, 21: x, 22: 40, 23: T, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: u, 30: g, 31: m, 33: _, 35: I, 36: V, 37: S, 38: O, 39: R, 41: z, 43: H, 44: Z, 46: tt, 50: U, 52: K, 53: W, 54: q, 59: Q, 60: G, 61: j, 62: et, 70: N }, t(y, [2, 7]), t(y, [2, 8]), t(y, [2, 14]), { 12: 48, 50: U, 52: K, 53: W }, { 15: [1, 49] }, { 5: [1, 50] }, { 5: [1, 53], 19: [1, 51], 20: [1, 52] }, { 22: 54, 70: N }, { 22: 55, 70: N }, { 5: [1, 56] }, { 5: [1, 57] }, { 5: [1, 58] }, { 5: [1, 59] }, { 5: [1, 60] }, t(y, [2, 29]), t(y, [2, 30]), { 32: [1, 61] }, { 34: [1, 62] }, t(y, [2, 33]), { 15: [1, 63] }, { 15: [1, 64] }, { 15: [1, 65] }, { 15: [1, 66] }, { 15: [1, 67] }, { 15: [1, 68] }, { 15: [1, 69] }, { 15: [1, 70] }, { 22: 71, 70: N }, { 22: 72, 70: N }, { 22: 73, 70: N }, { 67: 74, 71: [1, 75], 72: [1, 76], 73: [1, 77], 74: [1, 78], 75: [1, 79], 76: [1, 80], 77: [1, 81], 78: [1, 82] }, { 55: 83, 57: [1, 84], 65: [1, 85], 66: [1, 86] }, { 22: 87, 70: N }, { 22: 88, 70: N }, { 22: 89, 70: N }, { 22: 90, 70: N }, t([5, 51, 64, 71, 72, 73, 74, 75, 76, 77, 78, 79], [2, 68]), t(y, [2, 6]), t(y, [2, 15]), t(P, [2, 9], { 10: 91 }), t(y, [2, 17]), { 5: [1, 93], 19: [1, 92] }, { 5: [1, 94] }, t(y, [2, 21]), { 5: [1, 95] }, { 5: [1, 96] }, t(y, [2, 24]), t(y, [2, 25]), t(y, [2, 26]), t(y, [2, 27]), t(y, [2, 28]), t(y, [2, 31]), t(y, [2, 32]), t($, i, { 7: 97 }), t($, i, { 7: 98 }), t($, i, { 7: 99 }), t(it, i, { 40: 100, 7: 101 }), t(A, i, { 42: 102, 7: 103 }), t(A, i, { 7: 103, 42: 104 }), t(Xt, i, { 45: 105, 7: 106 }), t($, i, { 7: 107 }), { 5: [1, 109], 51: [1, 108] }, { 5: [1, 111], 51: [1, 110] }, { 5: [1, 112] }, { 22: 115, 68: [1, 113], 69: [1, 114], 70: N }, t(dt, [2, 69]), t(dt, [2, 70]), t(dt, [2, 71]), t(dt, [2, 72]), t(dt, [2, 73]), t(dt, [2, 74]), t(dt, [2, 75]), t(dt, [2, 76]), { 22: 116, 70: N }, { 22: 118, 58: 117, 70: N }, { 70: [2, 63] }, { 70: [2, 64] }, { 56: 119, 79: ct }, { 56: 121, 79: ct }, { 56: 122, 79: ct }, { 56: 123, 79: ct }, { 4: [1, 126], 5: [1, 128], 11: 125, 12: 127, 16: [1, 124], 50: U, 52: K, 53: W }, { 5: [1, 129] }, t(y, [2, 19]), t(y, [2, 20]), t(y, [2, 22]), t(y, [2, 23]), { 4: a, 5: c, 8: 8, 9: 10, 12: 12, 13: l, 14: p, 16: [1, 130], 17: 15, 18: r, 21: x, 22: 40, 23: T, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: u, 30: g, 31: m, 33: _, 35: I, 36: V, 37: S, 38: O, 39: R, 41: z, 43: H, 44: Z, 46: tt, 50: U, 52: K, 53: W, 54: q, 59: Q, 60: G, 61: j, 62: et, 70: N }, { 4: a, 5: c, 8: 8, 9: 10, 12: 12, 13: l, 14: p, 16: [1, 131], 17: 15, 18: r, 21: x, 22: 40, 23: T, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: u, 30: g, 31: m, 33: _, 35: I, 36: V, 37: S, 38: O, 39: R, 41: z, 43: H, 44: Z, 46: tt, 50: U, 52: K, 53: W, 54: q, 59: Q, 60: G, 61: j, 62: et, 70: N }, { 4: a, 5: c, 8: 8, 9: 10, 12: 12, 13: l, 14: p, 16: [1, 132], 17: 15, 18: r, 21: x, 22: 40, 23: T, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: u, 30: g, 31: m, 33: _, 35: I, 36: V, 37: S, 38: O, 39: R, 41: z, 43: H, 44: Z, 46: tt, 50: U, 52: K, 53: W, 54: q, 59: Q, 60: G, 61: j, 62: et, 70: N }, { 16: [1, 133] }, { 4: a, 5: c, 8: 8, 9: 10, 12: 12, 13: l, 14: p, 16: [2, 46], 17: 15, 18: r, 21: x, 22: 40, 23: T, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: u, 30: g, 31: m, 33: _, 35: I, 36: V, 37: S, 38: O, 39: R, 41: z, 43: H, 44: Z, 46: tt, 49: [1, 134], 50: U, 52: K, 53: W, 54: q, 59: Q, 60: G, 61: j, 62: et, 70: N }, { 16: [1, 135] }, { 4: a, 5: c, 8: 8, 9: 10, 12: 12, 13: l, 14: p, 16: [2, 44], 17: 15, 18: r, 21: x, 22: 40, 23: T, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: u, 30: g, 31: m, 33: _, 35: I, 36: V, 37: S, 38: O, 39: R, 41: z, 43: H, 44: Z, 46: tt, 48: [1, 136], 50: U, 52: K, 53: W, 54: q, 59: Q, 60: G, 61: j, 62: et, 70: N }, { 16: [1, 137] }, { 16: [1, 138] }, { 4: a, 5: c, 8: 8, 9: 10, 12: 12, 13: l, 14: p, 16: [2, 42], 17: 15, 18: r, 21: x, 22: 40, 23: T, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: u, 30: g, 31: m, 33: _, 35: I, 36: V, 37: S, 38: O, 39: R, 41: z, 43: H, 44: Z, 46: tt, 47: [1, 139], 50: U, 52: K, 53: W, 54: q, 59: Q, 60: G, 61: j, 62: et, 70: N }, { 4: a, 5: c, 8: 8, 9: 10, 12: 12, 13: l, 14: p, 16: [1, 140], 17: 15, 18: r, 21: x, 22: 40, 23: T, 24: 19, 25: 20, 26: 21, 27: 22, 28: 23, 29: u, 30: g, 31: m, 33: _, 35: I, 36: V, 37: S, 38: O, 39: R, 41: z, 43: H, 44: Z, 46: tt, 50: U, 52: K, 53: W, 54: q, 59: Q, 60: G, 61: j, 62: et, 70: N }, { 15: [1, 141] }, t(y, [2, 49]), { 15: [1, 142] }, t(y, [2, 51]), t(y, [2, 52]), { 22: 143, 70: N }, { 22: 144, 70: N }, { 56: 145, 79: ct }, { 56: 146, 79: ct }, { 56: 147, 79: ct }, { 64: [1, 148], 79: [2, 62] }, { 5: [2, 55] }, { 5: [2, 77] }, { 5: [2, 56] }, { 5: [2, 57] }, { 5: [2, 58] }, t(y, [2, 16]), t(P, [2, 10]), { 12: 149, 50: U, 52: K, 53: W }, t(P, [2, 12]), t(P, [2, 13]), t(y, [2, 18]), t(y, [2, 34]), t(y, [2, 35]), t(y, [2, 36]), t(y, [2, 37]), { 15: [1, 150] }, t(y, [2, 38]), { 15: [1, 151] }, t(y, [2, 39]), t(y, [2, 40]), { 15: [1, 152] }, t(y, [2, 41]), { 5: [1, 153] }, { 5: [1, 154] }, { 56: 155, 79: ct }, { 56: 156, 79: ct }, { 5: [2, 67] }, { 5: [2, 53] }, { 5: [2, 54] }, { 22: 157, 70: N }, t(P, [2, 11]), t(it, i, { 7: 101, 40: 158 }), t(A, i, { 7: 103, 42: 159 }), t(Xt, i, { 7: 106, 45: 160 }), t(y, [2, 48]), t(y, [2, 50]), { 5: [2, 65] }, { 5: [2, 66] }, { 79: [2, 61] }, { 16: [2, 47] }, { 16: [2, 45] }, { 16: [2, 43] }],
    defaultActions: { 5: [2, 1], 6: [2, 2], 85: [2, 63], 86: [2, 64], 119: [2, 55], 120: [2, 77], 121: [2, 56], 122: [2, 57], 123: [2, 58], 145: [2, 67], 146: [2, 53], 147: [2, 54], 155: [2, 65], 156: [2, 66], 157: [2, 61], 158: [2, 47], 159: [2, 45], 160: [2, 43] },
    parseError: function(w, k) {
      if (k.recoverable)
        this.trace(w);
      else {
        var L = new Error(w);
        throw L.hash = k, L;
      }
    },
    parse: function(w) {
      var k = this, L = [0], b = [], M = [null], h = [], mt = this.table, d = "", kt = 0, Jt = 0, be = 2, Zt = 1, Ee = h.slice.call(arguments, 1), Y = Object.create(this.lexer), ut = { yy: {} };
      for (var Dt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, Dt) && (ut.yy[Dt] = this.yy[Dt]);
      Y.setInput(w, ut.yy), ut.yy.lexer = Y, ut.yy.parser = this, typeof Y.yylloc == "undefined" && (Y.yylloc = {});
      var Vt = Y.yylloc;
      h.push(Vt);
      var me = Y.options && Y.options.ranges;
      typeof ut.yy.parseError == "function" ? this.parseError = ut.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function we() {
        var ht;
        return ht = b.pop() || Y.lex() || Zt, typeof ht != "number" && (ht instanceof Array && (b = ht, ht = b.pop()), ht = k.symbols_[ht] || ht), ht;
      }
      for (var X, ft, st, Ot, Tt = {}, Pt, lt, Qt, Lt; ; ) {
        if (ft = L[L.length - 1], this.defaultActions[ft] ? st = this.defaultActions[ft] : ((X === null || typeof X == "undefined") && (X = we()), st = mt[ft] && mt[ft][X]), typeof st == "undefined" || !st.length || !st[0]) {
          var Bt = "";
          Lt = [];
          for (Pt in mt[ft])
            this.terminals_[Pt] && Pt > be && Lt.push("'" + this.terminals_[Pt] + "'");
          Y.showPosition ? Bt = "Parse error on line " + (kt + 1) + `:
` + Y.showPosition() + `
Expecting ` + Lt.join(", ") + ", got '" + (this.terminals_[X] || X) + "'" : Bt = "Parse error on line " + (kt + 1) + ": Unexpected " + (X == Zt ? "end of input" : "'" + (this.terminals_[X] || X) + "'"), this.parseError(Bt, {
            text: Y.match,
            token: this.terminals_[X] || X,
            line: Y.yylineno,
            loc: Vt,
            expected: Lt
          });
        }
        if (st[0] instanceof Array && st.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + ft + ", token: " + X);
        switch (st[0]) {
          case 1:
            L.push(X), M.push(Y.yytext), h.push(Y.yylloc), L.push(st[1]), X = null, Jt = Y.yyleng, d = Y.yytext, kt = Y.yylineno, Vt = Y.yylloc;
            break;
          case 2:
            if (lt = this.productions_[st[1]][1], Tt.$ = M[M.length - lt], Tt._$ = {
              first_line: h[h.length - (lt || 1)].first_line,
              last_line: h[h.length - 1].last_line,
              first_column: h[h.length - (lt || 1)].first_column,
              last_column: h[h.length - 1].last_column
            }, me && (Tt._$.range = [
              h[h.length - (lt || 1)].range[0],
              h[h.length - 1].range[1]
            ]), Ot = this.performAction.apply(Tt, [
              d,
              Jt,
              kt,
              ut.yy,
              st[1],
              M,
              h
            ].concat(Ee)), typeof Ot != "undefined")
              return Ot;
            lt && (L = L.slice(0, -1 * lt * 2), M = M.slice(0, -1 * lt), h = h.slice(0, -1 * lt)), L.push(this.productions_[st[1]][0]), M.push(Tt.$), h.push(Tt._$), Qt = mt[L[L.length - 2]][L[L.length - 1]], L.push(Qt);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, Te = function() {
    var pt = {
      EOF: 1,
      parseError: function(k, L) {
        if (this.yy.parser)
          this.yy.parser.parseError(k, L);
        else
          throw new Error(k);
      },
      // resets the lexer, sets new input
      setInput: function(w, k) {
        return this.yy = k || this.yy || {}, this._input = w, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var w = this._input[0];
        this.yytext += w, this.yyleng++, this.offset++, this.match += w, this.matched += w;
        var k = w.match(/(?:\r\n?|\n).*/g);
        return k ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), w;
      },
      // unshifts one char (or a string) into the input
      unput: function(w) {
        var k = w.length, L = w.split(/(?:\r\n?|\n)/g);
        this._input = w + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - k), this.offset -= k;
        var b = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), L.length - 1 && (this.yylineno -= L.length - 1);
        var M = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: L ? (L.length === b.length ? this.yylloc.first_column : 0) + b[b.length - L.length].length - L[0].length : this.yylloc.first_column - k
        }, this.options.ranges && (this.yylloc.range = [M[0], M[0] + this.yyleng - k]), this.yyleng = this.yytext.length, this;
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
      less: function(w) {
        this.unput(this.match.slice(w));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var w = this.matched.substr(0, this.matched.length - this.match.length);
        return (w.length > 20 ? "..." : "") + w.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var w = this.match;
        return w.length < 20 && (w += this._input.substr(0, 20 - w.length)), (w.substr(0, 20) + (w.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var w = this.pastInput(), k = new Array(w.length + 1).join("-");
        return w + this.upcomingInput() + `
` + k + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(w, k) {
        var L, b, M;
        if (this.options.backtrack_lexer && (M = {
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
        }, this.options.ranges && (M.yylloc.range = this.yylloc.range.slice(0))), b = w[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + w[0].length
        }, this.yytext += w[0], this.match += w[0], this.matches = w, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(w[0].length), this.matched += w[0], L = this.performAction.call(this, this.yy, this, k, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), L)
          return L;
        if (this._backtrack) {
          for (var h in M)
            this[h] = M[h];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var w, k, L, b;
        this._more || (this.yytext = "", this.match = "");
        for (var M = this._currentRules(), h = 0; h < M.length; h++)
          if (L = this._input.match(this.rules[M[h]]), L && (!k || L[0].length > k[0].length)) {
            if (k = L, b = h, this.options.backtrack_lexer) {
              if (w = this.test_match(L, M[h]), w !== !1)
                return w;
              if (this._backtrack) {
                k = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return k ? (w = this.test_match(k, M[b]), w !== !1 ? w : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var k = this.next();
        return k || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(k) {
        this.conditionStack.push(k);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var k = this.conditionStack.length - 1;
        return k > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(k) {
        return k = this.conditionStack.length - 1 - Math.abs(k || 0), k >= 0 ? this.conditionStack[k] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(k) {
        this.begin(k);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(k, L, b, M) {
        switch (b) {
          case 0:
            return 5;
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            break;
          case 5:
            break;
          case 6:
            return 19;
          case 7:
            return this.begin("LINE"), 14;
          case 8:
            return this.begin("ID"), 50;
          case 9:
            return this.begin("ID"), 52;
          case 10:
            return 13;
          case 11:
            return this.begin("ID"), 53;
          case 12:
            return L.yytext = L.yytext.trim(), this.begin("ALIAS"), 70;
          case 13:
            return this.popState(), this.popState(), this.begin("LINE"), 51;
          case 14:
            return this.popState(), this.popState(), 5;
          case 15:
            return this.begin("LINE"), 36;
          case 16:
            return this.begin("LINE"), 37;
          case 17:
            return this.begin("LINE"), 38;
          case 18:
            return this.begin("LINE"), 39;
          case 19:
            return this.begin("LINE"), 49;
          case 20:
            return this.begin("LINE"), 41;
          case 21:
            return this.begin("LINE"), 43;
          case 22:
            return this.begin("LINE"), 48;
          case 23:
            return this.begin("LINE"), 44;
          case 24:
            return this.begin("LINE"), 47;
          case 25:
            return this.begin("LINE"), 46;
          case 26:
            return this.popState(), 15;
          case 27:
            return 16;
          case 28:
            return 65;
          case 29:
            return 66;
          case 30:
            return 59;
          case 31:
            return 60;
          case 32:
            return 61;
          case 33:
            return 62;
          case 34:
            return 57;
          case 35:
            return 54;
          case 36:
            return this.begin("ID"), 21;
          case 37:
            return this.begin("ID"), 23;
          case 38:
            return 29;
          case 39:
            return 30;
          case 40:
            return this.begin("acc_title"), 31;
          case 41:
            return this.popState(), "acc_title_value";
          case 42:
            return this.begin("acc_descr"), 33;
          case 43:
            return this.popState(), "acc_descr_value";
          case 44:
            this.begin("acc_descr_multiline");
            break;
          case 45:
            this.popState();
            break;
          case 46:
            return "acc_descr_multiline_value";
          case 47:
            return 6;
          case 48:
            return 18;
          case 49:
            return 20;
          case 50:
            return 64;
          case 51:
            return 5;
          case 52:
            return L.yytext = L.yytext.trim(), 70;
          case 53:
            return 73;
          case 54:
            return 74;
          case 55:
            return 71;
          case 56:
            return 72;
          case 57:
            return 75;
          case 58:
            return 76;
          case 59:
            return 77;
          case 60:
            return 78;
          case 61:
            return 79;
          case 62:
            return 68;
          case 63:
            return 69;
          case 64:
            return 5;
          case 65:
            return "INVALID";
        }
      },
      rules: [/^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[0-9]+(?=[ \n]+))/i, /^(?:box\b)/i, /^(?:participant\b)/i, /^(?:actor\b)/i, /^(?:create\b)/i, /^(?:destroy\b)/i, /^(?:[^\->:\n,;]+?([\-]*[^\->:\n,;]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i, /^(?:as\b)/i, /^(?:(?:))/i, /^(?:loop\b)/i, /^(?:rect\b)/i, /^(?:opt\b)/i, /^(?:alt\b)/i, /^(?:else\b)/i, /^(?:par\b)/i, /^(?:par_over\b)/i, /^(?:and\b)/i, /^(?:critical\b)/i, /^(?:option\b)/i, /^(?:break\b)/i, /^(?:(?:[:]?(?:no)?wrap)?[^#\n;]*)/i, /^(?:end\b)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:links\b)/i, /^(?:link\b)/i, /^(?:properties\b)/i, /^(?:details\b)/i, /^(?:over\b)/i, /^(?:note\b)/i, /^(?:activate\b)/i, /^(?:deactivate\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:title:\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:sequenceDiagram\b)/i, /^(?:autonumber\b)/i, /^(?:off\b)/i, /^(?:,)/i, /^(?:;)/i, /^(?:[^\+\->:\n,;]+((?!(-x|--x|-\)|--\)))[\-]*[^\+\->:\n,;]+)*)/i, /^(?:->>)/i, /^(?:-->>)/i, /^(?:->)/i, /^(?:-->)/i, /^(?:-[x])/i, /^(?:--[x])/i, /^(?:-[\)])/i, /^(?:--[\)])/i, /^(?::(?:(?:no)?wrap)?[^#\n;]+)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [45, 46], inclusive: !1 }, acc_descr: { rules: [43], inclusive: !1 }, acc_title: { rules: [41], inclusive: !1 }, ID: { rules: [2, 3, 12], inclusive: !1 }, ALIAS: { rules: [2, 3, 13, 14], inclusive: !1 }, LINE: { rules: [2, 3, 26], inclusive: !1 }, INITIAL: { rules: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 44, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65], inclusive: !0 } }
    };
    return pt;
  }();
  Rt.lexer = Te;
  function Ct() {
    this.yy = {};
  }
  return Ct.prototype = Rt, Rt.Parser = Ct, new Ct();
}();
Ft.parser = Ft;
const Ve = Ft;
class Oe {
  /**
   * @param init - Function that creates the default state.
   */
  constructor(e) {
    this.init = e, this.records = this.init();
  }
  reset() {
    this.records = this.init();
  }
}
const E = new Oe(() => ({
  prevActor: void 0,
  actors: {},
  createdActors: {},
  destroyedActors: {},
  boxes: [],
  messages: [],
  notes: [],
  sequenceNumbersEnabled: !1,
  wrapEnabled: void 0,
  currentBox: void 0,
  lastCreated: void 0,
  lastDestroyed: void 0
})), Be = function(t) {
  E.records.boxes.push({
    name: t.text,
    wrap: t.wrap === void 0 && xt() || !!t.wrap,
    fill: t.color,
    actorKeys: []
  }), E.records.currentBox = E.records.boxes.slice(-1)[0];
}, Wt = function(t, e, o, s) {
  let i = E.records.currentBox;
  const a = E.records.actors[t];
  if (a) {
    if (E.records.currentBox && a.box && E.records.currentBox !== a.box)
      throw new Error(
        "A same participant should only be defined in one Box: " + a.name + " can't be in '" + a.box.name + "' and in '" + E.records.currentBox.name + "' at the same time."
      );
    if (i = a.box ? a.box : E.records.currentBox, a.box = i, a && e === a.name && o == null)
      return;
  }
  (o == null || o.text == null) && (o = { text: e, wrap: null, type: s }), (s == null || o.text == null) && (o = { text: e, wrap: null, type: s }), E.records.actors[t] = {
    box: i,
    name: e,
    description: o.text,
    wrap: o.wrap === void 0 && xt() || !!o.wrap,
    prevActor: E.records.prevActor,
    links: {},
    properties: {},
    actorCnt: null,
    rectData: null,
    type: s || "participant"
  }, E.records.prevActor && E.records.actors[E.records.prevActor] && (E.records.actors[E.records.prevActor].nextActor = t), E.records.currentBox && E.records.currentBox.actorKeys.push(t), E.records.prevActor = t;
}, Ye = (t) => {
  let e, o = 0;
  for (e = 0; e < E.records.messages.length; e++)
    E.records.messages[e].type === wt.ACTIVE_START && E.records.messages[e].from.actor === t && o++, E.records.messages[e].type === wt.ACTIVE_END && E.records.messages[e].from.actor === t && o--;
  return o;
}, Fe = function(t, e, o, s) {
  E.records.messages.push({
    from: t,
    to: e,
    message: o.text,
    wrap: o.wrap === void 0 && xt() || !!o.wrap,
    answer: s
  });
}, C = function(t, e, o = { text: void 0, wrap: void 0 }, s, i = !1) {
  if (s === wt.ACTIVE_END && Ye(t.actor) < 1) {
    let c = new Error("Trying to inactivate an inactive participant (" + t.actor + ")");
    throw c.hash = {
      text: "->>-",
      token: "->>-",
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["'ACTIVE_PARTICIPANT'"]
    }, c;
  }
  return E.records.messages.push({
    from: t,
    to: e,
    message: o.text,
    wrap: o.wrap === void 0 && xt() || !!o.wrap,
    type: s,
    activate: i
  }), !0;
}, We = function() {
  return E.records.boxes.length > 0;
}, qe = function() {
  return E.records.boxes.some((t) => t.name);
}, ze = function() {
  return E.records.messages;
}, He = function() {
  return E.records.boxes;
}, Ue = function() {
  return E.records.actors;
}, Ke = function() {
  return E.records.createdActors;
}, Ge = function() {
  return E.records.destroyedActors;
}, _t = function(t) {
  return E.records.actors[t];
}, Xe = function() {
  return Object.keys(E.records.actors);
}, Je = function() {
  E.records.sequenceNumbersEnabled = !0;
}, Ze = function() {
  E.records.sequenceNumbersEnabled = !1;
}, Qe = () => E.records.sequenceNumbersEnabled, je = function(t) {
  E.records.wrapEnabled = t;
}, xt = () => E.records.wrapEnabled !== void 0 ? E.records.wrapEnabled : rt().sequence.wrap, $e = function() {
  E.reset(), Ie();
}, t0 = function(t) {
  const e = t.trim(), o = {
    text: e.replace(/^:?(?:no)?wrap:/, "").trim(),
    wrap: e.match(/^:?wrap:/) !== null ? !0 : e.match(/^:?nowrap:/) !== null ? !1 : void 0
  };
  return J.debug("parseMessage:", o), o;
}, e0 = function(t) {
  const e = t.match(/^((?:rgba?|hsla?)\s*\(.*\)|\w*)(.*)$/);
  let o = e != null && e[1] ? e[1].trim() : "transparent", s = e != null && e[2] ? e[2].trim() : void 0;
  if (window && window.CSS)
    window.CSS.supports("color", o) || (o = "transparent", s = t.trim());
  else {
    const i = new Option().style;
    i.color = o, i.color !== o && (o = "transparent", s = t.trim());
  }
  return {
    color: o,
    text: s !== void 0 ? Nt(s.replace(/^:?(?:no)?wrap:/, ""), rt()) : void 0,
    wrap: s !== void 0 ? s.match(/^:?wrap:/) !== null ? !0 : s.match(/^:?nowrap:/) !== null ? !1 : void 0 : void 0
  };
}, wt = {
  SOLID: 0,
  DOTTED: 1,
  NOTE: 2,
  SOLID_CROSS: 3,
  DOTTED_CROSS: 4,
  SOLID_OPEN: 5,
  DOTTED_OPEN: 6,
  LOOP_START: 10,
  LOOP_END: 11,
  ALT_START: 12,
  ALT_ELSE: 13,
  ALT_END: 14,
  OPT_START: 15,
  OPT_END: 16,
  ACTIVE_START: 17,
  ACTIVE_END: 18,
  PAR_START: 19,
  PAR_AND: 20,
  PAR_END: 21,
  RECT_START: 22,
  RECT_END: 23,
  SOLID_POINT: 24,
  DOTTED_POINT: 25,
  AUTONUMBER: 26,
  CRITICAL_START: 27,
  CRITICAL_OPTION: 28,
  CRITICAL_END: 29,
  BREAK_START: 30,
  BREAK_END: 31,
  PAR_OVER_START: 32
}, s0 = {
  FILLED: 0,
  OPEN: 1
}, r0 = {
  LEFTOF: 0,
  RIGHTOF: 1,
  OVER: 2
}, ie = function(t, e, o) {
  const s = {
    actor: t,
    placement: e,
    message: o.text,
    wrap: o.wrap === void 0 && xt() || !!o.wrap
  }, i = [].concat(t, t);
  E.records.notes.push(s), E.records.messages.push({
    from: i[0],
    to: i[1],
    message: o.text,
    wrap: o.wrap === void 0 && xt() || !!o.wrap,
    type: wt.NOTE,
    placement: e
  });
}, ae = function(t, e) {
  const o = _t(t);
  try {
    let s = Nt(e.text, rt());
    s = s.replace(/&amp;/g, "&"), s = s.replace(/&equals;/g, "=");
    const i = JSON.parse(s);
    Ut(o, i);
  } catch (s) {
    J.error("error while parsing actor link text", s);
  }
}, i0 = function(t, e) {
  const o = _t(t);
  try {
    const c = {};
    let l = Nt(e.text, rt());
    var s = l.indexOf("@");
    l = l.replace(/&amp;/g, "&"), l = l.replace(/&equals;/g, "=");
    var i = l.slice(0, s - 1).trim(), a = l.slice(s + 1).trim();
    c[i] = a, Ut(o, c);
  } catch (c) {
    J.error("error while parsing actor link text", c);
  }
};
function Ut(t, e) {
  if (t.links == null)
    t.links = e;
  else
    for (let o in e)
      t.links[o] = e[o];
}
const ne = function(t, e) {
  const o = _t(t);
  try {
    let s = Nt(e.text, rt());
    const i = JSON.parse(s);
    oe(o, i);
  } catch (s) {
    J.error("error while parsing actor properties text", s);
  }
};
function oe(t, e) {
  if (t.properties == null)
    t.properties = e;
  else
    for (let o in e)
      t.properties[o] = e[o];
}
function a0() {
  E.records.currentBox = void 0;
}
const ce = function(t, e) {
  const o = _t(t), s = document.getElementById(e.text);
  try {
    const i = s.innerHTML, a = JSON.parse(i);
    a.properties && oe(o, a.properties), a.links && Ut(o, a.links);
  } catch (i) {
    J.error("error while parsing actor details text", i);
  }
}, n0 = function(t, e) {
  if (t !== void 0 && t.properties !== void 0)
    return t.properties[e];
}, le = function(t) {
  if (Array.isArray(t))
    t.forEach(function(e) {
      le(e);
    });
  else
    switch (t.type) {
      case "sequenceIndex":
        E.records.messages.push({
          from: void 0,
          to: void 0,
          message: {
            start: t.sequenceIndex,
            step: t.sequenceIndexStep,
            visible: t.sequenceVisible
          },
          wrap: !1,
          type: t.signalType
        });
        break;
      case "addParticipant":
        Wt(t.actor, t.actor, t.description, t.draw);
        break;
      case "createParticipant":
        if (E.records.actors[t.actor])
          throw new Error(
            "It is not possible to have actors with the same id, even if one is destroyed before the next is created. Use 'AS' aliases to simulate the behavior"
          );
        E.records.lastCreated = t.actor, Wt(t.actor, t.actor, t.description, t.draw), E.records.createdActors[t.actor] = E.records.messages.length;
        break;
      case "destroyParticipant":
        E.records.lastDestroyed = t.actor, E.records.destroyedActors[t.actor] = E.records.messages.length;
        break;
      case "activeStart":
        C(t.actor, void 0, void 0, t.signalType);
        break;
      case "activeEnd":
        C(t.actor, void 0, void 0, t.signalType);
        break;
      case "addNote":
        ie(t.actor, t.placement, t.text);
        break;
      case "addLinks":
        ae(t.actor, t.text);
        break;
      case "addALink":
        i0(t.actor, t.text);
        break;
      case "addProperties":
        ne(t.actor, t.text);
        break;
      case "addDetails":
        ce(t.actor, t.text);
        break;
      case "addMessage":
        if (E.records.lastCreated) {
          if (t.to !== E.records.lastCreated)
            throw new Error(
              "The created participant " + E.records.lastCreated + " does not have an associated creating message after its declaration. Please check the sequence diagram."
            );
          E.records.lastCreated = void 0;
        } else if (E.records.lastDestroyed) {
          if (t.to !== E.records.lastDestroyed && t.from !== E.records.lastDestroyed)
            throw new Error(
              "The destroyed participant " + E.records.lastDestroyed + " does not have an associated destroying message after its declaration. Please check the sequence diagram."
            );
          E.records.lastDestroyed = void 0;
        }
        C(t.from, t.to, t.msg, t.signalType, t.activate);
        break;
      case "boxStart":
        Be(t.boxData);
        break;
      case "boxEnd":
        a0();
        break;
      case "loopStart":
        C(void 0, void 0, t.loopText, t.signalType);
        break;
      case "loopEnd":
        C(void 0, void 0, void 0, t.signalType);
        break;
      case "rectStart":
        C(void 0, void 0, t.color, t.signalType);
        break;
      case "rectEnd":
        C(void 0, void 0, void 0, t.signalType);
        break;
      case "optStart":
        C(void 0, void 0, t.optText, t.signalType);
        break;
      case "optEnd":
        C(void 0, void 0, void 0, t.signalType);
        break;
      case "altStart":
        C(void 0, void 0, t.altText, t.signalType);
        break;
      case "else":
        C(void 0, void 0, t.altText, t.signalType);
        break;
      case "altEnd":
        C(void 0, void 0, void 0, t.signalType);
        break;
      case "setAccTitle":
        te(t.text);
        break;
      case "parStart":
        C(void 0, void 0, t.parText, t.signalType);
        break;
      case "and":
        C(void 0, void 0, t.parText, t.signalType);
        break;
      case "parEnd":
        C(void 0, void 0, void 0, t.signalType);
        break;
      case "criticalStart":
        C(void 0, void 0, t.criticalText, t.signalType);
        break;
      case "option":
        C(void 0, void 0, t.optionText, t.signalType);
        break;
      case "criticalEnd":
        C(void 0, void 0, void 0, t.signalType);
        break;
      case "breakStart":
        C(void 0, void 0, t.breakText, t.signalType);
        break;
      case "breakEnd":
        C(void 0, void 0, void 0, t.signalType);
        break;
    }
}, jt = {
  addActor: Wt,
  addMessage: Fe,
  addSignal: C,
  addLinks: ae,
  addDetails: ce,
  addProperties: ne,
  autoWrap: xt,
  setWrap: je,
  enableSequenceNumbers: Je,
  disableSequenceNumbers: Ze,
  showSequenceNumbers: Qe,
  getMessages: ze,
  getActors: Ue,
  getCreatedActors: Ke,
  getDestroyedActors: Ge,
  getActor: _t,
  getActorKeys: Xe,
  getActorProperty: n0,
  getAccTitle: ve,
  getBoxes: He,
  getDiagramTitle: _e,
  setDiagramTitle: ke,
  getConfig: () => rt().sequence,
  clear: $e,
  parseMessage: t0,
  parseBoxData: e0,
  LINETYPE: wt,
  ARROWTYPE: s0,
  PLACEMENT: r0,
  addNote: ie,
  setAccTitle: te,
  apply: le,
  setAccDescription: Pe,
  getAccDescription: Le,
  hasAtLeastOneBox: We,
  hasAtLeastOneBoxWithTitle: qe
}, o0 = (t) => `.actor {
    stroke: ${t.actorBorder};
    fill: ${t.actorBkg};
  }

  text.actor > tspan {
    fill: ${t.actorTextColor};
    stroke: none;
  }

  .actor-line {
    stroke: ${t.actorLineColor};
  }

  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: none;
    stroke: ${t.signalColor};
  }

  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: 2, 2;
    stroke: ${t.signalColor};
  }

  #arrowhead path {
    fill: ${t.signalColor};
    stroke: ${t.signalColor};
  }

  .sequenceNumber {
    fill: ${t.sequenceNumberColor};
  }

  #sequencenumber {
    fill: ${t.signalColor};
  }

  #crosshead path {
    fill: ${t.signalColor};
    stroke: ${t.signalColor};
  }

  .messageText {
    fill: ${t.signalTextColor};
    stroke: none;
  }

  .labelBox {
    stroke: ${t.labelBoxBorderColor};
    fill: ${t.labelBoxBkgColor};
  }

  .labelText, .labelText > tspan {
    fill: ${t.labelTextColor};
    stroke: none;
  }

  .loopText, .loopText > tspan {
    fill: ${t.loopTextColor};
    stroke: none;
  }

  .loopLine {
    stroke-width: 2px;
    stroke-dasharray: 2, 2;
    stroke: ${t.labelBoxBorderColor};
    fill: ${t.labelBoxBorderColor};
  }

  .note {
    //stroke: #decc93;
    stroke: ${t.noteBorderColor};
    fill: ${t.noteBkgColor};
  }

  .noteText, .noteText > tspan {
    fill: ${t.noteTextColor};
    stroke: none;
  }

  .activation0 {
    fill: ${t.activationBkgColor};
    stroke: ${t.activationBorderColor};
  }

  .activation1 {
    fill: ${t.activationBkgColor};
    stroke: ${t.activationBorderColor};
  }

  .activation2 {
    fill: ${t.activationBkgColor};
    stroke: ${t.activationBorderColor};
  }

  .actorPopupMenu {
    position: absolute;
  }

  .actorPopupMenuPanel {
    position: absolute;
    fill: ${t.actorBkg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
  .actor-man line {
    stroke: ${t.actorBorder};
    fill: ${t.actorBkg};
  }
  .actor-man circle, line {
    stroke: ${t.actorBorder};
    fill: ${t.actorBkg};
    stroke-width: 2px;
  }
`, c0 = o0, gt = 18 * 2, he = "actor-top", de = "actor-bottom", Kt = function(t, e) {
  return Me(t, e);
}, l0 = function(t, e, o, s, i) {
  if (e.links === void 0 || e.links === null || Object.keys(e.links).length === 0)
    return { height: 0, width: 0 };
  const a = e.links, c = e.actorCnt, l = e.rectData;
  var p = "none";
  i && (p = "block !important");
  const r = t.append("g");
  r.attr("id", "actor" + c + "_popup"), r.attr("class", "actorPopupMenu"), r.attr("display", p);
  var x = "";
  l.class !== void 0 && (x = " " + l.class);
  let T = l.width > o ? l.width : o;
  const u = r.append("rect");
  if (u.attr("class", "actorPopupMenuPanel" + x), u.attr("x", l.x), u.attr("y", l.height), u.attr("fill", l.fill), u.attr("stroke", l.stroke), u.attr("width", T), u.attr("height", l.height), u.attr("rx", l.rx), u.attr("ry", l.ry), a != null) {
    var g = 20;
    for (let I in a) {
      var m = r.append("a"), _ = ee.sanitizeUrl(a[I]);
      m.attr("xlink:href", _), m.attr("target", "_blank"), P0(s)(
        I,
        m,
        l.x + 10,
        l.height + g,
        T,
        20,
        { class: "actor" },
        s
      ), g += 30;
    }
  }
  return u.attr("height", g), { height: l.height + g, width: T };
}, h0 = function(t) {
  return "var pu = document.getElementById('" + t + "'); if (pu != null) { pu.style.display = pu.style.display == 'block' ? 'none' : 'block'; }";
}, At = function(t, e, o = null) {
  return F(this, null, function* () {
    let s = t.append("foreignObject");
    const i = yield se(e.text, Yt()), c = s.append("xhtml:div").attr("style", "width: fit-content;").attr("xmlns", "http://www.w3.org/1999/xhtml").html(i).node().getBoundingClientRect();
    if (s.attr("height", Math.round(c.height)).attr("width", Math.round(c.width)), e.class === "noteText") {
      const l = t.node().firstChild;
      l.setAttribute("height", c.height + 2 * e.textMargin);
      const p = l.getBBox();
      s.attr("x", Math.round(p.x + p.width / 2 - c.width / 2)).attr("y", Math.round(p.y + p.height / 2 - c.height / 2));
    } else if (o) {
      let { startx: l, stopx: p, starty: r } = o;
      if (l > p) {
        const x = l;
        l = p, p = x;
      }
      s.attr("x", Math.round(l + Math.abs(l - p) / 2 - c.width / 2)), e.class === "loopText" ? s.attr("y", Math.round(r)) : s.attr("y", Math.round(r - c.height));
    }
    return [s];
  });
}, Et = function(t, e) {
  let o = 0, s = 0;
  const i = e.text.split(v.lineBreakRegex), [a, c] = re(e.fontSize);
  let l = [], p = 0, r = () => e.y;
  if (e.valign !== void 0 && e.textMargin !== void 0 && e.textMargin > 0)
    switch (e.valign) {
      case "top":
      case "start":
        r = () => Math.round(e.y + e.textMargin);
        break;
      case "middle":
      case "center":
        r = () => Math.round(e.y + (o + s + e.textMargin) / 2);
        break;
      case "bottom":
      case "end":
        r = () => Math.round(
          e.y + (o + s + 2 * e.textMargin) - e.textMargin
        );
        break;
    }
  if (e.anchor !== void 0 && e.textMargin !== void 0 && e.width !== void 0)
    switch (e.anchor) {
      case "left":
      case "start":
        e.x = Math.round(e.x + e.textMargin), e.anchor = "start", e.dominantBaseline = "middle", e.alignmentBaseline = "middle";
        break;
      case "middle":
      case "center":
        e.x = Math.round(e.x + e.width / 2), e.anchor = "middle", e.dominantBaseline = "middle", e.alignmentBaseline = "middle";
        break;
      case "right":
      case "end":
        e.x = Math.round(e.x + e.width - e.textMargin), e.anchor = "end", e.dominantBaseline = "middle", e.alignmentBaseline = "middle";
        break;
    }
  for (let [x, T] of i.entries()) {
    e.textMargin !== void 0 && e.textMargin === 0 && a !== void 0 && (p = x * a);
    const u = t.append("text");
    u.attr("x", e.x), u.attr("y", r()), e.anchor !== void 0 && u.attr("text-anchor", e.anchor).attr("dominant-baseline", e.dominantBaseline).attr("alignment-baseline", e.alignmentBaseline), e.fontFamily !== void 0 && u.style("font-family", e.fontFamily), c !== void 0 && u.style("font-size", c), e.fontWeight !== void 0 && u.style("font-weight", e.fontWeight), e.fill !== void 0 && u.attr("fill", e.fill), e.class !== void 0 && u.attr("class", e.class), e.dy !== void 0 ? u.attr("dy", e.dy) : p !== 0 && u.attr("dy", p);
    const g = T || Se;
    if (e.tspan) {
      const m = u.append("tspan");
      m.attr("x", e.x), e.fill !== void 0 && m.attr("fill", e.fill), m.text(g);
    } else
      u.text(g);
    e.valign !== void 0 && e.textMargin !== void 0 && e.textMargin > 0 && (s += (u._groups || u)[0][0].getBBox().height, o = s), l.push(u);
  }
  return l;
}, pe = function(t, e) {
  function o(i, a, c, l, p) {
    return i + "," + a + " " + (i + c) + "," + a + " " + (i + c) + "," + (a + l - p) + " " + (i + c - p * 1.2) + "," + (a + l) + " " + i + "," + (a + l);
  }
  const s = t.append("polygon");
  return s.attr("points", o(e.x, e.y, e.width, e.height, 7)), s.attr("class", "labelBox"), e.y = e.y + e.height / 2, Et(t, e), s;
};
let nt = -1;
const ue = (t, e, o, s) => {
  t.select && o.forEach((i) => {
    const a = e[i], c = t.select("#actor" + a.actorCnt);
    !s.mirrorActors && a.stopy ? c.attr("y2", a.stopy + a.height / 2) : s.mirrorActors && c.attr("y2", a.stopy);
  });
}, d0 = function(t, e, o, s) {
  return F(this, null, function* () {
    const i = s ? e.stopy : e.starty, a = e.x + e.width / 2, c = i + 5, l = t.append("g").lower();
    var p = l;
    s || (nt++, Object.keys(e.links || {}).length && !o.forceMenus && p.attr("onclick", h0(`actor${nt}_popup`)).attr("cursor", "pointer"), p.append("line").attr("id", "actor" + nt).attr("x1", a).attr("y1", c).attr("x2", a).attr("y2", 2e3).attr("class", "actor-line").attr("class", "200").attr("stroke-width", "0.5px").attr("stroke", "#999"), p = l.append("g"), e.actorCnt = nt, e.links != null && p.attr("id", "root-" + nt));
    const r = St();
    var x = "actor";
    e.properties != null && e.properties.class ? x = e.properties.class : r.fill = "#eaeaea", s ? x += ` ${de}` : x += ` ${he}`, r.x = e.x, r.y = i, r.width = e.width, r.height = e.height, r.class = x, r.rx = 3, r.ry = 3, r.name = e.name;
    const T = Kt(p, r);
    if (e.rectData = r, e.properties != null && e.properties.icon) {
      const g = e.properties.icon.trim();
      g.charAt(0) === "@" ? Ce(p, r.x + r.width - 20, r.y + 10, g.substr(1)) : De(p, r.x + r.width - 20, r.y + 10, g);
    }
    yield Gt(o, ot(e.description))(
      e.description,
      p,
      r.x,
      r.y,
      r.width,
      r.height,
      { class: "actor" },
      o
    );
    let u = e.height;
    if (T.node) {
      const g = T.node().getBBox();
      e.height = g.height, u = g.height;
    }
    return u;
  });
}, p0 = function(t, e, o, s) {
  return F(this, null, function* () {
    const i = s ? e.stopy : e.starty, a = e.x + e.width / 2, c = i + 80;
    t.lower(), s || (nt++, t.append("line").attr("id", "actor" + nt).attr("x1", a).attr("y1", c).attr("x2", a).attr("y2", 2e3).attr("class", "actor-line").attr("class", "200").attr("stroke-width", "0.5px").attr("stroke", "#999"), e.actorCnt = nt);
    const l = t.append("g");
    let p = "actor-man";
    s ? p += ` ${de}` : p += ` ${he}`, l.attr("class", p), l.attr("name", e.name);
    const r = St();
    r.x = e.x, r.y = i, r.fill = "#eaeaea", r.width = e.width, r.height = e.height, r.class = "actor", r.rx = 3, r.ry = 3, l.append("line").attr("id", "actor-man-torso" + nt).attr("x1", a).attr("y1", i + 25).attr("x2", a).attr("y2", i + 45), l.append("line").attr("id", "actor-man-arms" + nt).attr("x1", a - gt / 2).attr("y1", i + 33).attr("x2", a + gt / 2).attr("y2", i + 33), l.append("line").attr("x1", a - gt / 2).attr("y1", i + 60).attr("x2", a).attr("y2", i + 45), l.append("line").attr("x1", a).attr("y1", i + 45).attr("x2", a + gt / 2 - 2).attr("y2", i + 60);
    const x = l.append("circle");
    x.attr("cx", e.x + e.width / 2), x.attr("cy", i + 10), x.attr("r", 15), x.attr("width", e.width), x.attr("height", e.height);
    const T = l.node().getBBox();
    return e.height = T.height, yield Gt(o, ot(e.description))(
      e.description,
      l,
      r.x,
      r.y + 35,
      r.width,
      r.height,
      { class: "actor" },
      o
    ), e.height;
  });
}, u0 = function(t, e, o, s) {
  return F(this, null, function* () {
    switch (e.type) {
      case "actor":
        return yield p0(t, e, o, s);
      case "participant":
        return yield d0(t, e, o, s);
    }
  });
}, f0 = function(t, e, o) {
  return F(this, null, function* () {
    const i = t.append("g");
    fe(i, e), e.name && (yield Gt(o)(
      e.name,
      i,
      e.x,
      e.y + (e.textMaxHeight || 0) / 2,
      e.width,
      0,
      { class: "text" },
      o
    )), i.lower();
  });
}, g0 = function(t) {
  return t.append("g");
}, x0 = function(t, e, o, s, i) {
  const a = St(), c = e.anchored;
  a.x = e.startx, a.y = e.starty, a.class = "activation" + i % 3, a.width = e.stopx - e.startx, a.height = o - e.starty, Kt(c, a);
}, y0 = function(t, e, o, s) {
  return F(this, null, function* () {
    const {
      boxMargin: i,
      boxTextMargin: a,
      labelBoxHeight: c,
      labelBoxWidth: l,
      messageFontFamily: p,
      messageFontSize: r,
      messageFontWeight: x
    } = s, T = t.append("g"), u = function(_, I, V, S) {
      return T.append("line").attr("x1", _).attr("y1", I).attr("x2", V).attr("y2", S).attr("class", "loopLine");
    };
    u(e.startx, e.starty, e.stopx, e.starty), u(e.stopx, e.starty, e.stopx, e.stopy), u(e.startx, e.stopy, e.stopx, e.stopy), u(e.startx, e.starty, e.startx, e.stopy), e.sections !== void 0 && e.sections.forEach(function(_) {
      u(e.startx, _.y, e.stopx, _.y).style(
        "stroke-dasharray",
        "3, 3"
      );
    });
    let g = Ht();
    g.text = o, g.x = e.startx, g.y = e.starty, g.fontFamily = p, g.fontSize = r, g.fontWeight = x, g.anchor = "middle", g.valign = "middle", g.tspan = !1, g.width = l || 50, g.height = c || 20, g.textMargin = a, g.class = "labelText", pe(T, g), g = ge(), g.text = e.title, g.x = e.startx + l / 2 + (e.stopx - e.startx) / 2, g.y = e.starty + i + a, g.anchor = "middle", g.valign = "middle", g.textMargin = a, g.class = "loopText", g.fontFamily = p, g.fontSize = r, g.fontWeight = x, g.wrap = !0;
    let m = ot(g.text) ? yield At(T, g, e) : Et(T, g);
    if (e.sectionTitles !== void 0) {
      for (const [_, I] of Object.entries(e.sectionTitles))
        if (I.message) {
          g.text = I.message, g.x = e.startx + (e.stopx - e.startx) / 2, g.y = e.sections[_].y + i + a, g.class = "loopText", g.anchor = "middle", g.valign = "middle", g.tspan = !1, g.fontFamily = p, g.fontSize = r, g.fontWeight = x, g.wrap = e.wrap, ot(g.text) ? (e.starty = e.sections[_].y, yield At(T, g, e)) : Et(T, g);
          let V = Math.round(
            m.map((S) => (S._groups || S)[0][0].getBBox().height).reduce((S, O) => S + O)
          );
          e.sections[_].height += V - (i + a);
        }
    }
    return e.height = Math.round(e.stopy - e.starty), T;
  });
}, fe = function(t, e) {
  Re(t, e);
}, T0 = function(t) {
  t.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z"
  );
}, b0 = function(t) {
  t.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z"
  );
}, E0 = function(t) {
  t.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
  );
}, m0 = function(t) {
  t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 7.9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");
}, w0 = function(t) {
  t.append("defs").append("marker").attr("id", "filled-head").attr("refX", 15.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, v0 = function(t) {
  t.append("defs").append("marker").attr("id", "sequencenumber").attr("refX", 15).attr("refY", 15).attr("markerWidth", 60).attr("markerHeight", 40).attr("orient", "auto").append("circle").attr("cx", 15).attr("cy", 15).attr("r", 6);
}, _0 = function(t) {
  t.append("defs").append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 4).attr("refY", 4.5).append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1pt").attr("d", "M 1,2 L 6,7 M 6,2 L 1,7");
}, ge = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: void 0,
    style: "#666",
    width: void 0,
    height: void 0,
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: !0,
    valign: void 0
  };
}, k0 = function() {
  return {
    x: 0,
    y: 0,
    fill: "#EDF2AE",
    stroke: "#666",
    width: 100,
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0
  };
}, Gt = function() {
  function t(a, c, l, p, r, x, T) {
    const u = c.append("text").attr("x", l + r / 2).attr("y", p + x / 2 + 5).style("text-anchor", "middle").text(a);
    i(u, T);
  }
  function e(a, c, l, p, r, x, T, u) {
    const { actorFontSize: g, actorFontFamily: m, actorFontWeight: _ } = u, [I, V] = re(g), S = a.split(v.lineBreakRegex);
    for (let O = 0; O < S.length; O++) {
      const R = O * I - I * (S.length - 1) / 2, z = c.append("text").attr("x", l + r / 2).attr("y", p).style("text-anchor", "middle").style("font-size", V).style("font-weight", _).style("font-family", m);
      z.append("tspan").attr("x", l + r / 2).attr("dy", R).text(S[O]), z.attr("y", p + x / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), i(z, T);
    }
  }
  function o(a, c, l, p, r, x, T, u) {
    const g = c.append("switch"), _ = g.append("foreignObject").attr("x", l).attr("y", p).attr("width", r).attr("height", x).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    _.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(a), e(a, g, l, p, r, x, T, u), i(_, T);
  }
  function s(a, c, l, p, r, x, T, u) {
    return F(this, null, function* () {
      const g = yield vt(a, Yt()), m = c.append("switch"), I = m.append("foreignObject").attr("x", l + r / 2 - g.width / 2).attr("y", p + x / 2 - g.height / 2).attr("width", g.width).attr("height", g.height).append("xhtml:div").style("height", "100%").style("width", "100%");
      I.append("div").style("text-align", "center").style("vertical-align", "middle").html(yield se(a, Yt())), e(a, m, l, p, r, x, T, u), i(I, T);
    });
  }
  function i(a, c) {
    for (const l in c)
      c.hasOwnProperty(l) && a.attr(l, c[l]);
  }
  return function(a, c = !1) {
    return c ? s : a.textPlacement === "fo" ? o : a.textPlacement === "old" ? t : e;
  };
}(), P0 = function() {
  function t(i, a, c, l, p, r, x) {
    const T = a.append("text").attr("x", c).attr("y", l).style("text-anchor", "start").text(i);
    s(T, x);
  }
  function e(i, a, c, l, p, r, x, T) {
    const { actorFontSize: u, actorFontFamily: g, actorFontWeight: m } = T, _ = i.split(v.lineBreakRegex);
    for (let I = 0; I < _.length; I++) {
      const V = I * u - u * (_.length - 1) / 2, S = a.append("text").attr("x", c).attr("y", l).style("text-anchor", "start").style("font-size", u).style("font-weight", m).style("font-family", g);
      S.append("tspan").attr("x", c).attr("dy", V).text(_[I]), S.attr("y", l + r / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), s(S, x);
    }
  }
  function o(i, a, c, l, p, r, x, T) {
    const u = a.append("switch"), m = u.append("foreignObject").attr("x", c).attr("y", l).attr("width", p).attr("height", r).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    m.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(i), e(i, u, c, l, p, r, x, T), s(m, x);
  }
  function s(i, a) {
    for (const c in a)
      a.hasOwnProperty(c) && i.attr(c, a[c]);
  }
  return function(i) {
    return i.textPlacement === "fo" ? o : i.textPlacement === "old" ? t : e;
  };
}(), D = {
  drawRect: Kt,
  drawText: Et,
  drawLabel: pe,
  drawActor: u0,
  drawBox: f0,
  drawPopup: l0,
  anchorElement: g0,
  drawActivation: x0,
  drawLoop: y0,
  drawBackgroundRect: fe,
  insertArrowHead: m0,
  insertArrowFilledHead: w0,
  insertSequenceNumber: v0,
  insertArrowCrossHead: _0,
  insertDatabaseIcon: T0,
  insertComputerIcon: b0,
  insertClockIcon: E0,
  getTextObj: ge,
  getNoteRect: k0,
  fixLifeLineHeights: ue,
  sanitizeUrl: ee.sanitizeUrl
};
let n = {};
const f = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  activations: [],
  models: {
    getHeight: function() {
      return Math.max.apply(
        null,
        this.actors.length === 0 ? [0] : this.actors.map((t) => t.height || 0)
      ) + (this.loops.length === 0 ? 0 : this.loops.map((t) => t.height || 0).reduce((t, e) => t + e)) + (this.messages.length === 0 ? 0 : this.messages.map((t) => t.height || 0).reduce((t, e) => t + e)) + (this.notes.length === 0 ? 0 : this.notes.map((t) => t.height || 0).reduce((t, e) => t + e));
    },
    clear: function() {
      this.actors = [], this.boxes = [], this.loops = [], this.messages = [], this.notes = [];
    },
    addBox: function(t) {
      this.boxes.push(t);
    },
    addActor: function(t) {
      this.actors.push(t);
    },
    addLoop: function(t) {
      this.loops.push(t);
    },
    addMessage: function(t) {
      this.messages.push(t);
    },
    addNote: function(t) {
      this.notes.push(t);
    },
    lastActor: function() {
      return this.actors[this.actors.length - 1];
    },
    lastLoop: function() {
      return this.loops[this.loops.length - 1];
    },
    lastMessage: function() {
      return this.messages[this.messages.length - 1];
    },
    lastNote: function() {
      return this.notes[this.notes.length - 1];
    },
    actors: [],
    boxes: [],
    loops: [],
    messages: [],
    notes: []
  },
  init: function() {
    this.sequenceItems = [], this.activations = [], this.models.clear(), this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    }, this.verticalPos = 0, ye(rt());
  },
  updateVal: function(t, e, o, s) {
    t[e] === void 0 ? t[e] = o : t[e] = s(o, t[e]);
  },
  updateBounds: function(t, e, o, s) {
    const i = this;
    let a = 0;
    function c(l) {
      return function(r) {
        a++;
        const x = i.sequenceItems.length - a + 1;
        i.updateVal(r, "starty", e - x * n.boxMargin, Math.min), i.updateVal(r, "stopy", s + x * n.boxMargin, Math.max), i.updateVal(f.data, "startx", t - x * n.boxMargin, Math.min), i.updateVal(f.data, "stopx", o + x * n.boxMargin, Math.max), l !== "activation" && (i.updateVal(r, "startx", t - x * n.boxMargin, Math.min), i.updateVal(r, "stopx", o + x * n.boxMargin, Math.max), i.updateVal(f.data, "starty", e - x * n.boxMargin, Math.min), i.updateVal(f.data, "stopy", s + x * n.boxMargin, Math.max));
      };
    }
    this.sequenceItems.forEach(c()), this.activations.forEach(c("activation"));
  },
  insert: function(t, e, o, s) {
    const i = v.getMin(t, o), a = v.getMax(t, o), c = v.getMin(e, s), l = v.getMax(e, s);
    this.updateVal(f.data, "startx", i, Math.min), this.updateVal(f.data, "starty", c, Math.min), this.updateVal(f.data, "stopx", a, Math.max), this.updateVal(f.data, "stopy", l, Math.max), this.updateBounds(i, c, a, l);
  },
  newActivation: function(t, e, o) {
    const s = o[t.from.actor], i = Mt(t.from.actor).length || 0, a = s.x + s.width / 2 + (i - 1) * n.activationWidth / 2;
    this.activations.push({
      startx: a,
      starty: this.verticalPos + 2,
      stopx: a + n.activationWidth,
      stopy: void 0,
      actor: t.from.actor,
      anchored: D.anchorElement(e)
    });
  },
  endActivation: function(t) {
    const e = this.activations.map(function(o) {
      return o.actor;
    }).lastIndexOf(t.from.actor);
    return this.activations.splice(e, 1)[0];
  },
  createLoop: function(t = { message: void 0, wrap: !1, width: void 0 }, e) {
    return {
      startx: void 0,
      starty: this.verticalPos,
      stopx: void 0,
      stopy: void 0,
      title: t.message,
      wrap: t.wrap,
      width: t.width,
      height: 0,
      fill: e
    };
  },
  newLoop: function(t = { message: void 0, wrap: !1, width: void 0 }, e) {
    this.sequenceItems.push(this.createLoop(t, e));
  },
  endLoop: function() {
    return this.sequenceItems.pop();
  },
  isLoopOverlap: function() {
    return this.sequenceItems.length ? this.sequenceItems[this.sequenceItems.length - 1].overlap : !1;
  },
  addSectionToLoop: function(t) {
    const e = this.sequenceItems.pop();
    e.sections = e.sections || [], e.sectionTitles = e.sectionTitles || [], e.sections.push({ y: f.getVerticalPos(), height: 0 }), e.sectionTitles.push(t), this.sequenceItems.push(e);
  },
  saveVerticalPos: function() {
    this.isLoopOverlap() && (this.savedVerticalPos = this.verticalPos);
  },
  resetVerticalPos: function() {
    this.isLoopOverlap() && (this.verticalPos = this.savedVerticalPos);
  },
  bumpVerticalPos: function(t) {
    this.verticalPos = this.verticalPos + t, this.data.stopy = v.getMax(this.data.stopy, this.verticalPos);
  },
  getVerticalPos: function() {
    return this.verticalPos;
  },
  getBounds: function() {
    return { bounds: this.data, models: this.models };
  }
}, L0 = function(t, e) {
  return F(this, null, function* () {
    f.bumpVerticalPos(n.boxMargin), e.height = n.boxMargin, e.starty = f.getVerticalPos();
    const o = St();
    o.x = e.startx, o.y = e.starty, o.width = e.width || n.width, o.class = "note";
    const s = t.append("g"), i = D.drawRect(s, o), a = Ht();
    a.x = e.startx, a.y = e.starty, a.width = o.width, a.dy = "1em", a.text = e.message, a.class = "noteText", a.fontFamily = n.noteFontFamily, a.fontSize = n.noteFontSize, a.fontWeight = n.noteFontWeight, a.anchor = n.noteAlign, a.textMargin = n.noteMargin, a.valign = "center";
    const c = ot(a.text) ? yield At(s, a) : Et(s, a), l = Math.round(
      c.map((p) => (p._groups || p)[0][0].getBBox().height).reduce((p, r) => p + r)
    );
    i.attr("height", l + 2 * n.noteMargin), e.height += l + 2 * n.noteMargin, f.bumpVerticalPos(l + 2 * n.noteMargin), e.stopy = e.starty + l + 2 * n.noteMargin, e.stopx = e.startx + o.width, f.insert(e.startx, e.starty, e.stopx, e.stopy), f.models.addNote(e);
  });
}, yt = (t) => ({
  fontFamily: t.messageFontFamily,
  fontSize: t.messageFontSize,
  fontWeight: t.messageFontWeight
}), bt = (t) => ({
  fontFamily: t.noteFontFamily,
  fontSize: t.noteFontSize,
  fontWeight: t.noteFontWeight
}), qt = (t) => ({
  fontFamily: t.actorFontFamily,
  fontSize: t.actorFontSize,
  fontWeight: t.actorFontWeight
});
function I0(t, e) {
  return F(this, null, function* () {
    f.bumpVerticalPos(10);
    const { startx: o, stopx: s, message: i } = e, a = v.splitBreaks(i).length, c = ot(i), l = c ? yield vt(i, rt()) : B.calculateTextDimensions(i, yt(n));
    if (!c) {
      const T = l.height / a;
      e.height += T, f.bumpVerticalPos(T);
    }
    let p, r = l.height - 10;
    const x = l.width;
    if (o === s) {
      p = f.getVerticalPos() + r, n.rightAngles || (r += n.boxMargin, p = f.getVerticalPos() + r), r += 30;
      const T = v.getMax(x / 2, n.width / 2);
      f.insert(
        o - T,
        f.getVerticalPos() - 10 + r,
        s + T,
        f.getVerticalPos() + 30 + r
      );
    } else
      r += n.boxMargin, p = f.getVerticalPos() + r, f.insert(o, p - 10, s, p);
    return f.bumpVerticalPos(r), e.height += r, e.stopy = e.starty + e.height, f.insert(e.fromBounds, e.starty, e.toBounds, e.stopy), p;
  });
}
const A0 = function(t, e, o, s) {
  return F(this, null, function* () {
    const { startx: i, stopx: a, starty: c, message: l, type: p, sequenceIndex: r, sequenceVisible: x } = e, T = B.calculateTextDimensions(l, yt(n)), u = Ht();
    u.x = i, u.y = c + 10, u.width = a - i, u.class = "messageText", u.dy = "1em", u.text = l, u.fontFamily = n.messageFontFamily, u.fontSize = n.messageFontSize, u.fontWeight = n.messageFontWeight, u.anchor = n.messageAlign, u.valign = "center", u.textMargin = n.wrapPadding, u.tspan = !1, ot(u.text) ? yield At(t, u, { startx: i, stopx: a, starty: o }) : Et(t, u);
    const g = T.width;
    let m;
    i === a ? n.rightAngles ? m = t.append("path").attr(
      "d",
      `M  ${i},${o} H ${i + v.getMax(n.width / 2, g / 2)} V ${o + 25} H ${i}`
    ) : m = t.append("path").attr(
      "d",
      "M " + i + "," + o + " C " + (i + 60) + "," + (o - 10) + " " + (i + 60) + "," + (o + 30) + " " + i + "," + (o + 20)
    ) : (m = t.append("line"), m.attr("x1", i), m.attr("y1", o), m.attr("x2", a), m.attr("y2", o)), p === s.db.LINETYPE.DOTTED || p === s.db.LINETYPE.DOTTED_CROSS || p === s.db.LINETYPE.DOTTED_POINT || p === s.db.LINETYPE.DOTTED_OPEN ? (m.style("stroke-dasharray", "3, 3"), m.attr("class", "messageLine1")) : m.attr("class", "messageLine0");
    let _ = "";
    n.arrowMarkerAbsolute && (_ = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, _ = _.replace(/\(/g, "\\("), _ = _.replace(/\)/g, "\\)")), m.attr("stroke-width", 2), m.attr("stroke", "none"), m.style("fill", "none"), (p === s.db.LINETYPE.SOLID || p === s.db.LINETYPE.DOTTED) && m.attr("marker-end", "url(" + _ + "#arrowhead)"), (p === s.db.LINETYPE.SOLID_POINT || p === s.db.LINETYPE.DOTTED_POINT) && m.attr("marker-end", "url(" + _ + "#filled-head)"), (p === s.db.LINETYPE.SOLID_CROSS || p === s.db.LINETYPE.DOTTED_CROSS) && m.attr("marker-end", "url(" + _ + "#crosshead)"), (x || n.showSequenceNumbers) && (m.attr("marker-start", "url(" + _ + "#sequencenumber)"), t.append("text").attr("x", i).attr("y", o + 4).attr("font-family", "sans-serif").attr("font-size", "12px").attr("text-anchor", "middle").attr("class", "sequenceNumber").text(r));
  });
}, N0 = function(t, e, o, s, i, a, c) {
  return F(this, null, function* () {
    let l = 0, p = 0, r, x = 0;
    for (const T of s) {
      const u = e[T], g = u.box;
      r && r != g && (c || f.models.addBox(r), p += n.boxMargin + r.margin), g && g != r && (c || (g.x = l + p, g.y = i), p += g.margin), u.width = u.width || n.width, u.height = v.getMax(u.height || n.height, n.height), u.margin = u.margin || n.actorMargin, x = v.getMax(x, u.height), o[u.name] && (p += u.width / 2), u.x = l + p, u.starty = f.getVerticalPos(), f.insert(u.x, i, u.x + u.width, u.height), l += u.width + p, u.box && (u.box.width = l + g.margin - u.box.x), p = u.margin, r = u.box, f.models.addActor(u);
    }
    r && !c && f.models.addBox(r), f.bumpVerticalPos(x);
  });
}, zt = function(t, e, o, s) {
  return F(this, null, function* () {
    if (s) {
      let i = 0;
      f.bumpVerticalPos(n.boxMargin * 2);
      for (const a of o) {
        const c = e[a];
        c.stopy || (c.stopy = f.getVerticalPos());
        const l = yield D.drawActor(t, c, n, !0);
        i = v.getMax(i, l);
      }
      f.bumpVerticalPos(i + n.boxMargin);
    } else
      for (const i of o) {
        const a = e[i];
        yield D.drawActor(t, a, n, !1);
      }
  });
}, xe = function(t, e, o, s) {
  let i = 0, a = 0;
  for (const c of o) {
    const l = e[c], p = C0(l), r = D.drawPopup(
      t,
      l,
      p,
      n,
      n.forceMenus,
      s
    );
    r.height > i && (i = r.height), r.width + l.x > a && (a = r.width + l.x);
  }
  return { maxHeight: i, maxWidth: a };
}, ye = function(t) {
  Ae(n, t), t.fontFamily && (n.actorFontFamily = n.noteFontFamily = n.messageFontFamily = t.fontFamily), t.fontSize && (n.actorFontSize = n.noteFontSize = n.messageFontSize = t.fontSize), t.fontWeight && (n.actorFontWeight = n.noteFontWeight = n.messageFontWeight = t.fontWeight);
}, Mt = function(t) {
  return f.activations.filter(function(e) {
    return e.actor === t;
  });
}, $t = function(t, e) {
  const o = e[t], s = Mt(t), i = s.reduce(function(c, l) {
    return v.getMin(c, l.startx);
  }, o.x + o.width / 2 - 1), a = s.reduce(function(c, l) {
    return v.getMax(c, l.stopx);
  }, o.x + o.width / 2 + 1);
  return [i, a];
};
function at(t, e, o, s, i) {
  f.bumpVerticalPos(o);
  let a = s;
  if (e.id && e.message && t[e.id]) {
    const c = t[e.id].width, l = yt(n);
    e.message = B.wrapLabel(`[${e.message}]`, c - 2 * n.wrapPadding, l), e.width = c, e.wrap = !0;
    const p = B.calculateTextDimensions(e.message, l), r = v.getMax(p.height, n.labelBoxHeight);
    a = s + r, J.debug(`${r} - ${e.message}`);
  }
  i(e), f.bumpVerticalPos(a);
}
function S0(t, e, o, s, i, a, c) {
  function l(r, x) {
    r.x < i[t.from].x ? (f.insert(
      e.stopx - x,
      e.starty,
      e.startx,
      e.stopy + r.height / 2 + n.noteMargin
    ), e.stopx = e.stopx + x) : (f.insert(
      e.startx,
      e.starty,
      e.stopx + x,
      e.stopy + r.height / 2 + n.noteMargin
    ), e.stopx = e.stopx - x);
  }
  function p(r, x) {
    r.x < i[t.to].x ? (f.insert(
      e.startx - x,
      e.starty,
      e.stopx,
      e.stopy + r.height / 2 + n.noteMargin
    ), e.startx = e.startx + x) : (f.insert(
      e.stopx,
      e.starty,
      e.startx + x,
      e.stopy + r.height / 2 + n.noteMargin
    ), e.startx = e.startx - x);
  }
  if (a[t.to] == s) {
    const r = i[t.to], x = r.type == "actor" ? gt / 2 + 3 : r.width / 2 + 3;
    l(r, x), r.starty = o - r.height / 2, f.bumpVerticalPos(r.height / 2);
  } else if (c[t.from] == s) {
    const r = i[t.from];
    if (n.mirrorActors) {
      const x = r.type == "actor" ? gt / 2 : r.width / 2;
      p(r, x);
    }
    r.stopy = o - r.height / 2, f.bumpVerticalPos(r.height / 2);
  } else if (c[t.to] == s) {
    const r = i[t.to];
    if (n.mirrorActors) {
      const x = r.type == "actor" ? gt / 2 + 3 : r.width / 2 + 3;
      l(r, x);
    }
    r.stopy = o - r.height / 2, f.bumpVerticalPos(r.height / 2);
  }
}
const M0 = function(t, e, o, s) {
  return F(this, null, function* () {
    const { securityLevel: i, sequence: a } = rt();
    n = a;
    let c;
    i === "sandbox" && (c = It("#i" + e));
    const l = i === "sandbox" ? It(c.nodes()[0].contentDocument.body) : It("body"), p = i === "sandbox" ? c.nodes()[0].contentDocument : document;
    f.init(), J.debug(s.db);
    const r = i === "sandbox" ? l.select(`[id="${e}"]`) : It(`[id="${e}"]`), x = s.db.getActors(), T = s.db.getCreatedActors(), u = s.db.getDestroyedActors(), g = s.db.getBoxes();
    let m = s.db.getActorKeys();
    const _ = s.db.getMessages(), I = s.db.getDiagramTitle(), V = s.db.hasAtLeastOneBox(), S = s.db.hasAtLeastOneBoxWithTitle(), O = yield R0(x, _, s);
    if (n.height = yield D0(x, O, g), D.insertComputerIcon(r), D.insertDatabaseIcon(r), D.insertClockIcon(r), V && (f.bumpVerticalPos(n.boxMargin), S && f.bumpVerticalPos(g[0].textMaxHeight)), n.hideUnusedParticipants === !0) {
      const y = /* @__PURE__ */ new Set();
      _.forEach((P) => {
        y.add(P.from), y.add(P.to);
      }), m = m.filter((P) => y.has(P));
    }
    yield N0(r, x, T, m, 0, _, !1);
    const R = yield B0(_, x, O, s);
    D.insertArrowHead(r), D.insertArrowCrossHead(r), D.insertArrowFilledHead(r), D.insertSequenceNumber(r);
    function z(y, P) {
      const $ = f.endActivation(y);
      $.starty + 18 > P && ($.starty = P - 6, P += 12), D.drawActivation(
        r,
        $,
        P,
        n,
        Mt(y.from.actor).length
      ), f.insert($.startx, P - 10, $.stopx, P);
    }
    let H = 1, Z = 1;
    const tt = [], U = [];
    let K = 0;
    for (const y of _) {
      let P, $, it;
      switch (y.type) {
        case s.db.LINETYPE.NOTE:
          f.resetVerticalPos(), $ = y.noteModel, yield L0(r, $);
          break;
        case s.db.LINETYPE.ACTIVE_START:
          f.newActivation(y, r, x);
          break;
        case s.db.LINETYPE.ACTIVE_END:
          z(y, f.getVerticalPos());
          break;
        case s.db.LINETYPE.LOOP_START:
          at(
            R,
            y,
            n.boxMargin,
            n.boxMargin + n.boxTextMargin,
            (A) => f.newLoop(A)
          );
          break;
        case s.db.LINETYPE.LOOP_END:
          P = f.endLoop(), yield D.drawLoop(r, P, "loop", n), f.bumpVerticalPos(P.stopy - f.getVerticalPos()), f.models.addLoop(P);
          break;
        case s.db.LINETYPE.RECT_START:
          at(
            R,
            y,
            n.boxMargin,
            n.boxMargin,
            (A) => f.newLoop(void 0, A.message)
          );
          break;
        case s.db.LINETYPE.RECT_END:
          P = f.endLoop(), U.push(P), f.models.addLoop(P), f.bumpVerticalPos(P.stopy - f.getVerticalPos());
          break;
        case s.db.LINETYPE.OPT_START:
          at(
            R,
            y,
            n.boxMargin,
            n.boxMargin + n.boxTextMargin,
            (A) => f.newLoop(A)
          );
          break;
        case s.db.LINETYPE.OPT_END:
          P = f.endLoop(), yield D.drawLoop(r, P, "opt", n), f.bumpVerticalPos(P.stopy - f.getVerticalPos()), f.models.addLoop(P);
          break;
        case s.db.LINETYPE.ALT_START:
          at(
            R,
            y,
            n.boxMargin,
            n.boxMargin + n.boxTextMargin,
            (A) => f.newLoop(A)
          );
          break;
        case s.db.LINETYPE.ALT_ELSE:
          at(
            R,
            y,
            n.boxMargin + n.boxTextMargin,
            n.boxMargin,
            (A) => f.addSectionToLoop(A)
          );
          break;
        case s.db.LINETYPE.ALT_END:
          P = f.endLoop(), yield D.drawLoop(r, P, "alt", n), f.bumpVerticalPos(P.stopy - f.getVerticalPos()), f.models.addLoop(P);
          break;
        case s.db.LINETYPE.PAR_START:
        case s.db.LINETYPE.PAR_OVER_START:
          at(
            R,
            y,
            n.boxMargin,
            n.boxMargin + n.boxTextMargin,
            (A) => f.newLoop(A)
          ), f.saveVerticalPos();
          break;
        case s.db.LINETYPE.PAR_AND:
          at(
            R,
            y,
            n.boxMargin + n.boxTextMargin,
            n.boxMargin,
            (A) => f.addSectionToLoop(A)
          );
          break;
        case s.db.LINETYPE.PAR_END:
          P = f.endLoop(), yield D.drawLoop(r, P, "par", n), f.bumpVerticalPos(P.stopy - f.getVerticalPos()), f.models.addLoop(P);
          break;
        case s.db.LINETYPE.AUTONUMBER:
          H = y.message.start || H, Z = y.message.step || Z, y.message.visible ? s.db.enableSequenceNumbers() : s.db.disableSequenceNumbers();
          break;
        case s.db.LINETYPE.CRITICAL_START:
          at(
            R,
            y,
            n.boxMargin,
            n.boxMargin + n.boxTextMargin,
            (A) => f.newLoop(A)
          );
          break;
        case s.db.LINETYPE.CRITICAL_OPTION:
          at(
            R,
            y,
            n.boxMargin + n.boxTextMargin,
            n.boxMargin,
            (A) => f.addSectionToLoop(A)
          );
          break;
        case s.db.LINETYPE.CRITICAL_END:
          P = f.endLoop(), yield D.drawLoop(r, P, "critical", n), f.bumpVerticalPos(P.stopy - f.getVerticalPos()), f.models.addLoop(P);
          break;
        case s.db.LINETYPE.BREAK_START:
          at(
            R,
            y,
            n.boxMargin,
            n.boxMargin + n.boxTextMargin,
            (A) => f.newLoop(A)
          );
          break;
        case s.db.LINETYPE.BREAK_END:
          P = f.endLoop(), yield D.drawLoop(r, P, "break", n), f.bumpVerticalPos(P.stopy - f.getVerticalPos()), f.models.addLoop(P);
          break;
        default:
          try {
            it = y.msgModel, it.starty = f.getVerticalPos(), it.sequenceIndex = H, it.sequenceVisible = s.db.showSequenceNumbers();
            const A = yield I0(r, it);
            S0(
              y,
              it,
              A,
              K,
              x,
              T,
              u
            ), tt.push({ messageModel: it, lineStartY: A }), f.models.addMessage(it);
          } catch (A) {
            J.error("error while drawing message", A);
          }
      }
      [
        s.db.LINETYPE.SOLID_OPEN,
        s.db.LINETYPE.DOTTED_OPEN,
        s.db.LINETYPE.SOLID,
        s.db.LINETYPE.DOTTED,
        s.db.LINETYPE.SOLID_CROSS,
        s.db.LINETYPE.DOTTED_CROSS,
        s.db.LINETYPE.SOLID_POINT,
        s.db.LINETYPE.DOTTED_POINT
      ].includes(y.type) && (H = H + Z), K++;
    }
    J.debug("createdActors", T), J.debug("destroyedActors", u), yield zt(r, x, m, !1);
    for (const y of tt)
      yield A0(r, y.messageModel, y.lineStartY, s);
    n.mirrorActors && (yield zt(r, x, m, !0)), U.forEach((y) => D.drawBackgroundRect(r, y)), ue(r, x, m, n);
    for (const y of f.models.boxes)
      y.height = f.getVerticalPos() - y.y, f.insert(y.x, y.y, y.x + y.width, y.height), y.startx = y.x, y.starty = y.y, y.stopx = y.startx + y.width, y.stopy = y.starty + y.height, y.stroke = "rgb(0,0,0, 0.5)", yield D.drawBox(r, y, n);
    V && f.bumpVerticalPos(n.boxMargin);
    const W = xe(r, x, m, p), { bounds: q } = f.getBounds();
    let Q = q.stopy - q.starty;
    Q < W.maxHeight && (Q = W.maxHeight);
    let G = Q + 2 * n.diagramMarginY;
    n.mirrorActors && (G = G - n.boxMargin + n.bottomMarginAdj);
    let j = q.stopx - q.startx;
    j < W.maxWidth && (j = W.maxWidth);
    const et = j + 2 * n.diagramMarginX;
    I && r.append("text").text(I).attr("x", (q.stopx - q.startx) / 2 - 2 * n.diagramMarginX).attr("y", -25), Ne(r, G, et, n.useMaxWidth);
    const N = I ? 40 : 0;
    r.attr(
      "viewBox",
      q.startx - n.diagramMarginX + " -" + (n.diagramMarginY + N) + " " + et + " " + (G + N)
    ), J.debug("models:", f.models);
  });
};
function R0(t, e, o) {
  return F(this, null, function* () {
    const s = {};
    for (const i of e)
      if (t[i.to] && t[i.from]) {
        const a = t[i.to];
        if (i.placement === o.db.PLACEMENT.LEFTOF && !a.prevActor || i.placement === o.db.PLACEMENT.RIGHTOF && !a.nextActor)
          continue;
        const c = i.placement !== void 0, l = !c, p = c ? bt(n) : yt(n), r = i.wrap ? B.wrapLabel(i.message, n.width - 2 * n.wrapPadding, p) : i.message, T = (ot(r) ? yield vt(i.message, rt()) : B.calculateTextDimensions(r, p)).width + 2 * n.wrapPadding;
        l && i.from === a.nextActor ? s[i.to] = v.getMax(
          s[i.to] || 0,
          T
        ) : l && i.from === a.prevActor ? s[i.from] = v.getMax(
          s[i.from] || 0,
          T
        ) : l && i.from === i.to ? (s[i.from] = v.getMax(
          s[i.from] || 0,
          T / 2
        ), s[i.to] = v.getMax(
          s[i.to] || 0,
          T / 2
        )) : i.placement === o.db.PLACEMENT.RIGHTOF ? s[i.from] = v.getMax(
          s[i.from] || 0,
          T
        ) : i.placement === o.db.PLACEMENT.LEFTOF ? s[a.prevActor] = v.getMax(
          s[a.prevActor] || 0,
          T
        ) : i.placement === o.db.PLACEMENT.OVER && (a.prevActor && (s[a.prevActor] = v.getMax(
          s[a.prevActor] || 0,
          T / 2
        )), a.nextActor && (s[i.from] = v.getMax(
          s[i.from] || 0,
          T / 2
        )));
      }
    return J.debug("maxMessageWidthPerActor:", s), s;
  });
}
const C0 = function(t) {
  let e = 0;
  const o = qt(n);
  for (const s in t.links) {
    const a = B.calculateTextDimensions(s, o).width + 2 * n.wrapPadding + 2 * n.boxMargin;
    e < a && (e = a);
  }
  return e;
};
function D0(t, e, o) {
  return F(this, null, function* () {
    let s = 0;
    for (const a of Object.keys(t)) {
      const c = t[a];
      c.wrap && (c.description = B.wrapLabel(
        c.description,
        n.width - 2 * n.wrapPadding,
        qt(n)
      ));
      const l = ot(c.description) ? yield vt(c.description, rt()) : B.calculateTextDimensions(c.description, qt(n));
      c.width = c.wrap ? n.width : v.getMax(n.width, l.width + 2 * n.wrapPadding), c.height = c.wrap ? v.getMax(l.height, n.height) : n.height, s = v.getMax(s, c.height);
    }
    for (const a in e) {
      const c = t[a];
      if (!c)
        continue;
      const l = t[c.nextActor];
      if (!l) {
        const T = e[a] + n.actorMargin - c.width / 2;
        c.margin = v.getMax(T, n.actorMargin);
        continue;
      }
      const r = e[a] + n.actorMargin - c.width / 2 - l.width / 2;
      c.margin = v.getMax(r, n.actorMargin);
    }
    let i = 0;
    return o.forEach((a) => {
      const c = yt(n);
      let l = a.actorKeys.reduce((x, T) => x += t[T].width + (t[T].margin || 0), 0);
      l -= 2 * n.boxTextMargin, a.wrap && (a.name = B.wrapLabel(a.name, l - 2 * n.wrapPadding, c));
      const p = B.calculateTextDimensions(a.name, c);
      i = v.getMax(p.height, i);
      const r = v.getMax(l, p.width + 2 * n.wrapPadding);
      if (a.margin = n.boxTextMargin, l < r) {
        const x = (r - l) / 2;
        a.margin += x;
      }
    }), o.forEach((a) => a.textMaxHeight = i), v.getMax(s, n.height);
  });
}
const V0 = function(t, e, o) {
  return F(this, null, function* () {
    const s = e[t.from].x, i = e[t.to].x, a = t.wrap && t.message;
    let c = ot(t.message) ? yield vt(t.message, rt()) : B.calculateTextDimensions(
      a ? B.wrapLabel(t.message, n.width, bt(n)) : t.message,
      bt(n)
    );
    const l = {
      width: a ? n.width : v.getMax(n.width, c.width + 2 * n.noteMargin),
      height: 0,
      startx: e[t.from].x,
      stopx: 0,
      starty: 0,
      stopy: 0,
      message: t.message
    };
    return t.placement === o.db.PLACEMENT.RIGHTOF ? (l.width = a ? v.getMax(n.width, c.width) : v.getMax(
      e[t.from].width / 2 + e[t.to].width / 2,
      c.width + 2 * n.noteMargin
    ), l.startx = s + (e[t.from].width + n.actorMargin) / 2) : t.placement === o.db.PLACEMENT.LEFTOF ? (l.width = a ? v.getMax(n.width, c.width + 2 * n.noteMargin) : v.getMax(
      e[t.from].width / 2 + e[t.to].width / 2,
      c.width + 2 * n.noteMargin
    ), l.startx = s - l.width + (e[t.from].width - n.actorMargin) / 2) : t.to === t.from ? (c = B.calculateTextDimensions(
      a ? B.wrapLabel(
        t.message,
        v.getMax(n.width, e[t.from].width),
        bt(n)
      ) : t.message,
      bt(n)
    ), l.width = a ? v.getMax(n.width, e[t.from].width) : v.getMax(
      e[t.from].width,
      n.width,
      c.width + 2 * n.noteMargin
    ), l.startx = s + (e[t.from].width - l.width) / 2) : (l.width = Math.abs(s + e[t.from].width / 2 - (i + e[t.to].width / 2)) + n.actorMargin, l.startx = s < i ? s + e[t.from].width / 2 - n.actorMargin / 2 : i + e[t.to].width / 2 - n.actorMargin / 2), a && (l.message = B.wrapLabel(
      t.message,
      l.width - 2 * n.wrapPadding,
      bt(n)
    )), J.debug(
      `NM:[${l.startx},${l.stopx},${l.starty},${l.stopy}:${l.width},${l.height}=${t.message}]`
    ), l;
  });
}, O0 = function(t, e, o) {
  if (![
    o.db.LINETYPE.SOLID_OPEN,
    o.db.LINETYPE.DOTTED_OPEN,
    o.db.LINETYPE.SOLID,
    o.db.LINETYPE.DOTTED,
    o.db.LINETYPE.SOLID_CROSS,
    o.db.LINETYPE.DOTTED_CROSS,
    o.db.LINETYPE.SOLID_POINT,
    o.db.LINETYPE.DOTTED_POINT
  ].includes(t.type))
    return {};
  const [s, i] = $t(t.from, e), [a, c] = $t(t.to, e), l = s <= a, p = l ? i : s;
  let r = l ? a : c;
  const x = Math.abs(a - c) > 2, T = (_) => l ? -_ : _;
  t.from === t.to ? r = p : (t.activate && !x && (r += T(n.activationWidth / 2 - 1)), [o.db.LINETYPE.SOLID_OPEN, o.db.LINETYPE.DOTTED_OPEN].includes(t.type) || (r += T(3)));
  const u = [s, i, a, c], g = Math.abs(p - r);
  t.wrap && t.message && (t.message = B.wrapLabel(
    t.message,
    v.getMax(g + 2 * n.wrapPadding, n.width),
    yt(n)
  ));
  const m = B.calculateTextDimensions(t.message, yt(n));
  return {
    width: v.getMax(
      t.wrap ? 0 : m.width + 2 * n.wrapPadding,
      g + 2 * n.wrapPadding,
      n.width
    ),
    height: 0,
    startx: p,
    stopx: r,
    starty: 0,
    stopy: 0,
    message: t.message,
    type: t.type,
    wrap: t.wrap,
    fromBounds: Math.min.apply(null, u),
    toBounds: Math.max.apply(null, u)
  };
}, B0 = function(t, e, o, s) {
  return F(this, null, function* () {
    const i = {}, a = [];
    let c, l, p;
    for (const r of t) {
      switch (r.id = B.random({ length: 10 }), r.type) {
        case s.db.LINETYPE.LOOP_START:
        case s.db.LINETYPE.ALT_START:
        case s.db.LINETYPE.OPT_START:
        case s.db.LINETYPE.PAR_START:
        case s.db.LINETYPE.PAR_OVER_START:
        case s.db.LINETYPE.CRITICAL_START:
        case s.db.LINETYPE.BREAK_START:
          a.push({
            id: r.id,
            msg: r.message,
            from: Number.MAX_SAFE_INTEGER,
            to: Number.MIN_SAFE_INTEGER,
            width: 0
          });
          break;
        case s.db.LINETYPE.ALT_ELSE:
        case s.db.LINETYPE.PAR_AND:
        case s.db.LINETYPE.CRITICAL_OPTION:
          r.message && (c = a.pop(), i[c.id] = c, i[r.id] = c, a.push(c));
          break;
        case s.db.LINETYPE.LOOP_END:
        case s.db.LINETYPE.ALT_END:
        case s.db.LINETYPE.OPT_END:
        case s.db.LINETYPE.PAR_END:
        case s.db.LINETYPE.CRITICAL_END:
        case s.db.LINETYPE.BREAK_END:
          c = a.pop(), i[c.id] = c;
          break;
        case s.db.LINETYPE.ACTIVE_START:
          {
            const T = e[r.from ? r.from.actor : r.to.actor], u = Mt(r.from ? r.from.actor : r.to.actor).length, g = T.x + T.width / 2 + (u - 1) * n.activationWidth / 2, m = {
              startx: g,
              stopx: g + n.activationWidth,
              actor: r.from.actor,
              enabled: !0
            };
            f.activations.push(m);
          }
          break;
        case s.db.LINETYPE.ACTIVE_END:
          {
            const T = f.activations.map((u) => u.actor).lastIndexOf(r.from.actor);
            delete f.activations.splice(T, 1)[0];
          }
          break;
      }
      r.placement !== void 0 ? (l = yield V0(r, e, s), r.noteModel = l, a.forEach((T) => {
        c = T, c.from = v.getMin(c.from, l.startx), c.to = v.getMax(c.to, l.startx + l.width), c.width = v.getMax(c.width, Math.abs(c.from - c.to)) - n.labelBoxWidth;
      })) : (p = O0(r, e, s), r.msgModel = p, p.startx && p.stopx && a.length > 0 && a.forEach((T) => {
        if (c = T, p.startx === p.stopx) {
          const u = e[r.from], g = e[r.to];
          c.from = v.getMin(
            u.x - p.width / 2,
            u.x - u.width / 2,
            c.from
          ), c.to = v.getMax(
            g.x + p.width / 2,
            g.x + u.width / 2,
            c.to
          ), c.width = v.getMax(c.width, Math.abs(c.to - c.from)) - n.labelBoxWidth;
        } else
          c.from = v.getMin(p.startx, c.from), c.to = v.getMax(p.stopx, c.to), c.width = v.getMax(c.width, p.width) - n.labelBoxWidth;
      }));
    }
    return f.activations = [], J.debug("Loop type widths:", i), i;
  });
}, Y0 = {
  bounds: f,
  drawActors: zt,
  drawActorsPopup: xe,
  setConf: ye,
  draw: M0
}, z0 = {
  parser: Ve,
  db: jt,
  renderer: Y0,
  styles: c0,
  init: ({ wrap: t }) => {
    jt.setWrap(t);
  }
};
export {
  z0 as diagram
};
