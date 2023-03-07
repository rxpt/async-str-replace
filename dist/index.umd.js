(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.asyncStrReplace = factory());
})(this, (function () { 'use strict';

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function asyncStrReplace(string, replacers, options) {
        return __awaiter(this, void 0, void 0, function () {
            var opts, regexEscape, debug, _i, replacers_1, replacements, search, replace, flags, matches_2, _loop_1, _a, matches_1, args, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        opts = _assign({ debug: false, flags: undefined }, options);
                        regexEscape = function (s) {
                            return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                        };
                        debug = function (log) {
                            if (opts.debug) {
                                if (log instanceof TypeError) {
                                    return console.error("[asyncStrReplace] ".concat(log.message));
                                }
                                console.log("[asyncStrReplace] ".concat(log));
                            }
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 11, , 12]);
                        if (typeof string !== "string") {
                            throw new TypeError('"string" must be a string');
                        }
                        if (!replacers ||
                            (typeof replacers !== "object" && !Array.isArray(replacers))) {
                            throw new TypeError('"replacers" must be an object or an array of objects');
                        }
                        if (!Array.isArray(replacers)) return [3 /*break*/, 6];
                        _i = 0, replacers_1 = replacers;
                        _b.label = 2;
                    case 2:
                        if (!(_i < replacers_1.length)) return [3 /*break*/, 5];
                        replacements = replacers_1[_i];
                        return [4 /*yield*/, asyncStrReplace(string, replacements, opts)];
                    case 3:
                        string = _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 10];
                    case 6:
                        search = replacers.search, replace = replacers.replace, flags = replacers.flags;
                        if (!search || !replace) {
                            throw new TypeError('"search" and "replace" must be provided in the replacement object');
                        }
                        matches_2 = [];
                        string.replace(search instanceof RegExp
                            ? search
                            : new RegExp(regexEscape(search), flags || opts.flags), function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            matches_2.push(args);
                            return args[0]; // retorna a própria string que foi passada como parâmetro
                        });
                        if (matches_2.length === 0)
                            debug("No matches found");
                        _loop_1 = function (args) {
                            var match, response, replacer;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        match = args[0];
                                        response = function (replacer) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b;
                                            var _this = this;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        if (!(typeof replacer === "function")) return [3 /*break*/, 2];
                                                        return [4 /*yield*/, replacer.apply(void 0, args)];
                                                    case 1:
                                                        _a = _c.sent();
                                                        return [3 /*break*/, 6];
                                                    case 2:
                                                        if (!(replacer instanceof Promise)) return [3 /*break*/, 4];
                                                        return [4 /*yield*/, replacer.then(function (replacer) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0: return [4 /*yield*/, response(replacer)];
                                                                    case 1: return [2 /*return*/, _a.sent()];
                                                                }
                                                            }); }); })];
                                                    case 3:
                                                        _b = _c.sent();
                                                        return [3 /*break*/, 5];
                                                    case 4:
                                                        _b = replacer;
                                                        _c.label = 5;
                                                    case 5:
                                                        _a = _b;
                                                        _c.label = 6;
                                                    case 6: return [2 /*return*/, _a];
                                                }
                                            });
                                        }); };
                                        return [4 /*yield*/, response(replace)];
                                    case 1:
                                        replacer = _c.sent();
                                        debug("Replacing \"".concat(match, "\" with \"").concat(replacer, "\""));
                                        string = string.replace(match, replacer);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _a = 0, matches_1 = matches_2;
                        _b.label = 7;
                    case 7:
                        if (!(_a < matches_1.length)) return [3 /*break*/, 10];
                        args = matches_1[_a];
                        return [5 /*yield**/, _loop_1(args)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        _a++;
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        error_1 = _b.sent();
                        debug(error_1);
                        throw error_1;
                    case 12: return [2 /*return*/, string];
                }
            });
        });
    }

    return asyncStrReplace;

}));
