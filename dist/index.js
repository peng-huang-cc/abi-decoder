
  /**
   * @license
   * author: peng-huang-cc
   * abi-decoder.js v1.0.0
   * Released under the MIT license.
   */

import require$$0$1 from 'buffer';
import require$$0$5 from 'assert';
import require$$0$2 from 'crypto';
import require$$0$3 from 'stream';
import require$$0$4 from 'events';
import require$$1 from 'util';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var bn$4 = {exports: {}};

(function (module) {
  (function (module, exports) {

    function assert(val, msg) {
      if (!val) throw new Error(msg || 'Assertion failed');
    } // Could use `inherits` module, but don't want to move from single file
    // architecture yet.


    function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    } // BN


    function BN(number, base, endian) {
      if (BN.isBN(number)) {
        return number;
      }

      this.negative = 0;
      this.words = null;
      this.length = 0; // Reduction context

      this.red = null;

      if (number !== null) {
        if (base === 'le' || base === 'be') {
          endian = base;
          base = 10;
        }

        this._init(number || 0, base || 10, endian || 'be');
      }
    }

    if (_typeof(module) === 'object') {
      module.exports = BN;
    } else {
      exports.BN = BN;
    }

    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;

    try {
      Buffer = commonjsRequire('buf' + 'fer').Buffer;
    } catch (e) {}

    BN.isBN = function isBN(num) {
      if (num instanceof BN) {
        return true;
      }

      return num !== null && _typeof(num) === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };

    BN.max = function max(left, right) {
      if (left.cmp(right) > 0) return left;
      return right;
    };

    BN.min = function min(left, right) {
      if (left.cmp(right) < 0) return left;
      return right;
    };

    BN.prototype._init = function init(number, base, endian) {
      if (typeof number === 'number') {
        return this._initNumber(number, base, endian);
      }

      if (_typeof(number) === 'object') {
        return this._initArray(number, base, endian);
      }

      if (base === 'hex') {
        base = 16;
      }

      assert(base === (base | 0) && base >= 2 && base <= 36);
      number = number.toString().replace(/\s+/g, '');
      var start = 0;

      if (number[0] === '-') {
        start++;
      }

      if (base === 16) {
        this._parseHex(number, start);
      } else {
        this._parseBase(number, base, start);
      }

      if (number[0] === '-') {
        this.negative = 1;
      }

      this.strip();
      if (endian !== 'le') return;

      this._initArray(this.toArray(), base, endian);
    };

    BN.prototype._initNumber = function _initNumber(number, base, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }

      if (number < 0x4000000) {
        this.words = [number & 0x3ffffff];
        this.length = 1;
      } else if (number < 0x10000000000000) {
        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
        this.length = 2;
      } else {
        assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)

        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
        this.length = 3;
      }

      if (endian !== 'le') return; // Reverse the bytes

      this._initArray(this.toArray(), base, endian);
    };

    BN.prototype._initArray = function _initArray(number, base, endian) {
      // Perhaps a Uint8Array
      assert(typeof number.length === 'number');

      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }

      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }

      var j, w;
      var off = 0;

      if (endian === 'be') {
        for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
          w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === 'le') {
        for (i = 0, j = 0; i < number.length; i += 3) {
          w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }

      return this.strip();
    };

    function parseHex(str, start, end) {
      var r = 0;
      var len = Math.min(str.length, end);

      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r <<= 4; // 'a' - 'f'

        if (c >= 49 && c <= 54) {
          r |= c - 49 + 0xa; // 'A' - 'F'
        } else if (c >= 17 && c <= 22) {
          r |= c - 17 + 0xa; // '0' - '9'
        } else {
          r |= c & 0xf;
        }
      }

      return r;
    }

    BN.prototype._parseHex = function _parseHex(number, start) {
      // Create possibly bigger array to ensure that it fits the number
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }

      var j, w; // Scan 24-bit chunks and add them to the number

      var off = 0;

      for (i = number.length - 6, j = 0; i >= start; i -= 6) {
        w = parseHex(number, i, i + 6);
        this.words[j] |= w << off & 0x3ffffff; // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb

        this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
        off += 24;

        if (off >= 26) {
          off -= 26;
          j++;
        }
      }

      if (i + 6 !== start) {
        w = parseHex(number, start, i + 6);
        this.words[j] |= w << off & 0x3ffffff;
        this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
      }

      this.strip();
    };

    function parseBase(str, start, end, mul) {
      var r = 0;
      var len = Math.min(str.length, end);

      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r *= mul; // 'a'

        if (c >= 49) {
          r += c - 49 + 0xa; // 'A'
        } else if (c >= 17) {
          r += c - 17 + 0xa; // '0' - '9'
        } else {
          r += c;
        }
      }

      return r;
    }

    BN.prototype._parseBase = function _parseBase(number, base, start) {
      // Initialize as zero
      this.words = [0];
      this.length = 1; // Find length of limb in base

      for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
        limbLen++;
      }

      limbLen--;
      limbPow = limbPow / base | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;

      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number, i, i + limbLen, base);
        this.imuln(limbPow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }

      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i, number.length, base);

        for (i = 0; i < mod; i++) {
          pow *= base;
        }

        this.imuln(pow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
    };

    BN.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }

      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };

    BN.prototype.clone = function clone() {
      var r = new BN(null);
      this.copy(r);
      return r;
    };

    BN.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }

      return this;
    }; // Remove leading `0` from `this`


    BN.prototype.strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }

      return this._normSign();
    };

    BN.prototype._normSign = function _normSign() {
      // -0 = 0
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }

      return this;
    };

    BN.prototype.inspect = function inspect() {
      return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    };
    /*
     var zeros = [];
    var groupSizes = [];
    var groupBases = [];
     var s = '';
    var i = -1;
    while (++i < BN.wordSize) {
      zeros[i] = s;
      s += '0';
    }
    groupSizes[0] = 0;
    groupSizes[1] = 0;
    groupBases[0] = 0;
    groupBases[1] = 0;
    var base = 2 - 1;
    while (++base < 36 + 1) {
      var groupSize = 0;
      var groupBase = 1;
      while (groupBase < (1 << BN.wordSize) / base) {
        groupBase *= base;
        groupSize += 1;
      }
      groupSizes[base] = groupSize;
      groupBases[base] = groupBase;
    }
     */


    var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
    var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    BN.prototype.toString = function toString(base, padding) {
      base = base || 10;
      padding = padding | 0 || 1;
      var out;

      if (base === 16 || base === 'hex') {
        out = '';
        var off = 0;
        var carry = 0;

        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = ((w << off | carry) & 0xffffff).toString(16);
          carry = w >>> 24 - off & 0xffffff;

          if (carry !== 0 || i !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }

          off += 2;

          if (off >= 26) {
            off -= 26;
            i--;
          }
        }

        if (carry !== 0) {
          out = carry.toString(16) + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      if (base === (base | 0) && base >= 2 && base <= 36) {
        // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
        var groupSize = groupSizes[base]; // var groupBase = Math.pow(base, groupSize);

        var groupBase = groupBases[base];
        out = '';
        var c = this.clone();
        c.negative = 0;

        while (!c.isZero()) {
          var r = c.modn(groupBase).toString(base);
          c = c.idivn(groupBase);

          if (!c.isZero()) {
            out = zeros[groupSize - r.length] + r + out;
          } else {
            out = r + out;
          }
        }

        if (this.isZero()) {
          out = '0' + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      assert(false, 'Base should be between 2 and 36');
    };

    BN.prototype.toNumber = function toNumber() {
      var ret = this.words[0];

      if (this.length === 2) {
        ret += this.words[1] * 0x4000000;
      } else if (this.length === 3 && this.words[2] === 0x01) {
        // NOTE: at this stage it is known that the top bit is set
        ret += 0x10000000000000 + this.words[1] * 0x4000000;
      } else if (this.length > 2) {
        assert(false, 'Number can only safely store up to 53 bits');
      }

      return this.negative !== 0 ? -ret : ret;
    };

    BN.prototype.toJSON = function toJSON() {
      return this.toString(16);
    };

    BN.prototype.toBuffer = function toBuffer(endian, length) {
      assert(typeof Buffer !== 'undefined');
      return this.toArrayLike(Buffer, endian, length);
    };

    BN.prototype.toArray = function toArray(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };

    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      var byteLength = this.byteLength();
      var reqLength = length || Math.max(1, byteLength);
      assert(byteLength <= reqLength, 'byte array longer than desired length');
      assert(reqLength > 0, 'Requested array length <= 0');
      this.strip();
      var littleEndian = endian === 'le';
      var res = new ArrayType(reqLength);
      var b, i;
      var q = this.clone();

      if (!littleEndian) {
        // Assume big-endian
        for (i = 0; i < reqLength - byteLength; i++) {
          res[i] = 0;
        }

        for (i = 0; !q.isZero(); i++) {
          b = q.andln(0xff);
          q.iushrn(8);
          res[reqLength - i - 1] = b;
        }
      } else {
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(0xff);
          q.iushrn(8);
          res[i] = b;
        }

        for (; i < reqLength; i++) {
          res[i] = 0;
        }
      }

      return res;
    };

    if (Math.clz32) {
      BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;

        if (t >= 0x1000) {
          r += 13;
          t >>>= 13;
        }

        if (t >= 0x40) {
          r += 7;
          t >>>= 7;
        }

        if (t >= 0x8) {
          r += 4;
          t >>>= 4;
        }

        if (t >= 0x02) {
          r += 2;
          t >>>= 2;
        }

        return r + t;
      };
    }

    BN.prototype._zeroBits = function _zeroBits(w) {
      // Short-cut
      if (w === 0) return 26;
      var t = w;
      var r = 0;

      if ((t & 0x1fff) === 0) {
        r += 13;
        t >>>= 13;
      }

      if ((t & 0x7f) === 0) {
        r += 7;
        t >>>= 7;
      }

      if ((t & 0xf) === 0) {
        r += 4;
        t >>>= 4;
      }

      if ((t & 0x3) === 0) {
        r += 2;
        t >>>= 2;
      }

      if ((t & 0x1) === 0) {
        r++;
      }

      return r;
    }; // Return number of used bits in a BN


    BN.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];

      var hi = this._countBits(w);

      return (this.length - 1) * 26 + hi;
    };

    function toBitArray(num) {
      var w = new Array(num.bitLength());

      for (var bit = 0; bit < w.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
      }

      return w;
    } // Number of trailing zero bits


    BN.prototype.zeroBits = function zeroBits() {
      if (this.isZero()) return 0;
      var r = 0;

      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);

        r += b;
        if (b !== 26) break;
      }

      return r;
    };

    BN.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };

    BN.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }

      return this.clone();
    };

    BN.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }

      return this.clone();
    };

    BN.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    }; // Return negative clone of `this`


    BN.prototype.neg = function neg() {
      return this.clone().ineg();
    };

    BN.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }

      return this;
    }; // Or `num` with `this` in-place


    BN.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }

      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }

      return this.strip();
    };

    BN.prototype.ior = function ior(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuor(num);
    }; // Or `num` with `this`


    BN.prototype.or = function or(num) {
      if (this.length > num.length) return this.clone().ior(num);
      return num.clone().ior(this);
    };

    BN.prototype.uor = function uor(num) {
      if (this.length > num.length) return this.clone().iuor(num);
      return num.clone().iuor(this);
    }; // And `num` with `this` in-place


    BN.prototype.iuand = function iuand(num) {
      // b = min-length(num, this)
      var b;

      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }

      this.length = b.length;
      return this.strip();
    };

    BN.prototype.iand = function iand(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuand(num);
    }; // And `num` with `this`


    BN.prototype.and = function and(num) {
      if (this.length > num.length) return this.clone().iand(num);
      return num.clone().iand(this);
    };

    BN.prototype.uand = function uand(num) {
      if (this.length > num.length) return this.clone().iuand(num);
      return num.clone().iuand(this);
    }; // Xor `num` with `this` in-place


    BN.prototype.iuxor = function iuxor(num) {
      // a.length > b.length
      var a;
      var b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }

      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = a.length;
      return this.strip();
    };

    BN.prototype.ixor = function ixor(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuxor(num);
    }; // Xor `num` with `this`


    BN.prototype.xor = function xor(num) {
      if (this.length > num.length) return this.clone().ixor(num);
      return num.clone().ixor(this);
    };

    BN.prototype.uxor = function uxor(num) {
      if (this.length > num.length) return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    }; // Not ``this`` with ``width`` bitwidth


    BN.prototype.inotn = function inotn(width) {
      assert(typeof width === 'number' && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26; // Extend the buffer with leading zeroes

      this._expand(bytesNeeded);

      if (bitsLeft > 0) {
        bytesNeeded--;
      } // Handle complete words


      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 0x3ffffff;
      } // Handle the residue


      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
      } // And remove leading zeroes


      return this.strip();
    };

    BN.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    }; // Set `bit` of `this`


    BN.prototype.setn = function setn(bit, val) {
      assert(typeof bit === 'number' && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;

      this._expand(off + 1);

      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }

      return this.strip();
    }; // Add `num` to `this` in-place


    BN.prototype.iadd = function iadd(num) {
      var r; // negative + positive

      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r = this.isub(num);
        this.negative ^= 1;
        return this._normSign(); // positive + negative
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r = this.isub(num);
        num.negative = 1;
        return r._normSign();
      } // a.length > b.length


      var a, b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      this.length = a.length;

      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++; // Copy the rest of the words
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      return this;
    }; // Add `num` to `this`


    BN.prototype.add = function add(num) {
      var res;

      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }

      if (this.length > num.length) return this.clone().iadd(num);
      return num.clone().iadd(this);
    }; // Subtract `num` from `this` in-place


    BN.prototype.isub = function isub(num) {
      // this - (-num) = this + num
      if (num.negative !== 0) {
        num.negative = 0;
        var r = this.iadd(num);
        num.negative = 1;
        return r._normSign(); // -this - num = -(this + num)
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      } // At this point both numbers are positive


      var cmp = this.cmp(num); // Optimization - zeroify

      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      } // a > b


      var a, b;

      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      } // Copy rest of the words


      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = Math.max(this.length, i);

      if (a !== this) {
        this.negative = 1;
      }

      return this.strip();
    }; // Subtract `num` from `this`


    BN.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };

    function smallMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      var len = self.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0; // Peel one iteration (compiler can't do it, because of code complexity)

      var a = self.words[0] | 0;
      var b = num.words[0] | 0;
      var r = a * b;
      var lo = r & 0x3ffffff;
      var carry = r / 0x4000000 | 0;
      out.words[0] = lo;

      for (var k = 1; k < len; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = carry >>> 26;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j | 0;
          a = self.words[i] | 0;
          b = num.words[j] | 0;
          r = a * b + rword;
          ncarry += r / 0x4000000 | 0;
          rword = r & 0x3ffffff;
        }

        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }

      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }

      return out.strip();
    } // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).


    var comb10MulTo = function comb10MulTo(self, num, out) {
      var a = self.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 0x1fff;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 0x1fff;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 0x1fff;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 0x1fff;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 0x1fff;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 0x1fff;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 0x1fff;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 0x1fff;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 0x1fff;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 0x1fff;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 0x1fff;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 0x1fff;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 0x1fff;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 0x1fff;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 0x1fff;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 0x1fff;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 0x1fff;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 0x1fff;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 0x1fff;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 0x1fff;
      var bh9 = b9 >>> 13;
      out.negative = self.negative ^ num.negative;
      out.length = 19;
      /* k = 0 */

      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 0x3ffffff;
      /* k = 1 */

      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 0x3ffffff;
      /* k = 2 */

      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 0x3ffffff;
      /* k = 3 */

      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 0x3ffffff;
      /* k = 4 */

      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 0x3ffffff;
      /* k = 5 */

      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 0x3ffffff;
      /* k = 6 */

      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 0x3ffffff;
      /* k = 7 */

      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 0x3ffffff;
      /* k = 8 */

      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 0x3ffffff;
      /* k = 9 */

      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 0x3ffffff;
      /* k = 10 */

      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 0x3ffffff;
      /* k = 11 */

      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 0x3ffffff;
      /* k = 12 */

      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 0x3ffffff;
      /* k = 13 */

      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 0x3ffffff;
      /* k = 14 */

      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 0x3ffffff;
      /* k = 15 */

      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 0x3ffffff;
      /* k = 16 */

      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 0x3ffffff;
      /* k = 17 */

      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 0x3ffffff;
      /* k = 18 */

      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 0x3ffffff;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;

      if (c !== 0) {
        o[19] = c;
        out.length++;
      }

      return out;
    }; // Polyfill comb


    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }

    function bigMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      out.length = self.length + num.length;
      var carry = 0;
      var hncarry = 0;

      for (var k = 0; k < out.length - 1; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self.words[i] | 0;
          var b = num.words[j] | 0;
          var r = a * b;
          var lo = r & 0x3ffffff;
          ncarry = ncarry + (r / 0x4000000 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 0x3ffffff;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 0x3ffffff;
        }

        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }

      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }

      return out.strip();
    }

    function jumboMulTo(self, num, out) {
      var fftm = new FFTM();
      return fftm.mulp(self, num, out);
    }

    BN.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;

      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }

      return res;
    }; // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion


    function FFTM(x, y) {
      this.x = x;
      this.y = y;
    }

    FFTM.prototype.makeRBT = function makeRBT(N) {
      var t = new Array(N);
      var l = BN.prototype._countBits(N) - 1;

      for (var i = 0; i < N; i++) {
        t[i] = this.revBin(i, l, N);
      }

      return t;
    }; // Returns binary-reversed representation of `x`


    FFTM.prototype.revBin = function revBin(x, l, N) {
      if (x === 0 || x === N - 1) return x;
      var rb = 0;

      for (var i = 0; i < l; i++) {
        rb |= (x & 1) << l - i - 1;
        x >>= 1;
      }

      return rb;
    }; // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm


    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
      for (var i = 0; i < N; i++) {
        rtws[i] = rws[rbt[i]];
        itws[i] = iws[rbt[i]];
      }
    };

    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
      this.permute(rbt, rws, iws, rtws, itws, N);

      for (var s = 1; s < N; s <<= 1) {
        var l = s << 1;
        var rtwdf = Math.cos(2 * Math.PI / l);
        var itwdf = Math.sin(2 * Math.PI / l);

        for (var p = 0; p < N; p += l) {
          var rtwdf_ = rtwdf;
          var itwdf_ = itwdf;

          for (var j = 0; j < s; j++) {
            var re = rtws[p + j];
            var ie = itws[p + j];
            var ro = rtws[p + j + s];
            var io = itws[p + j + s];
            var rx = rtwdf_ * ro - itwdf_ * io;
            io = rtwdf_ * io + itwdf_ * ro;
            ro = rx;
            rtws[p + j] = re + ro;
            itws[p + j] = ie + io;
            rtws[p + j + s] = re - ro;
            itws[p + j + s] = ie - io;
            /* jshint maxdepth : false */

            if (j !== l) {
              rx = rtwdf * rtwdf_ - itwdf * itwdf_;
              itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
              rtwdf_ = rx;
            }
          }
        }
      }
    };

    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
      var N = Math.max(m, n) | 1;
      var odd = N & 1;
      var i = 0;

      for (N = N / 2 | 0; N; N = N >>> 1) {
        i++;
      }

      return 1 << i + 1 + odd;
    };

    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
      if (N <= 1) return;

      for (var i = 0; i < N / 2; i++) {
        var t = rws[i];
        rws[i] = rws[N - i - 1];
        rws[N - i - 1] = t;
        t = iws[i];
        iws[i] = -iws[N - i - 1];
        iws[N - i - 1] = -t;
      }
    };

    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
      var carry = 0;

      for (var i = 0; i < N / 2; i++) {
        var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
        ws[i] = w & 0x3ffffff;

        if (w < 0x4000000) {
          carry = 0;
        } else {
          carry = w / 0x4000000 | 0;
        }
      }

      return ws;
    };

    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
      var carry = 0;

      for (var i = 0; i < len; i++) {
        carry = carry + (ws[i] | 0);
        rws[2 * i] = carry & 0x1fff;
        carry = carry >>> 13;
        rws[2 * i + 1] = carry & 0x1fff;
        carry = carry >>> 13;
      } // Pad with zeroes


      for (i = 2 * len; i < N; ++i) {
        rws[i] = 0;
      }

      assert(carry === 0);
      assert((carry & ~0x1fff) === 0);
    };

    FFTM.prototype.stub = function stub(N) {
      var ph = new Array(N);

      for (var i = 0; i < N; i++) {
        ph[i] = 0;
      }

      return ph;
    };

    FFTM.prototype.mulp = function mulp(x, y, out) {
      var N = 2 * this.guessLen13b(x.length, y.length);
      var rbt = this.makeRBT(N);

      var _ = this.stub(N);

      var rws = new Array(N);
      var rwst = new Array(N);
      var iwst = new Array(N);
      var nrws = new Array(N);
      var nrwst = new Array(N);
      var niwst = new Array(N);
      var rmws = out.words;
      rmws.length = N;
      this.convert13b(x.words, x.length, rws, N);
      this.convert13b(y.words, y.length, nrws, N);
      this.transform(rws, _, rwst, iwst, N, rbt);
      this.transform(nrws, _, nrwst, niwst, N, rbt);

      for (var i = 0; i < N; i++) {
        var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
        iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
        rwst[i] = rx;
      }

      this.conjugate(rwst, iwst, N);
      this.transform(rwst, iwst, rmws, _, N, rbt);
      this.conjugate(rmws, _, N);
      this.normalize13b(rmws, N);
      out.negative = x.negative ^ y.negative;
      out.length = x.length + y.length;
      return out.strip();
    }; // Multiply `this` by `num`


    BN.prototype.mul = function mul(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    }; // Multiply employing FFT


    BN.prototype.mulf = function mulf(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    }; // In-place Multiplication


    BN.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };

    BN.prototype.imuln = function imuln(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000); // Carry

      var carry = 0;

      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
        carry >>= 26;
        carry += w / 0x4000000 | 0; // NOTE: lo is 27bit maximum

        carry += lo >>> 26;
        this.words[i] = lo & 0x3ffffff;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return this;
    };

    BN.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    }; // `this` * `this`


    BN.prototype.sqr = function sqr() {
      return this.mul(this);
    }; // `this` * `this` in-place


    BN.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    }; // Math.pow(`this`, `num`)


    BN.prototype.pow = function pow(num) {
      var w = toBitArray(num);
      if (w.length === 0) return new BN(1); // Skip leading zeroes

      var res = this;

      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0) break;
      }

      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0) continue;
          res = res.mul(q);
        }
      }

      return res;
    }; // Shift-left in-place


    BN.prototype.iushln = function iushln(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
      var i;

      if (r !== 0) {
        var carry = 0;

        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = (this.words[i] | 0) - newCarry << r;
          this.words[i] = c | carry;
          carry = newCarry >>> 26 - r;
        }

        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }

      if (s !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s] = this.words[i];
        }

        for (i = 0; i < s; i++) {
          this.words[i] = 0;
        }

        this.length += s;
      }

      return this.strip();
    };

    BN.prototype.ishln = function ishln(bits) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushln(bits);
    }; // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits


    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert(typeof bits === 'number' && bits >= 0);
      var h;

      if (hint) {
        h = (hint - hint % 26) / 26;
      } else {
        h = 0;
      }

      var r = bits % 26;
      var s = Math.min((bits - r) / 26, this.length);
      var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
      var maskedWords = extended;
      h -= s;
      h = Math.max(0, h); // Extended mode, copy masked part

      if (maskedWords) {
        for (var i = 0; i < s; i++) {
          maskedWords.words[i] = this.words[i];
        }

        maskedWords.length = s;
      }

      if (s === 0) ; else if (this.length > s) {
        this.length -= s;

        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }

      var carry = 0;

      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = carry << 26 - r | word >>> r;
        carry = word & mask;
      } // Push carried bits as a mask


      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }

      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }

      return this.strip();
    };

    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    }; // Shift-left


    BN.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };

    BN.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    }; // Shift-right


    BN.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };

    BN.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    }; // Test if n bit is set


    BN.prototype.testn = function testn(bit) {
      assert(typeof bit === 'number' && bit >= 0);
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) return false; // Check bit and return

      var w = this.words[s];
      return !!(w & q);
    }; // Return only lowers bits of number (in-place)


    BN.prototype.imaskn = function imaskn(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      assert(this.negative === 0, 'imaskn works only with positive numbers');

      if (this.length <= s) {
        return this;
      }

      if (r !== 0) {
        s++;
      }

      this.length = Math.min(s, this.length);

      if (r !== 0) {
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        this.words[this.length - 1] &= mask;
      }

      return this.strip();
    }; // Return only lowers bits of number


    BN.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    }; // Add plain number `num` to `this`


    BN.prototype.iaddn = function iaddn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.isubn(-num); // Possible sign change

      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) < num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }

        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      } // Add without checks


      return this._iaddn(num);
    };

    BN.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num; // Carry

      for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
        this.words[i] -= 0x4000000;

        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }

      this.length = Math.max(this.length, i + 1);
      return this;
    }; // Subtract plain number `num` from `this`


    BN.prototype.isubn = function isubn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.iaddn(-num);

      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }

      this.words[0] -= num;

      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        // Carry
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 0x4000000;
          this.words[i + 1] -= 1;
        }
      }

      return this.strip();
    };

    BN.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };

    BN.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };

    BN.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };

    BN.prototype.abs = function abs() {
      return this.clone().iabs();
    };

    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
      var len = num.length + shift;
      var i;

      this._expand(len);

      var w;
      var carry = 0;

      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul;
        w -= right & 0x3ffffff;
        carry = (w >> 26) - (right / 0x4000000 | 0);
        this.words[i + shift] = w & 0x3ffffff;
      }

      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 0x3ffffff;
      }

      if (carry === 0) return this.strip(); // Subtraction overflow

      assert(carry === -1);
      carry = 0;

      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 0x3ffffff;
      }

      this.negative = 1;
      return this.strip();
    };

    BN.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num; // Normalize

      var bhi = b.words[b.length - 1] | 0;

      var bhiBits = this._countBits(bhi);

      shift = 26 - bhiBits;

      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      } // Initialize quotient


      var m = a.length - b.length;
      var q;

      if (mode !== 'mod') {
        q = new BN(null);
        q.length = m + 1;
        q.words = new Array(q.length);

        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }

      var diff = a.clone()._ishlnsubmul(b, 1, m);

      if (diff.negative === 0) {
        a = diff;

        if (q) {
          q.words[m] = 1;
        }
      }

      for (var j = m - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0); // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
        // (0x7ffffff)

        qj = Math.min(qj / bhi | 0, 0x3ffffff);

        a._ishlnsubmul(b, qj, j);

        while (a.negative !== 0) {
          qj--;
          a.negative = 0;

          a._ishlnsubmul(b, 1, j);

          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }

        if (q) {
          q.words[j] = qj;
        }
      }

      if (q) {
        q.strip();
      }

      a.strip(); // Denormalize

      if (mode !== 'div' && shift !== 0) {
        a.iushrn(shift);
      }

      return {
        div: q || null,
        mod: a
      };
    }; // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested


    BN.prototype.divmod = function divmod(num, mode, positive) {
      assert(!num.isZero());

      if (this.isZero()) {
        return {
          div: new BN(0),
          mod: new BN(0)
        };
      }

      var div, mod, res;

      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }

        return {
          div: div,
          mod: mod
        };
      }

      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        return {
          div: div,
          mod: res.mod
        };
      }

      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }

        return {
          div: res.div,
          mod: mod
        };
      } // Both numbers are positive at this point
      // Strip both numbers to approximate shift value


      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN(0),
          mod: this
        };
      } // Very short reduction


      if (num.length === 1) {
        if (mode === 'div') {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }

        if (mode === 'mod') {
          return {
            div: null,
            mod: new BN(this.modn(num.words[0]))
          };
        }

        return {
          div: this.divn(num.words[0]),
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return this._wordDiv(num, mode);
    }; // Find `this` / `num`


    BN.prototype.div = function div(num) {
      return this.divmod(num, 'div', false).div;
    }; // Find `this` % `num`


    BN.prototype.mod = function mod(num) {
      return this.divmod(num, 'mod', false).mod;
    };

    BN.prototype.umod = function umod(num) {
      return this.divmod(num, 'mod', true).mod;
    }; // Find Round(`this` / `num`)


    BN.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num); // Fast case - exact division

      if (dm.mod.isZero()) return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half); // Round down

      if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div; // Round up

      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };

    BN.prototype.modn = function modn(num) {
      assert(num <= 0x3ffffff);
      var p = (1 << 26) % num;
      var acc = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }

      return acc;
    }; // In-place division by number


    BN.prototype.idivn = function idivn(num) {
      assert(num <= 0x3ffffff);
      var carry = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 0x4000000;
        this.words[i] = w / num | 0;
        carry = w % num;
      }

      return this.strip();
    };

    BN.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };

    BN.prototype.egcd = function egcd(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var x = this;
      var y = p.clone();

      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      } // A * x + B * y = x


      var A = new BN(1);
      var B = new BN(0); // C * x + D * y = y

      var C = new BN(0);
      var D = new BN(1);
      var g = 0;

      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }

      var yp = y.clone();
      var xp = x.clone();

      while (!x.isZero()) {
        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          x.iushrn(i);

          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }

            A.iushrn(1);
            B.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          y.iushrn(j);

          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }

            C.iushrn(1);
            D.iushrn(1);
          }
        }

        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }

      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    }; // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed


    BN.prototype._invmp = function _invmp(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var a = this;
      var b = p.clone();

      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }

      var x1 = new BN(1);
      var x2 = new BN(0);
      var delta = b.clone();

      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          a.iushrn(i);

          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }

            x1.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          b.iushrn(j);

          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }

            x2.iushrn(1);
          }
        }

        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }

      var res;

      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }

      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }

      return res;
    };

    BN.prototype.gcd = function gcd(num) {
      if (this.isZero()) return num.abs();
      if (num.isZero()) return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0; // Remove common factor of two

      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }

      do {
        while (a.isEven()) {
          a.iushrn(1);
        }

        while (b.isEven()) {
          b.iushrn(1);
        }

        var r = a.cmp(b);

        if (r < 0) {
          // Swap `a` and `b` to make `a` always bigger than `b`
          var t = a;
          a = b;
          b = t;
        } else if (r === 0 || b.cmpn(1) === 0) {
          break;
        }

        a.isub(b);
      } while (true);

      return b.iushln(shift);
    }; // Invert number in the field F(num)


    BN.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };

    BN.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };

    BN.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    }; // And first word and num


    BN.prototype.andln = function andln(num) {
      return this.words[0] & num;
    }; // Increment at the bit position in-line


    BN.prototype.bincn = function bincn(bit) {
      assert(typeof bit === 'number');
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) {
        this._expand(s + 1);

        this.words[s] |= q;
        return this;
      } // Add bit and propagate, if needed


      var carry = q;

      for (var i = s; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 0x3ffffff;
        this.words[i] = w;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return this;
    };

    BN.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };

    BN.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative) return -1;
      if (this.negative === 0 && negative) return 1;
      this.strip();
      var res;

      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }

        assert(num <= 0x3ffffff, 'Number is too big');
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }

      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`


    BN.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0) return -1;
      if (this.negative === 0 && num.negative !== 0) return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Unsigned comparison


    BN.prototype.ucmp = function ucmp(num) {
      // At this point both numbers have the same sign
      if (this.length > num.length) return 1;
      if (this.length < num.length) return -1;
      var res = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b) continue;

        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }

        break;
      }

      return res;
    };

    BN.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };

    BN.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };

    BN.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };

    BN.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };

    BN.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };

    BN.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };

    BN.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };

    BN.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };

    BN.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };

    BN.prototype.eq = function eq(num) {
      return this.cmp(num) === 0;
    }; //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //


    BN.red = function red(num) {
      return new Red(num);
    };

    BN.prototype.toRed = function toRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      assert(this.negative === 0, 'red works only with positives');
      return ctx.convertTo(this)._forceRed(ctx);
    };

    BN.prototype.fromRed = function fromRed() {
      assert(this.red, 'fromRed works only with numbers in reduction context');
      return this.red.convertFrom(this);
    };

    BN.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };

    BN.prototype.forceRed = function forceRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      return this._forceRed(ctx);
    };

    BN.prototype.redAdd = function redAdd(num) {
      assert(this.red, 'redAdd works only with red numbers');
      return this.red.add(this, num);
    };

    BN.prototype.redIAdd = function redIAdd(num) {
      assert(this.red, 'redIAdd works only with red numbers');
      return this.red.iadd(this, num);
    };

    BN.prototype.redSub = function redSub(num) {
      assert(this.red, 'redSub works only with red numbers');
      return this.red.sub(this, num);
    };

    BN.prototype.redISub = function redISub(num) {
      assert(this.red, 'redISub works only with red numbers');
      return this.red.isub(this, num);
    };

    BN.prototype.redShl = function redShl(num) {
      assert(this.red, 'redShl works only with red numbers');
      return this.red.shl(this, num);
    };

    BN.prototype.redMul = function redMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.mul(this, num);
    };

    BN.prototype.redIMul = function redIMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.imul(this, num);
    };

    BN.prototype.redSqr = function redSqr() {
      assert(this.red, 'redSqr works only with red numbers');

      this.red._verify1(this);

      return this.red.sqr(this);
    };

    BN.prototype.redISqr = function redISqr() {
      assert(this.red, 'redISqr works only with red numbers');

      this.red._verify1(this);

      return this.red.isqr(this);
    }; // Square root over p


    BN.prototype.redSqrt = function redSqrt() {
      assert(this.red, 'redSqrt works only with red numbers');

      this.red._verify1(this);

      return this.red.sqrt(this);
    };

    BN.prototype.redInvm = function redInvm() {
      assert(this.red, 'redInvm works only with red numbers');

      this.red._verify1(this);

      return this.red.invm(this);
    }; // Return negative clone of `this` % `red modulo`


    BN.prototype.redNeg = function redNeg() {
      assert(this.red, 'redNeg works only with red numbers');

      this.red._verify1(this);

      return this.red.neg(this);
    };

    BN.prototype.redPow = function redPow(num) {
      assert(this.red && !num.red, 'redPow(normalNum)');

      this.red._verify1(this);

      return this.red.pow(this, num);
    }; // Prime numbers with efficient reduction


    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    }; // Pseudo-Mersenne prime

    function MPrime(name, p) {
      // P = 2 ^ N - K
      this.name = name;
      this.p = new BN(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }

    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };

    MPrime.prototype.ireduce = function ireduce(num) {
      // Assumes that `num` is less than `P^2`
      // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
      var r = num;
      var rlen;

      do {
        this.split(r, this.tmp);
        r = this.imulK(r);
        r = r.iadd(this.tmp);
        rlen = r.bitLength();
      } while (rlen > this.n);

      var cmp = rlen < this.n ? -1 : r.ucmp(this.p);

      if (cmp === 0) {
        r.words[0] = 0;
        r.length = 1;
      } else if (cmp > 0) {
        r.isub(this.p);
      } else {
        r.strip();
      }

      return r;
    };

    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };

    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };

    function K256() {
      MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }

    inherits(K256, MPrime);

    K256.prototype.split = function split(input, output) {
      // 256 = 9 * 26 + 22
      var mask = 0x3fffff;
      var outLen = Math.min(input.length, 9);

      for (var i = 0; i < outLen; i++) {
        output.words[i] = input.words[i];
      }

      output.length = outLen;

      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      } // Shift by 9 limbs


      var prev = input.words[9];
      output.words[output.length++] = prev & mask;

      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }

      prev >>>= 22;
      input.words[i - 10] = prev;

      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };

    K256.prototype.imulK = function imulK(num) {
      // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2; // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390

      var lo = 0;

      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 0x3d1;
        num.words[i] = lo & 0x3ffffff;
        lo = w * 0x40 + (lo / 0x4000000 | 0);
      } // Fast length reduction


      if (num.words[num.length - 1] === 0) {
        num.length--;

        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }

      return num;
    };

    function P224() {
      MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }

    inherits(P224, MPrime);

    function P192() {
      MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }

    inherits(P192, MPrime);

    function P25519() {
      // 2 ^ 255 - 19
      MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }

    inherits(P25519, MPrime);

    P25519.prototype.imulK = function imulK(num) {
      // K = 0x13
      var carry = 0;

      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 0x13 + carry;
        var lo = hi & 0x3ffffff;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }

      if (carry !== 0) {
        num.words[num.length++] = carry;
      }

      return num;
    }; // Exported mostly for testing purposes, use plain name instead


    BN._prime = function prime(name) {
      // Cached version of prime
      if (primes[name]) return primes[name];
      var prime;

      if (name === 'k256') {
        prime = new K256();
      } else if (name === 'p224') {
        prime = new P224();
      } else if (name === 'p192') {
        prime = new P192();
      } else if (name === 'p25519') {
        prime = new P25519();
      } else {
        throw new Error('Unknown prime ' + name);
      }

      primes[name] = prime;
      return prime;
    }; //
    // Base reduction engine
    //


    function Red(m) {
      if (typeof m === 'string') {
        var prime = BN._prime(m);

        this.m = prime.p;
        this.prime = prime;
      } else {
        assert(m.gtn(1), 'modulus must be greater than 1');
        this.m = m;
        this.prime = null;
      }
    }

    Red.prototype._verify1 = function _verify1(a) {
      assert(a.negative === 0, 'red works only with positives');
      assert(a.red, 'red works only with red numbers');
    };

    Red.prototype._verify2 = function _verify2(a, b) {
      assert((a.negative | b.negative) === 0, 'red works only with positives');
      assert(a.red && a.red === b.red, 'red works only with red numbers');
    };

    Red.prototype.imod = function imod(a) {
      if (this.prime) return this.prime.ireduce(a)._forceRed(this);
      return a.umod(this.m)._forceRed(this);
    };

    Red.prototype.neg = function neg(a) {
      if (a.isZero()) {
        return a.clone();
      }

      return this.m.sub(a)._forceRed(this);
    };

    Red.prototype.add = function add(a, b) {
      this._verify2(a, b);

      var res = a.add(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.iadd = function iadd(a, b) {
      this._verify2(a, b);

      var res = a.iadd(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res;
    };

    Red.prototype.sub = function sub(a, b) {
      this._verify2(a, b);

      var res = a.sub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.isub = function isub(a, b) {
      this._verify2(a, b);

      var res = a.isub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res;
    };

    Red.prototype.shl = function shl(a, num) {
      this._verify1(a);

      return this.imod(a.ushln(num));
    };

    Red.prototype.imul = function imul(a, b) {
      this._verify2(a, b);

      return this.imod(a.imul(b));
    };

    Red.prototype.mul = function mul(a, b) {
      this._verify2(a, b);

      return this.imod(a.mul(b));
    };

    Red.prototype.isqr = function isqr(a) {
      return this.imul(a, a.clone());
    };

    Red.prototype.sqr = function sqr(a) {
      return this.mul(a, a);
    };

    Red.prototype.sqrt = function sqrt(a) {
      if (a.isZero()) return a.clone();
      var mod3 = this.m.andln(3);
      assert(mod3 % 2 === 1); // Fast case

      if (mod3 === 3) {
        var pow = this.m.add(new BN(1)).iushrn(2);
        return this.pow(a, pow);
      } // Tonelli-Shanks algorithm (Totally unoptimized and slow)
      //
      // Find Q and S, that Q * 2 ^ S = (P - 1)


      var q = this.m.subn(1);
      var s = 0;

      while (!q.isZero() && q.andln(1) === 0) {
        s++;
        q.iushrn(1);
      }

      assert(!q.isZero());
      var one = new BN(1).toRed(this);
      var nOne = one.redNeg(); // Find quadratic non-residue
      // NOTE: Max is such because of generalized Riemann hypothesis.

      var lpow = this.m.subn(1).iushrn(1);
      var z = this.m.bitLength();
      z = new BN(2 * z * z).toRed(this);

      while (this.pow(z, lpow).cmp(nOne) !== 0) {
        z.redIAdd(nOne);
      }

      var c = this.pow(z, q);
      var r = this.pow(a, q.addn(1).iushrn(1));
      var t = this.pow(a, q);
      var m = s;

      while (t.cmp(one) !== 0) {
        var tmp = t;

        for (var i = 0; tmp.cmp(one) !== 0; i++) {
          tmp = tmp.redSqr();
        }

        assert(i < m);
        var b = this.pow(c, new BN(1).iushln(m - i - 1));
        r = r.redMul(b);
        c = b.redSqr();
        t = t.redMul(c);
        m = i;
      }

      return r;
    };

    Red.prototype.invm = function invm(a) {
      var inv = a._invmp(this.m);

      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };

    Red.prototype.pow = function pow(a, num) {
      if (num.isZero()) return new BN(1);
      if (num.cmpn(1) === 0) return a.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN(1).toRed(this);
      wnd[1] = a;

      for (var i = 2; i < wnd.length; i++) {
        wnd[i] = this.mul(wnd[i - 1], a);
      }

      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;

      if (start === 0) {
        start = 26;
      }

      for (i = num.length - 1; i >= 0; i--) {
        var word = num.words[i];

        for (var j = start - 1; j >= 0; j--) {
          var bit = word >> j & 1;

          if (res !== wnd[0]) {
            res = this.sqr(res);
          }

          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }

          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }

        start = 26;
      }

      return res;
    };

    Red.prototype.convertTo = function convertTo(num) {
      var r = num.umod(this.m);
      return r === num ? r.clone() : r;
    };

    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    }; //
    // Montgomery method engine
    //


    BN.mont = function mont(num) {
      return new Mont(num);
    };

    function Mont(m) {
      Red.call(this, m);
      this.shift = this.m.bitLength();

      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }

      this.r = new BN(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }

    inherits(Mont, Red);

    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };

    Mont.prototype.convertFrom = function convertFrom(num) {
      var r = this.imod(num.mul(this.rinv));
      r.red = null;
      return r;
    };

    Mont.prototype.imul = function imul(a, b) {
      if (a.isZero() || b.isZero()) {
        a.words[0] = 0;
        a.length = 1;
        return a;
      }

      var t = a.imul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.mul = function mul(a, b) {
      if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
      var t = a.mul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.invm = function invm(a) {
      // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
      var res = this.imod(a._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn$4);

var bn$3 = {exports: {}};

(function (module) {
  (function (module, exports) {

    function assert(val, msg) {
      if (!val) throw new Error(msg || 'Assertion failed');
    } // Could use `inherits` module, but don't want to move from single file
    // architecture yet.


    function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    } // BN


    function BN(number, base, endian) {
      if (BN.isBN(number)) {
        return number;
      }

      this.negative = 0;
      this.words = null;
      this.length = 0; // Reduction context

      this.red = null;

      if (number !== null) {
        if (base === 'le' || base === 'be') {
          endian = base;
          base = 10;
        }

        this._init(number || 0, base || 10, endian || 'be');
      }
    }

    if (_typeof(module) === 'object') {
      module.exports = BN;
    } else {
      exports.BN = BN;
    }

    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;

    try {
      Buffer = commonjsRequire('buf' + 'fer').Buffer;
    } catch (e) {}

    BN.isBN = function isBN(num) {
      if (num instanceof BN) {
        return true;
      }

      return num !== null && _typeof(num) === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };

    BN.max = function max(left, right) {
      if (left.cmp(right) > 0) return left;
      return right;
    };

    BN.min = function min(left, right) {
      if (left.cmp(right) < 0) return left;
      return right;
    };

    BN.prototype._init = function init(number, base, endian) {
      if (typeof number === 'number') {
        return this._initNumber(number, base, endian);
      }

      if (_typeof(number) === 'object') {
        return this._initArray(number, base, endian);
      }

      if (base === 'hex') {
        base = 16;
      }

      assert(base === (base | 0) && base >= 2 && base <= 36);
      number = number.toString().replace(/\s+/g, '');
      var start = 0;

      if (number[0] === '-') {
        start++;
      }

      if (base === 16) {
        this._parseHex(number, start);
      } else {
        this._parseBase(number, base, start);
      }

      if (number[0] === '-') {
        this.negative = 1;
      }

      this.strip();
      if (endian !== 'le') return;

      this._initArray(this.toArray(), base, endian);
    };

    BN.prototype._initNumber = function _initNumber(number, base, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }

      if (number < 0x4000000) {
        this.words = [number & 0x3ffffff];
        this.length = 1;
      } else if (number < 0x10000000000000) {
        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
        this.length = 2;
      } else {
        assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)

        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
        this.length = 3;
      }

      if (endian !== 'le') return; // Reverse the bytes

      this._initArray(this.toArray(), base, endian);
    };

    BN.prototype._initArray = function _initArray(number, base, endian) {
      // Perhaps a Uint8Array
      assert(typeof number.length === 'number');

      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }

      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }

      var j, w;
      var off = 0;

      if (endian === 'be') {
        for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
          w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === 'le') {
        for (i = 0, j = 0; i < number.length; i += 3) {
          w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }

      return this.strip();
    };

    function parseHex(str, start, end) {
      var r = 0;
      var len = Math.min(str.length, end);

      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r <<= 4; // 'a' - 'f'

        if (c >= 49 && c <= 54) {
          r |= c - 49 + 0xa; // 'A' - 'F'
        } else if (c >= 17 && c <= 22) {
          r |= c - 17 + 0xa; // '0' - '9'
        } else {
          r |= c & 0xf;
        }
      }

      return r;
    }

    BN.prototype._parseHex = function _parseHex(number, start) {
      // Create possibly bigger array to ensure that it fits the number
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }

      var j, w; // Scan 24-bit chunks and add them to the number

      var off = 0;

      for (i = number.length - 6, j = 0; i >= start; i -= 6) {
        w = parseHex(number, i, i + 6);
        this.words[j] |= w << off & 0x3ffffff; // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb

        this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
        off += 24;

        if (off >= 26) {
          off -= 26;
          j++;
        }
      }

      if (i + 6 !== start) {
        w = parseHex(number, start, i + 6);
        this.words[j] |= w << off & 0x3ffffff;
        this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
      }

      this.strip();
    };

    function parseBase(str, start, end, mul) {
      var r = 0;
      var len = Math.min(str.length, end);

      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r *= mul; // 'a'

        if (c >= 49) {
          r += c - 49 + 0xa; // 'A'
        } else if (c >= 17) {
          r += c - 17 + 0xa; // '0' - '9'
        } else {
          r += c;
        }
      }

      return r;
    }

    BN.prototype._parseBase = function _parseBase(number, base, start) {
      // Initialize as zero
      this.words = [0];
      this.length = 1; // Find length of limb in base

      for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
        limbLen++;
      }

      limbLen--;
      limbPow = limbPow / base | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;

      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number, i, i + limbLen, base);
        this.imuln(limbPow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }

      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i, number.length, base);

        for (i = 0; i < mod; i++) {
          pow *= base;
        }

        this.imuln(pow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
    };

    BN.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }

      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };

    BN.prototype.clone = function clone() {
      var r = new BN(null);
      this.copy(r);
      return r;
    };

    BN.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }

      return this;
    }; // Remove leading `0` from `this`


    BN.prototype.strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }

      return this._normSign();
    };

    BN.prototype._normSign = function _normSign() {
      // -0 = 0
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }

      return this;
    };

    BN.prototype.inspect = function inspect() {
      return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    };
    /*
     var zeros = [];
    var groupSizes = [];
    var groupBases = [];
     var s = '';
    var i = -1;
    while (++i < BN.wordSize) {
      zeros[i] = s;
      s += '0';
    }
    groupSizes[0] = 0;
    groupSizes[1] = 0;
    groupBases[0] = 0;
    groupBases[1] = 0;
    var base = 2 - 1;
    while (++base < 36 + 1) {
      var groupSize = 0;
      var groupBase = 1;
      while (groupBase < (1 << BN.wordSize) / base) {
        groupBase *= base;
        groupSize += 1;
      }
      groupSizes[base] = groupSize;
      groupBases[base] = groupBase;
    }
     */


    var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
    var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    BN.prototype.toString = function toString(base, padding) {
      base = base || 10;
      padding = padding | 0 || 1;
      var out;

      if (base === 16 || base === 'hex') {
        out = '';
        var off = 0;
        var carry = 0;

        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = ((w << off | carry) & 0xffffff).toString(16);
          carry = w >>> 24 - off & 0xffffff;

          if (carry !== 0 || i !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }

          off += 2;

          if (off >= 26) {
            off -= 26;
            i--;
          }
        }

        if (carry !== 0) {
          out = carry.toString(16) + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      if (base === (base | 0) && base >= 2 && base <= 36) {
        // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
        var groupSize = groupSizes[base]; // var groupBase = Math.pow(base, groupSize);

        var groupBase = groupBases[base];
        out = '';
        var c = this.clone();
        c.negative = 0;

        while (!c.isZero()) {
          var r = c.modn(groupBase).toString(base);
          c = c.idivn(groupBase);

          if (!c.isZero()) {
            out = zeros[groupSize - r.length] + r + out;
          } else {
            out = r + out;
          }
        }

        if (this.isZero()) {
          out = '0' + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      assert(false, 'Base should be between 2 and 36');
    };

    BN.prototype.toNumber = function toNumber() {
      var ret = this.words[0];

      if (this.length === 2) {
        ret += this.words[1] * 0x4000000;
      } else if (this.length === 3 && this.words[2] === 0x01) {
        // NOTE: at this stage it is known that the top bit is set
        ret += 0x10000000000000 + this.words[1] * 0x4000000;
      } else if (this.length > 2) {
        assert(false, 'Number can only safely store up to 53 bits');
      }

      return this.negative !== 0 ? -ret : ret;
    };

    BN.prototype.toJSON = function toJSON() {
      return this.toString(16);
    };

    BN.prototype.toBuffer = function toBuffer(endian, length) {
      assert(typeof Buffer !== 'undefined');
      return this.toArrayLike(Buffer, endian, length);
    };

    BN.prototype.toArray = function toArray(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };

    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      var byteLength = this.byteLength();
      var reqLength = length || Math.max(1, byteLength);
      assert(byteLength <= reqLength, 'byte array longer than desired length');
      assert(reqLength > 0, 'Requested array length <= 0');
      this.strip();
      var littleEndian = endian === 'le';
      var res = new ArrayType(reqLength);
      var b, i;
      var q = this.clone();

      if (!littleEndian) {
        // Assume big-endian
        for (i = 0; i < reqLength - byteLength; i++) {
          res[i] = 0;
        }

        for (i = 0; !q.isZero(); i++) {
          b = q.andln(0xff);
          q.iushrn(8);
          res[reqLength - i - 1] = b;
        }
      } else {
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(0xff);
          q.iushrn(8);
          res[i] = b;
        }

        for (; i < reqLength; i++) {
          res[i] = 0;
        }
      }

      return res;
    };

    if (Math.clz32) {
      BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;

        if (t >= 0x1000) {
          r += 13;
          t >>>= 13;
        }

        if (t >= 0x40) {
          r += 7;
          t >>>= 7;
        }

        if (t >= 0x8) {
          r += 4;
          t >>>= 4;
        }

        if (t >= 0x02) {
          r += 2;
          t >>>= 2;
        }

        return r + t;
      };
    }

    BN.prototype._zeroBits = function _zeroBits(w) {
      // Short-cut
      if (w === 0) return 26;
      var t = w;
      var r = 0;

      if ((t & 0x1fff) === 0) {
        r += 13;
        t >>>= 13;
      }

      if ((t & 0x7f) === 0) {
        r += 7;
        t >>>= 7;
      }

      if ((t & 0xf) === 0) {
        r += 4;
        t >>>= 4;
      }

      if ((t & 0x3) === 0) {
        r += 2;
        t >>>= 2;
      }

      if ((t & 0x1) === 0) {
        r++;
      }

      return r;
    }; // Return number of used bits in a BN


    BN.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];

      var hi = this._countBits(w);

      return (this.length - 1) * 26 + hi;
    };

    function toBitArray(num) {
      var w = new Array(num.bitLength());

      for (var bit = 0; bit < w.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
      }

      return w;
    } // Number of trailing zero bits


    BN.prototype.zeroBits = function zeroBits() {
      if (this.isZero()) return 0;
      var r = 0;

      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);

        r += b;
        if (b !== 26) break;
      }

      return r;
    };

    BN.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };

    BN.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }

      return this.clone();
    };

    BN.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }

      return this.clone();
    };

    BN.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    }; // Return negative clone of `this`


    BN.prototype.neg = function neg() {
      return this.clone().ineg();
    };

    BN.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }

      return this;
    }; // Or `num` with `this` in-place


    BN.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }

      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }

      return this.strip();
    };

    BN.prototype.ior = function ior(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuor(num);
    }; // Or `num` with `this`


    BN.prototype.or = function or(num) {
      if (this.length > num.length) return this.clone().ior(num);
      return num.clone().ior(this);
    };

    BN.prototype.uor = function uor(num) {
      if (this.length > num.length) return this.clone().iuor(num);
      return num.clone().iuor(this);
    }; // And `num` with `this` in-place


    BN.prototype.iuand = function iuand(num) {
      // b = min-length(num, this)
      var b;

      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }

      this.length = b.length;
      return this.strip();
    };

    BN.prototype.iand = function iand(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuand(num);
    }; // And `num` with `this`


    BN.prototype.and = function and(num) {
      if (this.length > num.length) return this.clone().iand(num);
      return num.clone().iand(this);
    };

    BN.prototype.uand = function uand(num) {
      if (this.length > num.length) return this.clone().iuand(num);
      return num.clone().iuand(this);
    }; // Xor `num` with `this` in-place


    BN.prototype.iuxor = function iuxor(num) {
      // a.length > b.length
      var a;
      var b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }

      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = a.length;
      return this.strip();
    };

    BN.prototype.ixor = function ixor(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuxor(num);
    }; // Xor `num` with `this`


    BN.prototype.xor = function xor(num) {
      if (this.length > num.length) return this.clone().ixor(num);
      return num.clone().ixor(this);
    };

    BN.prototype.uxor = function uxor(num) {
      if (this.length > num.length) return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    }; // Not ``this`` with ``width`` bitwidth


    BN.prototype.inotn = function inotn(width) {
      assert(typeof width === 'number' && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26; // Extend the buffer with leading zeroes

      this._expand(bytesNeeded);

      if (bitsLeft > 0) {
        bytesNeeded--;
      } // Handle complete words


      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 0x3ffffff;
      } // Handle the residue


      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
      } // And remove leading zeroes


      return this.strip();
    };

    BN.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    }; // Set `bit` of `this`


    BN.prototype.setn = function setn(bit, val) {
      assert(typeof bit === 'number' && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;

      this._expand(off + 1);

      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }

      return this.strip();
    }; // Add `num` to `this` in-place


    BN.prototype.iadd = function iadd(num) {
      var r; // negative + positive

      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r = this.isub(num);
        this.negative ^= 1;
        return this._normSign(); // positive + negative
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r = this.isub(num);
        num.negative = 1;
        return r._normSign();
      } // a.length > b.length


      var a, b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      this.length = a.length;

      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++; // Copy the rest of the words
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      return this;
    }; // Add `num` to `this`


    BN.prototype.add = function add(num) {
      var res;

      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }

      if (this.length > num.length) return this.clone().iadd(num);
      return num.clone().iadd(this);
    }; // Subtract `num` from `this` in-place


    BN.prototype.isub = function isub(num) {
      // this - (-num) = this + num
      if (num.negative !== 0) {
        num.negative = 0;
        var r = this.iadd(num);
        num.negative = 1;
        return r._normSign(); // -this - num = -(this + num)
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      } // At this point both numbers are positive


      var cmp = this.cmp(num); // Optimization - zeroify

      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      } // a > b


      var a, b;

      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      } // Copy rest of the words


      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = Math.max(this.length, i);

      if (a !== this) {
        this.negative = 1;
      }

      return this.strip();
    }; // Subtract `num` from `this`


    BN.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };

    function smallMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      var len = self.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0; // Peel one iteration (compiler can't do it, because of code complexity)

      var a = self.words[0] | 0;
      var b = num.words[0] | 0;
      var r = a * b;
      var lo = r & 0x3ffffff;
      var carry = r / 0x4000000 | 0;
      out.words[0] = lo;

      for (var k = 1; k < len; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = carry >>> 26;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j | 0;
          a = self.words[i] | 0;
          b = num.words[j] | 0;
          r = a * b + rword;
          ncarry += r / 0x4000000 | 0;
          rword = r & 0x3ffffff;
        }

        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }

      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }

      return out.strip();
    } // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).


    var comb10MulTo = function comb10MulTo(self, num, out) {
      var a = self.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 0x1fff;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 0x1fff;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 0x1fff;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 0x1fff;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 0x1fff;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 0x1fff;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 0x1fff;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 0x1fff;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 0x1fff;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 0x1fff;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 0x1fff;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 0x1fff;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 0x1fff;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 0x1fff;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 0x1fff;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 0x1fff;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 0x1fff;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 0x1fff;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 0x1fff;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 0x1fff;
      var bh9 = b9 >>> 13;
      out.negative = self.negative ^ num.negative;
      out.length = 19;
      /* k = 0 */

      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 0x3ffffff;
      /* k = 1 */

      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 0x3ffffff;
      /* k = 2 */

      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 0x3ffffff;
      /* k = 3 */

      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 0x3ffffff;
      /* k = 4 */

      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 0x3ffffff;
      /* k = 5 */

      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 0x3ffffff;
      /* k = 6 */

      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 0x3ffffff;
      /* k = 7 */

      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 0x3ffffff;
      /* k = 8 */

      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 0x3ffffff;
      /* k = 9 */

      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 0x3ffffff;
      /* k = 10 */

      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 0x3ffffff;
      /* k = 11 */

      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 0x3ffffff;
      /* k = 12 */

      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 0x3ffffff;
      /* k = 13 */

      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 0x3ffffff;
      /* k = 14 */

      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 0x3ffffff;
      /* k = 15 */

      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 0x3ffffff;
      /* k = 16 */

      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 0x3ffffff;
      /* k = 17 */

      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 0x3ffffff;
      /* k = 18 */

      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 0x3ffffff;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;

      if (c !== 0) {
        o[19] = c;
        out.length++;
      }

      return out;
    }; // Polyfill comb


    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }

    function bigMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      out.length = self.length + num.length;
      var carry = 0;
      var hncarry = 0;

      for (var k = 0; k < out.length - 1; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self.words[i] | 0;
          var b = num.words[j] | 0;
          var r = a * b;
          var lo = r & 0x3ffffff;
          ncarry = ncarry + (r / 0x4000000 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 0x3ffffff;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 0x3ffffff;
        }

        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }

      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }

      return out.strip();
    }

    function jumboMulTo(self, num, out) {
      var fftm = new FFTM();
      return fftm.mulp(self, num, out);
    }

    BN.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;

      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }

      return res;
    }; // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion


    function FFTM(x, y) {
      this.x = x;
      this.y = y;
    }

    FFTM.prototype.makeRBT = function makeRBT(N) {
      var t = new Array(N);
      var l = BN.prototype._countBits(N) - 1;

      for (var i = 0; i < N; i++) {
        t[i] = this.revBin(i, l, N);
      }

      return t;
    }; // Returns binary-reversed representation of `x`


    FFTM.prototype.revBin = function revBin(x, l, N) {
      if (x === 0 || x === N - 1) return x;
      var rb = 0;

      for (var i = 0; i < l; i++) {
        rb |= (x & 1) << l - i - 1;
        x >>= 1;
      }

      return rb;
    }; // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm


    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
      for (var i = 0; i < N; i++) {
        rtws[i] = rws[rbt[i]];
        itws[i] = iws[rbt[i]];
      }
    };

    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
      this.permute(rbt, rws, iws, rtws, itws, N);

      for (var s = 1; s < N; s <<= 1) {
        var l = s << 1;
        var rtwdf = Math.cos(2 * Math.PI / l);
        var itwdf = Math.sin(2 * Math.PI / l);

        for (var p = 0; p < N; p += l) {
          var rtwdf_ = rtwdf;
          var itwdf_ = itwdf;

          for (var j = 0; j < s; j++) {
            var re = rtws[p + j];
            var ie = itws[p + j];
            var ro = rtws[p + j + s];
            var io = itws[p + j + s];
            var rx = rtwdf_ * ro - itwdf_ * io;
            io = rtwdf_ * io + itwdf_ * ro;
            ro = rx;
            rtws[p + j] = re + ro;
            itws[p + j] = ie + io;
            rtws[p + j + s] = re - ro;
            itws[p + j + s] = ie - io;
            /* jshint maxdepth : false */

            if (j !== l) {
              rx = rtwdf * rtwdf_ - itwdf * itwdf_;
              itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
              rtwdf_ = rx;
            }
          }
        }
      }
    };

    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
      var N = Math.max(m, n) | 1;
      var odd = N & 1;
      var i = 0;

      for (N = N / 2 | 0; N; N = N >>> 1) {
        i++;
      }

      return 1 << i + 1 + odd;
    };

    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
      if (N <= 1) return;

      for (var i = 0; i < N / 2; i++) {
        var t = rws[i];
        rws[i] = rws[N - i - 1];
        rws[N - i - 1] = t;
        t = iws[i];
        iws[i] = -iws[N - i - 1];
        iws[N - i - 1] = -t;
      }
    };

    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
      var carry = 0;

      for (var i = 0; i < N / 2; i++) {
        var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
        ws[i] = w & 0x3ffffff;

        if (w < 0x4000000) {
          carry = 0;
        } else {
          carry = w / 0x4000000 | 0;
        }
      }

      return ws;
    };

    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
      var carry = 0;

      for (var i = 0; i < len; i++) {
        carry = carry + (ws[i] | 0);
        rws[2 * i] = carry & 0x1fff;
        carry = carry >>> 13;
        rws[2 * i + 1] = carry & 0x1fff;
        carry = carry >>> 13;
      } // Pad with zeroes


      for (i = 2 * len; i < N; ++i) {
        rws[i] = 0;
      }

      assert(carry === 0);
      assert((carry & ~0x1fff) === 0);
    };

    FFTM.prototype.stub = function stub(N) {
      var ph = new Array(N);

      for (var i = 0; i < N; i++) {
        ph[i] = 0;
      }

      return ph;
    };

    FFTM.prototype.mulp = function mulp(x, y, out) {
      var N = 2 * this.guessLen13b(x.length, y.length);
      var rbt = this.makeRBT(N);

      var _ = this.stub(N);

      var rws = new Array(N);
      var rwst = new Array(N);
      var iwst = new Array(N);
      var nrws = new Array(N);
      var nrwst = new Array(N);
      var niwst = new Array(N);
      var rmws = out.words;
      rmws.length = N;
      this.convert13b(x.words, x.length, rws, N);
      this.convert13b(y.words, y.length, nrws, N);
      this.transform(rws, _, rwst, iwst, N, rbt);
      this.transform(nrws, _, nrwst, niwst, N, rbt);

      for (var i = 0; i < N; i++) {
        var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
        iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
        rwst[i] = rx;
      }

      this.conjugate(rwst, iwst, N);
      this.transform(rwst, iwst, rmws, _, N, rbt);
      this.conjugate(rmws, _, N);
      this.normalize13b(rmws, N);
      out.negative = x.negative ^ y.negative;
      out.length = x.length + y.length;
      return out.strip();
    }; // Multiply `this` by `num`


    BN.prototype.mul = function mul(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    }; // Multiply employing FFT


    BN.prototype.mulf = function mulf(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    }; // In-place Multiplication


    BN.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };

    BN.prototype.imuln = function imuln(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000); // Carry

      var carry = 0;

      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
        carry >>= 26;
        carry += w / 0x4000000 | 0; // NOTE: lo is 27bit maximum

        carry += lo >>> 26;
        this.words[i] = lo & 0x3ffffff;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return this;
    };

    BN.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    }; // `this` * `this`


    BN.prototype.sqr = function sqr() {
      return this.mul(this);
    }; // `this` * `this` in-place


    BN.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    }; // Math.pow(`this`, `num`)


    BN.prototype.pow = function pow(num) {
      var w = toBitArray(num);
      if (w.length === 0) return new BN(1); // Skip leading zeroes

      var res = this;

      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0) break;
      }

      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0) continue;
          res = res.mul(q);
        }
      }

      return res;
    }; // Shift-left in-place


    BN.prototype.iushln = function iushln(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
      var i;

      if (r !== 0) {
        var carry = 0;

        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = (this.words[i] | 0) - newCarry << r;
          this.words[i] = c | carry;
          carry = newCarry >>> 26 - r;
        }

        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }

      if (s !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s] = this.words[i];
        }

        for (i = 0; i < s; i++) {
          this.words[i] = 0;
        }

        this.length += s;
      }

      return this.strip();
    };

    BN.prototype.ishln = function ishln(bits) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushln(bits);
    }; // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits


    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert(typeof bits === 'number' && bits >= 0);
      var h;

      if (hint) {
        h = (hint - hint % 26) / 26;
      } else {
        h = 0;
      }

      var r = bits % 26;
      var s = Math.min((bits - r) / 26, this.length);
      var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
      var maskedWords = extended;
      h -= s;
      h = Math.max(0, h); // Extended mode, copy masked part

      if (maskedWords) {
        for (var i = 0; i < s; i++) {
          maskedWords.words[i] = this.words[i];
        }

        maskedWords.length = s;
      }

      if (s === 0) ; else if (this.length > s) {
        this.length -= s;

        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }

      var carry = 0;

      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = carry << 26 - r | word >>> r;
        carry = word & mask;
      } // Push carried bits as a mask


      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }

      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }

      return this.strip();
    };

    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    }; // Shift-left


    BN.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };

    BN.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    }; // Shift-right


    BN.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };

    BN.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    }; // Test if n bit is set


    BN.prototype.testn = function testn(bit) {
      assert(typeof bit === 'number' && bit >= 0);
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) return false; // Check bit and return

      var w = this.words[s];
      return !!(w & q);
    }; // Return only lowers bits of number (in-place)


    BN.prototype.imaskn = function imaskn(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      assert(this.negative === 0, 'imaskn works only with positive numbers');

      if (this.length <= s) {
        return this;
      }

      if (r !== 0) {
        s++;
      }

      this.length = Math.min(s, this.length);

      if (r !== 0) {
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        this.words[this.length - 1] &= mask;
      }

      return this.strip();
    }; // Return only lowers bits of number


    BN.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    }; // Add plain number `num` to `this`


    BN.prototype.iaddn = function iaddn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.isubn(-num); // Possible sign change

      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) < num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }

        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      } // Add without checks


      return this._iaddn(num);
    };

    BN.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num; // Carry

      for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
        this.words[i] -= 0x4000000;

        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }

      this.length = Math.max(this.length, i + 1);
      return this;
    }; // Subtract plain number `num` from `this`


    BN.prototype.isubn = function isubn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.iaddn(-num);

      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }

      this.words[0] -= num;

      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        // Carry
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 0x4000000;
          this.words[i + 1] -= 1;
        }
      }

      return this.strip();
    };

    BN.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };

    BN.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };

    BN.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };

    BN.prototype.abs = function abs() {
      return this.clone().iabs();
    };

    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
      var len = num.length + shift;
      var i;

      this._expand(len);

      var w;
      var carry = 0;

      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul;
        w -= right & 0x3ffffff;
        carry = (w >> 26) - (right / 0x4000000 | 0);
        this.words[i + shift] = w & 0x3ffffff;
      }

      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 0x3ffffff;
      }

      if (carry === 0) return this.strip(); // Subtraction overflow

      assert(carry === -1);
      carry = 0;

      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 0x3ffffff;
      }

      this.negative = 1;
      return this.strip();
    };

    BN.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num; // Normalize

      var bhi = b.words[b.length - 1] | 0;

      var bhiBits = this._countBits(bhi);

      shift = 26 - bhiBits;

      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      } // Initialize quotient


      var m = a.length - b.length;
      var q;

      if (mode !== 'mod') {
        q = new BN(null);
        q.length = m + 1;
        q.words = new Array(q.length);

        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }

      var diff = a.clone()._ishlnsubmul(b, 1, m);

      if (diff.negative === 0) {
        a = diff;

        if (q) {
          q.words[m] = 1;
        }
      }

      for (var j = m - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0); // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
        // (0x7ffffff)

        qj = Math.min(qj / bhi | 0, 0x3ffffff);

        a._ishlnsubmul(b, qj, j);

        while (a.negative !== 0) {
          qj--;
          a.negative = 0;

          a._ishlnsubmul(b, 1, j);

          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }

        if (q) {
          q.words[j] = qj;
        }
      }

      if (q) {
        q.strip();
      }

      a.strip(); // Denormalize

      if (mode !== 'div' && shift !== 0) {
        a.iushrn(shift);
      }

      return {
        div: q || null,
        mod: a
      };
    }; // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested


    BN.prototype.divmod = function divmod(num, mode, positive) {
      assert(!num.isZero());

      if (this.isZero()) {
        return {
          div: new BN(0),
          mod: new BN(0)
        };
      }

      var div, mod, res;

      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }

        return {
          div: div,
          mod: mod
        };
      }

      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        return {
          div: div,
          mod: res.mod
        };
      }

      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }

        return {
          div: res.div,
          mod: mod
        };
      } // Both numbers are positive at this point
      // Strip both numbers to approximate shift value


      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN(0),
          mod: this
        };
      } // Very short reduction


      if (num.length === 1) {
        if (mode === 'div') {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }

        if (mode === 'mod') {
          return {
            div: null,
            mod: new BN(this.modn(num.words[0]))
          };
        }

        return {
          div: this.divn(num.words[0]),
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return this._wordDiv(num, mode);
    }; // Find `this` / `num`


    BN.prototype.div = function div(num) {
      return this.divmod(num, 'div', false).div;
    }; // Find `this` % `num`


    BN.prototype.mod = function mod(num) {
      return this.divmod(num, 'mod', false).mod;
    };

    BN.prototype.umod = function umod(num) {
      return this.divmod(num, 'mod', true).mod;
    }; // Find Round(`this` / `num`)


    BN.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num); // Fast case - exact division

      if (dm.mod.isZero()) return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half); // Round down

      if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div; // Round up

      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };

    BN.prototype.modn = function modn(num) {
      assert(num <= 0x3ffffff);
      var p = (1 << 26) % num;
      var acc = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }

      return acc;
    }; // In-place division by number


    BN.prototype.idivn = function idivn(num) {
      assert(num <= 0x3ffffff);
      var carry = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 0x4000000;
        this.words[i] = w / num | 0;
        carry = w % num;
      }

      return this.strip();
    };

    BN.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };

    BN.prototype.egcd = function egcd(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var x = this;
      var y = p.clone();

      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      } // A * x + B * y = x


      var A = new BN(1);
      var B = new BN(0); // C * x + D * y = y

      var C = new BN(0);
      var D = new BN(1);
      var g = 0;

      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }

      var yp = y.clone();
      var xp = x.clone();

      while (!x.isZero()) {
        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          x.iushrn(i);

          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }

            A.iushrn(1);
            B.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          y.iushrn(j);

          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }

            C.iushrn(1);
            D.iushrn(1);
          }
        }

        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }

      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    }; // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed


    BN.prototype._invmp = function _invmp(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var a = this;
      var b = p.clone();

      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }

      var x1 = new BN(1);
      var x2 = new BN(0);
      var delta = b.clone();

      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          a.iushrn(i);

          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }

            x1.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          b.iushrn(j);

          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }

            x2.iushrn(1);
          }
        }

        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }

      var res;

      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }

      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }

      return res;
    };

    BN.prototype.gcd = function gcd(num) {
      if (this.isZero()) return num.abs();
      if (num.isZero()) return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0; // Remove common factor of two

      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }

      do {
        while (a.isEven()) {
          a.iushrn(1);
        }

        while (b.isEven()) {
          b.iushrn(1);
        }

        var r = a.cmp(b);

        if (r < 0) {
          // Swap `a` and `b` to make `a` always bigger than `b`
          var t = a;
          a = b;
          b = t;
        } else if (r === 0 || b.cmpn(1) === 0) {
          break;
        }

        a.isub(b);
      } while (true);

      return b.iushln(shift);
    }; // Invert number in the field F(num)


    BN.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };

    BN.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };

    BN.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    }; // And first word and num


    BN.prototype.andln = function andln(num) {
      return this.words[0] & num;
    }; // Increment at the bit position in-line


    BN.prototype.bincn = function bincn(bit) {
      assert(typeof bit === 'number');
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) {
        this._expand(s + 1);

        this.words[s] |= q;
        return this;
      } // Add bit and propagate, if needed


      var carry = q;

      for (var i = s; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 0x3ffffff;
        this.words[i] = w;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return this;
    };

    BN.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };

    BN.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative) return -1;
      if (this.negative === 0 && negative) return 1;
      this.strip();
      var res;

      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }

        assert(num <= 0x3ffffff, 'Number is too big');
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }

      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`


    BN.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0) return -1;
      if (this.negative === 0 && num.negative !== 0) return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Unsigned comparison


    BN.prototype.ucmp = function ucmp(num) {
      // At this point both numbers have the same sign
      if (this.length > num.length) return 1;
      if (this.length < num.length) return -1;
      var res = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b) continue;

        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }

        break;
      }

      return res;
    };

    BN.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };

    BN.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };

    BN.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };

    BN.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };

    BN.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };

    BN.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };

    BN.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };

    BN.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };

    BN.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };

    BN.prototype.eq = function eq(num) {
      return this.cmp(num) === 0;
    }; //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //


    BN.red = function red(num) {
      return new Red(num);
    };

    BN.prototype.toRed = function toRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      assert(this.negative === 0, 'red works only with positives');
      return ctx.convertTo(this)._forceRed(ctx);
    };

    BN.prototype.fromRed = function fromRed() {
      assert(this.red, 'fromRed works only with numbers in reduction context');
      return this.red.convertFrom(this);
    };

    BN.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };

    BN.prototype.forceRed = function forceRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      return this._forceRed(ctx);
    };

    BN.prototype.redAdd = function redAdd(num) {
      assert(this.red, 'redAdd works only with red numbers');
      return this.red.add(this, num);
    };

    BN.prototype.redIAdd = function redIAdd(num) {
      assert(this.red, 'redIAdd works only with red numbers');
      return this.red.iadd(this, num);
    };

    BN.prototype.redSub = function redSub(num) {
      assert(this.red, 'redSub works only with red numbers');
      return this.red.sub(this, num);
    };

    BN.prototype.redISub = function redISub(num) {
      assert(this.red, 'redISub works only with red numbers');
      return this.red.isub(this, num);
    };

    BN.prototype.redShl = function redShl(num) {
      assert(this.red, 'redShl works only with red numbers');
      return this.red.shl(this, num);
    };

    BN.prototype.redMul = function redMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.mul(this, num);
    };

    BN.prototype.redIMul = function redIMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.imul(this, num);
    };

    BN.prototype.redSqr = function redSqr() {
      assert(this.red, 'redSqr works only with red numbers');

      this.red._verify1(this);

      return this.red.sqr(this);
    };

    BN.prototype.redISqr = function redISqr() {
      assert(this.red, 'redISqr works only with red numbers');

      this.red._verify1(this);

      return this.red.isqr(this);
    }; // Square root over p


    BN.prototype.redSqrt = function redSqrt() {
      assert(this.red, 'redSqrt works only with red numbers');

      this.red._verify1(this);

      return this.red.sqrt(this);
    };

    BN.prototype.redInvm = function redInvm() {
      assert(this.red, 'redInvm works only with red numbers');

      this.red._verify1(this);

      return this.red.invm(this);
    }; // Return negative clone of `this` % `red modulo`


    BN.prototype.redNeg = function redNeg() {
      assert(this.red, 'redNeg works only with red numbers');

      this.red._verify1(this);

      return this.red.neg(this);
    };

    BN.prototype.redPow = function redPow(num) {
      assert(this.red && !num.red, 'redPow(normalNum)');

      this.red._verify1(this);

      return this.red.pow(this, num);
    }; // Prime numbers with efficient reduction


    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    }; // Pseudo-Mersenne prime

    function MPrime(name, p) {
      // P = 2 ^ N - K
      this.name = name;
      this.p = new BN(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }

    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };

    MPrime.prototype.ireduce = function ireduce(num) {
      // Assumes that `num` is less than `P^2`
      // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
      var r = num;
      var rlen;

      do {
        this.split(r, this.tmp);
        r = this.imulK(r);
        r = r.iadd(this.tmp);
        rlen = r.bitLength();
      } while (rlen > this.n);

      var cmp = rlen < this.n ? -1 : r.ucmp(this.p);

      if (cmp === 0) {
        r.words[0] = 0;
        r.length = 1;
      } else if (cmp > 0) {
        r.isub(this.p);
      } else {
        r.strip();
      }

      return r;
    };

    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };

    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };

    function K256() {
      MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }

    inherits(K256, MPrime);

    K256.prototype.split = function split(input, output) {
      // 256 = 9 * 26 + 22
      var mask = 0x3fffff;
      var outLen = Math.min(input.length, 9);

      for (var i = 0; i < outLen; i++) {
        output.words[i] = input.words[i];
      }

      output.length = outLen;

      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      } // Shift by 9 limbs


      var prev = input.words[9];
      output.words[output.length++] = prev & mask;

      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }

      prev >>>= 22;
      input.words[i - 10] = prev;

      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };

    K256.prototype.imulK = function imulK(num) {
      // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2; // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390

      var lo = 0;

      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 0x3d1;
        num.words[i] = lo & 0x3ffffff;
        lo = w * 0x40 + (lo / 0x4000000 | 0);
      } // Fast length reduction


      if (num.words[num.length - 1] === 0) {
        num.length--;

        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }

      return num;
    };

    function P224() {
      MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }

    inherits(P224, MPrime);

    function P192() {
      MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }

    inherits(P192, MPrime);

    function P25519() {
      // 2 ^ 255 - 19
      MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }

    inherits(P25519, MPrime);

    P25519.prototype.imulK = function imulK(num) {
      // K = 0x13
      var carry = 0;

      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 0x13 + carry;
        var lo = hi & 0x3ffffff;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }

      if (carry !== 0) {
        num.words[num.length++] = carry;
      }

      return num;
    }; // Exported mostly for testing purposes, use plain name instead


    BN._prime = function prime(name) {
      // Cached version of prime
      if (primes[name]) return primes[name];
      var prime;

      if (name === 'k256') {
        prime = new K256();
      } else if (name === 'p224') {
        prime = new P224();
      } else if (name === 'p192') {
        prime = new P192();
      } else if (name === 'p25519') {
        prime = new P25519();
      } else {
        throw new Error('Unknown prime ' + name);
      }

      primes[name] = prime;
      return prime;
    }; //
    // Base reduction engine
    //


    function Red(m) {
      if (typeof m === 'string') {
        var prime = BN._prime(m);

        this.m = prime.p;
        this.prime = prime;
      } else {
        assert(m.gtn(1), 'modulus must be greater than 1');
        this.m = m;
        this.prime = null;
      }
    }

    Red.prototype._verify1 = function _verify1(a) {
      assert(a.negative === 0, 'red works only with positives');
      assert(a.red, 'red works only with red numbers');
    };

    Red.prototype._verify2 = function _verify2(a, b) {
      assert((a.negative | b.negative) === 0, 'red works only with positives');
      assert(a.red && a.red === b.red, 'red works only with red numbers');
    };

    Red.prototype.imod = function imod(a) {
      if (this.prime) return this.prime.ireduce(a)._forceRed(this);
      return a.umod(this.m)._forceRed(this);
    };

    Red.prototype.neg = function neg(a) {
      if (a.isZero()) {
        return a.clone();
      }

      return this.m.sub(a)._forceRed(this);
    };

    Red.prototype.add = function add(a, b) {
      this._verify2(a, b);

      var res = a.add(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.iadd = function iadd(a, b) {
      this._verify2(a, b);

      var res = a.iadd(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res;
    };

    Red.prototype.sub = function sub(a, b) {
      this._verify2(a, b);

      var res = a.sub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.isub = function isub(a, b) {
      this._verify2(a, b);

      var res = a.isub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res;
    };

    Red.prototype.shl = function shl(a, num) {
      this._verify1(a);

      return this.imod(a.ushln(num));
    };

    Red.prototype.imul = function imul(a, b) {
      this._verify2(a, b);

      return this.imod(a.imul(b));
    };

    Red.prototype.mul = function mul(a, b) {
      this._verify2(a, b);

      return this.imod(a.mul(b));
    };

    Red.prototype.isqr = function isqr(a) {
      return this.imul(a, a.clone());
    };

    Red.prototype.sqr = function sqr(a) {
      return this.mul(a, a);
    };

    Red.prototype.sqrt = function sqrt(a) {
      if (a.isZero()) return a.clone();
      var mod3 = this.m.andln(3);
      assert(mod3 % 2 === 1); // Fast case

      if (mod3 === 3) {
        var pow = this.m.add(new BN(1)).iushrn(2);
        return this.pow(a, pow);
      } // Tonelli-Shanks algorithm (Totally unoptimized and slow)
      //
      // Find Q and S, that Q * 2 ^ S = (P - 1)


      var q = this.m.subn(1);
      var s = 0;

      while (!q.isZero() && q.andln(1) === 0) {
        s++;
        q.iushrn(1);
      }

      assert(!q.isZero());
      var one = new BN(1).toRed(this);
      var nOne = one.redNeg(); // Find quadratic non-residue
      // NOTE: Max is such because of generalized Riemann hypothesis.

      var lpow = this.m.subn(1).iushrn(1);
      var z = this.m.bitLength();
      z = new BN(2 * z * z).toRed(this);

      while (this.pow(z, lpow).cmp(nOne) !== 0) {
        z.redIAdd(nOne);
      }

      var c = this.pow(z, q);
      var r = this.pow(a, q.addn(1).iushrn(1));
      var t = this.pow(a, q);
      var m = s;

      while (t.cmp(one) !== 0) {
        var tmp = t;

        for (var i = 0; tmp.cmp(one) !== 0; i++) {
          tmp = tmp.redSqr();
        }

        assert(i < m);
        var b = this.pow(c, new BN(1).iushln(m - i - 1));
        r = r.redMul(b);
        c = b.redSqr();
        t = t.redMul(c);
        m = i;
      }

      return r;
    };

    Red.prototype.invm = function invm(a) {
      var inv = a._invmp(this.m);

      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };

    Red.prototype.pow = function pow(a, num) {
      if (num.isZero()) return new BN(1);
      if (num.cmpn(1) === 0) return a.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN(1).toRed(this);
      wnd[1] = a;

      for (var i = 2; i < wnd.length; i++) {
        wnd[i] = this.mul(wnd[i - 1], a);
      }

      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;

      if (start === 0) {
        start = 26;
      }

      for (i = num.length - 1; i >= 0; i--) {
        var word = num.words[i];

        for (var j = start - 1; j >= 0; j--) {
          var bit = word >> j & 1;

          if (res !== wnd[0]) {
            res = this.sqr(res);
          }

          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }

          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }

        start = 26;
      }

      return res;
    };

    Red.prototype.convertTo = function convertTo(num) {
      var r = num.umod(this.m);
      return r === num ? r.clone() : r;
    };

    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    }; //
    // Montgomery method engine
    //


    BN.mont = function mont(num) {
      return new Mont(num);
    };

    function Mont(m) {
      Red.call(this, m);
      this.shift = this.m.bitLength();

      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }

      this.r = new BN(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }

    inherits(Mont, Red);

    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };

    Mont.prototype.convertFrom = function convertFrom(num) {
      var r = this.imod(num.mul(this.rinv));
      r.red = null;
      return r;
    };

    Mont.prototype.imul = function imul(a, b) {
      if (a.isZero() || b.isZero()) {
        a.words[0] = 0;
        a.length = 1;
        return a;
      }

      var t = a.imul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.mul = function mul(a, b) {
      if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
      var t = a.mul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.invm = function invm(a) {
      // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
      var res = this.imod(a._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn$3);

var src$2 = function isHexPrefixed(str) {
  if (typeof str !== 'string') {
    throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + _typeof(str) + ", while checking isHexPrefixed.");
  }

  return str.slice(0, 2) === '0x';
};

var isHexPrefixed$2 = src$2;
/**
 * Removes '0x' from a given `String` is present
 * @param {String} str the string value
 * @return {String|Optional} a string by pass if necessary
 */

var src$1 = function stripHexPrefix(str) {
  if (typeof str !== 'string') {
    return str;
  }

  return isHexPrefixed$2(str) ? str.slice(2) : str;
};

var BN$e = bn$3.exports;
var stripHexPrefix$3 = src$1;
/**
 * Returns a BN object, converts a number value to a BN
 * @param {String|Number|Object} `arg` input a string number, hex string number, number, BigNumber or BN object
 * @return {Object} `output` BN object of the number
 * @throws if the argument is not an array, object that isn't a bignumber, not a string number or number
 */

var src = function numberToBN(arg) {
  if (typeof arg === 'string' || typeof arg === 'number') {
    var multiplier = new BN$e(1); // eslint-disable-line

    var formattedString = String(arg).toLowerCase().trim();
    var isHexPrefixed = formattedString.substr(0, 2) === '0x' || formattedString.substr(0, 3) === '-0x';
    var stringArg = stripHexPrefix$3(formattedString); // eslint-disable-line

    if (stringArg.substr(0, 1) === '-') {
      stringArg = stripHexPrefix$3(stringArg.slice(1));
      multiplier = new BN$e(-1, 10);
    }

    stringArg = stringArg === '' ? '0' : stringArg;

    if (!stringArg.match(/^-?[0-9]+$/) && stringArg.match(/^[0-9A-Fa-f]+$/) || stringArg.match(/^[a-fA-F]+$/) || isHexPrefixed === true && stringArg.match(/^[0-9A-Fa-f]+$/)) {
      return new BN$e(stringArg, 16).mul(multiplier);
    }

    if ((stringArg.match(/^-?[0-9]+$/) || stringArg === '') && isHexPrefixed === false) {
      return new BN$e(stringArg, 10).mul(multiplier);
    }
  } else if (_typeof(arg) === 'object' && arg.toString && !arg.pop && !arg.push) {
    if (arg.toString(10).match(/^-?[0-9]+$/) && (arg.mul || arg.dividedToIntegerBy)) {
      return new BN$e(arg.toString(10), 10);
    }
  }

  throw new Error('[number-to-bn] while converting number ' + JSON.stringify(arg) + ' to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported.');
};

var BN$d = bn$4.exports;
var numberToBN$1 = src;
var zero = new BN$d(0);
var negative1 = new BN$d(-1); // complete ethereum unit map

var unitMap = {
  'noether': '0',
  // eslint-disable-line
  'wei': '1',
  // eslint-disable-line
  'kwei': '1000',
  // eslint-disable-line
  'Kwei': '1000',
  // eslint-disable-line
  'babbage': '1000',
  // eslint-disable-line
  'femtoether': '1000',
  // eslint-disable-line
  'mwei': '1000000',
  // eslint-disable-line
  'Mwei': '1000000',
  // eslint-disable-line
  'lovelace': '1000000',
  // eslint-disable-line
  'picoether': '1000000',
  // eslint-disable-line
  'gwei': '1000000000',
  // eslint-disable-line
  'Gwei': '1000000000',
  // eslint-disable-line
  'shannon': '1000000000',
  // eslint-disable-line
  'nanoether': '1000000000',
  // eslint-disable-line
  'nano': '1000000000',
  // eslint-disable-line
  'szabo': '1000000000000',
  // eslint-disable-line
  'microether': '1000000000000',
  // eslint-disable-line
  'micro': '1000000000000',
  // eslint-disable-line
  'finney': '1000000000000000',
  // eslint-disable-line
  'milliether': '1000000000000000',
  // eslint-disable-line
  'milli': '1000000000000000',
  // eslint-disable-line
  'ether': '1000000000000000000',
  // eslint-disable-line
  'kether': '1000000000000000000000',
  // eslint-disable-line
  'grand': '1000000000000000000000',
  // eslint-disable-line
  'mether': '1000000000000000000000000',
  // eslint-disable-line
  'gether': '1000000000000000000000000000',
  // eslint-disable-line
  'tether': '1000000000000000000000000000000'
};
/**
 * Returns value of unit in Wei
 *
 * @method getValueOfUnit
 * @param {String} unit the unit to convert to, default ether
 * @returns {BigNumber} value of the unit (in Wei)
 * @throws error if the unit is not correct:w
 */

function getValueOfUnit(unitInput) {
  var unit = unitInput ? unitInput.toLowerCase() : 'ether';
  var unitValue = unitMap[unit]; // eslint-disable-line

  if (typeof unitValue !== 'string') {
    throw new Error('[ethjs-unit] the unit provided ' + unitInput + ' doesn\'t exists, please use the one of the following units ' + JSON.stringify(unitMap, null, 2));
  }

  return new BN$d(unitValue, 10);
}

function numberToString(arg) {
  if (typeof arg === 'string') {
    if (!arg.match(/^-?[0-9.]+$/)) {
      throw new Error('while converting number to string, invalid number value \'' + arg + '\', should be a number matching (^-?[0-9.]+).');
    }

    return arg;
  } else if (typeof arg === 'number') {
    return String(arg);
  } else if (_typeof(arg) === 'object' && arg.toString && (arg.toTwos || arg.dividedToIntegerBy)) {
    if (arg.toPrecision) {
      return String(arg.toPrecision());
    } else {
      // eslint-disable-line
      return arg.toString(10);
    }
  }

  throw new Error('while converting number to string, invalid number value \'' + arg + '\' type ' + _typeof(arg) + '.');
}

function fromWei$1(weiInput, unit, optionsInput) {
  var wei = numberToBN$1(weiInput); // eslint-disable-line

  var negative = wei.lt(zero); // eslint-disable-line

  var base = getValueOfUnit(unit);
  var baseLength = unitMap[unit].length - 1 || 1;
  var options = optionsInput || {};

  if (negative) {
    wei = wei.mul(negative1);
  }

  var fraction = wei.mod(base).toString(10); // eslint-disable-line

  while (fraction.length < baseLength) {
    fraction = '0' + fraction;
  }

  if (!options.pad) {
    fraction = fraction.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  }

  var whole = wei.div(base).toString(10); // eslint-disable-line

  if (options.commify) {
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  var value = '' + whole + (fraction == '0' ? '' : '.' + fraction); // eslint-disable-line

  if (negative) {
    value = '-' + value;
  }

  return value;
}

function toWei$1(etherInput, unit) {
  var ether = numberToString(etherInput); // eslint-disable-line

  var base = getValueOfUnit(unit);
  var baseLength = unitMap[unit].length - 1 || 1; // Is it negative?

  var negative = ether.substring(0, 1) === '-'; // eslint-disable-line

  if (negative) {
    ether = ether.substring(1);
  }

  if (ether === '.') {
    throw new Error('[ethjs-unit] while converting number ' + etherInput + ' to wei, invalid value');
  } // Split it into a whole and fractional part


  var comps = ether.split('.'); // eslint-disable-line

  if (comps.length > 2) {
    throw new Error('[ethjs-unit] while converting number ' + etherInput + ' to wei,  too many decimal points');
  }

  var whole = comps[0],
      fraction = comps[1]; // eslint-disable-line

  if (!whole) {
    whole = '0';
  }

  if (!fraction) {
    fraction = '0';
  }

  if (fraction.length > baseLength) {
    throw new Error('[ethjs-unit] while converting number ' + etherInput + ' to wei, too many decimal places');
  }

  while (fraction.length < baseLength) {
    fraction += '0';
  }

  whole = new BN$d(whole);
  fraction = new BN$d(fraction);
  var wei = whole.mul(base).add(fraction); // eslint-disable-line

  if (negative) {
    wei = wei.mul(negative1);
  }

  return new BN$d(wei.toString(10), 10);
}

var lib$2 = {
  unitMap: unitMap,
  numberToString: numberToString,
  getValueOfUnit: getValueOfUnit,
  fromWei: fromWei$1,
  toWei: toWei$1
};

var bn$2 = {exports: {}};

(function (module) {
  (function (module, exports) {

    function assert(val, msg) {
      if (!val) throw new Error(msg || 'Assertion failed');
    } // Could use `inherits` module, but don't want to move from single file
    // architecture yet.


    function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    } // BN


    function BN(number, base, endian) {
      if (BN.isBN(number)) {
        return number;
      }

      this.negative = 0;
      this.words = null;
      this.length = 0; // Reduction context

      this.red = null;

      if (number !== null) {
        if (base === 'le' || base === 'be') {
          endian = base;
          base = 10;
        }

        this._init(number || 0, base || 10, endian || 'be');
      }
    }

    if (_typeof(module) === 'object') {
      module.exports = BN;
    } else {
      exports.BN = BN;
    }

    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;

    try {
      if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
        Buffer = window.Buffer;
      } else {
        Buffer = require('buffer').Buffer;
      }
    } catch (e) {}

    BN.isBN = function isBN(num) {
      if (num instanceof BN) {
        return true;
      }

      return num !== null && _typeof(num) === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };

    BN.max = function max(left, right) {
      if (left.cmp(right) > 0) return left;
      return right;
    };

    BN.min = function min(left, right) {
      if (left.cmp(right) < 0) return left;
      return right;
    };

    BN.prototype._init = function init(number, base, endian) {
      if (typeof number === 'number') {
        return this._initNumber(number, base, endian);
      }

      if (_typeof(number) === 'object') {
        return this._initArray(number, base, endian);
      }

      if (base === 'hex') {
        base = 16;
      }

      assert(base === (base | 0) && base >= 2 && base <= 36);
      number = number.toString().replace(/\s+/g, '');
      var start = 0;

      if (number[0] === '-') {
        start++;
        this.negative = 1;
      }

      if (start < number.length) {
        if (base === 16) {
          this._parseHex(number, start, endian);
        } else {
          this._parseBase(number, base, start);

          if (endian === 'le') {
            this._initArray(this.toArray(), base, endian);
          }
        }
      }
    };

    BN.prototype._initNumber = function _initNumber(number, base, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }

      if (number < 0x4000000) {
        this.words = [number & 0x3ffffff];
        this.length = 1;
      } else if (number < 0x10000000000000) {
        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
        this.length = 2;
      } else {
        assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)

        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
        this.length = 3;
      }

      if (endian !== 'le') return; // Reverse the bytes

      this._initArray(this.toArray(), base, endian);
    };

    BN.prototype._initArray = function _initArray(number, base, endian) {
      // Perhaps a Uint8Array
      assert(typeof number.length === 'number');

      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }

      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }

      var j, w;
      var off = 0;

      if (endian === 'be') {
        for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
          w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === 'le') {
        for (i = 0, j = 0; i < number.length; i += 3) {
          w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }

      return this.strip();
    };

    function parseHex4Bits(string, index) {
      var c = string.charCodeAt(index); // 'A' - 'F'

      if (c >= 65 && c <= 70) {
        return c - 55; // 'a' - 'f'
      } else if (c >= 97 && c <= 102) {
        return c - 87; // '0' - '9'
      } else {
        return c - 48 & 0xf;
      }
    }

    function parseHexByte(string, lowerBound, index) {
      var r = parseHex4Bits(string, index);

      if (index - 1 >= lowerBound) {
        r |= parseHex4Bits(string, index - 1) << 4;
      }

      return r;
    }

    BN.prototype._parseHex = function _parseHex(number, start, endian) {
      // Create possibly bigger array to ensure that it fits the number
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      } // 24-bits chunks


      var off = 0;
      var j = 0;
      var w;

      if (endian === 'be') {
        for (i = number.length - 1; i >= start; i -= 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 0x3ffffff;

          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      } else {
        var parseLength = number.length - start;

        for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 0x3ffffff;

          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      }

      this.strip();
    };

    function parseBase(str, start, end, mul) {
      var r = 0;
      var len = Math.min(str.length, end);

      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r *= mul; // 'a'

        if (c >= 49) {
          r += c - 49 + 0xa; // 'A'
        } else if (c >= 17) {
          r += c - 17 + 0xa; // '0' - '9'
        } else {
          r += c;
        }
      }

      return r;
    }

    BN.prototype._parseBase = function _parseBase(number, base, start) {
      // Initialize as zero
      this.words = [0];
      this.length = 1; // Find length of limb in base

      for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
        limbLen++;
      }

      limbLen--;
      limbPow = limbPow / base | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;

      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number, i, i + limbLen, base);
        this.imuln(limbPow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }

      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i, number.length, base);

        for (i = 0; i < mod; i++) {
          pow *= base;
        }

        this.imuln(pow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }

      this.strip();
    };

    BN.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }

      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };

    BN.prototype.clone = function clone() {
      var r = new BN(null);
      this.copy(r);
      return r;
    };

    BN.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }

      return this;
    }; // Remove leading `0` from `this`


    BN.prototype.strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }

      return this._normSign();
    };

    BN.prototype._normSign = function _normSign() {
      // -0 = 0
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }

      return this;
    };

    BN.prototype.inspect = function inspect() {
      return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    };
    /*
     var zeros = [];
    var groupSizes = [];
    var groupBases = [];
     var s = '';
    var i = -1;
    while (++i < BN.wordSize) {
      zeros[i] = s;
      s += '0';
    }
    groupSizes[0] = 0;
    groupSizes[1] = 0;
    groupBases[0] = 0;
    groupBases[1] = 0;
    var base = 2 - 1;
    while (++base < 36 + 1) {
      var groupSize = 0;
      var groupBase = 1;
      while (groupBase < (1 << BN.wordSize) / base) {
        groupBase *= base;
        groupSize += 1;
      }
      groupSizes[base] = groupSize;
      groupBases[base] = groupBase;
    }
     */


    var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
    var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    BN.prototype.toString = function toString(base, padding) {
      base = base || 10;
      padding = padding | 0 || 1;
      var out;

      if (base === 16 || base === 'hex') {
        out = '';
        var off = 0;
        var carry = 0;

        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = ((w << off | carry) & 0xffffff).toString(16);
          carry = w >>> 24 - off & 0xffffff;

          if (carry !== 0 || i !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }

          off += 2;

          if (off >= 26) {
            off -= 26;
            i--;
          }
        }

        if (carry !== 0) {
          out = carry.toString(16) + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      if (base === (base | 0) && base >= 2 && base <= 36) {
        // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
        var groupSize = groupSizes[base]; // var groupBase = Math.pow(base, groupSize);

        var groupBase = groupBases[base];
        out = '';
        var c = this.clone();
        c.negative = 0;

        while (!c.isZero()) {
          var r = c.modn(groupBase).toString(base);
          c = c.idivn(groupBase);

          if (!c.isZero()) {
            out = zeros[groupSize - r.length] + r + out;
          } else {
            out = r + out;
          }
        }

        if (this.isZero()) {
          out = '0' + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      assert(false, 'Base should be between 2 and 36');
    };

    BN.prototype.toNumber = function toNumber() {
      var ret = this.words[0];

      if (this.length === 2) {
        ret += this.words[1] * 0x4000000;
      } else if (this.length === 3 && this.words[2] === 0x01) {
        // NOTE: at this stage it is known that the top bit is set
        ret += 0x10000000000000 + this.words[1] * 0x4000000;
      } else if (this.length > 2) {
        assert(false, 'Number can only safely store up to 53 bits');
      }

      return this.negative !== 0 ? -ret : ret;
    };

    BN.prototype.toJSON = function toJSON() {
      return this.toString(16);
    };

    BN.prototype.toBuffer = function toBuffer(endian, length) {
      assert(typeof Buffer !== 'undefined');
      return this.toArrayLike(Buffer, endian, length);
    };

    BN.prototype.toArray = function toArray(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };

    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      var byteLength = this.byteLength();
      var reqLength = length || Math.max(1, byteLength);
      assert(byteLength <= reqLength, 'byte array longer than desired length');
      assert(reqLength > 0, 'Requested array length <= 0');
      this.strip();
      var littleEndian = endian === 'le';
      var res = new ArrayType(reqLength);
      var b, i;
      var q = this.clone();

      if (!littleEndian) {
        // Assume big-endian
        for (i = 0; i < reqLength - byteLength; i++) {
          res[i] = 0;
        }

        for (i = 0; !q.isZero(); i++) {
          b = q.andln(0xff);
          q.iushrn(8);
          res[reqLength - i - 1] = b;
        }
      } else {
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(0xff);
          q.iushrn(8);
          res[i] = b;
        }

        for (; i < reqLength; i++) {
          res[i] = 0;
        }
      }

      return res;
    };

    if (Math.clz32) {
      BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;

        if (t >= 0x1000) {
          r += 13;
          t >>>= 13;
        }

        if (t >= 0x40) {
          r += 7;
          t >>>= 7;
        }

        if (t >= 0x8) {
          r += 4;
          t >>>= 4;
        }

        if (t >= 0x02) {
          r += 2;
          t >>>= 2;
        }

        return r + t;
      };
    }

    BN.prototype._zeroBits = function _zeroBits(w) {
      // Short-cut
      if (w === 0) return 26;
      var t = w;
      var r = 0;

      if ((t & 0x1fff) === 0) {
        r += 13;
        t >>>= 13;
      }

      if ((t & 0x7f) === 0) {
        r += 7;
        t >>>= 7;
      }

      if ((t & 0xf) === 0) {
        r += 4;
        t >>>= 4;
      }

      if ((t & 0x3) === 0) {
        r += 2;
        t >>>= 2;
      }

      if ((t & 0x1) === 0) {
        r++;
      }

      return r;
    }; // Return number of used bits in a BN


    BN.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];

      var hi = this._countBits(w);

      return (this.length - 1) * 26 + hi;
    };

    function toBitArray(num) {
      var w = new Array(num.bitLength());

      for (var bit = 0; bit < w.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
      }

      return w;
    } // Number of trailing zero bits


    BN.prototype.zeroBits = function zeroBits() {
      if (this.isZero()) return 0;
      var r = 0;

      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);

        r += b;
        if (b !== 26) break;
      }

      return r;
    };

    BN.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };

    BN.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }

      return this.clone();
    };

    BN.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }

      return this.clone();
    };

    BN.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    }; // Return negative clone of `this`


    BN.prototype.neg = function neg() {
      return this.clone().ineg();
    };

    BN.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }

      return this;
    }; // Or `num` with `this` in-place


    BN.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }

      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }

      return this.strip();
    };

    BN.prototype.ior = function ior(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuor(num);
    }; // Or `num` with `this`


    BN.prototype.or = function or(num) {
      if (this.length > num.length) return this.clone().ior(num);
      return num.clone().ior(this);
    };

    BN.prototype.uor = function uor(num) {
      if (this.length > num.length) return this.clone().iuor(num);
      return num.clone().iuor(this);
    }; // And `num` with `this` in-place


    BN.prototype.iuand = function iuand(num) {
      // b = min-length(num, this)
      var b;

      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }

      this.length = b.length;
      return this.strip();
    };

    BN.prototype.iand = function iand(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuand(num);
    }; // And `num` with `this`


    BN.prototype.and = function and(num) {
      if (this.length > num.length) return this.clone().iand(num);
      return num.clone().iand(this);
    };

    BN.prototype.uand = function uand(num) {
      if (this.length > num.length) return this.clone().iuand(num);
      return num.clone().iuand(this);
    }; // Xor `num` with `this` in-place


    BN.prototype.iuxor = function iuxor(num) {
      // a.length > b.length
      var a;
      var b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }

      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = a.length;
      return this.strip();
    };

    BN.prototype.ixor = function ixor(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuxor(num);
    }; // Xor `num` with `this`


    BN.prototype.xor = function xor(num) {
      if (this.length > num.length) return this.clone().ixor(num);
      return num.clone().ixor(this);
    };

    BN.prototype.uxor = function uxor(num) {
      if (this.length > num.length) return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    }; // Not ``this`` with ``width`` bitwidth


    BN.prototype.inotn = function inotn(width) {
      assert(typeof width === 'number' && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26; // Extend the buffer with leading zeroes

      this._expand(bytesNeeded);

      if (bitsLeft > 0) {
        bytesNeeded--;
      } // Handle complete words


      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 0x3ffffff;
      } // Handle the residue


      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
      } // And remove leading zeroes


      return this.strip();
    };

    BN.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    }; // Set `bit` of `this`


    BN.prototype.setn = function setn(bit, val) {
      assert(typeof bit === 'number' && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;

      this._expand(off + 1);

      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }

      return this.strip();
    }; // Add `num` to `this` in-place


    BN.prototype.iadd = function iadd(num) {
      var r; // negative + positive

      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r = this.isub(num);
        this.negative ^= 1;
        return this._normSign(); // positive + negative
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r = this.isub(num);
        num.negative = 1;
        return r._normSign();
      } // a.length > b.length


      var a, b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      this.length = a.length;

      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++; // Copy the rest of the words
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      return this;
    }; // Add `num` to `this`


    BN.prototype.add = function add(num) {
      var res;

      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }

      if (this.length > num.length) return this.clone().iadd(num);
      return num.clone().iadd(this);
    }; // Subtract `num` from `this` in-place


    BN.prototype.isub = function isub(num) {
      // this - (-num) = this + num
      if (num.negative !== 0) {
        num.negative = 0;
        var r = this.iadd(num);
        num.negative = 1;
        return r._normSign(); // -this - num = -(this + num)
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      } // At this point both numbers are positive


      var cmp = this.cmp(num); // Optimization - zeroify

      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      } // a > b


      var a, b;

      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      } // Copy rest of the words


      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = Math.max(this.length, i);

      if (a !== this) {
        this.negative = 1;
      }

      return this.strip();
    }; // Subtract `num` from `this`


    BN.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };

    function smallMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      var len = self.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0; // Peel one iteration (compiler can't do it, because of code complexity)

      var a = self.words[0] | 0;
      var b = num.words[0] | 0;
      var r = a * b;
      var lo = r & 0x3ffffff;
      var carry = r / 0x4000000 | 0;
      out.words[0] = lo;

      for (var k = 1; k < len; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = carry >>> 26;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j | 0;
          a = self.words[i] | 0;
          b = num.words[j] | 0;
          r = a * b + rword;
          ncarry += r / 0x4000000 | 0;
          rword = r & 0x3ffffff;
        }

        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }

      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }

      return out.strip();
    } // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).


    var comb10MulTo = function comb10MulTo(self, num, out) {
      var a = self.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 0x1fff;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 0x1fff;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 0x1fff;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 0x1fff;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 0x1fff;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 0x1fff;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 0x1fff;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 0x1fff;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 0x1fff;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 0x1fff;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 0x1fff;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 0x1fff;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 0x1fff;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 0x1fff;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 0x1fff;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 0x1fff;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 0x1fff;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 0x1fff;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 0x1fff;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 0x1fff;
      var bh9 = b9 >>> 13;
      out.negative = self.negative ^ num.negative;
      out.length = 19;
      /* k = 0 */

      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 0x3ffffff;
      /* k = 1 */

      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 0x3ffffff;
      /* k = 2 */

      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 0x3ffffff;
      /* k = 3 */

      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 0x3ffffff;
      /* k = 4 */

      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 0x3ffffff;
      /* k = 5 */

      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 0x3ffffff;
      /* k = 6 */

      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 0x3ffffff;
      /* k = 7 */

      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 0x3ffffff;
      /* k = 8 */

      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 0x3ffffff;
      /* k = 9 */

      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 0x3ffffff;
      /* k = 10 */

      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 0x3ffffff;
      /* k = 11 */

      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 0x3ffffff;
      /* k = 12 */

      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 0x3ffffff;
      /* k = 13 */

      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 0x3ffffff;
      /* k = 14 */

      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 0x3ffffff;
      /* k = 15 */

      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 0x3ffffff;
      /* k = 16 */

      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 0x3ffffff;
      /* k = 17 */

      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 0x3ffffff;
      /* k = 18 */

      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 0x3ffffff;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;

      if (c !== 0) {
        o[19] = c;
        out.length++;
      }

      return out;
    }; // Polyfill comb


    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }

    function bigMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      out.length = self.length + num.length;
      var carry = 0;
      var hncarry = 0;

      for (var k = 0; k < out.length - 1; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self.words[i] | 0;
          var b = num.words[j] | 0;
          var r = a * b;
          var lo = r & 0x3ffffff;
          ncarry = ncarry + (r / 0x4000000 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 0x3ffffff;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 0x3ffffff;
        }

        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }

      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }

      return out.strip();
    }

    function jumboMulTo(self, num, out) {
      var fftm = new FFTM();
      return fftm.mulp(self, num, out);
    }

    BN.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;

      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }

      return res;
    }; // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion


    function FFTM(x, y) {
      this.x = x;
      this.y = y;
    }

    FFTM.prototype.makeRBT = function makeRBT(N) {
      var t = new Array(N);
      var l = BN.prototype._countBits(N) - 1;

      for (var i = 0; i < N; i++) {
        t[i] = this.revBin(i, l, N);
      }

      return t;
    }; // Returns binary-reversed representation of `x`


    FFTM.prototype.revBin = function revBin(x, l, N) {
      if (x === 0 || x === N - 1) return x;
      var rb = 0;

      for (var i = 0; i < l; i++) {
        rb |= (x & 1) << l - i - 1;
        x >>= 1;
      }

      return rb;
    }; // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm


    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
      for (var i = 0; i < N; i++) {
        rtws[i] = rws[rbt[i]];
        itws[i] = iws[rbt[i]];
      }
    };

    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
      this.permute(rbt, rws, iws, rtws, itws, N);

      for (var s = 1; s < N; s <<= 1) {
        var l = s << 1;
        var rtwdf = Math.cos(2 * Math.PI / l);
        var itwdf = Math.sin(2 * Math.PI / l);

        for (var p = 0; p < N; p += l) {
          var rtwdf_ = rtwdf;
          var itwdf_ = itwdf;

          for (var j = 0; j < s; j++) {
            var re = rtws[p + j];
            var ie = itws[p + j];
            var ro = rtws[p + j + s];
            var io = itws[p + j + s];
            var rx = rtwdf_ * ro - itwdf_ * io;
            io = rtwdf_ * io + itwdf_ * ro;
            ro = rx;
            rtws[p + j] = re + ro;
            itws[p + j] = ie + io;
            rtws[p + j + s] = re - ro;
            itws[p + j + s] = ie - io;
            /* jshint maxdepth : false */

            if (j !== l) {
              rx = rtwdf * rtwdf_ - itwdf * itwdf_;
              itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
              rtwdf_ = rx;
            }
          }
        }
      }
    };

    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
      var N = Math.max(m, n) | 1;
      var odd = N & 1;
      var i = 0;

      for (N = N / 2 | 0; N; N = N >>> 1) {
        i++;
      }

      return 1 << i + 1 + odd;
    };

    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
      if (N <= 1) return;

      for (var i = 0; i < N / 2; i++) {
        var t = rws[i];
        rws[i] = rws[N - i - 1];
        rws[N - i - 1] = t;
        t = iws[i];
        iws[i] = -iws[N - i - 1];
        iws[N - i - 1] = -t;
      }
    };

    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
      var carry = 0;

      for (var i = 0; i < N / 2; i++) {
        var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
        ws[i] = w & 0x3ffffff;

        if (w < 0x4000000) {
          carry = 0;
        } else {
          carry = w / 0x4000000 | 0;
        }
      }

      return ws;
    };

    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
      var carry = 0;

      for (var i = 0; i < len; i++) {
        carry = carry + (ws[i] | 0);
        rws[2 * i] = carry & 0x1fff;
        carry = carry >>> 13;
        rws[2 * i + 1] = carry & 0x1fff;
        carry = carry >>> 13;
      } // Pad with zeroes


      for (i = 2 * len; i < N; ++i) {
        rws[i] = 0;
      }

      assert(carry === 0);
      assert((carry & ~0x1fff) === 0);
    };

    FFTM.prototype.stub = function stub(N) {
      var ph = new Array(N);

      for (var i = 0; i < N; i++) {
        ph[i] = 0;
      }

      return ph;
    };

    FFTM.prototype.mulp = function mulp(x, y, out) {
      var N = 2 * this.guessLen13b(x.length, y.length);
      var rbt = this.makeRBT(N);

      var _ = this.stub(N);

      var rws = new Array(N);
      var rwst = new Array(N);
      var iwst = new Array(N);
      var nrws = new Array(N);
      var nrwst = new Array(N);
      var niwst = new Array(N);
      var rmws = out.words;
      rmws.length = N;
      this.convert13b(x.words, x.length, rws, N);
      this.convert13b(y.words, y.length, nrws, N);
      this.transform(rws, _, rwst, iwst, N, rbt);
      this.transform(nrws, _, nrwst, niwst, N, rbt);

      for (var i = 0; i < N; i++) {
        var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
        iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
        rwst[i] = rx;
      }

      this.conjugate(rwst, iwst, N);
      this.transform(rwst, iwst, rmws, _, N, rbt);
      this.conjugate(rmws, _, N);
      this.normalize13b(rmws, N);
      out.negative = x.negative ^ y.negative;
      out.length = x.length + y.length;
      return out.strip();
    }; // Multiply `this` by `num`


    BN.prototype.mul = function mul(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    }; // Multiply employing FFT


    BN.prototype.mulf = function mulf(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    }; // In-place Multiplication


    BN.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };

    BN.prototype.imuln = function imuln(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000); // Carry

      var carry = 0;

      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
        carry >>= 26;
        carry += w / 0x4000000 | 0; // NOTE: lo is 27bit maximum

        carry += lo >>> 26;
        this.words[i] = lo & 0x3ffffff;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return this;
    };

    BN.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    }; // `this` * `this`


    BN.prototype.sqr = function sqr() {
      return this.mul(this);
    }; // `this` * `this` in-place


    BN.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    }; // Math.pow(`this`, `num`)


    BN.prototype.pow = function pow(num) {
      var w = toBitArray(num);
      if (w.length === 0) return new BN(1); // Skip leading zeroes

      var res = this;

      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0) break;
      }

      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0) continue;
          res = res.mul(q);
        }
      }

      return res;
    }; // Shift-left in-place


    BN.prototype.iushln = function iushln(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
      var i;

      if (r !== 0) {
        var carry = 0;

        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = (this.words[i] | 0) - newCarry << r;
          this.words[i] = c | carry;
          carry = newCarry >>> 26 - r;
        }

        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }

      if (s !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s] = this.words[i];
        }

        for (i = 0; i < s; i++) {
          this.words[i] = 0;
        }

        this.length += s;
      }

      return this.strip();
    };

    BN.prototype.ishln = function ishln(bits) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushln(bits);
    }; // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits


    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert(typeof bits === 'number' && bits >= 0);
      var h;

      if (hint) {
        h = (hint - hint % 26) / 26;
      } else {
        h = 0;
      }

      var r = bits % 26;
      var s = Math.min((bits - r) / 26, this.length);
      var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
      var maskedWords = extended;
      h -= s;
      h = Math.max(0, h); // Extended mode, copy masked part

      if (maskedWords) {
        for (var i = 0; i < s; i++) {
          maskedWords.words[i] = this.words[i];
        }

        maskedWords.length = s;
      }

      if (s === 0) ; else if (this.length > s) {
        this.length -= s;

        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }

      var carry = 0;

      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = carry << 26 - r | word >>> r;
        carry = word & mask;
      } // Push carried bits as a mask


      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }

      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }

      return this.strip();
    };

    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    }; // Shift-left


    BN.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };

    BN.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    }; // Shift-right


    BN.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };

    BN.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    }; // Test if n bit is set


    BN.prototype.testn = function testn(bit) {
      assert(typeof bit === 'number' && bit >= 0);
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) return false; // Check bit and return

      var w = this.words[s];
      return !!(w & q);
    }; // Return only lowers bits of number (in-place)


    BN.prototype.imaskn = function imaskn(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      assert(this.negative === 0, 'imaskn works only with positive numbers');

      if (this.length <= s) {
        return this;
      }

      if (r !== 0) {
        s++;
      }

      this.length = Math.min(s, this.length);

      if (r !== 0) {
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        this.words[this.length - 1] &= mask;
      }

      return this.strip();
    }; // Return only lowers bits of number


    BN.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    }; // Add plain number `num` to `this`


    BN.prototype.iaddn = function iaddn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.isubn(-num); // Possible sign change

      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) < num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }

        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      } // Add without checks


      return this._iaddn(num);
    };

    BN.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num; // Carry

      for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
        this.words[i] -= 0x4000000;

        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }

      this.length = Math.max(this.length, i + 1);
      return this;
    }; // Subtract plain number `num` from `this`


    BN.prototype.isubn = function isubn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.iaddn(-num);

      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }

      this.words[0] -= num;

      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        // Carry
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 0x4000000;
          this.words[i + 1] -= 1;
        }
      }

      return this.strip();
    };

    BN.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };

    BN.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };

    BN.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };

    BN.prototype.abs = function abs() {
      return this.clone().iabs();
    };

    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
      var len = num.length + shift;
      var i;

      this._expand(len);

      var w;
      var carry = 0;

      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul;
        w -= right & 0x3ffffff;
        carry = (w >> 26) - (right / 0x4000000 | 0);
        this.words[i + shift] = w & 0x3ffffff;
      }

      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 0x3ffffff;
      }

      if (carry === 0) return this.strip(); // Subtraction overflow

      assert(carry === -1);
      carry = 0;

      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 0x3ffffff;
      }

      this.negative = 1;
      return this.strip();
    };

    BN.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num; // Normalize

      var bhi = b.words[b.length - 1] | 0;

      var bhiBits = this._countBits(bhi);

      shift = 26 - bhiBits;

      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      } // Initialize quotient


      var m = a.length - b.length;
      var q;

      if (mode !== 'mod') {
        q = new BN(null);
        q.length = m + 1;
        q.words = new Array(q.length);

        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }

      var diff = a.clone()._ishlnsubmul(b, 1, m);

      if (diff.negative === 0) {
        a = diff;

        if (q) {
          q.words[m] = 1;
        }
      }

      for (var j = m - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0); // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
        // (0x7ffffff)

        qj = Math.min(qj / bhi | 0, 0x3ffffff);

        a._ishlnsubmul(b, qj, j);

        while (a.negative !== 0) {
          qj--;
          a.negative = 0;

          a._ishlnsubmul(b, 1, j);

          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }

        if (q) {
          q.words[j] = qj;
        }
      }

      if (q) {
        q.strip();
      }

      a.strip(); // Denormalize

      if (mode !== 'div' && shift !== 0) {
        a.iushrn(shift);
      }

      return {
        div: q || null,
        mod: a
      };
    }; // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested


    BN.prototype.divmod = function divmod(num, mode, positive) {
      assert(!num.isZero());

      if (this.isZero()) {
        return {
          div: new BN(0),
          mod: new BN(0)
        };
      }

      var div, mod, res;

      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }

        return {
          div: div,
          mod: mod
        };
      }

      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        return {
          div: div,
          mod: res.mod
        };
      }

      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }

        return {
          div: res.div,
          mod: mod
        };
      } // Both numbers are positive at this point
      // Strip both numbers to approximate shift value


      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN(0),
          mod: this
        };
      } // Very short reduction


      if (num.length === 1) {
        if (mode === 'div') {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }

        if (mode === 'mod') {
          return {
            div: null,
            mod: new BN(this.modn(num.words[0]))
          };
        }

        return {
          div: this.divn(num.words[0]),
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return this._wordDiv(num, mode);
    }; // Find `this` / `num`


    BN.prototype.div = function div(num) {
      return this.divmod(num, 'div', false).div;
    }; // Find `this` % `num`


    BN.prototype.mod = function mod(num) {
      return this.divmod(num, 'mod', false).mod;
    };

    BN.prototype.umod = function umod(num) {
      return this.divmod(num, 'mod', true).mod;
    }; // Find Round(`this` / `num`)


    BN.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num); // Fast case - exact division

      if (dm.mod.isZero()) return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half); // Round down

      if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div; // Round up

      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };

    BN.prototype.modn = function modn(num) {
      assert(num <= 0x3ffffff);
      var p = (1 << 26) % num;
      var acc = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }

      return acc;
    }; // In-place division by number


    BN.prototype.idivn = function idivn(num) {
      assert(num <= 0x3ffffff);
      var carry = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 0x4000000;
        this.words[i] = w / num | 0;
        carry = w % num;
      }

      return this.strip();
    };

    BN.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };

    BN.prototype.egcd = function egcd(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var x = this;
      var y = p.clone();

      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      } // A * x + B * y = x


      var A = new BN(1);
      var B = new BN(0); // C * x + D * y = y

      var C = new BN(0);
      var D = new BN(1);
      var g = 0;

      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }

      var yp = y.clone();
      var xp = x.clone();

      while (!x.isZero()) {
        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          x.iushrn(i);

          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }

            A.iushrn(1);
            B.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          y.iushrn(j);

          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }

            C.iushrn(1);
            D.iushrn(1);
          }
        }

        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }

      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    }; // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed


    BN.prototype._invmp = function _invmp(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var a = this;
      var b = p.clone();

      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }

      var x1 = new BN(1);
      var x2 = new BN(0);
      var delta = b.clone();

      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          a.iushrn(i);

          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }

            x1.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          b.iushrn(j);

          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }

            x2.iushrn(1);
          }
        }

        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }

      var res;

      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }

      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }

      return res;
    };

    BN.prototype.gcd = function gcd(num) {
      if (this.isZero()) return num.abs();
      if (num.isZero()) return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0; // Remove common factor of two

      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }

      do {
        while (a.isEven()) {
          a.iushrn(1);
        }

        while (b.isEven()) {
          b.iushrn(1);
        }

        var r = a.cmp(b);

        if (r < 0) {
          // Swap `a` and `b` to make `a` always bigger than `b`
          var t = a;
          a = b;
          b = t;
        } else if (r === 0 || b.cmpn(1) === 0) {
          break;
        }

        a.isub(b);
      } while (true);

      return b.iushln(shift);
    }; // Invert number in the field F(num)


    BN.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };

    BN.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };

    BN.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    }; // And first word and num


    BN.prototype.andln = function andln(num) {
      return this.words[0] & num;
    }; // Increment at the bit position in-line


    BN.prototype.bincn = function bincn(bit) {
      assert(typeof bit === 'number');
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) {
        this._expand(s + 1);

        this.words[s] |= q;
        return this;
      } // Add bit and propagate, if needed


      var carry = q;

      for (var i = s; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 0x3ffffff;
        this.words[i] = w;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return this;
    };

    BN.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };

    BN.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative) return -1;
      if (this.negative === 0 && negative) return 1;
      this.strip();
      var res;

      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }

        assert(num <= 0x3ffffff, 'Number is too big');
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }

      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`


    BN.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0) return -1;
      if (this.negative === 0 && num.negative !== 0) return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Unsigned comparison


    BN.prototype.ucmp = function ucmp(num) {
      // At this point both numbers have the same sign
      if (this.length > num.length) return 1;
      if (this.length < num.length) return -1;
      var res = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b) continue;

        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }

        break;
      }

      return res;
    };

    BN.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };

    BN.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };

    BN.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };

    BN.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };

    BN.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };

    BN.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };

    BN.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };

    BN.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };

    BN.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };

    BN.prototype.eq = function eq(num) {
      return this.cmp(num) === 0;
    }; //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //


    BN.red = function red(num) {
      return new Red(num);
    };

    BN.prototype.toRed = function toRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      assert(this.negative === 0, 'red works only with positives');
      return ctx.convertTo(this)._forceRed(ctx);
    };

    BN.prototype.fromRed = function fromRed() {
      assert(this.red, 'fromRed works only with numbers in reduction context');
      return this.red.convertFrom(this);
    };

    BN.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };

    BN.prototype.forceRed = function forceRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      return this._forceRed(ctx);
    };

    BN.prototype.redAdd = function redAdd(num) {
      assert(this.red, 'redAdd works only with red numbers');
      return this.red.add(this, num);
    };

    BN.prototype.redIAdd = function redIAdd(num) {
      assert(this.red, 'redIAdd works only with red numbers');
      return this.red.iadd(this, num);
    };

    BN.prototype.redSub = function redSub(num) {
      assert(this.red, 'redSub works only with red numbers');
      return this.red.sub(this, num);
    };

    BN.prototype.redISub = function redISub(num) {
      assert(this.red, 'redISub works only with red numbers');
      return this.red.isub(this, num);
    };

    BN.prototype.redShl = function redShl(num) {
      assert(this.red, 'redShl works only with red numbers');
      return this.red.shl(this, num);
    };

    BN.prototype.redMul = function redMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.mul(this, num);
    };

    BN.prototype.redIMul = function redIMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.imul(this, num);
    };

    BN.prototype.redSqr = function redSqr() {
      assert(this.red, 'redSqr works only with red numbers');

      this.red._verify1(this);

      return this.red.sqr(this);
    };

    BN.prototype.redISqr = function redISqr() {
      assert(this.red, 'redISqr works only with red numbers');

      this.red._verify1(this);

      return this.red.isqr(this);
    }; // Square root over p


    BN.prototype.redSqrt = function redSqrt() {
      assert(this.red, 'redSqrt works only with red numbers');

      this.red._verify1(this);

      return this.red.sqrt(this);
    };

    BN.prototype.redInvm = function redInvm() {
      assert(this.red, 'redInvm works only with red numbers');

      this.red._verify1(this);

      return this.red.invm(this);
    }; // Return negative clone of `this` % `red modulo`


    BN.prototype.redNeg = function redNeg() {
      assert(this.red, 'redNeg works only with red numbers');

      this.red._verify1(this);

      return this.red.neg(this);
    };

    BN.prototype.redPow = function redPow(num) {
      assert(this.red && !num.red, 'redPow(normalNum)');

      this.red._verify1(this);

      return this.red.pow(this, num);
    }; // Prime numbers with efficient reduction


    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    }; // Pseudo-Mersenne prime

    function MPrime(name, p) {
      // P = 2 ^ N - K
      this.name = name;
      this.p = new BN(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }

    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };

    MPrime.prototype.ireduce = function ireduce(num) {
      // Assumes that `num` is less than `P^2`
      // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
      var r = num;
      var rlen;

      do {
        this.split(r, this.tmp);
        r = this.imulK(r);
        r = r.iadd(this.tmp);
        rlen = r.bitLength();
      } while (rlen > this.n);

      var cmp = rlen < this.n ? -1 : r.ucmp(this.p);

      if (cmp === 0) {
        r.words[0] = 0;
        r.length = 1;
      } else if (cmp > 0) {
        r.isub(this.p);
      } else {
        if (r.strip !== undefined) {
          // r is BN v4 instance
          r.strip();
        } else {
          // r is BN v5 instance
          r._strip();
        }
      }

      return r;
    };

    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };

    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };

    function K256() {
      MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }

    inherits(K256, MPrime);

    K256.prototype.split = function split(input, output) {
      // 256 = 9 * 26 + 22
      var mask = 0x3fffff;
      var outLen = Math.min(input.length, 9);

      for (var i = 0; i < outLen; i++) {
        output.words[i] = input.words[i];
      }

      output.length = outLen;

      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      } // Shift by 9 limbs


      var prev = input.words[9];
      output.words[output.length++] = prev & mask;

      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }

      prev >>>= 22;
      input.words[i - 10] = prev;

      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };

    K256.prototype.imulK = function imulK(num) {
      // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2; // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390

      var lo = 0;

      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 0x3d1;
        num.words[i] = lo & 0x3ffffff;
        lo = w * 0x40 + (lo / 0x4000000 | 0);
      } // Fast length reduction


      if (num.words[num.length - 1] === 0) {
        num.length--;

        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }

      return num;
    };

    function P224() {
      MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }

    inherits(P224, MPrime);

    function P192() {
      MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }

    inherits(P192, MPrime);

    function P25519() {
      // 2 ^ 255 - 19
      MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }

    inherits(P25519, MPrime);

    P25519.prototype.imulK = function imulK(num) {
      // K = 0x13
      var carry = 0;

      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 0x13 + carry;
        var lo = hi & 0x3ffffff;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }

      if (carry !== 0) {
        num.words[num.length++] = carry;
      }

      return num;
    }; // Exported mostly for testing purposes, use plain name instead


    BN._prime = function prime(name) {
      // Cached version of prime
      if (primes[name]) return primes[name];
      var prime;

      if (name === 'k256') {
        prime = new K256();
      } else if (name === 'p224') {
        prime = new P224();
      } else if (name === 'p192') {
        prime = new P192();
      } else if (name === 'p25519') {
        prime = new P25519();
      } else {
        throw new Error('Unknown prime ' + name);
      }

      primes[name] = prime;
      return prime;
    }; //
    // Base reduction engine
    //


    function Red(m) {
      if (typeof m === 'string') {
        var prime = BN._prime(m);

        this.m = prime.p;
        this.prime = prime;
      } else {
        assert(m.gtn(1), 'modulus must be greater than 1');
        this.m = m;
        this.prime = null;
      }
    }

    Red.prototype._verify1 = function _verify1(a) {
      assert(a.negative === 0, 'red works only with positives');
      assert(a.red, 'red works only with red numbers');
    };

    Red.prototype._verify2 = function _verify2(a, b) {
      assert((a.negative | b.negative) === 0, 'red works only with positives');
      assert(a.red && a.red === b.red, 'red works only with red numbers');
    };

    Red.prototype.imod = function imod(a) {
      if (this.prime) return this.prime.ireduce(a)._forceRed(this);
      return a.umod(this.m)._forceRed(this);
    };

    Red.prototype.neg = function neg(a) {
      if (a.isZero()) {
        return a.clone();
      }

      return this.m.sub(a)._forceRed(this);
    };

    Red.prototype.add = function add(a, b) {
      this._verify2(a, b);

      var res = a.add(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.iadd = function iadd(a, b) {
      this._verify2(a, b);

      var res = a.iadd(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res;
    };

    Red.prototype.sub = function sub(a, b) {
      this._verify2(a, b);

      var res = a.sub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.isub = function isub(a, b) {
      this._verify2(a, b);

      var res = a.isub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res;
    };

    Red.prototype.shl = function shl(a, num) {
      this._verify1(a);

      return this.imod(a.ushln(num));
    };

    Red.prototype.imul = function imul(a, b) {
      this._verify2(a, b);

      return this.imod(a.imul(b));
    };

    Red.prototype.mul = function mul(a, b) {
      this._verify2(a, b);

      return this.imod(a.mul(b));
    };

    Red.prototype.isqr = function isqr(a) {
      return this.imul(a, a.clone());
    };

    Red.prototype.sqr = function sqr(a) {
      return this.mul(a, a);
    };

    Red.prototype.sqrt = function sqrt(a) {
      if (a.isZero()) return a.clone();
      var mod3 = this.m.andln(3);
      assert(mod3 % 2 === 1); // Fast case

      if (mod3 === 3) {
        var pow = this.m.add(new BN(1)).iushrn(2);
        return this.pow(a, pow);
      } // Tonelli-Shanks algorithm (Totally unoptimized and slow)
      //
      // Find Q and S, that Q * 2 ^ S = (P - 1)


      var q = this.m.subn(1);
      var s = 0;

      while (!q.isZero() && q.andln(1) === 0) {
        s++;
        q.iushrn(1);
      }

      assert(!q.isZero());
      var one = new BN(1).toRed(this);
      var nOne = one.redNeg(); // Find quadratic non-residue
      // NOTE: Max is such because of generalized Riemann hypothesis.

      var lpow = this.m.subn(1).iushrn(1);
      var z = this.m.bitLength();
      z = new BN(2 * z * z).toRed(this);

      while (this.pow(z, lpow).cmp(nOne) !== 0) {
        z.redIAdd(nOne);
      }

      var c = this.pow(z, q);
      var r = this.pow(a, q.addn(1).iushrn(1));
      var t = this.pow(a, q);
      var m = s;

      while (t.cmp(one) !== 0) {
        var tmp = t;

        for (var i = 0; tmp.cmp(one) !== 0; i++) {
          tmp = tmp.redSqr();
        }

        assert(i < m);
        var b = this.pow(c, new BN(1).iushln(m - i - 1));
        r = r.redMul(b);
        c = b.redSqr();
        t = t.redMul(c);
        m = i;
      }

      return r;
    };

    Red.prototype.invm = function invm(a) {
      var inv = a._invmp(this.m);

      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };

    Red.prototype.pow = function pow(a, num) {
      if (num.isZero()) return new BN(1).toRed(this);
      if (num.cmpn(1) === 0) return a.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN(1).toRed(this);
      wnd[1] = a;

      for (var i = 2; i < wnd.length; i++) {
        wnd[i] = this.mul(wnd[i - 1], a);
      }

      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;

      if (start === 0) {
        start = 26;
      }

      for (i = num.length - 1; i >= 0; i--) {
        var word = num.words[i];

        for (var j = start - 1; j >= 0; j--) {
          var bit = word >> j & 1;

          if (res !== wnd[0]) {
            res = this.sqr(res);
          }

          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }

          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }

        start = 26;
      }

      return res;
    };

    Red.prototype.convertTo = function convertTo(num) {
      var r = num.umod(this.m);
      return r === num ? r.clone() : r;
    };

    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    }; //
    // Montgomery method engine
    //


    BN.mont = function mont(num) {
      return new Mont(num);
    };

    function Mont(m) {
      Red.call(this, m);
      this.shift = this.m.bitLength();

      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }

      this.r = new BN(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }

    inherits(Mont, Red);

    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };

    Mont.prototype.convertFrom = function convertFrom(num) {
      var r = this.imod(num.mul(this.rinv));
      r.red = null;
      return r;
    };

    Mont.prototype.imul = function imul(a, b) {
      if (a.isZero() || b.isZero()) {
        a.words[0] = 0;
        a.length = 1;
        return a;
      }

      var t = a.imul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.mul = function mul(a, b) {
      if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
      var t = a.mul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.invm = function invm(a) {
      // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
      var res = this.imod(a._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn$2);

var utf8$1 = {};

/*! https://mths.be/utf8js v3.0.0 by @mathias */

(function (exports) {

  (function (root) {
    var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

    function ucs2decode(string) {
      var output = [];
      var counter = 0;
      var length = string.length;
      var value;
      var extra;

      while (counter < length) {
        value = string.charCodeAt(counter++);

        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
          // high surrogate, and there is a next character
          extra = string.charCodeAt(counter++);

          if ((extra & 0xFC00) == 0xDC00) {
            // low surrogate
            output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
          } else {
            // unmatched surrogate; only append this code unit, in case the next
            // code unit is the high surrogate of a surrogate pair
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }

      return output;
    } // Taken from https://mths.be/punycode


    function ucs2encode(array) {
      var length = array.length;
      var index = -1;
      var value;
      var output = '';

      while (++index < length) {
        value = array[index];

        if (value > 0xFFFF) {
          value -= 0x10000;
          output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
          value = 0xDC00 | value & 0x3FF;
        }

        output += stringFromCharCode(value);
      }

      return output;
    }

    function checkScalarValue(codePoint) {
      if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
        throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
      }
    }
    /*--------------------------------------------------------------------------*/


    function createByte(codePoint, shift) {
      return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
    }

    function encodeCodePoint(codePoint) {
      if ((codePoint & 0xFFFFFF80) == 0) {
        // 1-byte sequence
        return stringFromCharCode(codePoint);
      }

      var symbol = '';

      if ((codePoint & 0xFFFFF800) == 0) {
        // 2-byte sequence
        symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
      } else if ((codePoint & 0xFFFF0000) == 0) {
        // 3-byte sequence
        checkScalarValue(codePoint);
        symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
        symbol += createByte(codePoint, 6);
      } else if ((codePoint & 0xFFE00000) == 0) {
        // 4-byte sequence
        symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
        symbol += createByte(codePoint, 12);
        symbol += createByte(codePoint, 6);
      }

      symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
      return symbol;
    }

    function utf8encode(string) {
      var codePoints = ucs2decode(string);
      var length = codePoints.length;
      var index = -1;
      var codePoint;
      var byteString = '';

      while (++index < length) {
        codePoint = codePoints[index];
        byteString += encodeCodePoint(codePoint);
      }

      return byteString;
    }
    /*--------------------------------------------------------------------------*/


    function readContinuationByte() {
      if (byteIndex >= byteCount) {
        throw Error('Invalid byte index');
      }

      var continuationByte = byteArray[byteIndex] & 0xFF;
      byteIndex++;

      if ((continuationByte & 0xC0) == 0x80) {
        return continuationByte & 0x3F;
      } // If we end up here, it’s not a continuation byte


      throw Error('Invalid continuation byte');
    }

    function decodeSymbol() {
      var byte1;
      var byte2;
      var byte3;
      var byte4;
      var codePoint;

      if (byteIndex > byteCount) {
        throw Error('Invalid byte index');
      }

      if (byteIndex == byteCount) {
        return false;
      } // Read first byte


      byte1 = byteArray[byteIndex] & 0xFF;
      byteIndex++; // 1-byte sequence (no continuation bytes)

      if ((byte1 & 0x80) == 0) {
        return byte1;
      } // 2-byte sequence


      if ((byte1 & 0xE0) == 0xC0) {
        byte2 = readContinuationByte();
        codePoint = (byte1 & 0x1F) << 6 | byte2;

        if (codePoint >= 0x80) {
          return codePoint;
        } else {
          throw Error('Invalid continuation byte');
        }
      } // 3-byte sequence (may include unpaired surrogates)


      if ((byte1 & 0xF0) == 0xE0) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

        if (codePoint >= 0x0800) {
          checkScalarValue(codePoint);
          return codePoint;
        } else {
          throw Error('Invalid continuation byte');
        }
      } // 4-byte sequence


      if ((byte1 & 0xF8) == 0xF0) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        byte4 = readContinuationByte();
        codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

        if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
          return codePoint;
        }
      }

      throw Error('Invalid UTF-8 detected');
    }

    var byteArray;
    var byteCount;
    var byteIndex;

    function utf8decode(byteString) {
      byteArray = ucs2decode(byteString);
      byteCount = byteArray.length;
      byteIndex = 0;
      var codePoints = [];
      var tmp;

      while ((tmp = decodeSymbol()) !== false) {
        codePoints.push(tmp);
      }

      return ucs2encode(codePoints);
    }
    /*--------------------------------------------------------------------------*/


    root.version = '3.0.0';
    root.encode = utf8encode;
    root.decode = utf8decode;
  })(exports);
})(utf8$1);

var dist_browser$1 = {};

var constants = {};

var bn$1 = {exports: {}};

(function (module) {
  (function (module, exports) {

    function assert(val, msg) {
      if (!val) throw new Error(msg || 'Assertion failed');
    } // Could use `inherits` module, but don't want to move from single file
    // architecture yet.


    function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    } // BN


    function BN(number, base, endian) {
      if (BN.isBN(number)) {
        return number;
      }

      this.negative = 0;
      this.words = null;
      this.length = 0; // Reduction context

      this.red = null;

      if (number !== null) {
        if (base === 'le' || base === 'be') {
          endian = base;
          base = 10;
        }

        this._init(number || 0, base || 10, endian || 'be');
      }
    }

    if (_typeof(module) === 'object') {
      module.exports = BN;
    } else {
      exports.BN = BN;
    }

    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;

    try {
      if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
        Buffer = window.Buffer;
      } else {
        Buffer = require('buffer').Buffer;
      }
    } catch (e) {}

    BN.isBN = function isBN(num) {
      if (num instanceof BN) {
        return true;
      }

      return num !== null && _typeof(num) === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };

    BN.max = function max(left, right) {
      if (left.cmp(right) > 0) return left;
      return right;
    };

    BN.min = function min(left, right) {
      if (left.cmp(right) < 0) return left;
      return right;
    };

    BN.prototype._init = function init(number, base, endian) {
      if (typeof number === 'number') {
        return this._initNumber(number, base, endian);
      }

      if (_typeof(number) === 'object') {
        return this._initArray(number, base, endian);
      }

      if (base === 'hex') {
        base = 16;
      }

      assert(base === (base | 0) && base >= 2 && base <= 36);
      number = number.toString().replace(/\s+/g, '');
      var start = 0;

      if (number[0] === '-') {
        start++;
        this.negative = 1;
      }

      if (start < number.length) {
        if (base === 16) {
          this._parseHex(number, start, endian);
        } else {
          this._parseBase(number, base, start);

          if (endian === 'le') {
            this._initArray(this.toArray(), base, endian);
          }
        }
      }
    };

    BN.prototype._initNumber = function _initNumber(number, base, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }

      if (number < 0x4000000) {
        this.words = [number & 0x3ffffff];
        this.length = 1;
      } else if (number < 0x10000000000000) {
        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
        this.length = 2;
      } else {
        assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)

        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
        this.length = 3;
      }

      if (endian !== 'le') return; // Reverse the bytes

      this._initArray(this.toArray(), base, endian);
    };

    BN.prototype._initArray = function _initArray(number, base, endian) {
      // Perhaps a Uint8Array
      assert(typeof number.length === 'number');

      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }

      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }

      var j, w;
      var off = 0;

      if (endian === 'be') {
        for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
          w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === 'le') {
        for (i = 0, j = 0; i < number.length; i += 3) {
          w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }

      return this._strip();
    };

    function parseHex4Bits(string, index) {
      var c = string.charCodeAt(index); // '0' - '9'

      if (c >= 48 && c <= 57) {
        return c - 48; // 'A' - 'F'
      } else if (c >= 65 && c <= 70) {
        return c - 55; // 'a' - 'f'
      } else if (c >= 97 && c <= 102) {
        return c - 87;
      } else {
        assert(false, 'Invalid character in ' + string);
      }
    }

    function parseHexByte(string, lowerBound, index) {
      var r = parseHex4Bits(string, index);

      if (index - 1 >= lowerBound) {
        r |= parseHex4Bits(string, index - 1) << 4;
      }

      return r;
    }

    BN.prototype._parseHex = function _parseHex(number, start, endian) {
      // Create possibly bigger array to ensure that it fits the number
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      } // 24-bits chunks


      var off = 0;
      var j = 0;
      var w;

      if (endian === 'be') {
        for (i = number.length - 1; i >= start; i -= 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 0x3ffffff;

          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      } else {
        var parseLength = number.length - start;

        for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 0x3ffffff;

          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      }

      this._strip();
    };

    function parseBase(str, start, end, mul) {
      var r = 0;
      var b = 0;
      var len = Math.min(str.length, end);

      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r *= mul; // 'a'

        if (c >= 49) {
          b = c - 49 + 0xa; // 'A'
        } else if (c >= 17) {
          b = c - 17 + 0xa; // '0' - '9'
        } else {
          b = c;
        }

        assert(c >= 0 && b < mul, 'Invalid character');
        r += b;
      }

      return r;
    }

    BN.prototype._parseBase = function _parseBase(number, base, start) {
      // Initialize as zero
      this.words = [0];
      this.length = 1; // Find length of limb in base

      for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
        limbLen++;
      }

      limbLen--;
      limbPow = limbPow / base | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;

      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number, i, i + limbLen, base);
        this.imuln(limbPow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }

      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i, number.length, base);

        for (i = 0; i < mod; i++) {
          pow *= base;
        }

        this.imuln(pow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }

      this._strip();
    };

    BN.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }

      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };

    function move(dest, src) {
      dest.words = src.words;
      dest.length = src.length;
      dest.negative = src.negative;
      dest.red = src.red;
    }

    BN.prototype._move = function _move(dest) {
      move(dest, this);
    };

    BN.prototype.clone = function clone() {
      var r = new BN(null);
      this.copy(r);
      return r;
    };

    BN.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }

      return this;
    }; // Remove leading `0` from `this`


    BN.prototype._strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }

      return this._normSign();
    };

    BN.prototype._normSign = function _normSign() {
      // -0 = 0
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }

      return this;
    }; // Check Symbol.for because not everywhere where Symbol defined
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility


    if (typeof Symbol !== 'undefined' && typeof Symbol["for"] === 'function') {
      try {
        BN.prototype[Symbol["for"]('nodejs.util.inspect.custom')] = inspect;
      } catch (e) {
        BN.prototype.inspect = inspect;
      }
    } else {
      BN.prototype.inspect = inspect;
    }

    function inspect() {
      return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    /*
     var zeros = [];
    var groupSizes = [];
    var groupBases = [];
     var s = '';
    var i = -1;
    while (++i < BN.wordSize) {
      zeros[i] = s;
      s += '0';
    }
    groupSizes[0] = 0;
    groupSizes[1] = 0;
    groupBases[0] = 0;
    groupBases[1] = 0;
    var base = 2 - 1;
    while (++base < 36 + 1) {
      var groupSize = 0;
      var groupBase = 1;
      while (groupBase < (1 << BN.wordSize) / base) {
        groupBase *= base;
        groupSize += 1;
      }
      groupSizes[base] = groupSize;
      groupBases[base] = groupBase;
    }
     */


    var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
    var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    BN.prototype.toString = function toString(base, padding) {
      base = base || 10;
      padding = padding | 0 || 1;
      var out;

      if (base === 16 || base === 'hex') {
        out = '';
        var off = 0;
        var carry = 0;

        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = ((w << off | carry) & 0xffffff).toString(16);
          carry = w >>> 24 - off & 0xffffff;

          if (carry !== 0 || i !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }

          off += 2;

          if (off >= 26) {
            off -= 26;
            i--;
          }
        }

        if (carry !== 0) {
          out = carry.toString(16) + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      if (base === (base | 0) && base >= 2 && base <= 36) {
        // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
        var groupSize = groupSizes[base]; // var groupBase = Math.pow(base, groupSize);

        var groupBase = groupBases[base];
        out = '';
        var c = this.clone();
        c.negative = 0;

        while (!c.isZero()) {
          var r = c.modrn(groupBase).toString(base);
          c = c.idivn(groupBase);

          if (!c.isZero()) {
            out = zeros[groupSize - r.length] + r + out;
          } else {
            out = r + out;
          }
        }

        if (this.isZero()) {
          out = '0' + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      assert(false, 'Base should be between 2 and 36');
    };

    BN.prototype.toNumber = function toNumber() {
      var ret = this.words[0];

      if (this.length === 2) {
        ret += this.words[1] * 0x4000000;
      } else if (this.length === 3 && this.words[2] === 0x01) {
        // NOTE: at this stage it is known that the top bit is set
        ret += 0x10000000000000 + this.words[1] * 0x4000000;
      } else if (this.length > 2) {
        assert(false, 'Number can only safely store up to 53 bits');
      }

      return this.negative !== 0 ? -ret : ret;
    };

    BN.prototype.toJSON = function toJSON() {
      return this.toString(16, 2);
    };

    if (Buffer) {
      BN.prototype.toBuffer = function toBuffer(endian, length) {
        return this.toArrayLike(Buffer, endian, length);
      };
    }

    BN.prototype.toArray = function toArray(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };

    var allocate = function allocate(ArrayType, size) {
      if (ArrayType.allocUnsafe) {
        return ArrayType.allocUnsafe(size);
      }

      return new ArrayType(size);
    };

    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      this._strip();

      var byteLength = this.byteLength();
      var reqLength = length || Math.max(1, byteLength);
      assert(byteLength <= reqLength, 'byte array longer than desired length');
      assert(reqLength > 0, 'Requested array length <= 0');
      var res = allocate(ArrayType, reqLength);
      var postfix = endian === 'le' ? 'LE' : 'BE';
      this['_toArrayLike' + postfix](res, byteLength);
      return res;
    };

    BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
      var position = 0;
      var carry = 0;

      for (var i = 0, shift = 0; i < this.length; i++) {
        var word = this.words[i] << shift | carry;
        res[position++] = word & 0xff;

        if (position < res.length) {
          res[position++] = word >> 8 & 0xff;
        }

        if (position < res.length) {
          res[position++] = word >> 16 & 0xff;
        }

        if (shift === 6) {
          if (position < res.length) {
            res[position++] = word >> 24 & 0xff;
          }

          carry = 0;
          shift = 0;
        } else {
          carry = word >>> 24;
          shift += 2;
        }
      }

      if (position < res.length) {
        res[position++] = carry;

        while (position < res.length) {
          res[position++] = 0;
        }
      }
    };

    BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
      var position = res.length - 1;
      var carry = 0;

      for (var i = 0, shift = 0; i < this.length; i++) {
        var word = this.words[i] << shift | carry;
        res[position--] = word & 0xff;

        if (position >= 0) {
          res[position--] = word >> 8 & 0xff;
        }

        if (position >= 0) {
          res[position--] = word >> 16 & 0xff;
        }

        if (shift === 6) {
          if (position >= 0) {
            res[position--] = word >> 24 & 0xff;
          }

          carry = 0;
          shift = 0;
        } else {
          carry = word >>> 24;
          shift += 2;
        }
      }

      if (position >= 0) {
        res[position--] = carry;

        while (position >= 0) {
          res[position--] = 0;
        }
      }
    };

    if (Math.clz32) {
      BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;

        if (t >= 0x1000) {
          r += 13;
          t >>>= 13;
        }

        if (t >= 0x40) {
          r += 7;
          t >>>= 7;
        }

        if (t >= 0x8) {
          r += 4;
          t >>>= 4;
        }

        if (t >= 0x02) {
          r += 2;
          t >>>= 2;
        }

        return r + t;
      };
    }

    BN.prototype._zeroBits = function _zeroBits(w) {
      // Short-cut
      if (w === 0) return 26;
      var t = w;
      var r = 0;

      if ((t & 0x1fff) === 0) {
        r += 13;
        t >>>= 13;
      }

      if ((t & 0x7f) === 0) {
        r += 7;
        t >>>= 7;
      }

      if ((t & 0xf) === 0) {
        r += 4;
        t >>>= 4;
      }

      if ((t & 0x3) === 0) {
        r += 2;
        t >>>= 2;
      }

      if ((t & 0x1) === 0) {
        r++;
      }

      return r;
    }; // Return number of used bits in a BN


    BN.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];

      var hi = this._countBits(w);

      return (this.length - 1) * 26 + hi;
    };

    function toBitArray(num) {
      var w = new Array(num.bitLength());

      for (var bit = 0; bit < w.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w[bit] = num.words[off] >>> wbit & 0x01;
      }

      return w;
    } // Number of trailing zero bits


    BN.prototype.zeroBits = function zeroBits() {
      if (this.isZero()) return 0;
      var r = 0;

      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);

        r += b;
        if (b !== 26) break;
      }

      return r;
    };

    BN.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };

    BN.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }

      return this.clone();
    };

    BN.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }

      return this.clone();
    };

    BN.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    }; // Return negative clone of `this`


    BN.prototype.neg = function neg() {
      return this.clone().ineg();
    };

    BN.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }

      return this;
    }; // Or `num` with `this` in-place


    BN.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }

      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }

      return this._strip();
    };

    BN.prototype.ior = function ior(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuor(num);
    }; // Or `num` with `this`


    BN.prototype.or = function or(num) {
      if (this.length > num.length) return this.clone().ior(num);
      return num.clone().ior(this);
    };

    BN.prototype.uor = function uor(num) {
      if (this.length > num.length) return this.clone().iuor(num);
      return num.clone().iuor(this);
    }; // And `num` with `this` in-place


    BN.prototype.iuand = function iuand(num) {
      // b = min-length(num, this)
      var b;

      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }

      this.length = b.length;
      return this._strip();
    };

    BN.prototype.iand = function iand(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuand(num);
    }; // And `num` with `this`


    BN.prototype.and = function and(num) {
      if (this.length > num.length) return this.clone().iand(num);
      return num.clone().iand(this);
    };

    BN.prototype.uand = function uand(num) {
      if (this.length > num.length) return this.clone().iuand(num);
      return num.clone().iuand(this);
    }; // Xor `num` with `this` in-place


    BN.prototype.iuxor = function iuxor(num) {
      // a.length > b.length
      var a;
      var b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }

      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = a.length;
      return this._strip();
    };

    BN.prototype.ixor = function ixor(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuxor(num);
    }; // Xor `num` with `this`


    BN.prototype.xor = function xor(num) {
      if (this.length > num.length) return this.clone().ixor(num);
      return num.clone().ixor(this);
    };

    BN.prototype.uxor = function uxor(num) {
      if (this.length > num.length) return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    }; // Not ``this`` with ``width`` bitwidth


    BN.prototype.inotn = function inotn(width) {
      assert(typeof width === 'number' && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26; // Extend the buffer with leading zeroes

      this._expand(bytesNeeded);

      if (bitsLeft > 0) {
        bytesNeeded--;
      } // Handle complete words


      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 0x3ffffff;
      } // Handle the residue


      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
      } // And remove leading zeroes


      return this._strip();
    };

    BN.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    }; // Set `bit` of `this`


    BN.prototype.setn = function setn(bit, val) {
      assert(typeof bit === 'number' && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;

      this._expand(off + 1);

      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }

      return this._strip();
    }; // Add `num` to `this` in-place


    BN.prototype.iadd = function iadd(num) {
      var r; // negative + positive

      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r = this.isub(num);
        this.negative ^= 1;
        return this._normSign(); // positive + negative
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r = this.isub(num);
        num.negative = 1;
        return r._normSign();
      } // a.length > b.length


      var a, b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      this.length = a.length;

      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++; // Copy the rest of the words
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      return this;
    }; // Add `num` to `this`


    BN.prototype.add = function add(num) {
      var res;

      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }

      if (this.length > num.length) return this.clone().iadd(num);
      return num.clone().iadd(this);
    }; // Subtract `num` from `this` in-place


    BN.prototype.isub = function isub(num) {
      // this - (-num) = this + num
      if (num.negative !== 0) {
        num.negative = 0;
        var r = this.iadd(num);
        num.negative = 1;
        return r._normSign(); // -this - num = -(this + num)
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      } // At this point both numbers are positive


      var cmp = this.cmp(num); // Optimization - zeroify

      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      } // a > b


      var a, b;

      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      } // Copy rest of the words


      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = Math.max(this.length, i);

      if (a !== this) {
        this.negative = 1;
      }

      return this._strip();
    }; // Subtract `num` from `this`


    BN.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };

    function smallMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      var len = self.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0; // Peel one iteration (compiler can't do it, because of code complexity)

      var a = self.words[0] | 0;
      var b = num.words[0] | 0;
      var r = a * b;
      var lo = r & 0x3ffffff;
      var carry = r / 0x4000000 | 0;
      out.words[0] = lo;

      for (var k = 1; k < len; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = carry >>> 26;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j | 0;
          a = self.words[i] | 0;
          b = num.words[j] | 0;
          r = a * b + rword;
          ncarry += r / 0x4000000 | 0;
          rword = r & 0x3ffffff;
        }

        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }

      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }

      return out._strip();
    } // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).


    var comb10MulTo = function comb10MulTo(self, num, out) {
      var a = self.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 0x1fff;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 0x1fff;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 0x1fff;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 0x1fff;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 0x1fff;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 0x1fff;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 0x1fff;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 0x1fff;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 0x1fff;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 0x1fff;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 0x1fff;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 0x1fff;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 0x1fff;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 0x1fff;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 0x1fff;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 0x1fff;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 0x1fff;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 0x1fff;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 0x1fff;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 0x1fff;
      var bh9 = b9 >>> 13;
      out.negative = self.negative ^ num.negative;
      out.length = 19;
      /* k = 0 */

      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 0x3ffffff;
      /* k = 1 */

      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 0x3ffffff;
      /* k = 2 */

      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 0x3ffffff;
      /* k = 3 */

      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 0x3ffffff;
      /* k = 4 */

      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 0x3ffffff;
      /* k = 5 */

      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 0x3ffffff;
      /* k = 6 */

      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 0x3ffffff;
      /* k = 7 */

      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 0x3ffffff;
      /* k = 8 */

      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 0x3ffffff;
      /* k = 9 */

      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 0x3ffffff;
      /* k = 10 */

      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 0x3ffffff;
      /* k = 11 */

      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 0x3ffffff;
      /* k = 12 */

      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 0x3ffffff;
      /* k = 13 */

      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 0x3ffffff;
      /* k = 14 */

      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 0x3ffffff;
      /* k = 15 */

      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 0x3ffffff;
      /* k = 16 */

      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 0x3ffffff;
      /* k = 17 */

      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 0x3ffffff;
      /* k = 18 */

      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 0x3ffffff;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;

      if (c !== 0) {
        o[19] = c;
        out.length++;
      }

      return out;
    }; // Polyfill comb


    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }

    function bigMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      out.length = self.length + num.length;
      var carry = 0;
      var hncarry = 0;

      for (var k = 0; k < out.length - 1; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self.words[i] | 0;
          var b = num.words[j] | 0;
          var r = a * b;
          var lo = r & 0x3ffffff;
          ncarry = ncarry + (r / 0x4000000 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 0x3ffffff;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 0x3ffffff;
        }

        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }

      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }

      return out._strip();
    }

    function jumboMulTo(self, num, out) {
      // Temporary disable, see https://github.com/indutny/bn.js/issues/211
      // var fftm = new FFTM();
      // return fftm.mulp(self, num, out);
      return bigMulTo(self, num, out);
    }

    BN.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;

      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }

      return res;
    }; // Cooley-Tukey algorithm for FFT


    BN.prototype.mul = function mul(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    }; // Multiply employing FFT


    BN.prototype.mulf = function mulf(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    }; // In-place Multiplication


    BN.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };

    BN.prototype.imuln = function imuln(num) {
      var isNegNum = num < 0;
      if (isNegNum) num = -num;
      assert(typeof num === 'number');
      assert(num < 0x4000000); // Carry

      var carry = 0;

      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
        carry >>= 26;
        carry += w / 0x4000000 | 0; // NOTE: lo is 27bit maximum

        carry += lo >>> 26;
        this.words[i] = lo & 0x3ffffff;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return isNegNum ? this.ineg() : this;
    };

    BN.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    }; // `this` * `this`


    BN.prototype.sqr = function sqr() {
      return this.mul(this);
    }; // `this` * `this` in-place


    BN.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    }; // Math.pow(`this`, `num`)


    BN.prototype.pow = function pow(num) {
      var w = toBitArray(num);
      if (w.length === 0) return new BN(1); // Skip leading zeroes

      var res = this;

      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0) break;
      }

      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0) continue;
          res = res.mul(q);
        }
      }

      return res;
    }; // Shift-left in-place


    BN.prototype.iushln = function iushln(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
      var i;

      if (r !== 0) {
        var carry = 0;

        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = (this.words[i] | 0) - newCarry << r;
          this.words[i] = c | carry;
          carry = newCarry >>> 26 - r;
        }

        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }

      if (s !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s] = this.words[i];
        }

        for (i = 0; i < s; i++) {
          this.words[i] = 0;
        }

        this.length += s;
      }

      return this._strip();
    };

    BN.prototype.ishln = function ishln(bits) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushln(bits);
    }; // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits


    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert(typeof bits === 'number' && bits >= 0);
      var h;

      if (hint) {
        h = (hint - hint % 26) / 26;
      } else {
        h = 0;
      }

      var r = bits % 26;
      var s = Math.min((bits - r) / 26, this.length);
      var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
      var maskedWords = extended;
      h -= s;
      h = Math.max(0, h); // Extended mode, copy masked part

      if (maskedWords) {
        for (var i = 0; i < s; i++) {
          maskedWords.words[i] = this.words[i];
        }

        maskedWords.length = s;
      }

      if (s === 0) ; else if (this.length > s) {
        this.length -= s;

        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }

      var carry = 0;

      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = carry << 26 - r | word >>> r;
        carry = word & mask;
      } // Push carried bits as a mask


      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }

      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }

      return this._strip();
    };

    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    }; // Shift-left


    BN.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };

    BN.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    }; // Shift-right


    BN.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };

    BN.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    }; // Test if n bit is set


    BN.prototype.testn = function testn(bit) {
      assert(typeof bit === 'number' && bit >= 0);
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) return false; // Check bit and return

      var w = this.words[s];
      return !!(w & q);
    }; // Return only lowers bits of number (in-place)


    BN.prototype.imaskn = function imaskn(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      assert(this.negative === 0, 'imaskn works only with positive numbers');

      if (this.length <= s) {
        return this;
      }

      if (r !== 0) {
        s++;
      }

      this.length = Math.min(s, this.length);

      if (r !== 0) {
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        this.words[this.length - 1] &= mask;
      }

      return this._strip();
    }; // Return only lowers bits of number


    BN.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    }; // Add plain number `num` to `this`


    BN.prototype.iaddn = function iaddn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.isubn(-num); // Possible sign change

      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) <= num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }

        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      } // Add without checks


      return this._iaddn(num);
    };

    BN.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num; // Carry

      for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
        this.words[i] -= 0x4000000;

        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }

      this.length = Math.max(this.length, i + 1);
      return this;
    }; // Subtract plain number `num` from `this`


    BN.prototype.isubn = function isubn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.iaddn(-num);

      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }

      this.words[0] -= num;

      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        // Carry
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 0x4000000;
          this.words[i + 1] -= 1;
        }
      }

      return this._strip();
    };

    BN.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };

    BN.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };

    BN.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };

    BN.prototype.abs = function abs() {
      return this.clone().iabs();
    };

    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
      var len = num.length + shift;
      var i;

      this._expand(len);

      var w;
      var carry = 0;

      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul;
        w -= right & 0x3ffffff;
        carry = (w >> 26) - (right / 0x4000000 | 0);
        this.words[i + shift] = w & 0x3ffffff;
      }

      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 0x3ffffff;
      }

      if (carry === 0) return this._strip(); // Subtraction overflow

      assert(carry === -1);
      carry = 0;

      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 0x3ffffff;
      }

      this.negative = 1;
      return this._strip();
    };

    BN.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num; // Normalize

      var bhi = b.words[b.length - 1] | 0;

      var bhiBits = this._countBits(bhi);

      shift = 26 - bhiBits;

      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      } // Initialize quotient


      var m = a.length - b.length;
      var q;

      if (mode !== 'mod') {
        q = new BN(null);
        q.length = m + 1;
        q.words = new Array(q.length);

        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }

      var diff = a.clone()._ishlnsubmul(b, 1, m);

      if (diff.negative === 0) {
        a = diff;

        if (q) {
          q.words[m] = 1;
        }
      }

      for (var j = m - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0); // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
        // (0x7ffffff)

        qj = Math.min(qj / bhi | 0, 0x3ffffff);

        a._ishlnsubmul(b, qj, j);

        while (a.negative !== 0) {
          qj--;
          a.negative = 0;

          a._ishlnsubmul(b, 1, j);

          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }

        if (q) {
          q.words[j] = qj;
        }
      }

      if (q) {
        q._strip();
      }

      a._strip(); // Denormalize


      if (mode !== 'div' && shift !== 0) {
        a.iushrn(shift);
      }

      return {
        div: q || null,
        mod: a
      };
    }; // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested


    BN.prototype.divmod = function divmod(num, mode, positive) {
      assert(!num.isZero());

      if (this.isZero()) {
        return {
          div: new BN(0),
          mod: new BN(0)
        };
      }

      var div, mod, res;

      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }

        return {
          div: div,
          mod: mod
        };
      }

      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        return {
          div: div,
          mod: res.mod
        };
      }

      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }

        return {
          div: res.div,
          mod: mod
        };
      } // Both numbers are positive at this point
      // Strip both numbers to approximate shift value


      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN(0),
          mod: this
        };
      } // Very short reduction


      if (num.length === 1) {
        if (mode === 'div') {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }

        if (mode === 'mod') {
          return {
            div: null,
            mod: new BN(this.modrn(num.words[0]))
          };
        }

        return {
          div: this.divn(num.words[0]),
          mod: new BN(this.modrn(num.words[0]))
        };
      }

      return this._wordDiv(num, mode);
    }; // Find `this` / `num`


    BN.prototype.div = function div(num) {
      return this.divmod(num, 'div', false).div;
    }; // Find `this` % `num`


    BN.prototype.mod = function mod(num) {
      return this.divmod(num, 'mod', false).mod;
    };

    BN.prototype.umod = function umod(num) {
      return this.divmod(num, 'mod', true).mod;
    }; // Find Round(`this` / `num`)


    BN.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num); // Fast case - exact division

      if (dm.mod.isZero()) return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half); // Round down

      if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div; // Round up

      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };

    BN.prototype.modrn = function modrn(num) {
      var isNegNum = num < 0;
      if (isNegNum) num = -num;
      assert(num <= 0x3ffffff);
      var p = (1 << 26) % num;
      var acc = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }

      return isNegNum ? -acc : acc;
    }; // WARNING: DEPRECATED


    BN.prototype.modn = function modn(num) {
      return this.modrn(num);
    }; // In-place division by number


    BN.prototype.idivn = function idivn(num) {
      var isNegNum = num < 0;
      if (isNegNum) num = -num;
      assert(num <= 0x3ffffff);
      var carry = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 0x4000000;
        this.words[i] = w / num | 0;
        carry = w % num;
      }

      this._strip();

      return isNegNum ? this.ineg() : this;
    };

    BN.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };

    BN.prototype.egcd = function egcd(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var x = this;
      var y = p.clone();

      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      } // A * x + B * y = x


      var A = new BN(1);
      var B = new BN(0); // C * x + D * y = y

      var C = new BN(0);
      var D = new BN(1);
      var g = 0;

      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }

      var yp = y.clone();
      var xp = x.clone();

      while (!x.isZero()) {
        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          x.iushrn(i);

          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }

            A.iushrn(1);
            B.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          y.iushrn(j);

          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }

            C.iushrn(1);
            D.iushrn(1);
          }
        }

        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }

      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    }; // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed


    BN.prototype._invmp = function _invmp(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var a = this;
      var b = p.clone();

      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }

      var x1 = new BN(1);
      var x2 = new BN(0);
      var delta = b.clone();

      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          a.iushrn(i);

          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }

            x1.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          b.iushrn(j);

          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }

            x2.iushrn(1);
          }
        }

        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }

      var res;

      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }

      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }

      return res;
    };

    BN.prototype.gcd = function gcd(num) {
      if (this.isZero()) return num.abs();
      if (num.isZero()) return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0; // Remove common factor of two

      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }

      do {
        while (a.isEven()) {
          a.iushrn(1);
        }

        while (b.isEven()) {
          b.iushrn(1);
        }

        var r = a.cmp(b);

        if (r < 0) {
          // Swap `a` and `b` to make `a` always bigger than `b`
          var t = a;
          a = b;
          b = t;
        } else if (r === 0 || b.cmpn(1) === 0) {
          break;
        }

        a.isub(b);
      } while (true);

      return b.iushln(shift);
    }; // Invert number in the field F(num)


    BN.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };

    BN.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };

    BN.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    }; // And first word and num


    BN.prototype.andln = function andln(num) {
      return this.words[0] & num;
    }; // Increment at the bit position in-line


    BN.prototype.bincn = function bincn(bit) {
      assert(typeof bit === 'number');
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) {
        this._expand(s + 1);

        this.words[s] |= q;
        return this;
      } // Add bit and propagate, if needed


      var carry = q;

      for (var i = s; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 0x3ffffff;
        this.words[i] = w;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return this;
    };

    BN.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };

    BN.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative) return -1;
      if (this.negative === 0 && negative) return 1;

      this._strip();

      var res;

      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }

        assert(num <= 0x3ffffff, 'Number is too big');
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }

      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`


    BN.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0) return -1;
      if (this.negative === 0 && num.negative !== 0) return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Unsigned comparison


    BN.prototype.ucmp = function ucmp(num) {
      // At this point both numbers have the same sign
      if (this.length > num.length) return 1;
      if (this.length < num.length) return -1;
      var res = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b) continue;

        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }

        break;
      }

      return res;
    };

    BN.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };

    BN.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };

    BN.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };

    BN.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };

    BN.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };

    BN.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };

    BN.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };

    BN.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };

    BN.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };

    BN.prototype.eq = function eq(num) {
      return this.cmp(num) === 0;
    }; //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //


    BN.red = function red(num) {
      return new Red(num);
    };

    BN.prototype.toRed = function toRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      assert(this.negative === 0, 'red works only with positives');
      return ctx.convertTo(this)._forceRed(ctx);
    };

    BN.prototype.fromRed = function fromRed() {
      assert(this.red, 'fromRed works only with numbers in reduction context');
      return this.red.convertFrom(this);
    };

    BN.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };

    BN.prototype.forceRed = function forceRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      return this._forceRed(ctx);
    };

    BN.prototype.redAdd = function redAdd(num) {
      assert(this.red, 'redAdd works only with red numbers');
      return this.red.add(this, num);
    };

    BN.prototype.redIAdd = function redIAdd(num) {
      assert(this.red, 'redIAdd works only with red numbers');
      return this.red.iadd(this, num);
    };

    BN.prototype.redSub = function redSub(num) {
      assert(this.red, 'redSub works only with red numbers');
      return this.red.sub(this, num);
    };

    BN.prototype.redISub = function redISub(num) {
      assert(this.red, 'redISub works only with red numbers');
      return this.red.isub(this, num);
    };

    BN.prototype.redShl = function redShl(num) {
      assert(this.red, 'redShl works only with red numbers');
      return this.red.shl(this, num);
    };

    BN.prototype.redMul = function redMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.mul(this, num);
    };

    BN.prototype.redIMul = function redIMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.imul(this, num);
    };

    BN.prototype.redSqr = function redSqr() {
      assert(this.red, 'redSqr works only with red numbers');

      this.red._verify1(this);

      return this.red.sqr(this);
    };

    BN.prototype.redISqr = function redISqr() {
      assert(this.red, 'redISqr works only with red numbers');

      this.red._verify1(this);

      return this.red.isqr(this);
    }; // Square root over p


    BN.prototype.redSqrt = function redSqrt() {
      assert(this.red, 'redSqrt works only with red numbers');

      this.red._verify1(this);

      return this.red.sqrt(this);
    };

    BN.prototype.redInvm = function redInvm() {
      assert(this.red, 'redInvm works only with red numbers');

      this.red._verify1(this);

      return this.red.invm(this);
    }; // Return negative clone of `this` % `red modulo`


    BN.prototype.redNeg = function redNeg() {
      assert(this.red, 'redNeg works only with red numbers');

      this.red._verify1(this);

      return this.red.neg(this);
    };

    BN.prototype.redPow = function redPow(num) {
      assert(this.red && !num.red, 'redPow(normalNum)');

      this.red._verify1(this);

      return this.red.pow(this, num);
    }; // Prime numbers with efficient reduction


    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    }; // Pseudo-Mersenne prime

    function MPrime(name, p) {
      // P = 2 ^ N - K
      this.name = name;
      this.p = new BN(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }

    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };

    MPrime.prototype.ireduce = function ireduce(num) {
      // Assumes that `num` is less than `P^2`
      // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
      var r = num;
      var rlen;

      do {
        this.split(r, this.tmp);
        r = this.imulK(r);
        r = r.iadd(this.tmp);
        rlen = r.bitLength();
      } while (rlen > this.n);

      var cmp = rlen < this.n ? -1 : r.ucmp(this.p);

      if (cmp === 0) {
        r.words[0] = 0;
        r.length = 1;
      } else if (cmp > 0) {
        r.isub(this.p);
      } else {
        if (r.strip !== undefined) {
          // r is a BN v4 instance
          r.strip();
        } else {
          // r is a BN v5 instance
          r._strip();
        }
      }

      return r;
    };

    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };

    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };

    function K256() {
      MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }

    inherits(K256, MPrime);

    K256.prototype.split = function split(input, output) {
      // 256 = 9 * 26 + 22
      var mask = 0x3fffff;
      var outLen = Math.min(input.length, 9);

      for (var i = 0; i < outLen; i++) {
        output.words[i] = input.words[i];
      }

      output.length = outLen;

      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      } // Shift by 9 limbs


      var prev = input.words[9];
      output.words[output.length++] = prev & mask;

      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }

      prev >>>= 22;
      input.words[i - 10] = prev;

      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };

    K256.prototype.imulK = function imulK(num) {
      // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2; // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390

      var lo = 0;

      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 0x3d1;
        num.words[i] = lo & 0x3ffffff;
        lo = w * 0x40 + (lo / 0x4000000 | 0);
      } // Fast length reduction


      if (num.words[num.length - 1] === 0) {
        num.length--;

        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }

      return num;
    };

    function P224() {
      MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }

    inherits(P224, MPrime);

    function P192() {
      MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }

    inherits(P192, MPrime);

    function P25519() {
      // 2 ^ 255 - 19
      MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }

    inherits(P25519, MPrime);

    P25519.prototype.imulK = function imulK(num) {
      // K = 0x13
      var carry = 0;

      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 0x13 + carry;
        var lo = hi & 0x3ffffff;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }

      if (carry !== 0) {
        num.words[num.length++] = carry;
      }

      return num;
    }; // Exported mostly for testing purposes, use plain name instead


    BN._prime = function prime(name) {
      // Cached version of prime
      if (primes[name]) return primes[name];
      var prime;

      if (name === 'k256') {
        prime = new K256();
      } else if (name === 'p224') {
        prime = new P224();
      } else if (name === 'p192') {
        prime = new P192();
      } else if (name === 'p25519') {
        prime = new P25519();
      } else {
        throw new Error('Unknown prime ' + name);
      }

      primes[name] = prime;
      return prime;
    }; //
    // Base reduction engine
    //


    function Red(m) {
      if (typeof m === 'string') {
        var prime = BN._prime(m);

        this.m = prime.p;
        this.prime = prime;
      } else {
        assert(m.gtn(1), 'modulus must be greater than 1');
        this.m = m;
        this.prime = null;
      }
    }

    Red.prototype._verify1 = function _verify1(a) {
      assert(a.negative === 0, 'red works only with positives');
      assert(a.red, 'red works only with red numbers');
    };

    Red.prototype._verify2 = function _verify2(a, b) {
      assert((a.negative | b.negative) === 0, 'red works only with positives');
      assert(a.red && a.red === b.red, 'red works only with red numbers');
    };

    Red.prototype.imod = function imod(a) {
      if (this.prime) return this.prime.ireduce(a)._forceRed(this);
      move(a, a.umod(this.m)._forceRed(this));
      return a;
    };

    Red.prototype.neg = function neg(a) {
      if (a.isZero()) {
        return a.clone();
      }

      return this.m.sub(a)._forceRed(this);
    };

    Red.prototype.add = function add(a, b) {
      this._verify2(a, b);

      var res = a.add(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.iadd = function iadd(a, b) {
      this._verify2(a, b);

      var res = a.iadd(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res;
    };

    Red.prototype.sub = function sub(a, b) {
      this._verify2(a, b);

      var res = a.sub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.isub = function isub(a, b) {
      this._verify2(a, b);

      var res = a.isub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res;
    };

    Red.prototype.shl = function shl(a, num) {
      this._verify1(a);

      return this.imod(a.ushln(num));
    };

    Red.prototype.imul = function imul(a, b) {
      this._verify2(a, b);

      return this.imod(a.imul(b));
    };

    Red.prototype.mul = function mul(a, b) {
      this._verify2(a, b);

      return this.imod(a.mul(b));
    };

    Red.prototype.isqr = function isqr(a) {
      return this.imul(a, a.clone());
    };

    Red.prototype.sqr = function sqr(a) {
      return this.mul(a, a);
    };

    Red.prototype.sqrt = function sqrt(a) {
      if (a.isZero()) return a.clone();
      var mod3 = this.m.andln(3);
      assert(mod3 % 2 === 1); // Fast case

      if (mod3 === 3) {
        var pow = this.m.add(new BN(1)).iushrn(2);
        return this.pow(a, pow);
      } // Tonelli-Shanks algorithm (Totally unoptimized and slow)
      //
      // Find Q and S, that Q * 2 ^ S = (P - 1)


      var q = this.m.subn(1);
      var s = 0;

      while (!q.isZero() && q.andln(1) === 0) {
        s++;
        q.iushrn(1);
      }

      assert(!q.isZero());
      var one = new BN(1).toRed(this);
      var nOne = one.redNeg(); // Find quadratic non-residue
      // NOTE: Max is such because of generalized Riemann hypothesis.

      var lpow = this.m.subn(1).iushrn(1);
      var z = this.m.bitLength();
      z = new BN(2 * z * z).toRed(this);

      while (this.pow(z, lpow).cmp(nOne) !== 0) {
        z.redIAdd(nOne);
      }

      var c = this.pow(z, q);
      var r = this.pow(a, q.addn(1).iushrn(1));
      var t = this.pow(a, q);
      var m = s;

      while (t.cmp(one) !== 0) {
        var tmp = t;

        for (var i = 0; tmp.cmp(one) !== 0; i++) {
          tmp = tmp.redSqr();
        }

        assert(i < m);
        var b = this.pow(c, new BN(1).iushln(m - i - 1));
        r = r.redMul(b);
        c = b.redSqr();
        t = t.redMul(c);
        m = i;
      }

      return r;
    };

    Red.prototype.invm = function invm(a) {
      var inv = a._invmp(this.m);

      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };

    Red.prototype.pow = function pow(a, num) {
      if (num.isZero()) return new BN(1).toRed(this);
      if (num.cmpn(1) === 0) return a.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN(1).toRed(this);
      wnd[1] = a;

      for (var i = 2; i < wnd.length; i++) {
        wnd[i] = this.mul(wnd[i - 1], a);
      }

      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;

      if (start === 0) {
        start = 26;
      }

      for (i = num.length - 1; i >= 0; i--) {
        var word = num.words[i];

        for (var j = start - 1; j >= 0; j--) {
          var bit = word >> j & 1;

          if (res !== wnd[0]) {
            res = this.sqr(res);
          }

          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }

          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }

        start = 26;
      }

      return res;
    };

    Red.prototype.convertTo = function convertTo(num) {
      var r = num.umod(this.m);
      return r === num ? r.clone() : r;
    };

    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    }; //
    // Montgomery method engine
    //


    BN.mont = function mont(num) {
      return new Mont(num);
    };

    function Mont(m) {
      Red.call(this, m);
      this.shift = this.m.bitLength();

      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }

      this.r = new BN(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }

    inherits(Mont, Red);

    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };

    Mont.prototype.convertFrom = function convertFrom(num) {
      var r = this.imod(num.mul(this.rinv));
      r.red = null;
      return r;
    };

    Mont.prototype.imul = function imul(a, b) {
      if (a.isZero() || b.isZero()) {
        a.words[0] = 0;
        a.length = 1;
        return a;
      }

      var t = a.imul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.mul = function mul(a, b) {
      if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
      var t = a.mul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.invm = function invm(a) {
      // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
      var res = this.imod(a._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn$1);

(function (exports) {

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.KECCAK256_RLP = exports.KECCAK256_RLP_S = exports.KECCAK256_RLP_ARRAY = exports.KECCAK256_RLP_ARRAY_S = exports.KECCAK256_NULL = exports.KECCAK256_NULL_S = exports.TWO_POW256 = exports.MAX_INTEGER = void 0;
  var Buffer = require$$0$1.Buffer;

  var bn_js_1 = __importDefault(bn$1.exports);
  /**
   * The max integer that this VM can handle
   */


  exports.MAX_INTEGER = new bn_js_1["default"]('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16);
  /**
   * 2^256
   */

  exports.TWO_POW256 = new bn_js_1["default"]('10000000000000000000000000000000000000000000000000000000000000000', 16);
  /**
   * Keccak-256 hash of null
   */

  exports.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';
  /**
   * Keccak-256 hash of null
   */

  exports.KECCAK256_NULL = Buffer.from(exports.KECCAK256_NULL_S, 'hex');
  /**
   * Keccak-256 of an RLP of an empty array
   */

  exports.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347';
  /**
   * Keccak-256 of an RLP of an empty array
   */

  exports.KECCAK256_RLP_ARRAY = Buffer.from(exports.KECCAK256_RLP_ARRAY_S, 'hex');
  /**
   * Keccak-256 hash of the RLP of null
   */

  exports.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421';
  /**
   * Keccak-256 hash of the RLP of null
   */

  exports.KECCAK256_RLP = Buffer.from(exports.KECCAK256_RLP_S, 'hex');
})(constants);

var account = {};

var dist_browser = {};

var bn = {exports: {}};

(function (module) {
  (function (module, exports) {

    function assert(val, msg) {
      if (!val) throw new Error(msg || 'Assertion failed');
    } // Could use `inherits` module, but don't want to move from single file
    // architecture yet.


    function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    } // BN


    function BN(number, base, endian) {
      if (BN.isBN(number)) {
        return number;
      }

      this.negative = 0;
      this.words = null;
      this.length = 0; // Reduction context

      this.red = null;

      if (number !== null) {
        if (base === 'le' || base === 'be') {
          endian = base;
          base = 10;
        }

        this._init(number || 0, base || 10, endian || 'be');
      }
    }

    if (_typeof(module) === 'object') {
      module.exports = BN;
    } else {
      exports.BN = BN;
    }

    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;

    try {
      if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
        Buffer = window.Buffer;
      } else {
        Buffer = require('buffer').Buffer;
      }
    } catch (e) {}

    BN.isBN = function isBN(num) {
      if (num instanceof BN) {
        return true;
      }

      return num !== null && _typeof(num) === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };

    BN.max = function max(left, right) {
      if (left.cmp(right) > 0) return left;
      return right;
    };

    BN.min = function min(left, right) {
      if (left.cmp(right) < 0) return left;
      return right;
    };

    BN.prototype._init = function init(number, base, endian) {
      if (typeof number === 'number') {
        return this._initNumber(number, base, endian);
      }

      if (_typeof(number) === 'object') {
        return this._initArray(number, base, endian);
      }

      if (base === 'hex') {
        base = 16;
      }

      assert(base === (base | 0) && base >= 2 && base <= 36);
      number = number.toString().replace(/\s+/g, '');
      var start = 0;

      if (number[0] === '-') {
        start++;
        this.negative = 1;
      }

      if (start < number.length) {
        if (base === 16) {
          this._parseHex(number, start, endian);
        } else {
          this._parseBase(number, base, start);

          if (endian === 'le') {
            this._initArray(this.toArray(), base, endian);
          }
        }
      }
    };

    BN.prototype._initNumber = function _initNumber(number, base, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }

      if (number < 0x4000000) {
        this.words = [number & 0x3ffffff];
        this.length = 1;
      } else if (number < 0x10000000000000) {
        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
        this.length = 2;
      } else {
        assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)

        this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
        this.length = 3;
      }

      if (endian !== 'le') return; // Reverse the bytes

      this._initArray(this.toArray(), base, endian);
    };

    BN.prototype._initArray = function _initArray(number, base, endian) {
      // Perhaps a Uint8Array
      assert(typeof number.length === 'number');

      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }

      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }

      var j, w;
      var off = 0;

      if (endian === 'be') {
        for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
          w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === 'le') {
        for (i = 0, j = 0; i < number.length; i += 3) {
          w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
          this.words[j] |= w << off & 0x3ffffff;
          this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
          off += 24;

          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }

      return this._strip();
    };

    function parseHex4Bits(string, index) {
      var c = string.charCodeAt(index); // '0' - '9'

      if (c >= 48 && c <= 57) {
        return c - 48; // 'A' - 'F'
      } else if (c >= 65 && c <= 70) {
        return c - 55; // 'a' - 'f'
      } else if (c >= 97 && c <= 102) {
        return c - 87;
      } else {
        assert(false, 'Invalid character in ' + string);
      }
    }

    function parseHexByte(string, lowerBound, index) {
      var r = parseHex4Bits(string, index);

      if (index - 1 >= lowerBound) {
        r |= parseHex4Bits(string, index - 1) << 4;
      }

      return r;
    }

    BN.prototype._parseHex = function _parseHex(number, start, endian) {
      // Create possibly bigger array to ensure that it fits the number
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      } // 24-bits chunks


      var off = 0;
      var j = 0;
      var w;

      if (endian === 'be') {
        for (i = number.length - 1; i >= start; i -= 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 0x3ffffff;

          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      } else {
        var parseLength = number.length - start;

        for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 0x3ffffff;

          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      }

      this._strip();
    };

    function parseBase(str, start, end, mul) {
      var r = 0;
      var b = 0;
      var len = Math.min(str.length, end);

      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r *= mul; // 'a'

        if (c >= 49) {
          b = c - 49 + 0xa; // 'A'
        } else if (c >= 17) {
          b = c - 17 + 0xa; // '0' - '9'
        } else {
          b = c;
        }

        assert(c >= 0 && b < mul, 'Invalid character');
        r += b;
      }

      return r;
    }

    BN.prototype._parseBase = function _parseBase(number, base, start) {
      // Initialize as zero
      this.words = [0];
      this.length = 1; // Find length of limb in base

      for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
        limbLen++;
      }

      limbLen--;
      limbPow = limbPow / base | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;

      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number, i, i + limbLen, base);
        this.imuln(limbPow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }

      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i, number.length, base);

        for (i = 0; i < mod; i++) {
          pow *= base;
        }

        this.imuln(pow);

        if (this.words[0] + word < 0x4000000) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }

      this._strip();
    };

    BN.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }

      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };

    function move(dest, src) {
      dest.words = src.words;
      dest.length = src.length;
      dest.negative = src.negative;
      dest.red = src.red;
    }

    BN.prototype._move = function _move(dest) {
      move(dest, this);
    };

    BN.prototype.clone = function clone() {
      var r = new BN(null);
      this.copy(r);
      return r;
    };

    BN.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }

      return this;
    }; // Remove leading `0` from `this`


    BN.prototype._strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }

      return this._normSign();
    };

    BN.prototype._normSign = function _normSign() {
      // -0 = 0
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }

      return this;
    }; // Check Symbol.for because not everywhere where Symbol defined
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility


    if (typeof Symbol !== 'undefined' && typeof Symbol["for"] === 'function') {
      try {
        BN.prototype[Symbol["for"]('nodejs.util.inspect.custom')] = inspect;
      } catch (e) {
        BN.prototype.inspect = inspect;
      }
    } else {
      BN.prototype.inspect = inspect;
    }

    function inspect() {
      return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    /*
     var zeros = [];
    var groupSizes = [];
    var groupBases = [];
     var s = '';
    var i = -1;
    while (++i < BN.wordSize) {
      zeros[i] = s;
      s += '0';
    }
    groupSizes[0] = 0;
    groupSizes[1] = 0;
    groupBases[0] = 0;
    groupBases[1] = 0;
    var base = 2 - 1;
    while (++base < 36 + 1) {
      var groupSize = 0;
      var groupBase = 1;
      while (groupBase < (1 << BN.wordSize) / base) {
        groupBase *= base;
        groupSize += 1;
      }
      groupSizes[base] = groupSize;
      groupBases[base] = groupBase;
    }
     */


    var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];
    var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    BN.prototype.toString = function toString(base, padding) {
      base = base || 10;
      padding = padding | 0 || 1;
      var out;

      if (base === 16 || base === 'hex') {
        out = '';
        var off = 0;
        var carry = 0;

        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = ((w << off | carry) & 0xffffff).toString(16);
          carry = w >>> 24 - off & 0xffffff;

          if (carry !== 0 || i !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }

          off += 2;

          if (off >= 26) {
            off -= 26;
            i--;
          }
        }

        if (carry !== 0) {
          out = carry.toString(16) + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      if (base === (base | 0) && base >= 2 && base <= 36) {
        // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
        var groupSize = groupSizes[base]; // var groupBase = Math.pow(base, groupSize);

        var groupBase = groupBases[base];
        out = '';
        var c = this.clone();
        c.negative = 0;

        while (!c.isZero()) {
          var r = c.modrn(groupBase).toString(base);
          c = c.idivn(groupBase);

          if (!c.isZero()) {
            out = zeros[groupSize - r.length] + r + out;
          } else {
            out = r + out;
          }
        }

        if (this.isZero()) {
          out = '0' + out;
        }

        while (out.length % padding !== 0) {
          out = '0' + out;
        }

        if (this.negative !== 0) {
          out = '-' + out;
        }

        return out;
      }

      assert(false, 'Base should be between 2 and 36');
    };

    BN.prototype.toNumber = function toNumber() {
      var ret = this.words[0];

      if (this.length === 2) {
        ret += this.words[1] * 0x4000000;
      } else if (this.length === 3 && this.words[2] === 0x01) {
        // NOTE: at this stage it is known that the top bit is set
        ret += 0x10000000000000 + this.words[1] * 0x4000000;
      } else if (this.length > 2) {
        assert(false, 'Number can only safely store up to 53 bits');
      }

      return this.negative !== 0 ? -ret : ret;
    };

    BN.prototype.toJSON = function toJSON() {
      return this.toString(16, 2);
    };

    if (Buffer) {
      BN.prototype.toBuffer = function toBuffer(endian, length) {
        return this.toArrayLike(Buffer, endian, length);
      };
    }

    BN.prototype.toArray = function toArray(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };

    var allocate = function allocate(ArrayType, size) {
      if (ArrayType.allocUnsafe) {
        return ArrayType.allocUnsafe(size);
      }

      return new ArrayType(size);
    };

    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      this._strip();

      var byteLength = this.byteLength();
      var reqLength = length || Math.max(1, byteLength);
      assert(byteLength <= reqLength, 'byte array longer than desired length');
      assert(reqLength > 0, 'Requested array length <= 0');
      var res = allocate(ArrayType, reqLength);
      var postfix = endian === 'le' ? 'LE' : 'BE';
      this['_toArrayLike' + postfix](res, byteLength);
      return res;
    };

    BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
      var position = 0;
      var carry = 0;

      for (var i = 0, shift = 0; i < this.length; i++) {
        var word = this.words[i] << shift | carry;
        res[position++] = word & 0xff;

        if (position < res.length) {
          res[position++] = word >> 8 & 0xff;
        }

        if (position < res.length) {
          res[position++] = word >> 16 & 0xff;
        }

        if (shift === 6) {
          if (position < res.length) {
            res[position++] = word >> 24 & 0xff;
          }

          carry = 0;
          shift = 0;
        } else {
          carry = word >>> 24;
          shift += 2;
        }
      }

      if (position < res.length) {
        res[position++] = carry;

        while (position < res.length) {
          res[position++] = 0;
        }
      }
    };

    BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
      var position = res.length - 1;
      var carry = 0;

      for (var i = 0, shift = 0; i < this.length; i++) {
        var word = this.words[i] << shift | carry;
        res[position--] = word & 0xff;

        if (position >= 0) {
          res[position--] = word >> 8 & 0xff;
        }

        if (position >= 0) {
          res[position--] = word >> 16 & 0xff;
        }

        if (shift === 6) {
          if (position >= 0) {
            res[position--] = word >> 24 & 0xff;
          }

          carry = 0;
          shift = 0;
        } else {
          carry = word >>> 24;
          shift += 2;
        }
      }

      if (position >= 0) {
        res[position--] = carry;

        while (position >= 0) {
          res[position--] = 0;
        }
      }
    };

    if (Math.clz32) {
      BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;

        if (t >= 0x1000) {
          r += 13;
          t >>>= 13;
        }

        if (t >= 0x40) {
          r += 7;
          t >>>= 7;
        }

        if (t >= 0x8) {
          r += 4;
          t >>>= 4;
        }

        if (t >= 0x02) {
          r += 2;
          t >>>= 2;
        }

        return r + t;
      };
    }

    BN.prototype._zeroBits = function _zeroBits(w) {
      // Short-cut
      if (w === 0) return 26;
      var t = w;
      var r = 0;

      if ((t & 0x1fff) === 0) {
        r += 13;
        t >>>= 13;
      }

      if ((t & 0x7f) === 0) {
        r += 7;
        t >>>= 7;
      }

      if ((t & 0xf) === 0) {
        r += 4;
        t >>>= 4;
      }

      if ((t & 0x3) === 0) {
        r += 2;
        t >>>= 2;
      }

      if ((t & 0x1) === 0) {
        r++;
      }

      return r;
    }; // Return number of used bits in a BN


    BN.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];

      var hi = this._countBits(w);

      return (this.length - 1) * 26 + hi;
    };

    function toBitArray(num) {
      var w = new Array(num.bitLength());

      for (var bit = 0; bit < w.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w[bit] = num.words[off] >>> wbit & 0x01;
      }

      return w;
    } // Number of trailing zero bits


    BN.prototype.zeroBits = function zeroBits() {
      if (this.isZero()) return 0;
      var r = 0;

      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);

        r += b;
        if (b !== 26) break;
      }

      return r;
    };

    BN.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };

    BN.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }

      return this.clone();
    };

    BN.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }

      return this.clone();
    };

    BN.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    }; // Return negative clone of `this`


    BN.prototype.neg = function neg() {
      return this.clone().ineg();
    };

    BN.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }

      return this;
    }; // Or `num` with `this` in-place


    BN.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }

      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }

      return this._strip();
    };

    BN.prototype.ior = function ior(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuor(num);
    }; // Or `num` with `this`


    BN.prototype.or = function or(num) {
      if (this.length > num.length) return this.clone().ior(num);
      return num.clone().ior(this);
    };

    BN.prototype.uor = function uor(num) {
      if (this.length > num.length) return this.clone().iuor(num);
      return num.clone().iuor(this);
    }; // And `num` with `this` in-place


    BN.prototype.iuand = function iuand(num) {
      // b = min-length(num, this)
      var b;

      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }

      this.length = b.length;
      return this._strip();
    };

    BN.prototype.iand = function iand(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuand(num);
    }; // And `num` with `this`


    BN.prototype.and = function and(num) {
      if (this.length > num.length) return this.clone().iand(num);
      return num.clone().iand(this);
    };

    BN.prototype.uand = function uand(num) {
      if (this.length > num.length) return this.clone().iuand(num);
      return num.clone().iuand(this);
    }; // Xor `num` with `this` in-place


    BN.prototype.iuxor = function iuxor(num) {
      // a.length > b.length
      var a;
      var b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }

      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = a.length;
      return this._strip();
    };

    BN.prototype.ixor = function ixor(num) {
      assert((this.negative | num.negative) === 0);
      return this.iuxor(num);
    }; // Xor `num` with `this`


    BN.prototype.xor = function xor(num) {
      if (this.length > num.length) return this.clone().ixor(num);
      return num.clone().ixor(this);
    };

    BN.prototype.uxor = function uxor(num) {
      if (this.length > num.length) return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    }; // Not ``this`` with ``width`` bitwidth


    BN.prototype.inotn = function inotn(width) {
      assert(typeof width === 'number' && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26; // Extend the buffer with leading zeroes

      this._expand(bytesNeeded);

      if (bitsLeft > 0) {
        bytesNeeded--;
      } // Handle complete words


      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 0x3ffffff;
      } // Handle the residue


      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
      } // And remove leading zeroes


      return this._strip();
    };

    BN.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    }; // Set `bit` of `this`


    BN.prototype.setn = function setn(bit, val) {
      assert(typeof bit === 'number' && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;

      this._expand(off + 1);

      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }

      return this._strip();
    }; // Add `num` to `this` in-place


    BN.prototype.iadd = function iadd(num) {
      var r; // negative + positive

      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r = this.isub(num);
        this.negative ^= 1;
        return this._normSign(); // positive + negative
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r = this.isub(num);
        num.negative = 1;
        return r._normSign();
      } // a.length > b.length


      var a, b;

      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        this.words[i] = r & 0x3ffffff;
        carry = r >>> 26;
      }

      this.length = a.length;

      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++; // Copy the rest of the words
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      return this;
    }; // Add `num` to `this`


    BN.prototype.add = function add(num) {
      var res;

      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }

      if (this.length > num.length) return this.clone().iadd(num);
      return num.clone().iadd(this);
    }; // Subtract `num` from `this` in-place


    BN.prototype.isub = function isub(num) {
      // this - (-num) = this + num
      if (num.negative !== 0) {
        num.negative = 0;
        var r = this.iadd(num);
        num.negative = 1;
        return r._normSign(); // -this - num = -(this + num)
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      } // At this point both numbers are positive


      var cmp = this.cmp(num); // Optimization - zeroify

      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      } // a > b


      var a, b;

      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }

      var carry = 0;

      for (var i = 0; i < b.length; i++) {
        r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      }

      for (; carry !== 0 && i < a.length; i++) {
        r = (a.words[i] | 0) + carry;
        carry = r >> 26;
        this.words[i] = r & 0x3ffffff;
      } // Copy rest of the words


      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }

      this.length = Math.max(this.length, i);

      if (a !== this) {
        this.negative = 1;
      }

      return this._strip();
    }; // Subtract `num` from `this`


    BN.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };

    function smallMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      var len = self.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0; // Peel one iteration (compiler can't do it, because of code complexity)

      var a = self.words[0] | 0;
      var b = num.words[0] | 0;
      var r = a * b;
      var lo = r & 0x3ffffff;
      var carry = r / 0x4000000 | 0;
      out.words[0] = lo;

      for (var k = 1; k < len; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = carry >>> 26;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j | 0;
          a = self.words[i] | 0;
          b = num.words[j] | 0;
          r = a * b + rword;
          ncarry += r / 0x4000000 | 0;
          rword = r & 0x3ffffff;
        }

        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }

      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }

      return out._strip();
    } // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).


    var comb10MulTo = function comb10MulTo(self, num, out) {
      var a = self.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 0x1fff;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 0x1fff;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 0x1fff;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 0x1fff;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 0x1fff;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 0x1fff;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 0x1fff;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 0x1fff;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 0x1fff;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 0x1fff;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 0x1fff;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 0x1fff;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 0x1fff;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 0x1fff;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 0x1fff;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 0x1fff;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 0x1fff;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 0x1fff;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 0x1fff;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 0x1fff;
      var bh9 = b9 >>> 13;
      out.negative = self.negative ^ num.negative;
      out.length = 19;
      /* k = 0 */

      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 0x3ffffff;
      /* k = 1 */

      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 0x3ffffff;
      /* k = 2 */

      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 0x3ffffff;
      /* k = 3 */

      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 0x3ffffff;
      /* k = 4 */

      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 0x3ffffff;
      /* k = 5 */

      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 0x3ffffff;
      /* k = 6 */

      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 0x3ffffff;
      /* k = 7 */

      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 0x3ffffff;
      /* k = 8 */

      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 0x3ffffff;
      /* k = 9 */

      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 0x3ffffff;
      /* k = 10 */

      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 0x3ffffff;
      /* k = 11 */

      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 0x3ffffff;
      /* k = 12 */

      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 0x3ffffff;
      /* k = 13 */

      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 0x3ffffff;
      /* k = 14 */

      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 0x3ffffff;
      /* k = 15 */

      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 0x3ffffff;
      /* k = 16 */

      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 0x3ffffff;
      /* k = 17 */

      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 0x3ffffff;
      /* k = 18 */

      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 0x3ffffff;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;

      if (c !== 0) {
        o[19] = c;
        out.length++;
      }

      return out;
    }; // Polyfill comb


    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }

    function bigMulTo(self, num, out) {
      out.negative = num.negative ^ self.negative;
      out.length = self.length + num.length;
      var carry = 0;
      var hncarry = 0;

      for (var k = 0; k < out.length - 1; k++) {
        // Sum all words with the same `i + j = k` and accumulate `ncarry`,
        // note that ncarry could be >= 0x3ffffff
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 0x3ffffff;
        var maxJ = Math.min(k, num.length - 1);

        for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self.words[i] | 0;
          var b = num.words[j] | 0;
          var r = a * b;
          var lo = r & 0x3ffffff;
          ncarry = ncarry + (r / 0x4000000 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 0x3ffffff;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 0x3ffffff;
        }

        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }

      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }

      return out._strip();
    }

    function jumboMulTo(self, num, out) {
      // Temporary disable, see https://github.com/indutny/bn.js/issues/211
      // var fftm = new FFTM();
      // return fftm.mulp(self, num, out);
      return bigMulTo(self, num, out);
    }

    BN.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;

      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }

      return res;
    }; // Cooley-Tukey algorithm for FFT


    BN.prototype.mul = function mul(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    }; // Multiply employing FFT


    BN.prototype.mulf = function mulf(num) {
      var out = new BN(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    }; // In-place Multiplication


    BN.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };

    BN.prototype.imuln = function imuln(num) {
      var isNegNum = num < 0;
      if (isNegNum) num = -num;
      assert(typeof num === 'number');
      assert(num < 0x4000000); // Carry

      var carry = 0;

      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
        carry >>= 26;
        carry += w / 0x4000000 | 0; // NOTE: lo is 27bit maximum

        carry += lo >>> 26;
        this.words[i] = lo & 0x3ffffff;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return isNegNum ? this.ineg() : this;
    };

    BN.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    }; // `this` * `this`


    BN.prototype.sqr = function sqr() {
      return this.mul(this);
    }; // `this` * `this` in-place


    BN.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    }; // Math.pow(`this`, `num`)


    BN.prototype.pow = function pow(num) {
      var w = toBitArray(num);
      if (w.length === 0) return new BN(1); // Skip leading zeroes

      var res = this;

      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0) break;
      }

      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0) continue;
          res = res.mul(q);
        }
      }

      return res;
    }; // Shift-left in-place


    BN.prototype.iushln = function iushln(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
      var i;

      if (r !== 0) {
        var carry = 0;

        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = (this.words[i] | 0) - newCarry << r;
          this.words[i] = c | carry;
          carry = newCarry >>> 26 - r;
        }

        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }

      if (s !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s] = this.words[i];
        }

        for (i = 0; i < s; i++) {
          this.words[i] = 0;
        }

        this.length += s;
      }

      return this._strip();
    };

    BN.prototype.ishln = function ishln(bits) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushln(bits);
    }; // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits


    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert(typeof bits === 'number' && bits >= 0);
      var h;

      if (hint) {
        h = (hint - hint % 26) / 26;
      } else {
        h = 0;
      }

      var r = bits % 26;
      var s = Math.min((bits - r) / 26, this.length);
      var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
      var maskedWords = extended;
      h -= s;
      h = Math.max(0, h); // Extended mode, copy masked part

      if (maskedWords) {
        for (var i = 0; i < s; i++) {
          maskedWords.words[i] = this.words[i];
        }

        maskedWords.length = s;
      }

      if (s === 0) ; else if (this.length > s) {
        this.length -= s;

        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }

      var carry = 0;

      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = carry << 26 - r | word >>> r;
        carry = word & mask;
      } // Push carried bits as a mask


      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }

      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }

      return this._strip();
    };

    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
      // TODO(indutny): implement me
      assert(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    }; // Shift-left


    BN.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };

    BN.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    }; // Shift-right


    BN.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };

    BN.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    }; // Test if n bit is set


    BN.prototype.testn = function testn(bit) {
      assert(typeof bit === 'number' && bit >= 0);
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) return false; // Check bit and return

      var w = this.words[s];
      return !!(w & q);
    }; // Return only lowers bits of number (in-place)


    BN.prototype.imaskn = function imaskn(bits) {
      assert(typeof bits === 'number' && bits >= 0);
      var r = bits % 26;
      var s = (bits - r) / 26;
      assert(this.negative === 0, 'imaskn works only with positive numbers');

      if (this.length <= s) {
        return this;
      }

      if (r !== 0) {
        s++;
      }

      this.length = Math.min(s, this.length);

      if (r !== 0) {
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        this.words[this.length - 1] &= mask;
      }

      return this._strip();
    }; // Return only lowers bits of number


    BN.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    }; // Add plain number `num` to `this`


    BN.prototype.iaddn = function iaddn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.isubn(-num); // Possible sign change

      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) <= num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }

        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      } // Add without checks


      return this._iaddn(num);
    };

    BN.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num; // Carry

      for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
        this.words[i] -= 0x4000000;

        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }

      this.length = Math.max(this.length, i + 1);
      return this;
    }; // Subtract plain number `num` from `this`


    BN.prototype.isubn = function isubn(num) {
      assert(typeof num === 'number');
      assert(num < 0x4000000);
      if (num < 0) return this.iaddn(-num);

      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }

      this.words[0] -= num;

      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        // Carry
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 0x4000000;
          this.words[i + 1] -= 1;
        }
      }

      return this._strip();
    };

    BN.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };

    BN.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };

    BN.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };

    BN.prototype.abs = function abs() {
      return this.clone().iabs();
    };

    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
      var len = num.length + shift;
      var i;

      this._expand(len);

      var w;
      var carry = 0;

      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul;
        w -= right & 0x3ffffff;
        carry = (w >> 26) - (right / 0x4000000 | 0);
        this.words[i + shift] = w & 0x3ffffff;
      }

      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 0x3ffffff;
      }

      if (carry === 0) return this._strip(); // Subtraction overflow

      assert(carry === -1);
      carry = 0;

      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 0x3ffffff;
      }

      this.negative = 1;
      return this._strip();
    };

    BN.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num; // Normalize

      var bhi = b.words[b.length - 1] | 0;

      var bhiBits = this._countBits(bhi);

      shift = 26 - bhiBits;

      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      } // Initialize quotient


      var m = a.length - b.length;
      var q;

      if (mode !== 'mod') {
        q = new BN(null);
        q.length = m + 1;
        q.words = new Array(q.length);

        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }

      var diff = a.clone()._ishlnsubmul(b, 1, m);

      if (diff.negative === 0) {
        a = diff;

        if (q) {
          q.words[m] = 1;
        }
      }

      for (var j = m - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0); // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
        // (0x7ffffff)

        qj = Math.min(qj / bhi | 0, 0x3ffffff);

        a._ishlnsubmul(b, qj, j);

        while (a.negative !== 0) {
          qj--;
          a.negative = 0;

          a._ishlnsubmul(b, 1, j);

          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }

        if (q) {
          q.words[j] = qj;
        }
      }

      if (q) {
        q._strip();
      }

      a._strip(); // Denormalize


      if (mode !== 'div' && shift !== 0) {
        a.iushrn(shift);
      }

      return {
        div: q || null,
        mod: a
      };
    }; // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested


    BN.prototype.divmod = function divmod(num, mode, positive) {
      assert(!num.isZero());

      if (this.isZero()) {
        return {
          div: new BN(0),
          mod: new BN(0)
        };
      }

      var div, mod, res;

      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }

        return {
          div: div,
          mod: mod
        };
      }

      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);

        if (mode !== 'mod') {
          div = res.div.neg();
        }

        return {
          div: div,
          mod: res.mod
        };
      }

      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);

        if (mode !== 'div') {
          mod = res.mod.neg();

          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }

        return {
          div: res.div,
          mod: mod
        };
      } // Both numbers are positive at this point
      // Strip both numbers to approximate shift value


      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN(0),
          mod: this
        };
      } // Very short reduction


      if (num.length === 1) {
        if (mode === 'div') {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }

        if (mode === 'mod') {
          return {
            div: null,
            mod: new BN(this.modrn(num.words[0]))
          };
        }

        return {
          div: this.divn(num.words[0]),
          mod: new BN(this.modrn(num.words[0]))
        };
      }

      return this._wordDiv(num, mode);
    }; // Find `this` / `num`


    BN.prototype.div = function div(num) {
      return this.divmod(num, 'div', false).div;
    }; // Find `this` % `num`


    BN.prototype.mod = function mod(num) {
      return this.divmod(num, 'mod', false).mod;
    };

    BN.prototype.umod = function umod(num) {
      return this.divmod(num, 'mod', true).mod;
    }; // Find Round(`this` / `num`)


    BN.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num); // Fast case - exact division

      if (dm.mod.isZero()) return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half); // Round down

      if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div; // Round up

      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };

    BN.prototype.modrn = function modrn(num) {
      var isNegNum = num < 0;
      if (isNegNum) num = -num;
      assert(num <= 0x3ffffff);
      var p = (1 << 26) % num;
      var acc = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }

      return isNegNum ? -acc : acc;
    }; // WARNING: DEPRECATED


    BN.prototype.modn = function modn(num) {
      return this.modrn(num);
    }; // In-place division by number


    BN.prototype.idivn = function idivn(num) {
      var isNegNum = num < 0;
      if (isNegNum) num = -num;
      assert(num <= 0x3ffffff);
      var carry = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 0x4000000;
        this.words[i] = w / num | 0;
        carry = w % num;
      }

      this._strip();

      return isNegNum ? this.ineg() : this;
    };

    BN.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };

    BN.prototype.egcd = function egcd(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var x = this;
      var y = p.clone();

      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      } // A * x + B * y = x


      var A = new BN(1);
      var B = new BN(0); // C * x + D * y = y

      var C = new BN(0);
      var D = new BN(1);
      var g = 0;

      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }

      var yp = y.clone();
      var xp = x.clone();

      while (!x.isZero()) {
        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          x.iushrn(i);

          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }

            A.iushrn(1);
            B.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          y.iushrn(j);

          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }

            C.iushrn(1);
            D.iushrn(1);
          }
        }

        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }

      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    }; // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed


    BN.prototype._invmp = function _invmp(p) {
      assert(p.negative === 0);
      assert(!p.isZero());
      var a = this;
      var b = p.clone();

      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }

      var x1 = new BN(1);
      var x2 = new BN(0);
      var delta = b.clone();

      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {
        }

        if (i > 0) {
          a.iushrn(i);

          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }

            x1.iushrn(1);
          }
        }

        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {
        }

        if (j > 0) {
          b.iushrn(j);

          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }

            x2.iushrn(1);
          }
        }

        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }

      var res;

      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }

      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }

      return res;
    };

    BN.prototype.gcd = function gcd(num) {
      if (this.isZero()) return num.abs();
      if (num.isZero()) return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0; // Remove common factor of two

      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }

      do {
        while (a.isEven()) {
          a.iushrn(1);
        }

        while (b.isEven()) {
          b.iushrn(1);
        }

        var r = a.cmp(b);

        if (r < 0) {
          // Swap `a` and `b` to make `a` always bigger than `b`
          var t = a;
          a = b;
          b = t;
        } else if (r === 0 || b.cmpn(1) === 0) {
          break;
        }

        a.isub(b);
      } while (true);

      return b.iushln(shift);
    }; // Invert number in the field F(num)


    BN.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };

    BN.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };

    BN.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    }; // And first word and num


    BN.prototype.andln = function andln(num) {
      return this.words[0] & num;
    }; // Increment at the bit position in-line


    BN.prototype.bincn = function bincn(bit) {
      assert(typeof bit === 'number');
      var r = bit % 26;
      var s = (bit - r) / 26;
      var q = 1 << r; // Fast case: bit is much higher than all existing words

      if (this.length <= s) {
        this._expand(s + 1);

        this.words[s] |= q;
        return this;
      } // Add bit and propagate, if needed


      var carry = q;

      for (var i = s; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 0x3ffffff;
        this.words[i] = w;
      }

      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }

      return this;
    };

    BN.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };

    BN.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative) return -1;
      if (this.negative === 0 && negative) return 1;

      this._strip();

      var res;

      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }

        assert(num <= 0x3ffffff, 'Number is too big');
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }

      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`


    BN.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0) return -1;
      if (this.negative === 0 && num.negative !== 0) return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0) return -res | 0;
      return res;
    }; // Unsigned comparison


    BN.prototype.ucmp = function ucmp(num) {
      // At this point both numbers have the same sign
      if (this.length > num.length) return 1;
      if (this.length < num.length) return -1;
      var res = 0;

      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b) continue;

        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }

        break;
      }

      return res;
    };

    BN.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };

    BN.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };

    BN.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };

    BN.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };

    BN.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };

    BN.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };

    BN.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };

    BN.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };

    BN.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };

    BN.prototype.eq = function eq(num) {
      return this.cmp(num) === 0;
    }; //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //


    BN.red = function red(num) {
      return new Red(num);
    };

    BN.prototype.toRed = function toRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      assert(this.negative === 0, 'red works only with positives');
      return ctx.convertTo(this)._forceRed(ctx);
    };

    BN.prototype.fromRed = function fromRed() {
      assert(this.red, 'fromRed works only with numbers in reduction context');
      return this.red.convertFrom(this);
    };

    BN.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };

    BN.prototype.forceRed = function forceRed(ctx) {
      assert(!this.red, 'Already a number in reduction context');
      return this._forceRed(ctx);
    };

    BN.prototype.redAdd = function redAdd(num) {
      assert(this.red, 'redAdd works only with red numbers');
      return this.red.add(this, num);
    };

    BN.prototype.redIAdd = function redIAdd(num) {
      assert(this.red, 'redIAdd works only with red numbers');
      return this.red.iadd(this, num);
    };

    BN.prototype.redSub = function redSub(num) {
      assert(this.red, 'redSub works only with red numbers');
      return this.red.sub(this, num);
    };

    BN.prototype.redISub = function redISub(num) {
      assert(this.red, 'redISub works only with red numbers');
      return this.red.isub(this, num);
    };

    BN.prototype.redShl = function redShl(num) {
      assert(this.red, 'redShl works only with red numbers');
      return this.red.shl(this, num);
    };

    BN.prototype.redMul = function redMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.mul(this, num);
    };

    BN.prototype.redIMul = function redIMul(num) {
      assert(this.red, 'redMul works only with red numbers');

      this.red._verify2(this, num);

      return this.red.imul(this, num);
    };

    BN.prototype.redSqr = function redSqr() {
      assert(this.red, 'redSqr works only with red numbers');

      this.red._verify1(this);

      return this.red.sqr(this);
    };

    BN.prototype.redISqr = function redISqr() {
      assert(this.red, 'redISqr works only with red numbers');

      this.red._verify1(this);

      return this.red.isqr(this);
    }; // Square root over p


    BN.prototype.redSqrt = function redSqrt() {
      assert(this.red, 'redSqrt works only with red numbers');

      this.red._verify1(this);

      return this.red.sqrt(this);
    };

    BN.prototype.redInvm = function redInvm() {
      assert(this.red, 'redInvm works only with red numbers');

      this.red._verify1(this);

      return this.red.invm(this);
    }; // Return negative clone of `this` % `red modulo`


    BN.prototype.redNeg = function redNeg() {
      assert(this.red, 'redNeg works only with red numbers');

      this.red._verify1(this);

      return this.red.neg(this);
    };

    BN.prototype.redPow = function redPow(num) {
      assert(this.red && !num.red, 'redPow(normalNum)');

      this.red._verify1(this);

      return this.red.pow(this, num);
    }; // Prime numbers with efficient reduction


    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    }; // Pseudo-Mersenne prime

    function MPrime(name, p) {
      // P = 2 ^ N - K
      this.name = name;
      this.p = new BN(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }

    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };

    MPrime.prototype.ireduce = function ireduce(num) {
      // Assumes that `num` is less than `P^2`
      // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
      var r = num;
      var rlen;

      do {
        this.split(r, this.tmp);
        r = this.imulK(r);
        r = r.iadd(this.tmp);
        rlen = r.bitLength();
      } while (rlen > this.n);

      var cmp = rlen < this.n ? -1 : r.ucmp(this.p);

      if (cmp === 0) {
        r.words[0] = 0;
        r.length = 1;
      } else if (cmp > 0) {
        r.isub(this.p);
      } else {
        if (r.strip !== undefined) {
          // r is a BN v4 instance
          r.strip();
        } else {
          // r is a BN v5 instance
          r._strip();
        }
      }

      return r;
    };

    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };

    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };

    function K256() {
      MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }

    inherits(K256, MPrime);

    K256.prototype.split = function split(input, output) {
      // 256 = 9 * 26 + 22
      var mask = 0x3fffff;
      var outLen = Math.min(input.length, 9);

      for (var i = 0; i < outLen; i++) {
        output.words[i] = input.words[i];
      }

      output.length = outLen;

      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      } // Shift by 9 limbs


      var prev = input.words[9];
      output.words[output.length++] = prev & mask;

      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }

      prev >>>= 22;
      input.words[i - 10] = prev;

      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };

    K256.prototype.imulK = function imulK(num) {
      // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2; // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390

      var lo = 0;

      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 0x3d1;
        num.words[i] = lo & 0x3ffffff;
        lo = w * 0x40 + (lo / 0x4000000 | 0);
      } // Fast length reduction


      if (num.words[num.length - 1] === 0) {
        num.length--;

        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }

      return num;
    };

    function P224() {
      MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }

    inherits(P224, MPrime);

    function P192() {
      MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }

    inherits(P192, MPrime);

    function P25519() {
      // 2 ^ 255 - 19
      MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }

    inherits(P25519, MPrime);

    P25519.prototype.imulK = function imulK(num) {
      // K = 0x13
      var carry = 0;

      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 0x13 + carry;
        var lo = hi & 0x3ffffff;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }

      if (carry !== 0) {
        num.words[num.length++] = carry;
      }

      return num;
    }; // Exported mostly for testing purposes, use plain name instead


    BN._prime = function prime(name) {
      // Cached version of prime
      if (primes[name]) return primes[name];
      var prime;

      if (name === 'k256') {
        prime = new K256();
      } else if (name === 'p224') {
        prime = new P224();
      } else if (name === 'p192') {
        prime = new P192();
      } else if (name === 'p25519') {
        prime = new P25519();
      } else {
        throw new Error('Unknown prime ' + name);
      }

      primes[name] = prime;
      return prime;
    }; //
    // Base reduction engine
    //


    function Red(m) {
      if (typeof m === 'string') {
        var prime = BN._prime(m);

        this.m = prime.p;
        this.prime = prime;
      } else {
        assert(m.gtn(1), 'modulus must be greater than 1');
        this.m = m;
        this.prime = null;
      }
    }

    Red.prototype._verify1 = function _verify1(a) {
      assert(a.negative === 0, 'red works only with positives');
      assert(a.red, 'red works only with red numbers');
    };

    Red.prototype._verify2 = function _verify2(a, b) {
      assert((a.negative | b.negative) === 0, 'red works only with positives');
      assert(a.red && a.red === b.red, 'red works only with red numbers');
    };

    Red.prototype.imod = function imod(a) {
      if (this.prime) return this.prime.ireduce(a)._forceRed(this);
      move(a, a.umod(this.m)._forceRed(this));
      return a;
    };

    Red.prototype.neg = function neg(a) {
      if (a.isZero()) {
        return a.clone();
      }

      return this.m.sub(a)._forceRed(this);
    };

    Red.prototype.add = function add(a, b) {
      this._verify2(a, b);

      var res = a.add(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.iadd = function iadd(a, b) {
      this._verify2(a, b);

      var res = a.iadd(b);

      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }

      return res;
    };

    Red.prototype.sub = function sub(a, b) {
      this._verify2(a, b);

      var res = a.sub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Red.prototype.isub = function isub(a, b) {
      this._verify2(a, b);

      var res = a.isub(b);

      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }

      return res;
    };

    Red.prototype.shl = function shl(a, num) {
      this._verify1(a);

      return this.imod(a.ushln(num));
    };

    Red.prototype.imul = function imul(a, b) {
      this._verify2(a, b);

      return this.imod(a.imul(b));
    };

    Red.prototype.mul = function mul(a, b) {
      this._verify2(a, b);

      return this.imod(a.mul(b));
    };

    Red.prototype.isqr = function isqr(a) {
      return this.imul(a, a.clone());
    };

    Red.prototype.sqr = function sqr(a) {
      return this.mul(a, a);
    };

    Red.prototype.sqrt = function sqrt(a) {
      if (a.isZero()) return a.clone();
      var mod3 = this.m.andln(3);
      assert(mod3 % 2 === 1); // Fast case

      if (mod3 === 3) {
        var pow = this.m.add(new BN(1)).iushrn(2);
        return this.pow(a, pow);
      } // Tonelli-Shanks algorithm (Totally unoptimized and slow)
      //
      // Find Q and S, that Q * 2 ^ S = (P - 1)


      var q = this.m.subn(1);
      var s = 0;

      while (!q.isZero() && q.andln(1) === 0) {
        s++;
        q.iushrn(1);
      }

      assert(!q.isZero());
      var one = new BN(1).toRed(this);
      var nOne = one.redNeg(); // Find quadratic non-residue
      // NOTE: Max is such because of generalized Riemann hypothesis.

      var lpow = this.m.subn(1).iushrn(1);
      var z = this.m.bitLength();
      z = new BN(2 * z * z).toRed(this);

      while (this.pow(z, lpow).cmp(nOne) !== 0) {
        z.redIAdd(nOne);
      }

      var c = this.pow(z, q);
      var r = this.pow(a, q.addn(1).iushrn(1));
      var t = this.pow(a, q);
      var m = s;

      while (t.cmp(one) !== 0) {
        var tmp = t;

        for (var i = 0; tmp.cmp(one) !== 0; i++) {
          tmp = tmp.redSqr();
        }

        assert(i < m);
        var b = this.pow(c, new BN(1).iushln(m - i - 1));
        r = r.redMul(b);
        c = b.redSqr();
        t = t.redMul(c);
        m = i;
      }

      return r;
    };

    Red.prototype.invm = function invm(a) {
      var inv = a._invmp(this.m);

      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };

    Red.prototype.pow = function pow(a, num) {
      if (num.isZero()) return new BN(1).toRed(this);
      if (num.cmpn(1) === 0) return a.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN(1).toRed(this);
      wnd[1] = a;

      for (var i = 2; i < wnd.length; i++) {
        wnd[i] = this.mul(wnd[i - 1], a);
      }

      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;

      if (start === 0) {
        start = 26;
      }

      for (i = num.length - 1; i >= 0; i--) {
        var word = num.words[i];

        for (var j = start - 1; j >= 0; j--) {
          var bit = word >> j & 1;

          if (res !== wnd[0]) {
            res = this.sqr(res);
          }

          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }

          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }

        start = 26;
      }

      return res;
    };

    Red.prototype.convertTo = function convertTo(num) {
      var r = num.umod(this.m);
      return r === num ? r.clone() : r;
    };

    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    }; //
    // Montgomery method engine
    //


    BN.mont = function mont(num) {
      return new Mont(num);
    };

    function Mont(m) {
      Red.call(this, m);
      this.shift = this.m.bitLength();

      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }

      this.r = new BN(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }

    inherits(Mont, Red);

    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };

    Mont.prototype.convertFrom = function convertFrom(num) {
      var r = this.imod(num.mul(this.rinv));
      r.red = null;
      return r;
    };

    Mont.prototype.imul = function imul(a, b) {
      if (a.isZero() || b.isZero()) {
        a.words[0] = 0;
        a.length = 1;
        return a;
      }

      var t = a.imul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.mul = function mul(a, b) {
      if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
      var t = a.mul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;

      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }

      return res._forceRed(this);
    };

    Mont.prototype.invm = function invm(a) {
      // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
      var res = this.imod(a._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn);

var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(dist_browser, "__esModule", {
  value: true
});
dist_browser.getLength = dist_browser.decode = dist_browser.encode = void 0;

var bn_js_1$3 = __importDefault$4(bn.exports);
/**
 * RLP Encoding based on: https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP
 * This function takes in a data, convert it to buffer if not, and a length for recursion
 * @param input - will be converted to buffer
 * @returns returns buffer of encoded data
 **/


function encode(input) {
  if (Array.isArray(input)) {
    var output = [];

    for (var i = 0; i < input.length; i++) {
      output.push(encode(input[i]));
    }

    var buf = Buffer.concat(output);
    return Buffer.concat([encodeLength(buf.length, 192), buf]);
  } else {
    var inputBuf = toBuffer(input);
    return inputBuf.length === 1 && inputBuf[0] < 128 ? inputBuf : Buffer.concat([encodeLength(inputBuf.length, 128), inputBuf]);
  }
}

dist_browser.encode = encode;
/**
 * Parse integers. Check if there is no leading zeros
 * @param v The value to parse
 * @param base The base to parse the integer into
 */

function safeParseInt(v, base) {
  if (v[0] === '0' && v[1] === '0') {
    throw new Error('invalid RLP: extra zeros');
  }

  return parseInt(v, base);
}

function encodeLength(len, offset) {
  if (len < 56) {
    return Buffer.from([len + offset]);
  } else {
    var hexLength = intToHex(len);
    var lLength = hexLength.length / 2;
    var firstByte = intToHex(offset + 55 + lLength);
    return Buffer.from(firstByte + hexLength, 'hex');
  }
}

function decode(input, stream) {
  if (stream === void 0) {
    stream = false;
  }

  if (!input || input.length === 0) {
    return Buffer.from([]);
  }

  var inputBuffer = toBuffer(input);

  var decoded = _decode(inputBuffer);

  if (stream) {
    return decoded;
  }

  if (decoded.remainder.length !== 0) {
    throw new Error('invalid remainder');
  }

  return decoded.data;
}

dist_browser.decode = decode;
/**
 * Get the length of the RLP input
 * @param input
 * @returns The length of the input or an empty Buffer if no input
 */

function getLength$1(input) {
  if (!input || input.length === 0) {
    return Buffer.from([]);
  }

  var inputBuffer = toBuffer(input);
  var firstByte = inputBuffer[0];

  if (firstByte <= 0x7f) {
    return inputBuffer.length;
  } else if (firstByte <= 0xb7) {
    return firstByte - 0x7f;
  } else if (firstByte <= 0xbf) {
    return firstByte - 0xb6;
  } else if (firstByte <= 0xf7) {
    // a list between  0-55 bytes long
    return firstByte - 0xbf;
  } else {
    // a list  over 55 bytes long
    var llength = firstByte - 0xf6;
    var length_1 = safeParseInt(inputBuffer.slice(1, llength).toString('hex'), 16);
    return llength + length_1;
  }
}

dist_browser.getLength = getLength$1;
/** Decode an input with RLP */

function _decode(input) {
  var length, llength, data, innerRemainder, d;
  var decoded = [];
  var firstByte = input[0];

  if (firstByte <= 0x7f) {
    // a single byte whose value is in the [0x00, 0x7f] range, that byte is its own RLP encoding.
    return {
      data: input.slice(0, 1),
      remainder: input.slice(1)
    };
  } else if (firstByte <= 0xb7) {
    // string is 0-55 bytes long. A single byte with value 0x80 plus the length of the string followed by the string
    // The range of the first byte is [0x80, 0xb7]
    length = firstByte - 0x7f; // set 0x80 null to 0

    if (firstByte === 0x80) {
      data = Buffer.from([]);
    } else {
      data = input.slice(1, length);
    }

    if (length === 2 && data[0] < 0x80) {
      throw new Error('invalid rlp encoding: byte must be less 0x80');
    }

    return {
      data: data,
      remainder: input.slice(length)
    };
  } else if (firstByte <= 0xbf) {
    // string is greater than 55 bytes long. A single byte with the value (0xb7 plus the length of the length),
    // followed by the length, followed by the string
    llength = firstByte - 0xb6;

    if (input.length - 1 < llength) {
      throw new Error('invalid RLP: not enough bytes for string length');
    }

    length = safeParseInt(input.slice(1, llength).toString('hex'), 16);

    if (length <= 55) {
      throw new Error('invalid RLP: expected string length to be greater than 55');
    }

    data = input.slice(llength, length + llength);

    if (data.length < length) {
      throw new Error('invalid RLP: not enough bytes for string');
    }

    return {
      data: data,
      remainder: input.slice(length + llength)
    };
  } else if (firstByte <= 0xf7) {
    // a list between  0-55 bytes long
    length = firstByte - 0xbf;
    innerRemainder = input.slice(1, length);

    while (innerRemainder.length) {
      d = _decode(innerRemainder);
      decoded.push(d.data);
      innerRemainder = d.remainder;
    }

    return {
      data: decoded,
      remainder: input.slice(length)
    };
  } else {
    // a list  over 55 bytes long
    llength = firstByte - 0xf6;
    length = safeParseInt(input.slice(1, llength).toString('hex'), 16);
    var totalLength = llength + length;

    if (totalLength > input.length) {
      throw new Error('invalid rlp: total length is larger than the data');
    }

    innerRemainder = input.slice(llength, totalLength);

    if (innerRemainder.length === 0) {
      throw new Error('invalid rlp, List has a invalid length');
    }

    while (innerRemainder.length) {
      d = _decode(innerRemainder);
      decoded.push(d.data);
      innerRemainder = d.remainder;
    }

    return {
      data: decoded,
      remainder: input.slice(totalLength)
    };
  }
}
/** Check if a string is prefixed by 0x */


function isHexPrefixed$1(str) {
  return str.slice(0, 2) === '0x';
}
/** Removes 0x from a given String */


function stripHexPrefix$2(str) {
  if (typeof str !== 'string') {
    return str;
  }

  return isHexPrefixed$1(str) ? str.slice(2) : str;
}
/** Transform an integer into its hexadecimal value */


function intToHex(integer) {
  if (integer < 0) {
    throw new Error('Invalid integer as argument, must be unsigned!');
  }

  var hex = integer.toString(16);
  return hex.length % 2 ? "0" + hex : hex;
}
/** Pad a string to be even */


function padToEven$1(a) {
  return a.length % 2 ? "0" + a : a;
}
/** Transform an integer into a Buffer */


function intToBuffer(integer) {
  var hex = intToHex(integer);
  return Buffer.from(hex, 'hex');
}
/** Transform anything into a Buffer */


function toBuffer(v) {
  if (!Buffer.isBuffer(v)) {
    if (typeof v === 'string') {
      if (isHexPrefixed$1(v)) {
        return Buffer.from(padToEven$1(stripHexPrefix$2(v)), 'hex');
      } else {
        return Buffer.from(v);
      }
    } else if (typeof v === 'number' || typeof v === 'bigint') {
      if (!v) {
        return Buffer.from([]);
      } else {
        return intToBuffer(v);
      }
    } else if (v === null || v === undefined) {
      return Buffer.from([]);
    } else if (v instanceof Uint8Array) {
      return Buffer.from(v);
    } else if (bn_js_1$3["default"].isBN(v)) {
      // converts a BN to a Buffer
      return Buffer.from(v.toArray());
    } else {
      throw new Error('invalid type');
    }
  }

  return v;
}

var secp256k1 = {};

var errors$1 = {
  IMPOSSIBLE_CASE: 'Impossible case. Please create issue.',
  TWEAK_ADD: 'The tweak was out of range or the resulted private key is invalid',
  TWEAK_MUL: 'The tweak was out of range or equal to zero',
  CONTEXT_RANDOMIZE_UNKNOW: 'Unknow error on context randomization',
  SECKEY_INVALID: 'Private Key is invalid',
  PUBKEY_PARSE: 'Public Key could not be parsed',
  PUBKEY_SERIALIZE: 'Public Key serialization error',
  PUBKEY_COMBINE: 'The sum of the public keys is not valid',
  SIG_PARSE: 'Signature could not be parsed',
  SIGN: 'The nonce generation function failed, or the private key was invalid',
  RECOVER: 'Public key could not be recover',
  ECDH: 'Scalar was invalid (zero or overflow)'
};

function assert$g(cond, msg) {
  if (!cond) throw new Error(msg);
}

function isUint8Array(name, value, length) {
  assert$g(value instanceof Uint8Array, "Expected ".concat(name, " to be an Uint8Array"));

  if (length !== undefined) {
    if (Array.isArray(length)) {
      var numbers = length.join(', ');
      var msg = "Expected ".concat(name, " to be an Uint8Array with length [").concat(numbers, "]");
      assert$g(length.includes(value.length), msg);
    } else {
      var _msg = "Expected ".concat(name, " to be an Uint8Array with length ").concat(length);

      assert$g(value.length === length, _msg);
    }
  }
}

function isCompressed(value) {
  assert$g(toTypeString(value) === 'Boolean', 'Expected compressed to be a Boolean');
}

function getAssertedOutput() {
  var output = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (len) {
    return new Uint8Array(len);
  };
  var length = arguments.length > 1 ? arguments[1] : undefined;
  if (typeof output === 'function') output = output(length);
  isUint8Array('output', output, length);
  return output;
}

function toTypeString(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

var lib$1 = function lib(secp256k1) {
  return {
    contextRandomize: function contextRandomize(seed) {
      assert$g(seed === null || seed instanceof Uint8Array, 'Expected seed to be an Uint8Array or null');
      if (seed !== null) isUint8Array('seed', seed, 32);

      switch (secp256k1.contextRandomize(seed)) {
        case 1:
          throw new Error(errors$1.CONTEXT_RANDOMIZE_UNKNOW);
      }
    },
    privateKeyVerify: function privateKeyVerify(seckey) {
      isUint8Array('private key', seckey, 32);
      return secp256k1.privateKeyVerify(seckey) === 0;
    },
    privateKeyNegate: function privateKeyNegate(seckey) {
      isUint8Array('private key', seckey, 32);

      switch (secp256k1.privateKeyNegate(seckey)) {
        case 0:
          return seckey;

        case 1:
          throw new Error(errors$1.IMPOSSIBLE_CASE);
      }
    },
    privateKeyTweakAdd: function privateKeyTweakAdd(seckey, tweak) {
      isUint8Array('private key', seckey, 32);
      isUint8Array('tweak', tweak, 32);

      switch (secp256k1.privateKeyTweakAdd(seckey, tweak)) {
        case 0:
          return seckey;

        case 1:
          throw new Error(errors$1.TWEAK_ADD);
      }
    },
    privateKeyTweakMul: function privateKeyTweakMul(seckey, tweak) {
      isUint8Array('private key', seckey, 32);
      isUint8Array('tweak', tweak, 32);

      switch (secp256k1.privateKeyTweakMul(seckey, tweak)) {
        case 0:
          return seckey;

        case 1:
          throw new Error(errors$1.TWEAK_MUL);
      }
    },
    publicKeyVerify: function publicKeyVerify(pubkey) {
      isUint8Array('public key', pubkey, [33, 65]);
      return secp256k1.publicKeyVerify(pubkey) === 0;
    },
    publicKeyCreate: function publicKeyCreate(seckey) {
      var compressed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var output = arguments.length > 2 ? arguments[2] : undefined;
      isUint8Array('private key', seckey, 32);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyCreate(output, seckey)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors$1.SECKEY_INVALID);

        case 2:
          throw new Error(errors$1.PUBKEY_SERIALIZE);
      }
    },
    publicKeyConvert: function publicKeyConvert(pubkey) {
      var compressed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var output = arguments.length > 2 ? arguments[2] : undefined;
      isUint8Array('public key', pubkey, [33, 65]);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyConvert(output, pubkey)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors$1.PUBKEY_PARSE);

        case 2:
          throw new Error(errors$1.PUBKEY_SERIALIZE);
      }
    },
    publicKeyNegate: function publicKeyNegate(pubkey) {
      var compressed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var output = arguments.length > 2 ? arguments[2] : undefined;
      isUint8Array('public key', pubkey, [33, 65]);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyNegate(output, pubkey)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors$1.PUBKEY_PARSE);

        case 2:
          throw new Error(errors$1.IMPOSSIBLE_CASE);

        case 3:
          throw new Error(errors$1.PUBKEY_SERIALIZE);
      }
    },
    publicKeyCombine: function publicKeyCombine(pubkeys) {
      var compressed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var output = arguments.length > 2 ? arguments[2] : undefined;
      assert$g(Array.isArray(pubkeys), 'Expected public keys to be an Array');
      assert$g(pubkeys.length > 0, 'Expected public keys array will have more than zero items');

      var _iterator = _createForOfIteratorHelper(pubkeys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pubkey = _step.value;
          isUint8Array('public key', pubkey, [33, 65]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyCombine(output, pubkeys)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors$1.PUBKEY_PARSE);

        case 2:
          throw new Error(errors$1.PUBKEY_COMBINE);

        case 3:
          throw new Error(errors$1.PUBKEY_SERIALIZE);
      }
    },
    publicKeyTweakAdd: function publicKeyTweakAdd(pubkey, tweak) {
      var compressed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var output = arguments.length > 3 ? arguments[3] : undefined;
      isUint8Array('public key', pubkey, [33, 65]);
      isUint8Array('tweak', tweak, 32);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyTweakAdd(output, pubkey, tweak)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors$1.PUBKEY_PARSE);

        case 2:
          throw new Error(errors$1.TWEAK_ADD);
      }
    },
    publicKeyTweakMul: function publicKeyTweakMul(pubkey, tweak) {
      var compressed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var output = arguments.length > 3 ? arguments[3] : undefined;
      isUint8Array('public key', pubkey, [33, 65]);
      isUint8Array('tweak', tweak, 32);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyTweakMul(output, pubkey, tweak)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors$1.PUBKEY_PARSE);

        case 2:
          throw new Error(errors$1.TWEAK_MUL);
      }
    },
    signatureNormalize: function signatureNormalize(sig) {
      isUint8Array('signature', sig, 64);

      switch (secp256k1.signatureNormalize(sig)) {
        case 0:
          return sig;

        case 1:
          throw new Error(errors$1.SIG_PARSE);
      }
    },
    signatureExport: function signatureExport(sig, output) {
      isUint8Array('signature', sig, 64);
      output = getAssertedOutput(output, 72);
      var obj = {
        output: output,
        outputlen: 72
      };

      switch (secp256k1.signatureExport(obj, sig)) {
        case 0:
          return output.slice(0, obj.outputlen);

        case 1:
          throw new Error(errors$1.SIG_PARSE);

        case 2:
          throw new Error(errors$1.IMPOSSIBLE_CASE);
      }
    },
    signatureImport: function signatureImport(sig, output) {
      isUint8Array('signature', sig);
      output = getAssertedOutput(output, 64);

      switch (secp256k1.signatureImport(output, sig)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors$1.SIG_PARSE);

        case 2:
          throw new Error(errors$1.IMPOSSIBLE_CASE);
      }
    },
    ecdsaSign: function ecdsaSign(msg32, seckey) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var output = arguments.length > 3 ? arguments[3] : undefined;
      isUint8Array('message', msg32, 32);
      isUint8Array('private key', seckey, 32);
      assert$g(toTypeString(options) === 'Object', 'Expected options to be an Object');
      if (options.data !== undefined) isUint8Array('options.data', options.data);
      if (options.noncefn !== undefined) assert$g(toTypeString(options.noncefn) === 'Function', 'Expected options.noncefn to be a Function');
      output = getAssertedOutput(output, 64);
      var obj = {
        signature: output,
        recid: null
      };

      switch (secp256k1.ecdsaSign(obj, msg32, seckey, options.data, options.noncefn)) {
        case 0:
          return obj;

        case 1:
          throw new Error(errors$1.SIGN);

        case 2:
          throw new Error(errors$1.IMPOSSIBLE_CASE);
      }
    },
    ecdsaVerify: function ecdsaVerify(sig, msg32, pubkey) {
      isUint8Array('signature', sig, 64);
      isUint8Array('message', msg32, 32);
      isUint8Array('public key', pubkey, [33, 65]);

      switch (secp256k1.ecdsaVerify(sig, msg32, pubkey)) {
        case 0:
          return true;

        case 3:
          return false;

        case 1:
          throw new Error(errors$1.SIG_PARSE);

        case 2:
          throw new Error(errors$1.PUBKEY_PARSE);
      }
    },
    ecdsaRecover: function ecdsaRecover(sig, recid, msg32) {
      var compressed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var output = arguments.length > 4 ? arguments[4] : undefined;
      isUint8Array('signature', sig, 64);
      assert$g(toTypeString(recid) === 'Number' && recid >= 0 && recid <= 3, 'Expected recovery id to be a Number within interval [0, 3]');
      isUint8Array('message', msg32, 32);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.ecdsaRecover(output, sig, recid, msg32)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors$1.SIG_PARSE);

        case 2:
          throw new Error(errors$1.RECOVER);

        case 3:
          throw new Error(errors$1.IMPOSSIBLE_CASE);
      }
    },
    ecdh: function ecdh(pubkey, seckey) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var output = arguments.length > 3 ? arguments[3] : undefined;
      isUint8Array('public key', pubkey, [33, 65]);
      isUint8Array('private key', seckey, 32);
      assert$g(toTypeString(options) === 'Object', 'Expected options to be an Object');
      if (options.data !== undefined) isUint8Array('options.data', options.data);

      if (options.hashfn !== undefined) {
        assert$g(toTypeString(options.hashfn) === 'Function', 'Expected options.hashfn to be a Function');
        if (options.xbuf !== undefined) isUint8Array('options.xbuf', options.xbuf, 32);
        if (options.ybuf !== undefined) isUint8Array('options.ybuf', options.ybuf, 32);
        isUint8Array('output', output);
      } else {
        output = getAssertedOutput(output, 32);
      }

      switch (secp256k1.ecdh(output, pubkey, seckey, options.data, options.hashfn, options.xbuf, options.ybuf)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors$1.PUBKEY_PARSE);

        case 2:
          throw new Error(errors$1.ECDH);
      }
    }
  };
};

var elliptic$2 = {};

var _from = "elliptic@^6.4.0";
var _id = "elliptic@6.5.4";
var _inBundle = false;
var _integrity = "sha512-iLhC6ULemrljPZb+QutR5TQGB+pdW6KGD5RSegS+8sorOZT+rdQFbsQFJgvN3eRqNALqJer4oQ16YvJHlU8hzQ==";
var _location = "/elliptic";
var _phantomChildren = {
};
var _requested = {
	type: "range",
	registry: true,
	raw: "elliptic@^6.4.0",
	name: "elliptic",
	escapedName: "elliptic",
	rawSpec: "^6.4.0",
	saveSpec: null,
	fetchSpec: "^6.4.0"
};
var _requiredBy = [
	"/@ethersproject/signing-key",
	"/browserify-sign",
	"/create-ecdh",
	"/eth-lib",
	"/secp256k1",
	"/web3-eth-accounts/eth-lib"
];
var _resolved = "https://registry.npmjs.org/elliptic/-/elliptic-6.5.4.tgz";
var _shasum = "da37cebd31e79a1367e941b592ed1fbebd58abbb";
var _spec = "elliptic@^6.4.0";
var _where = "/Users/aaron/Works/my-rollup-project/node_modules/eth-lib";
var author = {
	name: "Fedor Indutny",
	email: "fedor@indutny.com"
};
var bugs = {
	url: "https://github.com/indutny/elliptic/issues"
};
var bundleDependencies = false;
var dependencies = {
	"bn.js": "^4.11.9",
	brorand: "^1.1.0",
	"hash.js": "^1.0.0",
	"hmac-drbg": "^1.0.1",
	inherits: "^2.0.4",
	"minimalistic-assert": "^1.0.1",
	"minimalistic-crypto-utils": "^1.0.1"
};
var deprecated = false;
var description = "EC cryptography";
var devDependencies = {
	brfs: "^2.0.2",
	coveralls: "^3.1.0",
	eslint: "^7.6.0",
	grunt: "^1.2.1",
	"grunt-browserify": "^5.3.0",
	"grunt-cli": "^1.3.2",
	"grunt-contrib-connect": "^3.0.0",
	"grunt-contrib-copy": "^1.0.0",
	"grunt-contrib-uglify": "^5.0.0",
	"grunt-mocha-istanbul": "^5.0.2",
	"grunt-saucelabs": "^9.0.1",
	istanbul: "^0.4.5",
	mocha: "^8.0.1"
};
var files = [
	"lib"
];
var homepage = "https://github.com/indutny/elliptic";
var keywords = [
	"EC",
	"Elliptic",
	"curve",
	"Cryptography"
];
var license = "MIT";
var main = "lib/elliptic.js";
var name = "elliptic";
var repository = {
	type: "git",
	url: "git+ssh://git@github.com/indutny/elliptic.git"
};
var scripts = {
	lint: "eslint lib test",
	"lint:fix": "npm run lint -- --fix",
	test: "npm run lint && npm run unit",
	unit: "istanbul test _mocha --reporter=spec test/index.js",
	version: "grunt dist && git add dist/"
};
var version = "6.5.4";
var require$$0 = {
	_from: _from,
	_id: _id,
	_inBundle: _inBundle,
	_integrity: _integrity,
	_location: _location,
	_phantomChildren: _phantomChildren,
	_requested: _requested,
	_requiredBy: _requiredBy,
	_resolved: _resolved,
	_shasum: _shasum,
	_spec: _spec,
	_where: _where,
	author: author,
	bugs: bugs,
	bundleDependencies: bundleDependencies,
	dependencies: dependencies,
	deprecated: deprecated,
	description: description,
	devDependencies: devDependencies,
	files: files,
	homepage: homepage,
	keywords: keywords,
	license: license,
	main: main,
	name: name,
	repository: repository,
	scripts: scripts,
	version: version
};

var utils$q = {};

var minimalisticAssert = assert$f;

function assert$f(val, msg) {
  if (!val) throw new Error(msg || 'Assertion failed');
}

assert$f.equal = function assertEqual(l, r, msg) {
  if (l != r) throw new Error(msg || 'Assertion failed: ' + l + ' != ' + r);
};

var utils$p = {};

(function (exports) {

  var utils = exports;

  function toArray(msg, enc) {
    if (Array.isArray(msg)) return msg.slice();
    if (!msg) return [];
    var res = [];

    if (typeof msg !== 'string') {
      for (var i = 0; i < msg.length; i++) {
        res[i] = msg[i] | 0;
      }

      return res;
    }

    if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0) msg = '0' + msg;

      for (var i = 0; i < msg.length; i += 2) {
        res.push(parseInt(msg[i] + msg[i + 1], 16));
      }
    } else {
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        var hi = c >> 8;
        var lo = c & 0xff;
        if (hi) res.push(hi, lo);else res.push(lo);
      }
    }

    return res;
  }

  utils.toArray = toArray;

  function zero2(word) {
    if (word.length === 1) return '0' + word;else return word;
  }

  utils.zero2 = zero2;

  function toHex(msg) {
    var res = '';

    for (var i = 0; i < msg.length; i++) {
      res += zero2(msg[i].toString(16));
    }

    return res;
  }

  utils.toHex = toHex;

  utils.encode = function encode(arr, enc) {
    if (enc === 'hex') return toHex(arr);else return arr;
  };
})(utils$p);

(function (exports) {

  var utils = exports;
  var BN = bn$2.exports;
  var minAssert = minimalisticAssert;
  var minUtils = utils$p;
  utils.assert = minAssert;
  utils.toArray = minUtils.toArray;
  utils.zero2 = minUtils.zero2;
  utils.toHex = minUtils.toHex;
  utils.encode = minUtils.encode; // Represent num in a w-NAF form

  function getNAF(num, w, bits) {
    var naf = new Array(Math.max(num.bitLength(), bits) + 1);
    naf.fill(0);
    var ws = 1 << w + 1;
    var k = num.clone();

    for (var i = 0; i < naf.length; i++) {
      var z;
      var mod = k.andln(ws - 1);

      if (k.isOdd()) {
        if (mod > (ws >> 1) - 1) z = (ws >> 1) - mod;else z = mod;
        k.isubn(z);
      } else {
        z = 0;
      }

      naf[i] = z;
      k.iushrn(1);
    }

    return naf;
  }

  utils.getNAF = getNAF; // Represent k1, k2 in a Joint Sparse Form

  function getJSF(k1, k2) {
    var jsf = [[], []];
    k1 = k1.clone();
    k2 = k2.clone();
    var d1 = 0;
    var d2 = 0;
    var m8;

    while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
      // First phase
      var m14 = k1.andln(3) + d1 & 3;
      var m24 = k2.andln(3) + d2 & 3;
      if (m14 === 3) m14 = -1;
      if (m24 === 3) m24 = -1;
      var u1;

      if ((m14 & 1) === 0) {
        u1 = 0;
      } else {
        m8 = k1.andln(7) + d1 & 7;
        if ((m8 === 3 || m8 === 5) && m24 === 2) u1 = -m14;else u1 = m14;
      }

      jsf[0].push(u1);
      var u2;

      if ((m24 & 1) === 0) {
        u2 = 0;
      } else {
        m8 = k2.andln(7) + d2 & 7;
        if ((m8 === 3 || m8 === 5) && m14 === 2) u2 = -m24;else u2 = m24;
      }

      jsf[1].push(u2); // Second phase

      if (2 * d1 === u1 + 1) d1 = 1 - d1;
      if (2 * d2 === u2 + 1) d2 = 1 - d2;
      k1.iushrn(1);
      k2.iushrn(1);
    }

    return jsf;
  }

  utils.getJSF = getJSF;

  function cachedProperty(obj, name, computer) {
    var key = '_' + name;

    obj.prototype[name] = function cachedProperty() {
      return this[key] !== undefined ? this[key] : this[key] = computer.call(this);
    };
  }

  utils.cachedProperty = cachedProperty;

  function parseBytes(bytes) {
    return typeof bytes === 'string' ? utils.toArray(bytes, 'hex') : bytes;
  }

  utils.parseBytes = parseBytes;

  function intFromLE(bytes) {
    return new BN(bytes, 'hex', 'le');
  }

  utils.intFromLE = intFromLE;
})(utils$q);

var brorand = {exports: {}};

var r$1;

brorand.exports = function rand(len) {
  if (!r$1) r$1 = new Rand(null);
  return r$1.generate(len);
};

function Rand(rand) {
  this.rand = rand;
}

brorand.exports.Rand = Rand;

Rand.prototype.generate = function generate(len) {
  return this._rand(len);
}; // Emulate crypto API using randy


Rand.prototype._rand = function _rand(n) {
  if (this.rand.getBytes) return this.rand.getBytes(n);
  var res = new Uint8Array(n);

  for (var i = 0; i < res.length; i++) {
    res[i] = this.rand.getByte();
  }

  return res;
};

if ((typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object') {
  if (self.crypto && self.crypto.getRandomValues) {
    // Modern browsers
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      self.crypto.getRandomValues(arr);
      return arr;
    };
  } else if (self.msCrypto && self.msCrypto.getRandomValues) {
    // IE
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      self.msCrypto.getRandomValues(arr);
      return arr;
    }; // Safari's WebWorkers do not have `crypto`

  } else if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
    // Old junk
    Rand.prototype._rand = function () {
      throw new Error('Not implemented yet');
    };
  }
} else {
  // Node.js or Web worker with no crypto support
  try {
    var crypto = require('crypto');

    if (typeof crypto.randomBytes !== 'function') throw new Error('Not supported');

    Rand.prototype._rand = function _rand(n) {
      return crypto.randomBytes(n);
    };
  } catch (e) {}
}

var curve = {};

var BN$c = bn$2.exports;
var utils$o = utils$q;
var getNAF = utils$o.getNAF;
var getJSF = utils$o.getJSF;
var assert$e = utils$o.assert;

function BaseCurve(type, conf) {
  this.type = type;
  this.p = new BN$c(conf.p, 16); // Use Montgomery, when there is no fast reduction for the prime

  this.red = conf.prime ? BN$c.red(conf.prime) : BN$c.mont(this.p); // Useful for many curves

  this.zero = new BN$c(0).toRed(this.red);
  this.one = new BN$c(1).toRed(this.red);
  this.two = new BN$c(2).toRed(this.red); // Curve configuration, optional

  this.n = conf.n && new BN$c(conf.n, 16);
  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed); // Temporary arrays

  this._wnafT1 = new Array(4);
  this._wnafT2 = new Array(4);
  this._wnafT3 = new Array(4);
  this._wnafT4 = new Array(4);
  this._bitLength = this.n ? this.n.bitLength() : 0; // Generalized Greg Maxwell's trick

  var adjustCount = this.n && this.p.div(this.n);

  if (!adjustCount || adjustCount.cmpn(100) > 0) {
    this.redN = null;
  } else {
    this._maxwellTrick = true;
    this.redN = this.n.toRed(this.red);
  }
}

var base = BaseCurve;

BaseCurve.prototype.point = function point() {
  throw new Error('Not implemented');
};

BaseCurve.prototype.validate = function validate() {
  throw new Error('Not implemented');
};

BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
  assert$e(p.precomputed);

  var doubles = p._getDoubles();

  var naf = getNAF(k, 1, this._bitLength);
  var I = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
  I /= 3; // Translate into more windowed form

  var repr = [];
  var j;
  var nafW;

  for (j = 0; j < naf.length; j += doubles.step) {
    nafW = 0;

    for (var l = j + doubles.step - 1; l >= j; l--) {
      nafW = (nafW << 1) + naf[l];
    }

    repr.push(nafW);
  }

  var a = this.jpoint(null, null, null);
  var b = this.jpoint(null, null, null);

  for (var i = I; i > 0; i--) {
    for (j = 0; j < repr.length; j++) {
      nafW = repr[j];
      if (nafW === i) b = b.mixedAdd(doubles.points[j]);else if (nafW === -i) b = b.mixedAdd(doubles.points[j].neg());
    }

    a = a.add(b);
  }

  return a.toP();
};

BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
  var w = 4; // Precompute window

  var nafPoints = p._getNAFPoints(w);

  w = nafPoints.wnd;
  var wnd = nafPoints.points; // Get NAF form

  var naf = getNAF(k, w, this._bitLength); // Add `this`*(N+1) for every w-NAF index

  var acc = this.jpoint(null, null, null);

  for (var i = naf.length - 1; i >= 0; i--) {
    // Count zeroes
    for (var l = 0; i >= 0 && naf[i] === 0; i--) {
      l++;
    }

    if (i >= 0) l++;
    acc = acc.dblp(l);
    if (i < 0) break;
    var z = naf[i];
    assert$e(z !== 0);

    if (p.type === 'affine') {
      // J +- P
      if (z > 0) acc = acc.mixedAdd(wnd[z - 1 >> 1]);else acc = acc.mixedAdd(wnd[-z - 1 >> 1].neg());
    } else {
      // J +- J
      if (z > 0) acc = acc.add(wnd[z - 1 >> 1]);else acc = acc.add(wnd[-z - 1 >> 1].neg());
    }
  }

  return p.type === 'affine' ? acc.toP() : acc;
};

BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
  var wndWidth = this._wnafT1;
  var wnd = this._wnafT2;
  var naf = this._wnafT3; // Fill all arrays

  var max = 0;
  var i;
  var j;
  var p;

  for (i = 0; i < len; i++) {
    p = points[i];

    var nafPoints = p._getNAFPoints(defW);

    wndWidth[i] = nafPoints.wnd;
    wnd[i] = nafPoints.points;
  } // Comb small window NAFs


  for (i = len - 1; i >= 1; i -= 2) {
    var a = i - 1;
    var b = i;

    if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
      naf[a] = getNAF(coeffs[a], wndWidth[a], this._bitLength);
      naf[b] = getNAF(coeffs[b], wndWidth[b], this._bitLength);
      max = Math.max(naf[a].length, max);
      max = Math.max(naf[b].length, max);
      continue;
    }

    var comb = [points[a],
    /* 1 */
    null,
    /* 3 */
    null,
    /* 5 */
    points[b]
    /* 7 */
    ]; // Try to avoid Projective points, if possible

    if (points[a].y.cmp(points[b].y) === 0) {
      comb[1] = points[a].add(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].add(points[b].neg());
    } else {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    }

    var index = [-3,
    /* -1 -1 */
    -1,
    /* -1 0 */
    -5,
    /* -1 1 */
    -7,
    /* 0 -1 */
    0,
    /* 0 0 */
    7,
    /* 0 1 */
    5,
    /* 1 -1 */
    1,
    /* 1 0 */
    3
    /* 1 1 */
    ];
    var jsf = getJSF(coeffs[a], coeffs[b]);
    max = Math.max(jsf[0].length, max);
    naf[a] = new Array(max);
    naf[b] = new Array(max);

    for (j = 0; j < max; j++) {
      var ja = jsf[0][j] | 0;
      var jb = jsf[1][j] | 0;
      naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
      naf[b][j] = 0;
      wnd[a] = comb;
    }
  }

  var acc = this.jpoint(null, null, null);
  var tmp = this._wnafT4;

  for (i = max; i >= 0; i--) {
    var k = 0;

    while (i >= 0) {
      var zero = true;

      for (j = 0; j < len; j++) {
        tmp[j] = naf[j][i] | 0;
        if (tmp[j] !== 0) zero = false;
      }

      if (!zero) break;
      k++;
      i--;
    }

    if (i >= 0) k++;
    acc = acc.dblp(k);
    if (i < 0) break;

    for (j = 0; j < len; j++) {
      var z = tmp[j];
      if (z === 0) continue;else if (z > 0) p = wnd[j][z - 1 >> 1];else if (z < 0) p = wnd[j][-z - 1 >> 1].neg();
      if (p.type === 'affine') acc = acc.mixedAdd(p);else acc = acc.add(p);
    }
  } // Zeroify references


  for (i = 0; i < len; i++) {
    wnd[i] = null;
  }

  if (jacobianResult) return acc;else return acc.toP();
};

function BasePoint(curve, type) {
  this.curve = curve;
  this.type = type;
  this.precomputed = null;
}

BaseCurve.BasePoint = BasePoint;

BasePoint.prototype.eq = function
  /*other*/
eq() {
  throw new Error('Not implemented');
};

BasePoint.prototype.validate = function validate() {
  return this.curve.validate(this);
};

BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  bytes = utils$o.toArray(bytes, enc);
  var len = this.p.byteLength(); // uncompressed, hybrid-odd, hybrid-even

  if ((bytes[0] === 0x04 || bytes[0] === 0x06 || bytes[0] === 0x07) && bytes.length - 1 === 2 * len) {
    if (bytes[0] === 0x06) assert$e(bytes[bytes.length - 1] % 2 === 0);else if (bytes[0] === 0x07) assert$e(bytes[bytes.length - 1] % 2 === 1);
    var res = this.point(bytes.slice(1, 1 + len), bytes.slice(1 + len, 1 + 2 * len));
    return res;
  } else if ((bytes[0] === 0x02 || bytes[0] === 0x03) && bytes.length - 1 === len) {
    return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 0x03);
  }

  throw new Error('Unknown point format');
};

BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
  return this.encode(enc, true);
};

BasePoint.prototype._encode = function _encode(compact) {
  var len = this.curve.p.byteLength();
  var x = this.getX().toArray('be', len);
  if (compact) return [this.getY().isEven() ? 0x02 : 0x03].concat(x);
  return [0x04].concat(x, this.getY().toArray('be', len));
};

BasePoint.prototype.encode = function encode(enc, compact) {
  return utils$o.encode(this._encode(compact), enc);
};

BasePoint.prototype.precompute = function precompute(power) {
  if (this.precomputed) return this;
  var precomputed = {
    doubles: null,
    naf: null,
    beta: null
  };
  precomputed.naf = this._getNAFPoints(8);
  precomputed.doubles = this._getDoubles(4, power);
  precomputed.beta = this._getBeta();
  this.precomputed = precomputed;
  return this;
};

BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
  if (!this.precomputed) return false;
  var doubles = this.precomputed.doubles;
  if (!doubles) return false;
  return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
};

BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
  var doubles = [this];
  var acc = this;

  for (var i = 0; i < power; i += step) {
    for (var j = 0; j < step; j++) {
      acc = acc.dbl();
    }

    doubles.push(acc);
  }

  return {
    step: step,
    points: doubles
  };
};

BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  var res = [this];
  var max = (1 << wnd) - 1;
  var dbl = max === 1 ? null : this.dbl();

  for (var i = 1; i < max; i++) {
    res[i] = res[i - 1].add(dbl);
  }

  return {
    wnd: wnd,
    points: res
  };
};

BasePoint.prototype._getBeta = function _getBeta() {
  return null;
};

BasePoint.prototype.dblp = function dblp(k) {
  var r = this;

  for (var i = 0; i < k; i++) {
    r = r.dbl();
  }

  return r;
};

var inherits$4 = {exports: {}};

var inherits_browser = {exports: {}};

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

try {
  var util = require('util');
  /* istanbul ignore next */


  if (typeof util.inherits !== 'function') throw '';
  inherits$4.exports = util.inherits;
} catch (e) {
  /* istanbul ignore next */
  inherits$4.exports = inherits_browser.exports;
}

var utils$n = utils$q;
var BN$b = bn$2.exports;
var inherits$3 = inherits$4.exports;
var Base$2 = base;
var assert$d = utils$n.assert;

function ShortCurve(conf) {
  Base$2.call(this, 'short', conf);
  this.a = new BN$b(conf.a, 16).toRed(this.red);
  this.b = new BN$b(conf.b, 16).toRed(this.red);
  this.tinv = this.two.redInvm();
  this.zeroA = this.a.fromRed().cmpn(0) === 0;
  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0; // If the curve is endomorphic, precalculate beta and lambda

  this.endo = this._getEndomorphism(conf);
  this._endoWnafT1 = new Array(4);
  this._endoWnafT2 = new Array(4);
}

inherits$3(ShortCurve, Base$2);
var _short = ShortCurve;

ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
  // No efficient endomorphism
  if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1) return; // Compute beta and lambda, that lambda * P = (beta * Px; Py)

  var beta;
  var lambda;

  if (conf.beta) {
    beta = new BN$b(conf.beta, 16).toRed(this.red);
  } else {
    var betas = this._getEndoRoots(this.p); // Choose the smallest beta


    beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
    beta = beta.toRed(this.red);
  }

  if (conf.lambda) {
    lambda = new BN$b(conf.lambda, 16);
  } else {
    // Choose the lambda that is matching selected beta
    var lambdas = this._getEndoRoots(this.n);

    if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
      lambda = lambdas[0];
    } else {
      lambda = lambdas[1];
      assert$d(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
    }
  } // Get basis vectors, used for balanced length-two representation


  var basis;

  if (conf.basis) {
    basis = conf.basis.map(function (vec) {
      return {
        a: new BN$b(vec.a, 16),
        b: new BN$b(vec.b, 16)
      };
    });
  } else {
    basis = this._getEndoBasis(lambda);
  }

  return {
    beta: beta,
    lambda: lambda,
    basis: basis
  };
};

ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
  // Find roots of for x^2 + x + 1 in F
  // Root = (-1 +- Sqrt(-3)) / 2
  //
  var red = num === this.p ? this.red : BN$b.mont(num);
  var tinv = new BN$b(2).toRed(red).redInvm();
  var ntinv = tinv.redNeg();
  var s = new BN$b(3).toRed(red).redNeg().redSqrt().redMul(tinv);
  var l1 = ntinv.redAdd(s).fromRed();
  var l2 = ntinv.redSub(s).fromRed();
  return [l1, l2];
};

ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
  // aprxSqrt >= sqrt(this.n)
  var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2)); // 3.74
  // Run EGCD, until r(L + 1) < aprxSqrt

  var u = lambda;
  var v = this.n.clone();
  var x1 = new BN$b(1);
  var y1 = new BN$b(0);
  var x2 = new BN$b(0);
  var y2 = new BN$b(1); // NOTE: all vectors are roots of: a + b * lambda = 0 (mod n)

  var a0;
  var b0; // First vector

  var a1;
  var b1; // Second vector

  var a2;
  var b2;
  var prevR;
  var i = 0;
  var r;
  var x;

  while (u.cmpn(0) !== 0) {
    var q = v.div(u);
    r = v.sub(q.mul(u));
    x = x2.sub(q.mul(x1));
    var y = y2.sub(q.mul(y1));

    if (!a1 && r.cmp(aprxSqrt) < 0) {
      a0 = prevR.neg();
      b0 = x1;
      a1 = r.neg();
      b1 = x;
    } else if (a1 && ++i === 2) {
      break;
    }

    prevR = r;
    v = u;
    u = r;
    x2 = x1;
    x1 = x;
    y2 = y1;
    y1 = y;
  }

  a2 = r.neg();
  b2 = x;
  var len1 = a1.sqr().add(b1.sqr());
  var len2 = a2.sqr().add(b2.sqr());

  if (len2.cmp(len1) >= 0) {
    a2 = a0;
    b2 = b0;
  } // Normalize signs


  if (a1.negative) {
    a1 = a1.neg();
    b1 = b1.neg();
  }

  if (a2.negative) {
    a2 = a2.neg();
    b2 = b2.neg();
  }

  return [{
    a: a1,
    b: b1
  }, {
    a: a2,
    b: b2
  }];
};

ShortCurve.prototype._endoSplit = function _endoSplit(k) {
  var basis = this.endo.basis;
  var v1 = basis[0];
  var v2 = basis[1];
  var c1 = v2.b.mul(k).divRound(this.n);
  var c2 = v1.b.neg().mul(k).divRound(this.n);
  var p1 = c1.mul(v1.a);
  var p2 = c2.mul(v2.a);
  var q1 = c1.mul(v1.b);
  var q2 = c2.mul(v2.b); // Calculate answer

  var k1 = k.sub(p1).sub(p2);
  var k2 = q1.add(q2).neg();
  return {
    k1: k1,
    k2: k2
  };
};

ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
  x = new BN$b(x, 16);
  if (!x.red) x = x.toRed(this.red);
  var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
  var y = y2.redSqrt();
  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0) throw new Error('invalid point'); // XXX Is there any way to tell if the number is odd without converting it
  // to non-red form?

  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd) y = y.redNeg();
  return this.point(x, y);
};

ShortCurve.prototype.validate = function validate(point) {
  if (point.inf) return true;
  var x = point.x;
  var y = point.y;
  var ax = this.a.redMul(x);
  var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
  return y.redSqr().redISub(rhs).cmpn(0) === 0;
};

ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
  var npoints = this._endoWnafT1;
  var ncoeffs = this._endoWnafT2;

  for (var i = 0; i < points.length; i++) {
    var split = this._endoSplit(coeffs[i]);

    var p = points[i];

    var beta = p._getBeta();

    if (split.k1.negative) {
      split.k1.ineg();
      p = p.neg(true);
    }

    if (split.k2.negative) {
      split.k2.ineg();
      beta = beta.neg(true);
    }

    npoints[i * 2] = p;
    npoints[i * 2 + 1] = beta;
    ncoeffs[i * 2] = split.k1;
    ncoeffs[i * 2 + 1] = split.k2;
  }

  var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult); // Clean-up references to points and coefficients


  for (var j = 0; j < i * 2; j++) {
    npoints[j] = null;
    ncoeffs[j] = null;
  }

  return res;
};

function Point$2(curve, x, y, isRed) {
  Base$2.BasePoint.call(this, curve, 'affine');

  if (x === null && y === null) {
    this.x = null;
    this.y = null;
    this.inf = true;
  } else {
    this.x = new BN$b(x, 16);
    this.y = new BN$b(y, 16); // Force redgomery representation when loading from JSON

    if (isRed) {
      this.x.forceRed(this.curve.red);
      this.y.forceRed(this.curve.red);
    }

    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
    if (!this.y.red) this.y = this.y.toRed(this.curve.red);
    this.inf = false;
  }
}

inherits$3(Point$2, Base$2.BasePoint);

ShortCurve.prototype.point = function point(x, y, isRed) {
  return new Point$2(this, x, y, isRed);
};

ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
  return Point$2.fromJSON(this, obj, red);
};

Point$2.prototype._getBeta = function _getBeta() {
  if (!this.curve.endo) return;
  var pre = this.precomputed;
  if (pre && pre.beta) return pre.beta;
  var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);

  if (pre) {
    var curve = this.curve;

    var endoMul = function endoMul(p) {
      return curve.point(p.x.redMul(curve.endo.beta), p.y);
    };

    pre.beta = beta;
    beta.precomputed = {
      beta: null,
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(endoMul)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(endoMul)
      }
    };
  }

  return beta;
};

Point$2.prototype.toJSON = function toJSON() {
  if (!this.precomputed) return [this.x, this.y];
  return [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }];
};

Point$2.fromJSON = function fromJSON(curve, obj, red) {
  if (typeof obj === 'string') obj = JSON.parse(obj);
  var res = curve.point(obj[0], obj[1], red);
  if (!obj[2]) return res;

  function obj2point(obj) {
    return curve.point(obj[0], obj[1], red);
  }

  var pre = obj[2];
  res.precomputed = {
    beta: null,
    doubles: pre.doubles && {
      step: pre.doubles.step,
      points: [res].concat(pre.doubles.points.map(obj2point))
    },
    naf: pre.naf && {
      wnd: pre.naf.wnd,
      points: [res].concat(pre.naf.points.map(obj2point))
    }
  };
  return res;
};

Point$2.prototype.inspect = function inspect() {
  if (this.isInfinity()) return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
};

Point$2.prototype.isInfinity = function isInfinity() {
  return this.inf;
};

Point$2.prototype.add = function add(p) {
  // O + P = P
  if (this.inf) return p; // P + O = P

  if (p.inf) return this; // P + P = 2P

  if (this.eq(p)) return this.dbl(); // P + (-P) = O

  if (this.neg().eq(p)) return this.curve.point(null, null); // P + Q = O

  if (this.x.cmp(p.x) === 0) return this.curve.point(null, null);
  var c = this.y.redSub(p.y);
  if (c.cmpn(0) !== 0) c = c.redMul(this.x.redSub(p.x).redInvm());
  var nx = c.redSqr().redISub(this.x).redISub(p.x);
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point$2.prototype.dbl = function dbl() {
  if (this.inf) return this; // 2P = O

  var ys1 = this.y.redAdd(this.y);
  if (ys1.cmpn(0) === 0) return this.curve.point(null, null);
  var a = this.curve.a;
  var x2 = this.x.redSqr();
  var dyinv = ys1.redInvm();
  var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);
  var nx = c.redSqr().redISub(this.x.redAdd(this.x));
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point$2.prototype.getX = function getX() {
  return this.x.fromRed();
};

Point$2.prototype.getY = function getY() {
  return this.y.fromRed();
};

Point$2.prototype.mul = function mul(k) {
  k = new BN$b(k, 16);
  if (this.isInfinity()) return this;else if (this._hasDoubles(k)) return this.curve._fixedNafMul(this, k);else if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [k]);else return this.curve._wnafMul(this, k);
};

Point$2.prototype.mulAdd = function mulAdd(k1, p2, k2) {
  var points = [this, p2];
  var coeffs = [k1, k2];
  if (this.curve.endo) return this.curve._endoWnafMulAdd(points, coeffs);else return this.curve._wnafMulAdd(1, points, coeffs, 2);
};

Point$2.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
  var points = [this, p2];
  var coeffs = [k1, k2];
  if (this.curve.endo) return this.curve._endoWnafMulAdd(points, coeffs, true);else return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
};

Point$2.prototype.eq = function eq(p) {
  return this === p || this.inf === p.inf && (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
};

Point$2.prototype.neg = function neg(_precompute) {
  if (this.inf) return this;
  var res = this.curve.point(this.x, this.y.redNeg());

  if (_precompute && this.precomputed) {
    var pre = this.precomputed;

    var negate = function negate(p) {
      return p.neg();
    };

    res.precomputed = {
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(negate)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(negate)
      }
    };
  }

  return res;
};

Point$2.prototype.toJ = function toJ() {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var res = this.curve.jpoint(this.x, this.y, this.curve.one);
  return res;
};

function JPoint(curve, x, y, z) {
  Base$2.BasePoint.call(this, curve, 'jacobian');

  if (x === null && y === null && z === null) {
    this.x = this.curve.one;
    this.y = this.curve.one;
    this.z = new BN$b(0);
  } else {
    this.x = new BN$b(x, 16);
    this.y = new BN$b(y, 16);
    this.z = new BN$b(z, 16);
  }

  if (!this.x.red) this.x = this.x.toRed(this.curve.red);
  if (!this.y.red) this.y = this.y.toRed(this.curve.red);
  if (!this.z.red) this.z = this.z.toRed(this.curve.red);
  this.zOne = this.z === this.curve.one;
}

inherits$3(JPoint, Base$2.BasePoint);

ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
  return new JPoint(this, x, y, z);
};

JPoint.prototype.toP = function toP() {
  if (this.isInfinity()) return this.curve.point(null, null);
  var zinv = this.z.redInvm();
  var zinv2 = zinv.redSqr();
  var ax = this.x.redMul(zinv2);
  var ay = this.y.redMul(zinv2).redMul(zinv);
  return this.curve.point(ax, ay);
};

JPoint.prototype.neg = function neg() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};

JPoint.prototype.add = function add(p) {
  // O + P = P
  if (this.isInfinity()) return p; // P + O = P

  if (p.isInfinity()) return this; // 12M + 4S + 7A

  var pz2 = p.z.redSqr();
  var z2 = this.z.redSqr();
  var u1 = this.x.redMul(pz2);
  var u2 = p.x.redMul(z2);
  var s1 = this.y.redMul(pz2.redMul(p.z));
  var s2 = p.y.redMul(z2.redMul(this.z));
  var h = u1.redSub(u2);
  var r = s1.redSub(s2);

  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);else return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);
  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(p.z).redMul(h);
  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mixedAdd = function mixedAdd(p) {
  // O + P = P
  if (this.isInfinity()) return p.toJ(); // P + O = P

  if (p.isInfinity()) return this; // 8M + 3S + 7A

  var z2 = this.z.redSqr();
  var u1 = this.x;
  var u2 = p.x.redMul(z2);
  var s1 = this.y;
  var s2 = p.y.redMul(z2).redMul(this.z);
  var h = u1.redSub(u2);
  var r = s1.redSub(s2);

  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);else return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);
  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(h);
  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.dblp = function dblp(pow) {
  if (pow === 0) return this;
  if (this.isInfinity()) return this;
  if (!pow) return this.dbl();
  var i;

  if (this.curve.zeroA || this.curve.threeA) {
    var r = this;

    for (i = 0; i < pow; i++) {
      r = r.dbl();
    }

    return r;
  } // 1M + 2S + 1A + N * (4S + 5M + 8A)
  // N = 1 => 6M + 6S + 9A


  var a = this.curve.a;
  var tinv = this.curve.tinv;
  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr(); // Reuse results

  var jyd = jy.redAdd(jy);

  for (i = 0; i < pow; i++) {
    var jx2 = jx.redSqr();
    var jyd2 = jyd.redSqr();
    var jyd4 = jyd2.redSqr();
    var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
    var t1 = jx.redMul(jyd2);
    var nx = c.redSqr().redISub(t1.redAdd(t1));
    var t2 = t1.redISub(nx);
    var dny = c.redMul(t2);
    dny = dny.redIAdd(dny).redISub(jyd4);
    var nz = jyd.redMul(jz);
    if (i + 1 < pow) jz4 = jz4.redMul(jyd4);
    jx = nx;
    jz = nz;
    jyd = dny;
  }

  return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
};

JPoint.prototype.dbl = function dbl() {
  if (this.isInfinity()) return this;
  if (this.curve.zeroA) return this._zeroDbl();else if (this.curve.threeA) return this._threeDbl();else return this._dbl();
};

JPoint.prototype._zeroDbl = function _zeroDbl() {
  var nx;
  var ny;
  var nz; // Z = 1

  if (this.zOne) {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
    //     #doubling-mdbl-2007-bl
    // 1M + 5S + 14A
    // XX = X1^2
    var xx = this.x.redSqr(); // YY = Y1^2

    var yy = this.y.redSqr(); // YYYY = YY^2

    var yyyy = yy.redSqr(); // S = 2 * ((X1 + YY)^2 - XX - YYYY)

    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s); // M = 3 * XX + a; a = 0

    var m = xx.redAdd(xx).redIAdd(xx); // T = M ^ 2 - 2*S

    var t = m.redSqr().redISub(s).redISub(s); // 8 * YYYY

    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8); // X3 = T

    nx = t; // Y3 = M * (S - T) - 8 * YYYY

    ny = m.redMul(s.redISub(t)).redISub(yyyy8); // Z3 = 2*Y1

    nz = this.y.redAdd(this.y);
  } else {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
    //     #doubling-dbl-2009-l
    // 2M + 5S + 13A
    // A = X1^2
    var a = this.x.redSqr(); // B = Y1^2

    var b = this.y.redSqr(); // C = B^2

    var c = b.redSqr(); // D = 2 * ((X1 + B)^2 - A - C)

    var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
    d = d.redIAdd(d); // E = 3 * A

    var e = a.redAdd(a).redIAdd(a); // F = E^2

    var f = e.redSqr(); // 8 * C

    var c8 = c.redIAdd(c);
    c8 = c8.redIAdd(c8);
    c8 = c8.redIAdd(c8); // X3 = F - 2 * D

    nx = f.redISub(d).redISub(d); // Y3 = E * (D - X3) - 8 * C

    ny = e.redMul(d.redISub(nx)).redISub(c8); // Z3 = 2 * Y1 * Z1

    nz = this.y.redMul(this.z);
    nz = nz.redIAdd(nz);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._threeDbl = function _threeDbl() {
  var nx;
  var ny;
  var nz; // Z = 1

  if (this.zOne) {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html
    //     #doubling-mdbl-2007-bl
    // 1M + 5S + 15A
    // XX = X1^2
    var xx = this.x.redSqr(); // YY = Y1^2

    var yy = this.y.redSqr(); // YYYY = YY^2

    var yyyy = yy.redSqr(); // S = 2 * ((X1 + YY)^2 - XX - YYYY)

    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s); // M = 3 * XX + a

    var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a); // T = M^2 - 2 * S

    var t = m.redSqr().redISub(s).redISub(s); // X3 = T

    nx = t; // Y3 = M * (S - T) - 8 * YYYY

    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    ny = m.redMul(s.redISub(t)).redISub(yyyy8); // Z3 = 2 * Y1

    nz = this.y.redAdd(this.y);
  } else {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html#doubling-dbl-2001-b
    // 3M + 5S
    // delta = Z1^2
    var delta = this.z.redSqr(); // gamma = Y1^2

    var gamma = this.y.redSqr(); // beta = X1 * gamma

    var beta = this.x.redMul(gamma); // alpha = 3 * (X1 - delta) * (X1 + delta)

    var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
    alpha = alpha.redAdd(alpha).redIAdd(alpha); // X3 = alpha^2 - 8 * beta

    var beta4 = beta.redIAdd(beta);
    beta4 = beta4.redIAdd(beta4);
    var beta8 = beta4.redAdd(beta4);
    nx = alpha.redSqr().redISub(beta8); // Z3 = (Y1 + Z1)^2 - gamma - delta

    nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta); // Y3 = alpha * (4 * beta - X3) - 8 * gamma^2

    var ggamma8 = gamma.redSqr();
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._dbl = function _dbl() {
  var a = this.curve.a; // 4M + 6S + 10A

  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();
  var jx2 = jx.redSqr();
  var jy2 = jy.redSqr();
  var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
  var jxd4 = jx.redAdd(jx);
  jxd4 = jxd4.redIAdd(jxd4);
  var t1 = jxd4.redMul(jy2);
  var nx = c.redSqr().redISub(t1.redAdd(t1));
  var t2 = t1.redISub(nx);
  var jyd8 = jy2.redSqr();
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  var ny = c.redMul(t2).redISub(jyd8);
  var nz = jy.redAdd(jy).redMul(jz);
  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.trpl = function trpl() {
  if (!this.curve.zeroA) return this.dbl().add(this); // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html#tripling-tpl-2007-bl
  // 5M + 10S + ...
  // XX = X1^2

  var xx = this.x.redSqr(); // YY = Y1^2

  var yy = this.y.redSqr(); // ZZ = Z1^2

  var zz = this.z.redSqr(); // YYYY = YY^2

  var yyyy = yy.redSqr(); // M = 3 * XX + a * ZZ2; a = 0

  var m = xx.redAdd(xx).redIAdd(xx); // MM = M^2

  var mm = m.redSqr(); // E = 6 * ((X1 + YY)^2 - XX - YYYY) - MM

  var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
  e = e.redIAdd(e);
  e = e.redAdd(e).redIAdd(e);
  e = e.redISub(mm); // EE = E^2

  var ee = e.redSqr(); // T = 16*YYYY

  var t = yyyy.redIAdd(yyyy);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  t = t.redIAdd(t); // U = (M + E)^2 - MM - EE - T

  var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t); // X3 = 4 * (X1 * EE - 4 * YY * U)

  var yyu4 = yy.redMul(u);
  yyu4 = yyu4.redIAdd(yyu4);
  yyu4 = yyu4.redIAdd(yyu4);
  var nx = this.x.redMul(ee).redISub(yyu4);
  nx = nx.redIAdd(nx);
  nx = nx.redIAdd(nx); // Y3 = 8 * Y1 * (U * (T - U) - E * EE)

  var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny); // Z3 = (Z1 + E)^2 - ZZ - EE

  var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);
  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mul = function mul(k, kbase) {
  k = new BN$b(k, kbase);
  return this.curve._wnafMul(this, k);
};

JPoint.prototype.eq = function eq(p) {
  if (p.type === 'affine') return this.eq(p.toJ());
  if (this === p) return true; // x1 * z2^2 == x2 * z1^2

  var z2 = this.z.redSqr();
  var pz2 = p.z.redSqr();
  if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0) return false; // y1 * z2^3 == y2 * z1^3

  var z3 = z2.redMul(this.z);
  var pz3 = pz2.redMul(p.z);
  return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
};

JPoint.prototype.eqXToP = function eqXToP(x) {
  var zs = this.z.redSqr();
  var rx = x.toRed(this.curve.red).redMul(zs);
  if (this.x.cmp(rx) === 0) return true;
  var xc = x.clone();
  var t = this.curve.redN.redMul(zs);

  for (;;) {
    xc.iadd(this.curve.n);
    if (xc.cmp(this.curve.p) >= 0) return false;
    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0) return true;
  }
};

JPoint.prototype.inspect = function inspect() {
  if (this.isInfinity()) return '<EC JPoint Infinity>';
  return '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
};

JPoint.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.z.cmpn(0) === 0;
};

var BN$a = bn$2.exports;
var inherits$2 = inherits$4.exports;
var Base$1 = base;
var utils$m = utils$q;

function MontCurve(conf) {
  Base$1.call(this, 'mont', conf);
  this.a = new BN$a(conf.a, 16).toRed(this.red);
  this.b = new BN$a(conf.b, 16).toRed(this.red);
  this.i4 = new BN$a(4).toRed(this.red).redInvm();
  this.two = new BN$a(2).toRed(this.red);
  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}

inherits$2(MontCurve, Base$1);
var mont = MontCurve;

MontCurve.prototype.validate = function validate(point) {
  var x = point.normalize().x;
  var x2 = x.redSqr();
  var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
  var y = rhs.redSqrt();
  return y.redSqr().cmp(rhs) === 0;
};

function Point$1(curve, x, z) {
  Base$1.BasePoint.call(this, curve, 'projective');

  if (x === null && z === null) {
    this.x = this.curve.one;
    this.z = this.curve.zero;
  } else {
    this.x = new BN$a(x, 16);
    this.z = new BN$a(z, 16);
    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
    if (!this.z.red) this.z = this.z.toRed(this.curve.red);
  }
}

inherits$2(Point$1, Base$1.BasePoint);

MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  return this.point(utils$m.toArray(bytes, enc), 1);
};

MontCurve.prototype.point = function point(x, z) {
  return new Point$1(this, x, z);
};

MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point$1.fromJSON(this, obj);
};

Point$1.prototype.precompute = function precompute() {// No-op
};

Point$1.prototype._encode = function _encode() {
  return this.getX().toArray('be', this.curve.p.byteLength());
};

Point$1.fromJSON = function fromJSON(curve, obj) {
  return new Point$1(curve, obj[0], obj[1] || curve.one);
};

Point$1.prototype.inspect = function inspect() {
  if (this.isInfinity()) return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point$1.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.z.cmpn(0) === 0;
};

Point$1.prototype.dbl = function dbl() {
  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#doubling-dbl-1987-m-3
  // 2M + 2S + 4A
  // A = X1 + Z1
  var a = this.x.redAdd(this.z); // AA = A^2

  var aa = a.redSqr(); // B = X1 - Z1

  var b = this.x.redSub(this.z); // BB = B^2

  var bb = b.redSqr(); // C = AA - BB

  var c = aa.redSub(bb); // X3 = AA * BB

  var nx = aa.redMul(bb); // Z3 = C * (BB + A24 * C)

  var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
  return this.curve.point(nx, nz);
};

Point$1.prototype.add = function add() {
  throw new Error('Not supported on Montgomery curve');
};

Point$1.prototype.diffAdd = function diffAdd(p, diff) {
  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#diffadd-dadd-1987-m-3
  // 4M + 2S + 6A
  // A = X2 + Z2
  var a = this.x.redAdd(this.z); // B = X2 - Z2

  var b = this.x.redSub(this.z); // C = X3 + Z3

  var c = p.x.redAdd(p.z); // D = X3 - Z3

  var d = p.x.redSub(p.z); // DA = D * A

  var da = d.redMul(a); // CB = C * B

  var cb = c.redMul(b); // X5 = Z1 * (DA + CB)^2

  var nx = diff.z.redMul(da.redAdd(cb).redSqr()); // Z5 = X1 * (DA - CB)^2

  var nz = diff.x.redMul(da.redISub(cb).redSqr());
  return this.curve.point(nx, nz);
};

Point$1.prototype.mul = function mul(k) {
  var t = k.clone();
  var a = this; // (N / 2) * Q + Q

  var b = this.curve.point(null, null); // (N / 2) * Q

  var c = this; // Q

  for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1)) {
    bits.push(t.andln(1));
  }

  for (var i = bits.length - 1; i >= 0; i--) {
    if (bits[i] === 0) {
      // N * Q + Q = ((N / 2) * Q + Q)) + (N / 2) * Q
      a = a.diffAdd(b, c); // N * Q = 2 * ((N / 2) * Q + Q))

      b = b.dbl();
    } else {
      // N * Q = ((N / 2) * Q + Q) + ((N / 2) * Q)
      b = a.diffAdd(b, c); // N * Q + Q = 2 * ((N / 2) * Q + Q)

      a = a.dbl();
    }
  }

  return b;
};

Point$1.prototype.mulAdd = function mulAdd() {
  throw new Error('Not supported on Montgomery curve');
};

Point$1.prototype.jumlAdd = function jumlAdd() {
  throw new Error('Not supported on Montgomery curve');
};

Point$1.prototype.eq = function eq(other) {
  return this.getX().cmp(other.getX()) === 0;
};

Point$1.prototype.normalize = function normalize() {
  this.x = this.x.redMul(this.z.redInvm());
  this.z = this.curve.one;
  return this;
};

Point$1.prototype.getX = function getX() {
  // Normalize coordinates
  this.normalize();
  return this.x.fromRed();
};

var utils$l = utils$q;
var BN$9 = bn$2.exports;
var inherits$1 = inherits$4.exports;
var Base = base;
var assert$c = utils$l.assert;

function EdwardsCurve(conf) {
  // NOTE: Important as we are creating point in Base.call()
  this.twisted = (conf.a | 0) !== 1;
  this.mOneA = this.twisted && (conf.a | 0) === -1;
  this.extended = this.mOneA;
  Base.call(this, 'edwards', conf);
  this.a = new BN$9(conf.a, 16).umod(this.red.m);
  this.a = this.a.toRed(this.red);
  this.c = new BN$9(conf.c, 16).toRed(this.red);
  this.c2 = this.c.redSqr();
  this.d = new BN$9(conf.d, 16).toRed(this.red);
  this.dd = this.d.redAdd(this.d);
  assert$c(!this.twisted || this.c.fromRed().cmpn(1) === 0);
  this.oneC = (conf.c | 0) === 1;
}

inherits$1(EdwardsCurve, Base);
var edwards = EdwardsCurve;

EdwardsCurve.prototype._mulA = function _mulA(num) {
  if (this.mOneA) return num.redNeg();else return this.a.redMul(num);
};

EdwardsCurve.prototype._mulC = function _mulC(num) {
  if (this.oneC) return num;else return this.c.redMul(num);
}; // Just for compatibility with Short curve


EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
  return this.point(x, y, z, t);
};

EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
  x = new BN$9(x, 16);
  if (!x.red) x = x.toRed(this.red);
  var x2 = x.redSqr();
  var rhs = this.c2.redSub(this.a.redMul(x2));
  var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));
  var y2 = rhs.redMul(lhs.redInvm());
  var y = y2.redSqrt();
  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0) throw new Error('invalid point');
  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd) y = y.redNeg();
  return this.point(x, y);
};

EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
  y = new BN$9(y, 16);
  if (!y.red) y = y.toRed(this.red); // x^2 = (y^2 - c^2) / (c^2 d y^2 - a)

  var y2 = y.redSqr();
  var lhs = y2.redSub(this.c2);
  var rhs = y2.redMul(this.d).redMul(this.c2).redSub(this.a);
  var x2 = lhs.redMul(rhs.redInvm());

  if (x2.cmp(this.zero) === 0) {
    if (odd) throw new Error('invalid point');else return this.point(this.zero, y);
  }

  var x = x2.redSqrt();
  if (x.redSqr().redSub(x2).cmp(this.zero) !== 0) throw new Error('invalid point');
  if (x.fromRed().isOdd() !== odd) x = x.redNeg();
  return this.point(x, y);
};

EdwardsCurve.prototype.validate = function validate(point) {
  if (point.isInfinity()) return true; // Curve: A * X^2 + Y^2 = C^2 * (1 + D * X^2 * Y^2)

  point.normalize();
  var x2 = point.x.redSqr();
  var y2 = point.y.redSqr();
  var lhs = x2.redMul(this.a).redAdd(y2);
  var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));
  return lhs.cmp(rhs) === 0;
};

function Point(curve, x, y, z, t) {
  Base.BasePoint.call(this, curve, 'projective');

  if (x === null && y === null && z === null) {
    this.x = this.curve.zero;
    this.y = this.curve.one;
    this.z = this.curve.one;
    this.t = this.curve.zero;
    this.zOne = true;
  } else {
    this.x = new BN$9(x, 16);
    this.y = new BN$9(y, 16);
    this.z = z ? new BN$9(z, 16) : this.curve.one;
    this.t = t && new BN$9(t, 16);
    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
    if (!this.y.red) this.y = this.y.toRed(this.curve.red);
    if (!this.z.red) this.z = this.z.toRed(this.curve.red);
    if (this.t && !this.t.red) this.t = this.t.toRed(this.curve.red);
    this.zOne = this.z === this.curve.one; // Use extended coordinates

    if (this.curve.extended && !this.t) {
      this.t = this.x.redMul(this.y);
      if (!this.zOne) this.t = this.t.redMul(this.z.redInvm());
    }
  }
}

inherits$1(Point, Base.BasePoint);

EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point.fromJSON(this, obj);
};

EdwardsCurve.prototype.point = function point(x, y, z, t) {
  return new Point(this, x, y, z, t);
};

Point.fromJSON = function fromJSON(curve, obj) {
  return new Point(curve, obj[0], obj[1], obj[2]);
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity()) return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
};

Point.prototype._extDbl = function _extDbl() {
  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
  //     #doubling-dbl-2008-hwcd
  // 4M + 4S
  // A = X1^2
  var a = this.x.redSqr(); // B = Y1^2

  var b = this.y.redSqr(); // C = 2 * Z1^2

  var c = this.z.redSqr();
  c = c.redIAdd(c); // D = a * A

  var d = this.curve._mulA(a); // E = (X1 + Y1)^2 - A - B


  var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b); // G = D + B

  var g = d.redAdd(b); // F = G - C

  var f = g.redSub(c); // H = D - B

  var h = d.redSub(b); // X3 = E * F

  var nx = e.redMul(f); // Y3 = G * H

  var ny = g.redMul(h); // T3 = E * H

  var nt = e.redMul(h); // Z3 = F * G

  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projDbl = function _projDbl() {
  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
  //     #doubling-dbl-2008-bbjlp
  //     #doubling-dbl-2007-bl
  // and others
  // Generally 3M + 4S or 2M + 4S
  // B = (X1 + Y1)^2
  var b = this.x.redAdd(this.y).redSqr(); // C = X1^2

  var c = this.x.redSqr(); // D = Y1^2

  var d = this.y.redSqr();
  var nx;
  var ny;
  var nz;
  var e;
  var h;
  var j;

  if (this.curve.twisted) {
    // E = a * C
    e = this.curve._mulA(c); // F = E + D

    var f = e.redAdd(d);

    if (this.zOne) {
      // X3 = (B - C - D) * (F - 2)
      nx = b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two)); // Y3 = F * (E - D)

      ny = f.redMul(e.redSub(d)); // Z3 = F^2 - 2 * F

      nz = f.redSqr().redSub(f).redSub(f);
    } else {
      // H = Z1^2
      h = this.z.redSqr(); // J = F - 2 * H

      j = f.redSub(h).redISub(h); // X3 = (B-C-D)*J

      nx = b.redSub(c).redISub(d).redMul(j); // Y3 = F * (E - D)

      ny = f.redMul(e.redSub(d)); // Z3 = F * J

      nz = f.redMul(j);
    }
  } else {
    // E = C + D
    e = c.redAdd(d); // H = (c * Z1)^2

    h = this.curve._mulC(this.z).redSqr(); // J = E - 2 * H

    j = e.redSub(h).redSub(h); // X3 = c * (B - E) * J

    nx = this.curve._mulC(b.redISub(e)).redMul(j); // Y3 = c * E * (C - D)

    ny = this.curve._mulC(e).redMul(c.redISub(d)); // Z3 = E * J

    nz = e.redMul(j);
  }

  return this.curve.point(nx, ny, nz);
};

Point.prototype.dbl = function dbl() {
  if (this.isInfinity()) return this; // Double in extended coordinates

  if (this.curve.extended) return this._extDbl();else return this._projDbl();
};

Point.prototype._extAdd = function _extAdd(p) {
  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
  //     #addition-add-2008-hwcd-3
  // 8M
  // A = (Y1 - X1) * (Y2 - X2)
  var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x)); // B = (Y1 + X1) * (Y2 + X2)

  var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x)); // C = T1 * k * T2

  var c = this.t.redMul(this.curve.dd).redMul(p.t); // D = Z1 * 2 * Z2

  var d = this.z.redMul(p.z.redAdd(p.z)); // E = B - A

  var e = b.redSub(a); // F = D - C

  var f = d.redSub(c); // G = D + C

  var g = d.redAdd(c); // H = B + A

  var h = b.redAdd(a); // X3 = E * F

  var nx = e.redMul(f); // Y3 = G * H

  var ny = g.redMul(h); // T3 = E * H

  var nt = e.redMul(h); // Z3 = F * G

  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projAdd = function _projAdd(p) {
  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
  //     #addition-add-2008-bbjlp
  //     #addition-add-2007-bl
  // 10M + 1S
  // A = Z1 * Z2
  var a = this.z.redMul(p.z); // B = A^2

  var b = a.redSqr(); // C = X1 * X2

  var c = this.x.redMul(p.x); // D = Y1 * Y2

  var d = this.y.redMul(p.y); // E = d * C * D

  var e = this.curve.d.redMul(c).redMul(d); // F = B - E

  var f = b.redSub(e); // G = B + E

  var g = b.redAdd(e); // X3 = A * F * ((X1 + Y1) * (X2 + Y2) - C - D)

  var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
  var nx = a.redMul(f).redMul(tmp);
  var ny;
  var nz;

  if (this.curve.twisted) {
    // Y3 = A * G * (D - a * C)
    ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c))); // Z3 = F * G

    nz = f.redMul(g);
  } else {
    // Y3 = A * G * (D - C)
    ny = a.redMul(g).redMul(d.redSub(c)); // Z3 = c * F * G

    nz = this.curve._mulC(f).redMul(g);
  }

  return this.curve.point(nx, ny, nz);
};

Point.prototype.add = function add(p) {
  if (this.isInfinity()) return p;
  if (p.isInfinity()) return this;
  if (this.curve.extended) return this._extAdd(p);else return this._projAdd(p);
};

Point.prototype.mul = function mul(k) {
  if (this._hasDoubles(k)) return this.curve._fixedNafMul(this, k);else return this.curve._wnafMul(this, k);
};

Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, false);
};

Point.prototype.jmulAdd = function jmulAdd(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, true);
};

Point.prototype.normalize = function normalize() {
  if (this.zOne) return this; // Normalize coordinates

  var zi = this.z.redInvm();
  this.x = this.x.redMul(zi);
  this.y = this.y.redMul(zi);
  if (this.t) this.t = this.t.redMul(zi);
  this.z = this.curve.one;
  this.zOne = true;
  return this;
};

Point.prototype.neg = function neg() {
  return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
};

Point.prototype.getX = function getX() {
  this.normalize();
  return this.x.fromRed();
};

Point.prototype.getY = function getY() {
  this.normalize();
  return this.y.fromRed();
};

Point.prototype.eq = function eq(other) {
  return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
};

Point.prototype.eqXToP = function eqXToP(x) {
  var rx = x.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(rx) === 0) return true;
  var xc = x.clone();
  var t = this.curve.redN.redMul(this.z);

  for (;;) {
    xc.iadd(this.curve.n);
    if (xc.cmp(this.curve.p) >= 0) return false;
    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0) return true;
  }
}; // Compatibility with BaseCurve


Point.prototype.toP = Point.prototype.normalize;
Point.prototype.mixedAdd = Point.prototype.add;

(function (exports) {

  var curve = exports;
  curve.base = base;
  curve["short"] = _short;
  curve.mont = mont;
  curve.edwards = edwards;
})(curve);

var curves$2 = {};

var hash$3 = {};

var utils$k = {};

var assert$b = minimalisticAssert;
var inherits = inherits$4.exports;
utils$k.inherits = inherits;

function isSurrogatePair(msg, i) {
  if ((msg.charCodeAt(i) & 0xFC00) !== 0xD800) {
    return false;
  }

  if (i < 0 || i + 1 >= msg.length) {
    return false;
  }

  return (msg.charCodeAt(i + 1) & 0xFC00) === 0xDC00;
}

function toArray(msg, enc) {
  if (Array.isArray(msg)) return msg.slice();
  if (!msg) return [];
  var res = [];

  if (typeof msg === 'string') {
    if (!enc) {
      // Inspired by stringToUtf8ByteArray() in closure-library by Google
      // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143
      // Apache License 2.0
      // https://github.com/google/closure-library/blob/master/LICENSE
      var p = 0;

      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);

        if (c < 128) {
          res[p++] = c;
        } else if (c < 2048) {
          res[p++] = c >> 6 | 192;
          res[p++] = c & 63 | 128;
        } else if (isSurrogatePair(msg, i)) {
          c = 0x10000 + ((c & 0x03FF) << 10) + (msg.charCodeAt(++i) & 0x03FF);
          res[p++] = c >> 18 | 240;
          res[p++] = c >> 12 & 63 | 128;
          res[p++] = c >> 6 & 63 | 128;
          res[p++] = c & 63 | 128;
        } else {
          res[p++] = c >> 12 | 224;
          res[p++] = c >> 6 & 63 | 128;
          res[p++] = c & 63 | 128;
        }
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0) msg = '0' + msg;

      for (i = 0; i < msg.length; i += 2) {
        res.push(parseInt(msg[i] + msg[i + 1], 16));
      }
    }
  } else {
    for (i = 0; i < msg.length; i++) {
      res[i] = msg[i] | 0;
    }
  }

  return res;
}

utils$k.toArray = toArray;

function toHex$1(msg) {
  var res = '';

  for (var i = 0; i < msg.length; i++) {
    res += zero2(msg[i].toString(16));
  }

  return res;
}

utils$k.toHex = toHex$1;

function htonl(w) {
  var res = w >>> 24 | w >>> 8 & 0xff00 | w << 8 & 0xff0000 | (w & 0xff) << 24;
  return res >>> 0;
}

utils$k.htonl = htonl;

function toHex32(msg, endian) {
  var res = '';

  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    if (endian === 'little') w = htonl(w);
    res += zero8(w.toString(16));
  }

  return res;
}

utils$k.toHex32 = toHex32;

function zero2(word) {
  if (word.length === 1) return '0' + word;else return word;
}

utils$k.zero2 = zero2;

function zero8(word) {
  if (word.length === 7) return '0' + word;else if (word.length === 6) return '00' + word;else if (word.length === 5) return '000' + word;else if (word.length === 4) return '0000' + word;else if (word.length === 3) return '00000' + word;else if (word.length === 2) return '000000' + word;else if (word.length === 1) return '0000000' + word;else return word;
}

utils$k.zero8 = zero8;

function join32(msg, start, end, endian) {
  var len = end - start;
  assert$b(len % 4 === 0);
  var res = new Array(len / 4);

  for (var i = 0, k = start; i < res.length; i++, k += 4) {
    var w;
    if (endian === 'big') w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];else w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
    res[i] = w >>> 0;
  }

  return res;
}

utils$k.join32 = join32;

function split32(msg, endian) {
  var res = new Array(msg.length * 4);

  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
    var m = msg[i];

    if (endian === 'big') {
      res[k] = m >>> 24;
      res[k + 1] = m >>> 16 & 0xff;
      res[k + 2] = m >>> 8 & 0xff;
      res[k + 3] = m & 0xff;
    } else {
      res[k + 3] = m >>> 24;
      res[k + 2] = m >>> 16 & 0xff;
      res[k + 1] = m >>> 8 & 0xff;
      res[k] = m & 0xff;
    }
  }

  return res;
}

utils$k.split32 = split32;

function rotr32$1(w, b) {
  return w >>> b | w << 32 - b;
}

utils$k.rotr32 = rotr32$1;

function rotl32$2(w, b) {
  return w << b | w >>> 32 - b;
}

utils$k.rotl32 = rotl32$2;

function sum32$3(a, b) {
  return a + b >>> 0;
}

utils$k.sum32 = sum32$3;

function sum32_3$1(a, b, c) {
  return a + b + c >>> 0;
}

utils$k.sum32_3 = sum32_3$1;

function sum32_4$2(a, b, c, d) {
  return a + b + c + d >>> 0;
}

utils$k.sum32_4 = sum32_4$2;

function sum32_5$2(a, b, c, d, e) {
  return a + b + c + d + e >>> 0;
}

utils$k.sum32_5 = sum32_5$2;

function sum64$1(buf, pos, ah, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];
  var lo = al + bl >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  buf[pos] = hi >>> 0;
  buf[pos + 1] = lo;
}

utils$k.sum64 = sum64$1;

function sum64_hi$1(ah, al, bh, bl) {
  var lo = al + bl >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  return hi >>> 0;
}

utils$k.sum64_hi = sum64_hi$1;

function sum64_lo$1(ah, al, bh, bl) {
  var lo = al + bl;
  return lo >>> 0;
}

utils$k.sum64_lo = sum64_lo$1;

function sum64_4_hi$1(ah, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo = al;
  lo = lo + bl >>> 0;
  carry += lo < al ? 1 : 0;
  lo = lo + cl >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = lo + dl >>> 0;
  carry += lo < dl ? 1 : 0;
  var hi = ah + bh + ch + dh + carry;
  return hi >>> 0;
}

utils$k.sum64_4_hi = sum64_4_hi$1;

function sum64_4_lo$1(ah, al, bh, bl, ch, cl, dh, dl) {
  var lo = al + bl + cl + dl;
  return lo >>> 0;
}

utils$k.sum64_4_lo = sum64_4_lo$1;

function sum64_5_hi$1(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var carry = 0;
  var lo = al;
  lo = lo + bl >>> 0;
  carry += lo < al ? 1 : 0;
  lo = lo + cl >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = lo + dl >>> 0;
  carry += lo < dl ? 1 : 0;
  lo = lo + el >>> 0;
  carry += lo < el ? 1 : 0;
  var hi = ah + bh + ch + dh + eh + carry;
  return hi >>> 0;
}

utils$k.sum64_5_hi = sum64_5_hi$1;

function sum64_5_lo$1(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var lo = al + bl + cl + dl + el;
  return lo >>> 0;
}

utils$k.sum64_5_lo = sum64_5_lo$1;

function rotr64_hi$1(ah, al, num) {
  var r = al << 32 - num | ah >>> num;
  return r >>> 0;
}

utils$k.rotr64_hi = rotr64_hi$1;

function rotr64_lo$1(ah, al, num) {
  var r = ah << 32 - num | al >>> num;
  return r >>> 0;
}

utils$k.rotr64_lo = rotr64_lo$1;

function shr64_hi$1(ah, al, num) {
  return ah >>> num;
}

utils$k.shr64_hi = shr64_hi$1;

function shr64_lo$1(ah, al, num) {
  var r = ah << 32 - num | al >>> num;
  return r >>> 0;
}

utils$k.shr64_lo = shr64_lo$1;

var common$5 = {};

var utils$j = utils$k;
var assert$a = minimalisticAssert;

function BlockHash$4() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = 'big';
  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}

common$5.BlockHash = BlockHash$4;

BlockHash$4.prototype.update = function update(msg, enc) {
  // Convert message to array, pad it, and join into 32bit blocks
  msg = utils$j.toArray(msg, enc);
  if (!this.pending) this.pending = msg;else this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length; // Enough data, try updating

  if (this.pending.length >= this._delta8) {
    msg = this.pending; // Process pending data in blocks

    var r = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r, msg.length);
    if (this.pending.length === 0) this.pending = null;
    msg = utils$j.join32(msg, 0, msg.length - r, this.endian);

    for (var i = 0; i < msg.length; i += this._delta32) {
      this._update(msg, i, i + this._delta32);
    }
  }

  return this;
};

BlockHash$4.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert$a(this.pending === null);
  return this._digest(enc);
};

BlockHash$4.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes = this._delta8;
  var k = bytes - (len + this.padLength) % bytes;
  var res = new Array(k + this.padLength);
  res[0] = 0x80;

  for (var i = 1; i < k; i++) {
    res[i] = 0;
  } // Append length


  len <<= 3;

  if (this.endian === 'big') {
    for (var t = 8; t < this.padLength; t++) {
      res[i++] = 0;
    }

    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = len >>> 24 & 0xff;
    res[i++] = len >>> 16 & 0xff;
    res[i++] = len >>> 8 & 0xff;
    res[i++] = len & 0xff;
  } else {
    res[i++] = len & 0xff;
    res[i++] = len >>> 8 & 0xff;
    res[i++] = len >>> 16 & 0xff;
    res[i++] = len >>> 24 & 0xff;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;

    for (t = 8; t < this.padLength; t++) {
      res[i++] = 0;
    }
  }

  return res;
};

var sha = {};

var common$4 = {};

var utils$i = utils$k;
var rotr32 = utils$i.rotr32;

function ft_1$1(s, x, y, z) {
  if (s === 0) return ch32$1(x, y, z);
  if (s === 1 || s === 3) return p32(x, y, z);
  if (s === 2) return maj32$1(x, y, z);
}

common$4.ft_1 = ft_1$1;

function ch32$1(x, y, z) {
  return x & y ^ ~x & z;
}

common$4.ch32 = ch32$1;

function maj32$1(x, y, z) {
  return x & y ^ x & z ^ y & z;
}

common$4.maj32 = maj32$1;

function p32(x, y, z) {
  return x ^ y ^ z;
}

common$4.p32 = p32;

function s0_256$1(x) {
  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}

common$4.s0_256 = s0_256$1;

function s1_256$1(x) {
  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}

common$4.s1_256 = s1_256$1;

function g0_256$1(x) {
  return rotr32(x, 7) ^ rotr32(x, 18) ^ x >>> 3;
}

common$4.g0_256 = g0_256$1;

function g1_256$1(x) {
  return rotr32(x, 17) ^ rotr32(x, 19) ^ x >>> 10;
}

common$4.g1_256 = g1_256$1;

var utils$h = utils$k;
var common$3 = common$5;
var shaCommon$1 = common$4;
var rotl32$1 = utils$h.rotl32;
var sum32$2 = utils$h.sum32;
var sum32_5$1 = utils$h.sum32_5;
var ft_1 = shaCommon$1.ft_1;
var BlockHash$3 = common$3.BlockHash;
var sha1_K = [0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xCA62C1D6];

function SHA1() {
  if (!(this instanceof SHA1)) return new SHA1();
  BlockHash$3.call(this);
  this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  this.W = new Array(80);
}

utils$h.inherits(SHA1, BlockHash$3);
var _1 = SHA1;
SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;

SHA1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++) {
    W[i] = msg[start + i];
  }

  for (; i < W.length; i++) {
    W[i] = rotl32$1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
  }

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];

  for (i = 0; i < W.length; i++) {
    var s = ~~(i / 20);
    var t = sum32_5$1(rotl32$1(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
    e = d;
    d = c;
    c = rotl32$1(b, 30);
    b = a;
    a = t;
  }

  this.h[0] = sum32$2(this.h[0], a);
  this.h[1] = sum32$2(this.h[1], b);
  this.h[2] = sum32$2(this.h[2], c);
  this.h[3] = sum32$2(this.h[3], d);
  this.h[4] = sum32$2(this.h[4], e);
};

SHA1.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils$h.toHex32(this.h, 'big');else return utils$h.split32(this.h, 'big');
};

var utils$g = utils$k;
var common$2 = common$5;
var shaCommon = common$4;
var assert$9 = minimalisticAssert;
var sum32$1 = utils$g.sum32;
var sum32_4$1 = utils$g.sum32_4;
var sum32_5 = utils$g.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;
var BlockHash$2 = common$2.BlockHash;
var sha256_K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

function SHA256$1() {
  if (!(this instanceof SHA256$1)) return new SHA256$1();
  BlockHash$2.call(this);
  this.h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  this.k = sha256_K;
  this.W = new Array(64);
}

utils$g.inherits(SHA256$1, BlockHash$2);
var _256 = SHA256$1;
SHA256$1.blockSize = 512;
SHA256$1.outSize = 256;
SHA256$1.hmacStrength = 192;
SHA256$1.padLength = 64;

SHA256$1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++) {
    W[i] = msg[start + i];
  }

  for (; i < W.length; i++) {
    W[i] = sum32_4$1(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);
  }

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  var f = this.h[5];
  var g = this.h[6];
  var h = this.h[7];
  assert$9(this.k.length === W.length);

  for (i = 0; i < W.length; i++) {
    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
    var T2 = sum32$1(s0_256(a), maj32(a, b, c));
    h = g;
    g = f;
    f = e;
    e = sum32$1(d, T1);
    d = c;
    c = b;
    b = a;
    a = sum32$1(T1, T2);
  }

  this.h[0] = sum32$1(this.h[0], a);
  this.h[1] = sum32$1(this.h[1], b);
  this.h[2] = sum32$1(this.h[2], c);
  this.h[3] = sum32$1(this.h[3], d);
  this.h[4] = sum32$1(this.h[4], e);
  this.h[5] = sum32$1(this.h[5], f);
  this.h[6] = sum32$1(this.h[6], g);
  this.h[7] = sum32$1(this.h[7], h);
};

SHA256$1.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils$g.toHex32(this.h, 'big');else return utils$g.split32(this.h, 'big');
};

var utils$f = utils$k;
var SHA256 = _256;

function SHA224() {
  if (!(this instanceof SHA224)) return new SHA224();
  SHA256.call(this);
  this.h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
}

utils$f.inherits(SHA224, SHA256);
var _224 = SHA224;
SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;

SHA224.prototype._digest = function digest(enc) {
  // Just truncate output
  if (enc === 'hex') return utils$f.toHex32(this.h.slice(0, 7), 'big');else return utils$f.split32(this.h.slice(0, 7), 'big');
};

var utils$e = utils$k;
var common$1 = common$5;
var assert$8 = minimalisticAssert;
var rotr64_hi = utils$e.rotr64_hi;
var rotr64_lo = utils$e.rotr64_lo;
var shr64_hi = utils$e.shr64_hi;
var shr64_lo = utils$e.shr64_lo;
var sum64 = utils$e.sum64;
var sum64_hi = utils$e.sum64_hi;
var sum64_lo = utils$e.sum64_lo;
var sum64_4_hi = utils$e.sum64_4_hi;
var sum64_4_lo = utils$e.sum64_4_lo;
var sum64_5_hi = utils$e.sum64_5_hi;
var sum64_5_lo = utils$e.sum64_5_lo;
var BlockHash$1 = common$1.BlockHash;
var sha512_K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

function SHA512$1() {
  if (!(this instanceof SHA512$1)) return new SHA512$1();
  BlockHash$1.call(this);
  this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179];
  this.k = sha512_K;
  this.W = new Array(160);
}

utils$e.inherits(SHA512$1, BlockHash$1);
var _512 = SHA512$1;
SHA512$1.blockSize = 1024;
SHA512$1.outSize = 512;
SHA512$1.hmacStrength = 192;
SHA512$1.padLength = 128;

SHA512$1.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W = this.W; // 32 x 32bit words

  for (var i = 0; i < 32; i++) {
    W[i] = msg[start + i];
  }

  for (; i < W.length; i += 2) {
    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]); // i - 2

    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
    var c1_hi = W[i - 14]; // i - 7

    var c1_lo = W[i - 13];
    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]); // i - 15

    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
    var c3_hi = W[i - 32]; // i - 16

    var c3_lo = W[i - 31];
    W[i] = sum64_4_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
    W[i + 1] = sum64_4_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
  }
};

SHA512$1.prototype._update = function _update(msg, start) {
  this._prepareBlock(msg, start);

  var W = this.W;
  var ah = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];
  assert$8(this.k.length === W.length);

  for (var i = 0; i < W.length; i += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh, el);
    var c1_lo = s1_512_lo(eh, el);
    var c2_hi = ch64_hi(eh, el, fh, fl, gh);
    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
    var c3_hi = this.k[i];
    var c3_lo = this.k[i + 1];
    var c4_hi = W[i];
    var c4_lo = W[i + 1];
    var T1_hi = sum64_5_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
    var T1_lo = sum64_5_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
    c0_hi = s0_512_hi(ah, al);
    c0_lo = s0_512_lo(ah, al);
    c1_hi = maj64_hi(ah, al, bh, bl, ch);
    c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
    hh = gh;
    hl = gl;
    gh = fh;
    gl = fl;
    fh = eh;
    fl = el;
    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);
    dh = ch;
    dl = cl;
    ch = bh;
    cl = bl;
    bh = ah;
    bl = al;
    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }

  sum64(this.h, 0, ah, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};

SHA512$1.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils$e.toHex32(this.h, 'big');else return utils$e.split32(this.h, 'big');
};

function ch64_hi(xh, xl, yh, yl, zh) {
  var r = xh & yh ^ ~xh & zh;
  if (r < 0) r += 0x100000000;
  return r;
}

function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r = xl & yl ^ ~xl & zl;
  if (r < 0) r += 0x100000000;
  return r;
}

function maj64_hi(xh, xl, yh, yl, zh) {
  var r = xh & yh ^ xh & zh ^ yh & zh;
  if (r < 0) r += 0x100000000;
  return r;
}

function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r = xl & yl ^ xl & zl ^ yl & zl;
  if (r < 0) r += 0x100000000;
  return r;
}

function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2); // 34

  var c2_hi = rotr64_hi(xl, xh, 7); // 39

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2); // 34

  var c2_lo = rotr64_lo(xl, xh, 7); // 39

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9); // 41

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9); // 41

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);
  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);
  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29); // 61

  var c2_hi = shr64_hi(xh, xl, 6);
  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0) r += 0x100000000;
  return r;
}

function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29); // 61

  var c2_lo = shr64_lo(xh, xl, 6);
  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0) r += 0x100000000;
  return r;
}

var utils$d = utils$k;
var SHA512 = _512;

function SHA384() {
  if (!(this instanceof SHA384)) return new SHA384();
  SHA512.call(this);
  this.h = [0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4];
}

utils$d.inherits(SHA384, SHA512);
var _384 = SHA384;
SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;

SHA384.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils$d.toHex32(this.h.slice(0, 12), 'big');else return utils$d.split32(this.h.slice(0, 12), 'big');
};

sha.sha1 = _1;
sha.sha224 = _224;
sha.sha256 = _256;
sha.sha384 = _384;
sha.sha512 = _512;

var ripemd = {};

var utils$c = utils$k;
var common = common$5;
var rotl32 = utils$c.rotl32;
var sum32 = utils$c.sum32;
var sum32_3 = utils$c.sum32_3;
var sum32_4 = utils$c.sum32_4;
var BlockHash = common.BlockHash;

function RIPEMD160() {
  if (!(this instanceof RIPEMD160)) return new RIPEMD160();
  BlockHash.call(this);
  this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  this.endian = 'little';
}

utils$c.inherits(RIPEMD160, BlockHash);
ripemd.ripemd160 = RIPEMD160;
RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;

RIPEMD160.prototype._update = function update(msg, start) {
  var A = this.h[0];
  var B = this.h[1];
  var C = this.h[2];
  var D = this.h[3];
  var E = this.h[4];
  var Ah = A;
  var Bh = B;
  var Ch = C;
  var Dh = D;
  var Eh = E;

  for (var j = 0; j < 80; j++) {
    var T = sum32(rotl32(sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)), s[j]), E);
    A = E;
    E = D;
    D = rotl32(C, 10);
    C = B;
    B = T;
    T = sum32(rotl32(sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)), sh[j]), Eh);
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T;
  }

  T = sum32_3(this.h[1], C, Dh);
  this.h[1] = sum32_3(this.h[2], D, Eh);
  this.h[2] = sum32_3(this.h[3], E, Ah);
  this.h[3] = sum32_3(this.h[4], A, Bh);
  this.h[4] = sum32_3(this.h[0], B, Ch);
  this.h[0] = T;
};

RIPEMD160.prototype._digest = function digest(enc) {
  if (enc === 'hex') return utils$c.toHex32(this.h, 'little');else return utils$c.split32(this.h, 'little');
};

function f(j, x, y, z) {
  if (j <= 15) return x ^ y ^ z;else if (j <= 31) return x & y | ~x & z;else if (j <= 47) return (x | ~y) ^ z;else if (j <= 63) return x & z | y & ~z;else return x ^ (y | ~z);
}

function K(j) {
  if (j <= 15) return 0x00000000;else if (j <= 31) return 0x5a827999;else if (j <= 47) return 0x6ed9eba1;else if (j <= 63) return 0x8f1bbcdc;else return 0xa953fd4e;
}

function Kh(j) {
  if (j <= 15) return 0x50a28be6;else if (j <= 31) return 0x5c4dd124;else if (j <= 47) return 0x6d703ef3;else if (j <= 63) return 0x7a6d76e9;else return 0x00000000;
}

var r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
var rh = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
var s = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
var sh = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

var utils$b = utils$k;
var assert$7 = minimalisticAssert;

function Hmac(hash, key, enc) {
  if (!(this instanceof Hmac)) return new Hmac(hash, key, enc);
  this.Hash = hash;
  this.blockSize = hash.blockSize / 8;
  this.outSize = hash.outSize / 8;
  this.inner = null;
  this.outer = null;

  this._init(utils$b.toArray(key, enc));
}

var hmac = Hmac;

Hmac.prototype._init = function init(key) {
  // Shorten key, if needed
  if (key.length > this.blockSize) key = new this.Hash().update(key).digest();
  assert$7(key.length <= this.blockSize); // Add padding to key

  for (var i = key.length; i < this.blockSize; i++) {
    key.push(0);
  }

  for (i = 0; i < key.length; i++) {
    key[i] ^= 0x36;
  }

  this.inner = new this.Hash().update(key); // 0x36 ^ 0x5c = 0x6a

  for (i = 0; i < key.length; i++) {
    key[i] ^= 0x6a;
  }

  this.outer = new this.Hash().update(key);
};

Hmac.prototype.update = function update(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};

Hmac.prototype.digest = function digest(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};

(function (exports) {
  var hash = exports;
  hash.utils = utils$k;
  hash.common = common$5;
  hash.sha = sha;
  hash.ripemd = ripemd;
  hash.hmac = hmac; // Proxy hash functions to the main object

  hash.sha1 = hash.sha.sha1;
  hash.sha256 = hash.sha.sha256;
  hash.sha224 = hash.sha.sha224;
  hash.sha384 = hash.sha.sha384;
  hash.sha512 = hash.sha.sha512;
  hash.ripemd160 = hash.ripemd.ripemd160;
})(hash$3);

(function (exports) {

  var curves = exports;
  var hash = hash$3;
  var curve$1 = curve;
  var utils = utils$q;
  var assert = utils.assert;

  function PresetCurve(options) {
    if (options.type === 'short') this.curve = new curve$1["short"](options);else if (options.type === 'edwards') this.curve = new curve$1.edwards(options);else this.curve = new curve$1.mont(options);
    this.g = this.curve.g;
    this.n = this.curve.n;
    this.hash = options.hash;
    assert(this.g.validate(), 'Invalid curve');
    assert(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
  }

  curves.PresetCurve = PresetCurve;

  function defineCurve(name, options) {
    Object.defineProperty(curves, name, {
      configurable: true,
      enumerable: true,
      get: function get() {
        var curve = new PresetCurve(options);
        Object.defineProperty(curves, name, {
          configurable: true,
          enumerable: true,
          value: curve
        });
        return curve;
      }
    });
  }

  defineCurve('p192', {
    type: 'short',
    prime: 'p192',
    p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
    a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
    b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
    n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
    hash: hash.sha256,
    gRed: false,
    g: ['188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012', '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811']
  });
  defineCurve('p224', {
    type: 'short',
    prime: 'p224',
    p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
    a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
    b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
    n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
    hash: hash.sha256,
    gRed: false,
    g: ['b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21', 'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34']
  });
  defineCurve('p256', {
    type: 'short',
    prime: null,
    p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
    a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
    b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
    n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
    hash: hash.sha256,
    gRed: false,
    g: ['6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296', '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5']
  });
  defineCurve('p384', {
    type: 'short',
    prime: null,
    p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'fffffffe ffffffff 00000000 00000000 ffffffff',
    a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'fffffffe ffffffff 00000000 00000000 fffffffc',
    b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f ' + '5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
    n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 ' + 'f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
    hash: hash.sha384,
    gRed: false,
    g: ['aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 ' + '5502f25d bf55296c 3a545e38 72760ab7', '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 ' + '0a60b1ce 1d7e819d 7a431d7c 90ea0e5f']
  });
  defineCurve('p521', {
    type: 'short',
    prime: null,
    p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff',
    a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff fffffffc',
    b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b ' + '99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd ' + '3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
    n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 ' + 'f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
    hash: hash.sha512,
    gRed: false,
    g: ['000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 ' + '053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 ' + 'a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66', '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 ' + '579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 ' + '3fad0761 353c7086 a272c240 88be9476 9fd16650']
  });
  defineCurve('curve25519', {
    type: 'mont',
    prime: 'p25519',
    p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
    a: '76d06',
    b: '1',
    n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
    hash: hash.sha256,
    gRed: false,
    g: ['9']
  });
  defineCurve('ed25519', {
    type: 'edwards',
    prime: 'p25519',
    p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
    a: '-1',
    c: '1',
    // -121665 * (121666^(-1)) (mod P)
    d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
    n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
    hash: hash.sha256,
    gRed: false,
    g: ['216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a', // 4/5
    '6666666666666666666666666666666666666666666666666666666666666658']
  });
  var pre;

  try {
    pre = require('./precomputed/secp256k1');
  } catch (e) {
    pre = undefined;
  }

  defineCurve('secp256k1', {
    type: 'short',
    prime: 'k256',
    p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
    a: '0',
    b: '7',
    n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
    h: '1',
    hash: hash.sha256,
    // Precomputed endomorphism
    beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
    lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
    basis: [{
      a: '3086d221a7d46bcde86c90e49284eb15',
      b: '-e4437ed6010e88286f547fa90abfe4c3'
    }, {
      a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
      b: '3086d221a7d46bcde86c90e49284eb15'
    }],
    gRed: false,
    g: ['79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798', '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8', pre]
  });
})(curves$2);

var hash$2 = hash$3;
var utils$a = utils$p;
var assert$6 = minimalisticAssert;

function HmacDRBG$1(options) {
  if (!(this instanceof HmacDRBG$1)) return new HmacDRBG$1(options);
  this.hash = options.hash;
  this.predResist = !!options.predResist;
  this.outLen = this.hash.outSize;
  this.minEntropy = options.minEntropy || this.hash.hmacStrength;
  this._reseed = null;
  this.reseedInterval = null;
  this.K = null;
  this.V = null;
  var entropy = utils$a.toArray(options.entropy, options.entropyEnc || 'hex');
  var nonce = utils$a.toArray(options.nonce, options.nonceEnc || 'hex');
  var pers = utils$a.toArray(options.pers, options.persEnc || 'hex');
  assert$6(entropy.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');

  this._init(entropy, nonce, pers);
}

var hmacDrbg = HmacDRBG$1;

HmacDRBG$1.prototype._init = function init(entropy, nonce, pers) {
  var seed = entropy.concat(nonce).concat(pers);
  this.K = new Array(this.outLen / 8);
  this.V = new Array(this.outLen / 8);

  for (var i = 0; i < this.V.length; i++) {
    this.K[i] = 0x00;
    this.V[i] = 0x01;
  }

  this._update(seed);

  this._reseed = 1;
  this.reseedInterval = 0x1000000000000; // 2^48
};

HmacDRBG$1.prototype._hmac = function hmac() {
  return new hash$2.hmac(this.hash, this.K);
};

HmacDRBG$1.prototype._update = function update(seed) {
  var kmac = this._hmac().update(this.V).update([0x00]);

  if (seed) kmac = kmac.update(seed);
  this.K = kmac.digest();
  this.V = this._hmac().update(this.V).digest();
  if (!seed) return;
  this.K = this._hmac().update(this.V).update([0x01]).update(seed).digest();
  this.V = this._hmac().update(this.V).digest();
};

HmacDRBG$1.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
  // Optional entropy enc
  if (typeof entropyEnc !== 'string') {
    addEnc = add;
    add = entropyEnc;
    entropyEnc = null;
  }

  entropy = utils$a.toArray(entropy, entropyEnc);
  add = utils$a.toArray(add, addEnc);
  assert$6(entropy.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');

  this._update(entropy.concat(add || []));

  this._reseed = 1;
};

HmacDRBG$1.prototype.generate = function generate(len, enc, add, addEnc) {
  if (this._reseed > this.reseedInterval) throw new Error('Reseed is required'); // Optional encoding

  if (typeof enc !== 'string') {
    addEnc = add;
    add = enc;
    enc = null;
  } // Optional additional data


  if (add) {
    add = utils$a.toArray(add, addEnc || 'hex');

    this._update(add);
  }

  var temp = [];

  while (temp.length < len) {
    this.V = this._hmac().update(this.V).digest();
    temp = temp.concat(this.V);
  }

  var res = temp.slice(0, len);

  this._update(add);

  this._reseed++;
  return utils$a.encode(res, enc);
};

var BN$8 = bn$2.exports;
var utils$9 = utils$q;
var assert$5 = utils$9.assert;

function KeyPair$3(ec, options) {
  this.ec = ec;
  this.priv = null;
  this.pub = null; // KeyPair(ec, { priv: ..., pub: ... })

  if (options.priv) this._importPrivate(options.priv, options.privEnc);
  if (options.pub) this._importPublic(options.pub, options.pubEnc);
}

var key$1 = KeyPair$3;

KeyPair$3.fromPublic = function fromPublic(ec, pub, enc) {
  if (pub instanceof KeyPair$3) return pub;
  return new KeyPair$3(ec, {
    pub: pub,
    pubEnc: enc
  });
};

KeyPair$3.fromPrivate = function fromPrivate(ec, priv, enc) {
  if (priv instanceof KeyPair$3) return priv;
  return new KeyPair$3(ec, {
    priv: priv,
    privEnc: enc
  });
};

KeyPair$3.prototype.validate = function validate() {
  var pub = this.getPublic();
  if (pub.isInfinity()) return {
    result: false,
    reason: 'Invalid public key'
  };
  if (!pub.validate()) return {
    result: false,
    reason: 'Public key is not a point'
  };
  if (!pub.mul(this.ec.curve.n).isInfinity()) return {
    result: false,
    reason: 'Public key * N != O'
  };
  return {
    result: true,
    reason: null
  };
};

KeyPair$3.prototype.getPublic = function getPublic(compact, enc) {
  // compact is optional argument
  if (typeof compact === 'string') {
    enc = compact;
    compact = null;
  }

  if (!this.pub) this.pub = this.ec.g.mul(this.priv);
  if (!enc) return this.pub;
  return this.pub.encode(enc, compact);
};

KeyPair$3.prototype.getPrivate = function getPrivate(enc) {
  if (enc === 'hex') return this.priv.toString(16, 2);else return this.priv;
};

KeyPair$3.prototype._importPrivate = function _importPrivate(key, enc) {
  this.priv = new BN$8(key, enc || 16); // Ensure that the priv won't be bigger than n, otherwise we may fail
  // in fixed multiplication method

  this.priv = this.priv.umod(this.ec.curve.n);
};

KeyPair$3.prototype._importPublic = function _importPublic(key, enc) {
  if (key.x || key.y) {
    // Montgomery points only have an `x` coordinate.
    // Weierstrass/Edwards points on the other hand have both `x` and
    // `y` coordinates.
    if (this.ec.curve.type === 'mont') {
      assert$5(key.x, 'Need x coordinate');
    } else if (this.ec.curve.type === 'short' || this.ec.curve.type === 'edwards') {
      assert$5(key.x && key.y, 'Need both x and y coordinate');
    }

    this.pub = this.ec.curve.point(key.x, key.y);
    return;
  }

  this.pub = this.ec.curve.decodePoint(key, enc);
}; // ECDH


KeyPair$3.prototype.derive = function derive(pub) {
  if (!pub.validate()) {
    assert$5(pub.validate(), 'public point not validated');
  }

  return pub.mul(this.priv).getX();
}; // ECDSA


KeyPair$3.prototype.sign = function sign(msg, enc, options) {
  return this.ec.sign(msg, this, enc, options);
};

KeyPair$3.prototype.verify = function verify(msg, signature) {
  return this.ec.verify(msg, signature, this);
};

KeyPair$3.prototype.inspect = function inspect() {
  return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) + ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
};

var BN$7 = bn$2.exports;
var utils$8 = utils$q;
var assert$4 = utils$8.assert;

function Signature$3(options, enc) {
  if (options instanceof Signature$3) return options;
  if (this._importDER(options, enc)) return;
  assert$4(options.r && options.s, 'Signature without r or s');
  this.r = new BN$7(options.r, 16);
  this.s = new BN$7(options.s, 16);
  if (options.recoveryParam === undefined) this.recoveryParam = null;else this.recoveryParam = options.recoveryParam;
}

var signature$2 = Signature$3;

function Position() {
  this.place = 0;
}

function getLength(buf, p) {
  var initial = buf[p.place++];

  if (!(initial & 0x80)) {
    return initial;
  }

  var octetLen = initial & 0xf; // Indefinite length or overflow

  if (octetLen === 0 || octetLen > 4) {
    return false;
  }

  var val = 0;

  for (var i = 0, off = p.place; i < octetLen; i++, off++) {
    val <<= 8;
    val |= buf[off];
    val >>>= 0;
  } // Leading zeroes


  if (val <= 0x7f) {
    return false;
  }

  p.place = off;
  return val;
}

function rmPadding(buf) {
  var i = 0;
  var len = buf.length - 1;

  while (!buf[i] && !(buf[i + 1] & 0x80) && i < len) {
    i++;
  }

  if (i === 0) {
    return buf;
  }

  return buf.slice(i);
}

Signature$3.prototype._importDER = function _importDER(data, enc) {
  data = utils$8.toArray(data, enc);
  var p = new Position();

  if (data[p.place++] !== 0x30) {
    return false;
  }

  var len = getLength(data, p);

  if (len === false) {
    return false;
  }

  if (len + p.place !== data.length) {
    return false;
  }

  if (data[p.place++] !== 0x02) {
    return false;
  }

  var rlen = getLength(data, p);

  if (rlen === false) {
    return false;
  }

  var r = data.slice(p.place, rlen + p.place);
  p.place += rlen;

  if (data[p.place++] !== 0x02) {
    return false;
  }

  var slen = getLength(data, p);

  if (slen === false) {
    return false;
  }

  if (data.length !== slen + p.place) {
    return false;
  }

  var s = data.slice(p.place, slen + p.place);

  if (r[0] === 0) {
    if (r[1] & 0x80) {
      r = r.slice(1);
    } else {
      // Leading zeroes
      return false;
    }
  }

  if (s[0] === 0) {
    if (s[1] & 0x80) {
      s = s.slice(1);
    } else {
      // Leading zeroes
      return false;
    }
  }

  this.r = new BN$7(r);
  this.s = new BN$7(s);
  this.recoveryParam = null;
  return true;
};

function constructLength(arr, len) {
  if (len < 0x80) {
    arr.push(len);
    return;
  }

  var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
  arr.push(octets | 0x80);

  while (--octets) {
    arr.push(len >>> (octets << 3) & 0xff);
  }

  arr.push(len);
}

Signature$3.prototype.toDER = function toDER(enc) {
  var r = this.r.toArray();
  var s = this.s.toArray(); // Pad values

  if (r[0] & 0x80) r = [0].concat(r); // Pad values

  if (s[0] & 0x80) s = [0].concat(s);
  r = rmPadding(r);
  s = rmPadding(s);

  while (!s[0] && !(s[1] & 0x80)) {
    s = s.slice(1);
  }

  var arr = [0x02];
  constructLength(arr, r.length);
  arr = arr.concat(r);
  arr.push(0x02);
  constructLength(arr, s.length);
  var backHalf = arr.concat(s);
  var res = [0x30];
  constructLength(res, backHalf.length);
  res = res.concat(backHalf);
  return utils$8.encode(res, enc);
};

var BN$6 = bn$2.exports;
var HmacDRBG = hmacDrbg;
var utils$7 = utils$q;
var curves$1 = curves$2;
var rand = brorand.exports;
var assert$3 = utils$7.assert;
var KeyPair$2 = key$1;
var Signature$2 = signature$2;

function EC$1(options) {
  if (!(this instanceof EC$1)) return new EC$1(options); // Shortcut `elliptic.ec(curve-name)`

  if (typeof options === 'string') {
    assert$3(Object.prototype.hasOwnProperty.call(curves$1, options), 'Unknown curve ' + options);
    options = curves$1[options];
  } // Shortcut for `elliptic.ec(elliptic.curves.curveName)`


  if (options instanceof curves$1.PresetCurve) options = {
    curve: options
  };
  this.curve = options.curve.curve;
  this.n = this.curve.n;
  this.nh = this.n.ushrn(1);
  this.g = this.curve.g; // Point on curve

  this.g = options.curve.g;
  this.g.precompute(options.curve.n.bitLength() + 1); // Hash for function for DRBG

  this.hash = options.hash || options.curve.hash;
}

var ec$1 = EC$1;

EC$1.prototype.keyPair = function keyPair(options) {
  return new KeyPair$2(this, options);
};

EC$1.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
  return KeyPair$2.fromPrivate(this, priv, enc);
};

EC$1.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
  return KeyPair$2.fromPublic(this, pub, enc);
};

EC$1.prototype.genKeyPair = function genKeyPair(options) {
  if (!options) options = {}; // Instantiate Hmac_DRBG

  var drbg = new HmacDRBG({
    hash: this.hash,
    pers: options.pers,
    persEnc: options.persEnc || 'utf8',
    entropy: options.entropy || rand(this.hash.hmacStrength),
    entropyEnc: options.entropy && options.entropyEnc || 'utf8',
    nonce: this.n.toArray()
  });
  var bytes = this.n.byteLength();
  var ns2 = this.n.sub(new BN$6(2));

  for (;;) {
    var priv = new BN$6(drbg.generate(bytes));
    if (priv.cmp(ns2) > 0) continue;
    priv.iaddn(1);
    return this.keyFromPrivate(priv);
  }
};

EC$1.prototype._truncateToN = function _truncateToN(msg, truncOnly) {
  var delta = msg.byteLength() * 8 - this.n.bitLength();
  if (delta > 0) msg = msg.ushrn(delta);
  if (!truncOnly && msg.cmp(this.n) >= 0) return msg.sub(this.n);else return msg;
};

EC$1.prototype.sign = function sign(msg, key, enc, options) {
  if (_typeof(enc) === 'object') {
    options = enc;
    enc = null;
  }

  if (!options) options = {};
  key = this.keyFromPrivate(key, enc);
  msg = this._truncateToN(new BN$6(msg, 16)); // Zero-extend key to provide enough entropy

  var bytes = this.n.byteLength();
  var bkey = key.getPrivate().toArray('be', bytes); // Zero-extend nonce to have the same byte size as N

  var nonce = msg.toArray('be', bytes); // Instantiate Hmac_DRBG

  var drbg = new HmacDRBG({
    hash: this.hash,
    entropy: bkey,
    nonce: nonce,
    pers: options.pers,
    persEnc: options.persEnc || 'utf8'
  }); // Number of bytes to generate

  var ns1 = this.n.sub(new BN$6(1));

  for (var iter = 0;; iter++) {
    var k = options.k ? options.k(iter) : new BN$6(drbg.generate(this.n.byteLength()));
    k = this._truncateToN(k, true);
    if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0) continue;
    var kp = this.g.mul(k);
    if (kp.isInfinity()) continue;
    var kpX = kp.getX();
    var r = kpX.umod(this.n);
    if (r.cmpn(0) === 0) continue;
    var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
    s = s.umod(this.n);
    if (s.cmpn(0) === 0) continue;
    var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r) !== 0 ? 2 : 0); // Use complement of `s`, if it is > `n / 2`

    if (options.canonical && s.cmp(this.nh) > 0) {
      s = this.n.sub(s);
      recoveryParam ^= 1;
    }

    return new Signature$2({
      r: r,
      s: s,
      recoveryParam: recoveryParam
    });
  }
};

EC$1.prototype.verify = function verify(msg, signature, key, enc) {
  msg = this._truncateToN(new BN$6(msg, 16));
  key = this.keyFromPublic(key, enc);
  signature = new Signature$2(signature, 'hex'); // Perform primitive values validation

  var r = signature.r;
  var s = signature.s;
  if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0) return false;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return false; // Validate signature

  var sinv = s.invm(this.n);
  var u1 = sinv.mul(msg).umod(this.n);
  var u2 = sinv.mul(r).umod(this.n);
  var p;

  if (!this.curve._maxwellTrick) {
    p = this.g.mulAdd(u1, key.getPublic(), u2);
    if (p.isInfinity()) return false;
    return p.getX().umod(this.n).cmp(r) === 0;
  } // NOTE: Greg Maxwell's trick, inspired by:
  // https://git.io/vad3K


  p = this.g.jmulAdd(u1, key.getPublic(), u2);
  if (p.isInfinity()) return false; // Compare `p.x` of Jacobian point with `r`,
  // this will do `p.x == r * p.z^2` instead of multiplying `p.x` by the
  // inverse of `p.z^2`

  return p.eqXToP(r);
};

EC$1.prototype.recoverPubKey = function (msg, signature, j, enc) {
  assert$3((3 & j) === j, 'The recovery param is more than two bits');
  signature = new Signature$2(signature, enc);
  var n = this.n;
  var e = new BN$6(msg);
  var r = signature.r;
  var s = signature.s; // A set LSB signifies that the y-coordinate is odd

  var isYOdd = j & 1;
  var isSecondKey = j >> 1;
  if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey) throw new Error('Unable to find sencond key candinate'); // 1.1. Let x = r + jn.

  if (isSecondKey) r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);else r = this.curve.pointFromX(r, isYOdd);
  var rInv = signature.r.invm(n);
  var s1 = n.sub(e).mul(rInv).umod(n);
  var s2 = s.mul(rInv).umod(n); // 1.6.1 Compute Q = r^-1 (sR -  eG)
  //               Q = r^-1 (sR + -eG)

  return this.g.mulAdd(s1, r, s2);
};

EC$1.prototype.getKeyRecoveryParam = function (e, signature, Q, enc) {
  signature = new Signature$2(signature, enc);
  if (signature.recoveryParam !== null) return signature.recoveryParam;

  for (var i = 0; i < 4; i++) {
    var Qprime;

    try {
      Qprime = this.recoverPubKey(e, signature, i);
    } catch (e) {
      continue;
    }

    if (Qprime.eq(Q)) return i;
  }

  throw new Error('Unable to find valid recovery factor');
};

var utils$6 = utils$q;
var assert$2 = utils$6.assert;
var parseBytes$2 = utils$6.parseBytes;
var cachedProperty$1 = utils$6.cachedProperty;
/**
* @param {EDDSA} eddsa - instance
* @param {Object} params - public/private key parameters
*
* @param {Array<Byte>} [params.secret] - secret seed bytes
* @param {Point} [params.pub] - public key point (aka `A` in eddsa terms)
* @param {Array<Byte>} [params.pub] - public key point encoded as bytes
*
*/

function KeyPair$1(eddsa, params) {
  this.eddsa = eddsa;
  this._secret = parseBytes$2(params.secret);
  if (eddsa.isPoint(params.pub)) this._pub = params.pub;else this._pubBytes = parseBytes$2(params.pub);
}

KeyPair$1.fromPublic = function fromPublic(eddsa, pub) {
  if (pub instanceof KeyPair$1) return pub;
  return new KeyPair$1(eddsa, {
    pub: pub
  });
};

KeyPair$1.fromSecret = function fromSecret(eddsa, secret) {
  if (secret instanceof KeyPair$1) return secret;
  return new KeyPair$1(eddsa, {
    secret: secret
  });
};

KeyPair$1.prototype.secret = function secret() {
  return this._secret;
};

cachedProperty$1(KeyPair$1, 'pubBytes', function pubBytes() {
  return this.eddsa.encodePoint(this.pub());
});
cachedProperty$1(KeyPair$1, 'pub', function pub() {
  if (this._pubBytes) return this.eddsa.decodePoint(this._pubBytes);
  return this.eddsa.g.mul(this.priv());
});
cachedProperty$1(KeyPair$1, 'privBytes', function privBytes() {
  var eddsa = this.eddsa;
  var hash = this.hash();
  var lastIx = eddsa.encodingLength - 1;
  var a = hash.slice(0, eddsa.encodingLength);
  a[0] &= 248;
  a[lastIx] &= 127;
  a[lastIx] |= 64;
  return a;
});
cachedProperty$1(KeyPair$1, 'priv', function priv() {
  return this.eddsa.decodeInt(this.privBytes());
});
cachedProperty$1(KeyPair$1, 'hash', function hash() {
  return this.eddsa.hash().update(this.secret()).digest();
});
cachedProperty$1(KeyPair$1, 'messagePrefix', function messagePrefix() {
  return this.hash().slice(this.eddsa.encodingLength);
});

KeyPair$1.prototype.sign = function sign(message) {
  assert$2(this._secret, 'KeyPair can only verify');
  return this.eddsa.sign(message, this);
};

KeyPair$1.prototype.verify = function verify(message, sig) {
  return this.eddsa.verify(message, sig, this);
};

KeyPair$1.prototype.getSecret = function getSecret(enc) {
  assert$2(this._secret, 'KeyPair is public only');
  return utils$6.encode(this.secret(), enc);
};

KeyPair$1.prototype.getPublic = function getPublic(enc) {
  return utils$6.encode(this.pubBytes(), enc);
};

var key = KeyPair$1;

var BN$5 = bn$2.exports;
var utils$5 = utils$q;
var assert$1 = utils$5.assert;
var cachedProperty = utils$5.cachedProperty;
var parseBytes$1 = utils$5.parseBytes;
/**
* @param {EDDSA} eddsa - eddsa instance
* @param {Array<Bytes>|Object} sig -
* @param {Array<Bytes>|Point} [sig.R] - R point as Point or bytes
* @param {Array<Bytes>|bn} [sig.S] - S scalar as bn or bytes
* @param {Array<Bytes>} [sig.Rencoded] - R point encoded
* @param {Array<Bytes>} [sig.Sencoded] - S scalar encoded
*/

function Signature$1(eddsa, sig) {
  this.eddsa = eddsa;
  if (_typeof(sig) !== 'object') sig = parseBytes$1(sig);

  if (Array.isArray(sig)) {
    sig = {
      R: sig.slice(0, eddsa.encodingLength),
      S: sig.slice(eddsa.encodingLength)
    };
  }

  assert$1(sig.R && sig.S, 'Signature without R or S');
  if (eddsa.isPoint(sig.R)) this._R = sig.R;
  if (sig.S instanceof BN$5) this._S = sig.S;
  this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
  this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
}

cachedProperty(Signature$1, 'S', function S() {
  return this.eddsa.decodeInt(this.Sencoded());
});
cachedProperty(Signature$1, 'R', function R() {
  return this.eddsa.decodePoint(this.Rencoded());
});
cachedProperty(Signature$1, 'Rencoded', function Rencoded() {
  return this.eddsa.encodePoint(this.R());
});
cachedProperty(Signature$1, 'Sencoded', function Sencoded() {
  return this.eddsa.encodeInt(this.S());
});

Signature$1.prototype.toBytes = function toBytes() {
  return this.Rencoded().concat(this.Sencoded());
};

Signature$1.prototype.toHex = function toHex() {
  return utils$5.encode(this.toBytes(), 'hex').toUpperCase();
};

var signature$1 = Signature$1;

var hash$1 = hash$3;
var curves = curves$2;
var utils$4 = utils$q;
var assert = utils$4.assert;
var parseBytes = utils$4.parseBytes;
var KeyPair = key;
var Signature = signature$1;

function EDDSA(curve) {
  assert(curve === 'ed25519', 'only tested with ed25519 so far');
  if (!(this instanceof EDDSA)) return new EDDSA(curve);
  curve = curves[curve].curve;
  this.curve = curve;
  this.g = curve.g;
  this.g.precompute(curve.n.bitLength() + 1);
  this.pointClass = curve.point().constructor;
  this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
  this.hash = hash$1.sha512;
}

var eddsa = EDDSA;
/**
* @param {Array|String} message - message bytes
* @param {Array|String|KeyPair} secret - secret bytes or a keypair
* @returns {Signature} - signature
*/

EDDSA.prototype.sign = function sign(message, secret) {
  message = parseBytes(message);
  var key = this.keyFromSecret(secret);
  var r = this.hashInt(key.messagePrefix(), message);
  var R = this.g.mul(r);
  var Rencoded = this.encodePoint(R);
  var s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(key.priv());
  var S = r.add(s_).umod(this.curve.n);
  return this.makeSignature({
    R: R,
    S: S,
    Rencoded: Rencoded
  });
};
/**
* @param {Array} message - message bytes
* @param {Array|String|Signature} sig - sig bytes
* @param {Array|String|Point|KeyPair} pub - public key
* @returns {Boolean} - true if public key matches sig of message
*/


EDDSA.prototype.verify = function verify(message, sig, pub) {
  message = parseBytes(message);
  sig = this.makeSignature(sig);
  var key = this.keyFromPublic(pub);
  var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
  var SG = this.g.mul(sig.S());
  var RplusAh = sig.R().add(key.pub().mul(h));
  return RplusAh.eq(SG);
};

EDDSA.prototype.hashInt = function hashInt() {
  var hash = this.hash();

  for (var i = 0; i < arguments.length; i++) {
    hash.update(arguments[i]);
  }

  return utils$4.intFromLE(hash.digest()).umod(this.curve.n);
};

EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
  return KeyPair.fromPublic(this, pub);
};

EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
  return KeyPair.fromSecret(this, secret);
};

EDDSA.prototype.makeSignature = function makeSignature(sig) {
  if (sig instanceof Signature) return sig;
  return new Signature(this, sig);
};
/**
* * https://tools.ietf.org/html/draft-josefsson-eddsa-ed25519-03#section-5.2
*
* EDDSA defines methods for encoding and decoding points and integers. These are
* helper convenience methods, that pass along to utility functions implied
* parameters.
*
*/


EDDSA.prototype.encodePoint = function encodePoint(point) {
  var enc = point.getY().toArray('le', this.encodingLength);
  enc[this.encodingLength - 1] |= point.getX().isOdd() ? 0x80 : 0;
  return enc;
};

EDDSA.prototype.decodePoint = function decodePoint(bytes) {
  bytes = utils$4.parseBytes(bytes);
  var lastIx = bytes.length - 1;
  var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~0x80);
  var xIsOdd = (bytes[lastIx] & 0x80) !== 0;
  var y = utils$4.intFromLE(normed);
  return this.curve.pointFromY(y, xIsOdd);
};

EDDSA.prototype.encodeInt = function encodeInt(num) {
  return num.toArray('le', this.encodingLength);
};

EDDSA.prototype.decodeInt = function decodeInt(bytes) {
  return utils$4.intFromLE(bytes);
};

EDDSA.prototype.isPoint = function isPoint(val) {
  return val instanceof this.pointClass;
};

(function (exports) {

  var elliptic = exports;
  elliptic.version = require$$0.version;
  elliptic.utils = utils$q;
  elliptic.rand = brorand.exports;
  elliptic.curve = curve;
  elliptic.curves = curves$2; // Protocols

  elliptic.ec = ec$1;
  elliptic.eddsa = eddsa;
})(elliptic$2);

var EC = elliptic$2.ec;
var ec = new EC('secp256k1');
var ecparams = ec.curve; // Hack, we can not use bn.js@5, while elliptic uses bn.js@4
// See https://github.com/indutny/elliptic/issues/191#issuecomment-569888758

var BN$4 = ecparams.n.constructor;

function loadCompressedPublicKey(first, xbuf) {
  var x = new BN$4(xbuf); // overflow

  if (x.cmp(ecparams.p) >= 0) return null;
  x = x.toRed(ecparams.red); // compute corresponding Y

  var y = x.redSqr().redIMul(x).redIAdd(ecparams.b).redSqrt();
  if (first === 0x03 !== y.isOdd()) y = y.redNeg();
  return ec.keyPair({
    pub: {
      x: x,
      y: y
    }
  });
}

function loadUncompressedPublicKey(first, xbuf, ybuf) {
  var x = new BN$4(xbuf);
  var y = new BN$4(ybuf); // overflow

  if (x.cmp(ecparams.p) >= 0 || y.cmp(ecparams.p) >= 0) return null;
  x = x.toRed(ecparams.red);
  y = y.toRed(ecparams.red); // is odd flag

  if ((first === 0x06 || first === 0x07) && y.isOdd() !== (first === 0x07)) return null; // x*x*x + b = y*y

  var x3 = x.redSqr().redIMul(x);
  if (!y.redSqr().redISub(x3.redIAdd(ecparams.b)).isZero()) return null;
  return ec.keyPair({
    pub: {
      x: x,
      y: y
    }
  });
}

function loadPublicKey(pubkey) {
  // length should be validated in interface
  var first = pubkey[0];

  switch (first) {
    case 0x02:
    case 0x03:
      if (pubkey.length !== 33) return null;
      return loadCompressedPublicKey(first, pubkey.subarray(1, 33));

    case 0x04:
    case 0x06:
    case 0x07:
      if (pubkey.length !== 65) return null;
      return loadUncompressedPublicKey(first, pubkey.subarray(1, 33), pubkey.subarray(33, 65));

    default:
      return null;
  }
}

function savePublicKey(output, point) {
  var pubkey = point.encode(null, output.length === 33); // Loop should be faster because we do not need create extra Uint8Array
  // output.set(new Uint8Array(pubkey))

  for (var i = 0; i < output.length; ++i) {
    output[i] = pubkey[i];
  }
}

var elliptic$1 = {
  contextRandomize: function contextRandomize() {
    return 0;
  },
  privateKeyVerify: function privateKeyVerify(seckey) {
    var bn = new BN$4(seckey);
    return bn.cmp(ecparams.n) < 0 && !bn.isZero() ? 0 : 1;
  },
  privateKeyNegate: function privateKeyNegate(seckey) {
    var bn = new BN$4(seckey);
    var negate = ecparams.n.sub(bn).umod(ecparams.n).toArrayLike(Uint8Array, 'be', 32);
    seckey.set(negate);
    return 0;
  },
  privateKeyTweakAdd: function privateKeyTweakAdd(seckey, tweak) {
    var bn = new BN$4(tweak);
    if (bn.cmp(ecparams.n) >= 0) return 1;
    bn.iadd(new BN$4(seckey));
    if (bn.cmp(ecparams.n) >= 0) bn.isub(ecparams.n);
    if (bn.isZero()) return 1;
    var tweaked = bn.toArrayLike(Uint8Array, 'be', 32);
    seckey.set(tweaked);
    return 0;
  },
  privateKeyTweakMul: function privateKeyTweakMul(seckey, tweak) {
    var bn = new BN$4(tweak);
    if (bn.cmp(ecparams.n) >= 0 || bn.isZero()) return 1;
    bn.imul(new BN$4(seckey));
    if (bn.cmp(ecparams.n) >= 0) bn = bn.umod(ecparams.n);
    var tweaked = bn.toArrayLike(Uint8Array, 'be', 32);
    seckey.set(tweaked);
    return 0;
  },
  publicKeyVerify: function publicKeyVerify(pubkey) {
    var pair = loadPublicKey(pubkey);
    return pair === null ? 1 : 0;
  },
  publicKeyCreate: function publicKeyCreate(output, seckey) {
    var bn = new BN$4(seckey);
    if (bn.cmp(ecparams.n) >= 0 || bn.isZero()) return 1;
    var point = ec.keyFromPrivate(seckey).getPublic();
    savePublicKey(output, point);
    return 0;
  },
  publicKeyConvert: function publicKeyConvert(output, pubkey) {
    var pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    var point = pair.getPublic();
    savePublicKey(output, point);
    return 0;
  },
  publicKeyNegate: function publicKeyNegate(output, pubkey) {
    var pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    var point = pair.getPublic();
    point.y = point.y.redNeg();
    savePublicKey(output, point);
    return 0;
  },
  publicKeyCombine: function publicKeyCombine(output, pubkeys) {
    var pairs = new Array(pubkeys.length);

    for (var i = 0; i < pubkeys.length; ++i) {
      pairs[i] = loadPublicKey(pubkeys[i]);
      if (pairs[i] === null) return 1;
    }

    var point = pairs[0].getPublic();

    for (var _i = 1; _i < pairs.length; ++_i) {
      point = point.add(pairs[_i].pub);
    }

    if (point.isInfinity()) return 2;
    savePublicKey(output, point);
    return 0;
  },
  publicKeyTweakAdd: function publicKeyTweakAdd(output, pubkey, tweak) {
    var pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    tweak = new BN$4(tweak);
    if (tweak.cmp(ecparams.n) >= 0) return 2;
    var point = pair.getPublic().add(ecparams.g.mul(tweak));
    if (point.isInfinity()) return 2;
    savePublicKey(output, point);
    return 0;
  },
  publicKeyTweakMul: function publicKeyTweakMul(output, pubkey, tweak) {
    var pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    tweak = new BN$4(tweak);
    if (tweak.cmp(ecparams.n) >= 0 || tweak.isZero()) return 2;
    var point = pair.getPublic().mul(tweak);
    savePublicKey(output, point);
    return 0;
  },
  signatureNormalize: function signatureNormalize(sig) {
    var r = new BN$4(sig.subarray(0, 32));
    var s = new BN$4(sig.subarray(32, 64));
    if (r.cmp(ecparams.n) >= 0 || s.cmp(ecparams.n) >= 0) return 1;

    if (s.cmp(ec.nh) === 1) {
      sig.set(ecparams.n.sub(s).toArrayLike(Uint8Array, 'be', 32), 32);
    }

    return 0;
  },
  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
  // Adapted for Uint8Array instead Buffer
  signatureExport: function signatureExport(obj, sig) {
    var sigR = sig.subarray(0, 32);
    var sigS = sig.subarray(32, 64);
    if (new BN$4(sigR).cmp(ecparams.n) >= 0) return 1;
    if (new BN$4(sigS).cmp(ecparams.n) >= 0) return 1;
    var output = obj.output; // Prepare R

    var r = output.subarray(4, 4 + 33);
    r[0] = 0x00;
    r.set(sigR, 1);
    var lenR = 33;
    var posR = 0;

    for (; lenR > 1 && r[posR] === 0x00 && !(r[posR + 1] & 0x80); --lenR, ++posR) {
    }

    r = r.subarray(posR);
    if (r[0] & 0x80) return 1;
    if (lenR > 1 && r[0] === 0x00 && !(r[1] & 0x80)) return 1; // Prepare S

    var s = output.subarray(6 + 33, 6 + 33 + 33);
    s[0] = 0x00;
    s.set(sigS, 1);
    var lenS = 33;
    var posS = 0;

    for (; lenS > 1 && s[posS] === 0x00 && !(s[posS + 1] & 0x80); --lenS, ++posS) {
    }

    s = s.subarray(posS);
    if (s[0] & 0x80) return 1;
    if (lenS > 1 && s[0] === 0x00 && !(s[1] & 0x80)) return 1; // Set output length for return

    obj.outputlen = 6 + lenR + lenS; // Output in specified format
    // 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]

    output[0] = 0x30;
    output[1] = obj.outputlen - 2;
    output[2] = 0x02;
    output[3] = r.length;
    output.set(r, 4);
    output[4 + lenR] = 0x02;
    output[5 + lenR] = s.length;
    output.set(s, 6 + lenR);
    return 0;
  },
  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
  // Adapted for Uint8Array instead Buffer
  signatureImport: function signatureImport(output, sig) {
    if (sig.length < 8) return 1;
    if (sig.length > 72) return 1;
    if (sig[0] !== 0x30) return 1;
    if (sig[1] !== sig.length - 2) return 1;
    if (sig[2] !== 0x02) return 1;
    var lenR = sig[3];
    if (lenR === 0) return 1;
    if (5 + lenR >= sig.length) return 1;
    if (sig[4 + lenR] !== 0x02) return 1;
    var lenS = sig[5 + lenR];
    if (lenS === 0) return 1;
    if (6 + lenR + lenS !== sig.length) return 1;
    if (sig[4] & 0x80) return 1;
    if (lenR > 1 && sig[4] === 0x00 && !(sig[5] & 0x80)) return 1;
    if (sig[lenR + 6] & 0x80) return 1;
    if (lenS > 1 && sig[lenR + 6] === 0x00 && !(sig[lenR + 7] & 0x80)) return 1;
    var sigR = sig.subarray(4, 4 + lenR);
    if (sigR.length === 33 && sigR[0] === 0x00) sigR = sigR.subarray(1);
    if (sigR.length > 32) return 1;
    var sigS = sig.subarray(6 + lenR);
    if (sigS.length === 33 && sigS[0] === 0x00) sigS = sigS.slice(1);
    if (sigS.length > 32) throw new Error('S length is too long');
    var r = new BN$4(sigR);
    if (r.cmp(ecparams.n) >= 0) r = new BN$4(0);
    var s = new BN$4(sig.subarray(6 + lenR));
    if (s.cmp(ecparams.n) >= 0) s = new BN$4(0);
    output.set(r.toArrayLike(Uint8Array, 'be', 32), 0);
    output.set(s.toArrayLike(Uint8Array, 'be', 32), 32);
    return 0;
  },
  ecdsaSign: function ecdsaSign(obj, message, seckey, data, noncefn) {
    if (noncefn) {
      var _noncefn = noncefn;

      noncefn = function noncefn(counter) {
        var nonce = _noncefn(message, seckey, null, data, counter);

        var isValid = nonce instanceof Uint8Array && nonce.length === 32;
        if (!isValid) throw new Error('This is the way');
        return new BN$4(nonce);
      };
    }

    var d = new BN$4(seckey);
    if (d.cmp(ecparams.n) >= 0 || d.isZero()) return 1;
    var sig;

    try {
      sig = ec.sign(message, seckey, {
        canonical: true,
        k: noncefn,
        pers: data
      });
    } catch (err) {
      return 1;
    }

    obj.signature.set(sig.r.toArrayLike(Uint8Array, 'be', 32), 0);
    obj.signature.set(sig.s.toArrayLike(Uint8Array, 'be', 32), 32);
    obj.recid = sig.recoveryParam;
    return 0;
  },
  ecdsaVerify: function ecdsaVerify(sig, msg32, pubkey) {
    var sigObj = {
      r: sig.subarray(0, 32),
      s: sig.subarray(32, 64)
    };
    var sigr = new BN$4(sigObj.r);
    var sigs = new BN$4(sigObj.s);
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0) return 1;
    if (sigs.cmp(ec.nh) === 1 || sigr.isZero() || sigs.isZero()) return 3;
    var pair = loadPublicKey(pubkey);
    if (pair === null) return 2;
    var point = pair.getPublic();
    var isValid = ec.verify(msg32, sigObj, point);
    return isValid ? 0 : 3;
  },
  ecdsaRecover: function ecdsaRecover(output, sig, recid, msg32) {
    var sigObj = {
      r: sig.slice(0, 32),
      s: sig.slice(32, 64)
    };
    var sigr = new BN$4(sigObj.r);
    var sigs = new BN$4(sigObj.s);
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0) return 1;
    if (sigr.isZero() || sigs.isZero()) return 2; // Can throw `throw new Error('Unable to find sencond key candinate');`

    var point;

    try {
      point = ec.recoverPubKey(msg32, sigObj, recid);
    } catch (err) {
      return 2;
    }

    savePublicKey(output, point);
    return 0;
  },
  ecdh: function ecdh(output, pubkey, seckey, data, hashfn, xbuf, ybuf) {
    var pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    var scalar = new BN$4(seckey);
    if (scalar.cmp(ecparams.n) >= 0 || scalar.isZero()) return 2;
    var point = pair.getPublic().mul(scalar);

    if (hashfn === undefined) {
      var _data = point.encode(null, true);

      var sha256 = ec.hash().update(_data).digest();

      for (var i = 0; i < 32; ++i) {
        output[i] = sha256[i];
      }
    } else {
      if (!xbuf) xbuf = new Uint8Array(32);
      var x = point.getX().toArray('be', 32);

      for (var _i2 = 0; _i2 < 32; ++_i2) {
        xbuf[_i2] = x[_i2];
      }

      if (!ybuf) ybuf = new Uint8Array(32);
      var y = point.getY().toArray('be', 32);

      for (var _i3 = 0; _i3 < 32; ++_i3) {
        ybuf[_i3] = y[_i3];
      }

      var hash = hashfn(xbuf, ybuf, data);
      var isValid = hash instanceof Uint8Array && hash.length === output.length;
      if (!isValid) return 2;
      output.set(hash);
    }

    return 0;
  }
};

var elliptic = lib$1(elliptic$1);

var random = {};

var randombytes$2 = require$$0$2.randomBytes;

Object.defineProperty(random, "__esModule", {
  value: true
});
var randombytes$1 = randombytes$2;

function getRandomBytes(bytes) {
  return new Promise(function (resolve, reject) {
    randombytes$1(bytes, function (err, resp) {
      if (err) {
        reject(err);
        return;
      }

      resolve(resp);
    });
  });
}

random.getRandomBytes = getRandomBytes;

function getRandomBytesSync(bytes) {
  return randombytes$1(bytes);
}

random.getRandomBytesSync = getRandomBytesSync;

(function (exports) {

  var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function (thisArg, _arguments, P, generator) {
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
  };

  var __generator = commonjsGlobal && commonjsGlobal.__generator || function (thisArg, body) {
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

      while (_) {
        try {
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
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  };

  function __export(m) {
    for (var p in m) {
      if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
  }

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var secp256k1_1 = elliptic;
  var random_1 = random;
  var SECP256K1_PRIVATE_KEY_SIZE = 32;

  function createPrivateKey() {
    return __awaiter(this, void 0, void 0, function () {
      var pk;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , random_1.getRandomBytes(SECP256K1_PRIVATE_KEY_SIZE)];

          case 1:
            pk = _a.sent();

            if (secp256k1_1.privateKeyVerify(pk)) {
              return [2
              /*return*/
              , pk];
            }

            return [3
            /*break*/
            , 0];

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  exports.createPrivateKey = createPrivateKey;

  function createPrivateKeySync() {
    while (true) {
      var pk = random_1.getRandomBytesSync(SECP256K1_PRIVATE_KEY_SIZE);

      if (secp256k1_1.privateKeyVerify(pk)) {
        return pk;
      }
    }
  }

  exports.createPrivateKeySync = createPrivateKeySync;

  __export(elliptic);
})(secp256k1);

var internal = {};

/*
The MIT License

Copyright (c) 2016 Nick Dodson. nickdodson.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE
 */


Object.defineProperty(internal, "__esModule", {
  value: true
});
internal.isHexString = internal.getKeys = internal.fromAscii = internal.fromUtf8 = internal.toAscii = internal.arrayContainsArray = internal.getBinarySize = internal.padToEven = internal.stripHexPrefix = internal.isHexPrefixed = void 0;
/**
 * Returns a `Boolean` on whether or not the a `String` starts with '0x'
 * @param str the string input value
 * @return a boolean if it is or is not hex prefixed
 * @throws if the str input is not a string
 */

function isHexPrefixed(str) {
  if (typeof str !== 'string') {
    throw new Error("[isHexPrefixed] input must be type 'string', received type " + _typeof(str));
  }

  return str[0] === '0' && str[1] === 'x';
}

internal.isHexPrefixed = isHexPrefixed;
/**
 * Removes '0x' from a given `String` if present
 * @param str the string value
 * @returns the string without 0x prefix
 */

var stripHexPrefix$1 = function stripHexPrefix(str) {
  if (typeof str !== 'string') throw new Error("[stripHexPrefix] input must be type 'string', received " + _typeof(str));
  return isHexPrefixed(str) ? str.slice(2) : str;
};

internal.stripHexPrefix = stripHexPrefix$1;
/**
 * Pads a `String` to have an even length
 * @param value
 * @return output
 */

function padToEven(value) {
  var a = value;

  if (typeof a !== 'string') {
    throw new Error("[padToEven] value must be type 'string', received " + _typeof(a));
  }

  if (a.length % 2) a = "0" + a;
  return a;
}

internal.padToEven = padToEven;
/**
 * Get the binary size of a string
 * @param str
 * @returns the number of bytes contained within the string
 */

function getBinarySize(str) {
  if (typeof str !== 'string') {
    throw new Error("[getBinarySize] method requires input type 'string', recieved " + _typeof(str));
  }

  return Buffer.byteLength(str, 'utf8');
}

internal.getBinarySize = getBinarySize;
/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param superset
 * @param subset
 *
 */

function arrayContainsArray(superset, subset, some) {
  if (Array.isArray(superset) !== true) {
    throw new Error("[arrayContainsArray] method requires input 'superset' to be an array, got type '" + _typeof(superset) + "'");
  }

  if (Array.isArray(subset) !== true) {
    throw new Error("[arrayContainsArray] method requires input 'subset' to be an array, got type '" + _typeof(subset) + "'");
  }

  return subset[some ? 'some' : 'every'](function (value) {
    return superset.indexOf(value) >= 0;
  });
}

internal.arrayContainsArray = arrayContainsArray;
/**
 * Should be called to get ascii from its hex representation
 *
 * @param string in hex
 * @returns ascii string representation of hex value
 */

function toAscii(hex) {
  var str = '';
  var i = 0;
  var l = hex.length;
  if (hex.substring(0, 2) === '0x') i = 2;

  for (; i < l; i += 2) {
    var code = parseInt(hex.substr(i, 2), 16);
    str += String.fromCharCode(code);
  }

  return str;
}

internal.toAscii = toAscii;
/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @param string
 * @param optional padding
 * @returns hex representation of input string
 */

function fromUtf8(stringValue) {
  var str = Buffer.from(stringValue, 'utf8');
  return "0x" + padToEven(str.toString('hex')).replace(/^0+|0+$/g, '');
}

internal.fromUtf8 = fromUtf8;
/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @param  string
 * @param  optional padding
 * @returns  hex representation of input string
 */

function fromAscii(stringValue) {
  var hex = '';

  for (var i = 0; i < stringValue.length; i++) {
    var code = stringValue.charCodeAt(i);
    var n = code.toString(16);
    hex += n.length < 2 ? "0" + n : n;
  }

  return "0x" + hex;
}

internal.fromAscii = fromAscii;
/**
 * Returns the keys from an array of objects.
 * @example
 * ```js
 * getKeys([{a: '1', b: '2'}, {a: '3', b: '4'}], 'a') => ['1', '3']
 *````
 * @param  params
 * @param  key
 * @param  allowEmpty
 * @returns output just a simple array of output keys
 */

function getKeys(params, key, allowEmpty) {
  if (!Array.isArray(params)) {
    throw new Error("[getKeys] method expects input 'params' to be an array, got " + _typeof(params));
  }

  if (typeof key !== 'string') {
    throw new Error("[getKeys] method expects input 'key' to be type 'string', got " + _typeof(params));
  }

  var result = [];

  for (var i = 0; i < params.length; i++) {
    var value = params[i][key];

    if (allowEmpty && !value) {
      value = '';
    } else if (typeof value !== 'string') {
      throw new Error("invalid abi - expected type 'string', received " + _typeof(value));
    }

    result.push(value);
  }

  return result;
}

internal.getKeys = getKeys;
/**
 * Is the string a hex string.
 *
 * @param  value
 * @param  length
 * @returns  output the string is a hex string
 */

function isHexString(value, length) {
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) return false;
  if (length && value.length !== 2 + 2 * length) return false;
  return true;
}

internal.isHexString = isHexString;

var bytes = {};

var helpers = {};

Object.defineProperty(helpers, "__esModule", {
  value: true
});
helpers.assertIsString = helpers.assertIsArray = helpers.assertIsBuffer = helpers.assertIsHexString = void 0;
var internal_1$1 = internal;
/**
 * Throws if a string is not hex prefixed
 * @param {string} input string to check hex prefix of
 */

var assertIsHexString = function assertIsHexString(input) {
  if (!(0, internal_1$1.isHexString)(input)) {
    var msg = "This method only supports 0x-prefixed hex strings but input was: " + input;
    throw new Error(msg);
  }
};

helpers.assertIsHexString = assertIsHexString;
/**
 * Throws if input is not a buffer
 * @param {Buffer} input value to check
 */

var assertIsBuffer = function assertIsBuffer(input) {
  if (!Buffer.isBuffer(input)) {
    var msg = "This method only supports Buffer but input was: " + input;
    throw new Error(msg);
  }
};

helpers.assertIsBuffer = assertIsBuffer;
/**
 * Throws if input is not an array
 * @param {number[]} input value to check
 */

var assertIsArray = function assertIsArray(input) {
  if (!Array.isArray(input)) {
    var msg = "This method only supports number arrays but input was: " + input;
    throw new Error(msg);
  }
};

helpers.assertIsArray = assertIsArray;
/**
 * Throws if input is not a string
 * @param {string} input value to check
 */

var assertIsString = function assertIsString(input) {
  if (typeof input !== 'string') {
    var msg = "This method only supports strings but input was: " + input;
    throw new Error(msg);
  }
};

helpers.assertIsString = assertIsString;

(function (exports) {

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.baToJSON = exports.toUtf8 = exports.addHexPrefix = exports.toUnsigned = exports.fromSigned = exports.bufferToHex = exports.bufferToInt = exports.toBuffer = exports.unpadHexString = exports.unpadArray = exports.unpadBuffer = exports.setLengthRight = exports.setLengthLeft = exports.zeros = exports.intToBuffer = exports.intToHex = void 0;

  var bn_js_1 = __importDefault(bn$1.exports);

  var internal_1 = internal;
  var helpers_1 = helpers;
  /**
   * Converts a `Number` into a hex `String`
   * @param {Number} i
   * @return {String}
   */

  var intToHex = function intToHex(i) {
    if (!Number.isSafeInteger(i) || i < 0) {
      throw new Error("Received an invalid integer type: " + i);
    }

    return "0x" + i.toString(16);
  };

  exports.intToHex = intToHex;
  /**
   * Converts an `Number` to a `Buffer`
   * @param {Number} i
   * @return {Buffer}
   */

  var intToBuffer = function intToBuffer(i) {
    var hex = (0, exports.intToHex)(i);
    return Buffer.from((0, internal_1.padToEven)(hex.slice(2)), 'hex');
  };

  exports.intToBuffer = intToBuffer;
  /**
   * Returns a buffer filled with 0s.
   * @param bytes the number of bytes the buffer should be
   */

  var zeros = function zeros(bytes) {
    return Buffer.allocUnsafe(bytes).fill(0);
  };

  exports.zeros = zeros;
  /**
   * Pads a `Buffer` with zeros till it has `length` bytes.
   * Truncates the beginning or end of input if its length exceeds `length`.
   * @param msg the value to pad (Buffer)
   * @param length the number of bytes the output should be
   * @param right whether to start padding form the left or right
   * @return (Buffer)
   */

  var setLength = function setLength(msg, length, right) {
    var buf = (0, exports.zeros)(length);

    if (right) {
      if (msg.length < length) {
        msg.copy(buf);
        return buf;
      }

      return msg.slice(0, length);
    } else {
      if (msg.length < length) {
        msg.copy(buf, length - msg.length);
        return buf;
      }

      return msg.slice(-length);
    }
  };
  /**
   * Left Pads a `Buffer` with leading zeros till it has `length` bytes.
   * Or it truncates the beginning if it exceeds.
   * @param msg the value to pad (Buffer)
   * @param length the number of bytes the output should be
   * @return (Buffer)
   */


  var setLengthLeft = function setLengthLeft(msg, length) {
    (0, helpers_1.assertIsBuffer)(msg);
    return setLength(msg, length, false);
  };

  exports.setLengthLeft = setLengthLeft;
  /**
   * Right Pads a `Buffer` with trailing zeros till it has `length` bytes.
   * it truncates the end if it exceeds.
   * @param msg the value to pad (Buffer)
   * @param length the number of bytes the output should be
   * @return (Buffer)
   */

  var setLengthRight = function setLengthRight(msg, length) {
    (0, helpers_1.assertIsBuffer)(msg);
    return setLength(msg, length, true);
  };

  exports.setLengthRight = setLengthRight;
  /**
   * Trims leading zeros from a `Buffer`, `String` or `Number[]`.
   * @param a (Buffer|Array|String)
   * @return (Buffer|Array|String)
   */

  var stripZeros = function stripZeros(a) {
    var first = a[0];

    while (a.length > 0 && first.toString() === '0') {
      a = a.slice(1);
      first = a[0];
    }

    return a;
  };
  /**
   * Trims leading zeros from a `Buffer`.
   * @param a (Buffer)
   * @return (Buffer)
   */


  var unpadBuffer = function unpadBuffer(a) {
    (0, helpers_1.assertIsBuffer)(a);
    return stripZeros(a);
  };

  exports.unpadBuffer = unpadBuffer;
  /**
   * Trims leading zeros from an `Array` (of numbers).
   * @param a (number[])
   * @return (number[])
   */

  var unpadArray = function unpadArray(a) {
    (0, helpers_1.assertIsArray)(a);
    return stripZeros(a);
  };

  exports.unpadArray = unpadArray;
  /**
   * Trims leading zeros from a hex-prefixed `String`.
   * @param a (String)
   * @return (String)
   */

  var unpadHexString = function unpadHexString(a) {
    (0, helpers_1.assertIsHexString)(a);
    a = (0, internal_1.stripHexPrefix)(a);
    return stripZeros(a);
  };

  exports.unpadHexString = unpadHexString;
  /**
   * Attempts to turn a value into a `Buffer`.
   * Inputs supported: `Buffer`, `String` (hex-prefixed), `Number`, null/undefined, `BN` and other objects
   * with a `toArray()` or `toBuffer()` method.
   * @param v the value
   */

  var toBuffer = function toBuffer(v) {
    if (v === null || v === undefined) {
      return Buffer.allocUnsafe(0);
    }

    if (Buffer.isBuffer(v)) {
      return Buffer.from(v);
    }

    if (Array.isArray(v) || v instanceof Uint8Array) {
      return Buffer.from(v);
    }

    if (typeof v === 'string') {
      if (!(0, internal_1.isHexString)(v)) {
        throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + v);
      }

      return Buffer.from((0, internal_1.padToEven)((0, internal_1.stripHexPrefix)(v)), 'hex');
    }

    if (typeof v === 'number') {
      return (0, exports.intToBuffer)(v);
    }

    if (bn_js_1["default"].isBN(v)) {
      return v.toArrayLike(Buffer);
    }

    if (v.toArray) {
      // converts a BN to a Buffer
      return Buffer.from(v.toArray());
    }

    if (v.toBuffer) {
      return Buffer.from(v.toBuffer());
    }

    throw new Error('invalid type');
  };

  exports.toBuffer = toBuffer;
  /**
   * Converts a `Buffer` to a `Number`.
   * @param buf `Buffer` object to convert
   * @throws If the input number exceeds 53 bits.
   */

  var bufferToInt = function bufferToInt(buf) {
    return new bn_js_1["default"]((0, exports.toBuffer)(buf)).toNumber();
  };

  exports.bufferToInt = bufferToInt;
  /**
   * Converts a `Buffer` into a `0x`-prefixed hex `String`.
   * @param buf `Buffer` object to convert
   */

  var bufferToHex = function bufferToHex(buf) {
    buf = (0, exports.toBuffer)(buf);
    return '0x' + buf.toString('hex');
  };

  exports.bufferToHex = bufferToHex;
  /**
   * Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.
   * @param num Signed integer value
   */

  var fromSigned = function fromSigned(num) {
    return new bn_js_1["default"](num).fromTwos(256);
  };

  exports.fromSigned = fromSigned;
  /**
   * Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
   * @param num
   */

  var toUnsigned = function toUnsigned(num) {
    return Buffer.from(num.toTwos(256).toArray());
  };

  exports.toUnsigned = toUnsigned;
  /**
   * Adds "0x" to a given `String` if it does not already start with "0x".
   */

  var addHexPrefix = function addHexPrefix(str) {
    if (typeof str !== 'string') {
      return str;
    }

    return (0, internal_1.isHexPrefixed)(str) ? str : '0x' + str;
  };

  exports.addHexPrefix = addHexPrefix;
  /**
   * Returns the utf8 string representation from a hex string.
   *
   * Examples:
   *
   * Input 1: '657468657265756d000000000000000000000000000000000000000000000000'
   * Input 2: '657468657265756d'
   * Input 3: '000000000000000000000000000000000000000000000000657468657265756d'
   *
   * Output (all 3 input variants): 'ethereum'
   *
   * Note that this method is not intended to be used with hex strings
   * representing quantities in both big endian or little endian notation.
   *
   * @param string Hex string, should be `0x` prefixed
   * @return Utf8 string
   */

  var toUtf8 = function toUtf8(hex) {
    var zerosRegexp = /^(00)+|(00)+$/g;
    hex = (0, internal_1.stripHexPrefix)(hex);

    if (hex.length % 2 !== 0) {
      throw new Error('Invalid non-even hex string input for toUtf8() provided');
    }

    var bufferVal = Buffer.from(hex.replace(zerosRegexp, ''), 'hex');
    return bufferVal.toString('utf8');
  };

  exports.toUtf8 = toUtf8;
  /**
   * Converts a `Buffer` or `Array` to JSON.
   * @param ba (Buffer|Array)
   * @return (Array|String|null)
   */

  var baToJSON = function baToJSON(ba) {
    if (Buffer.isBuffer(ba)) {
      return "0x" + ba.toString('hex');
    } else if (ba instanceof Array) {
      var array = [];

      for (var i = 0; i < ba.length; i++) {
        array.push((0, exports.baToJSON)(ba[i]));
      }

      return array;
    }
  };

  exports.baToJSON = baToJSON;
})(bytes);

var hash = {};

var keccak$3 = {};

var hashUtils = {};

Object.defineProperty(hashUtils, "__esModule", {
  value: true
});

function createHashFunction(hashConstructor) {
  return function (msg) {
    var hash = hashConstructor();
    hash.update(msg);
    return Buffer.from(hash.digest());
  };
}

hashUtils.createHashFunction = createHashFunction;

var keccak$2 = {exports: {}};

var readable = {exports: {}};

var stream = require$$0$3;

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var _require$2 = require$$0$1,
    Buffer$4 = _require$2.Buffer;
var _require2 = require$$1,
    inspect = _require2.inspect;
var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer$4.prototype.copy.call(src, target, offset);
}

var buffer_list = /*#__PURE__*/function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer$4.alloc(0);
      var ret = Buffer$4.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer$4.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread$1({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy$2(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

var destroy_1 = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy$2
};

var errors = {};

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError = /*#__PURE__*/function (_Base) {
    _inherits(NodeError, _Base);

    var _super = _createSuper(NodeError);

    function NodeError(arg1, arg2, arg3) {
      _classCallCheck$1(this, NodeError);

      return _super.call(this, getMessage(arg1, arg2, arg3));
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(_typeof(actual));
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
errors.codes = codes;

var ERR_INVALID_OPT_VALUE = errors.codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark$2(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

var state = {
  getHighWaterMark: getHighWaterMark$2
};

/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */

var node = require$$1.deprecate;

var _stream_writable = Writable$1;
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex$3;
/*</replacement>*/

Writable$1.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: node
};
/*</replacement>*/

/*<replacement>*/

var Stream$1 = stream;
/*</replacement>*/

var Buffer$3 = require$$0$1.Buffer;

var OurUint8Array$1 = commonjsGlobal.Uint8Array || function () {};

function _uint8ArrayToBuffer$1(chunk) {
  return Buffer$3.from(chunk);
}

function _isUint8Array$1(obj) {
  return Buffer$3.isBuffer(obj) || obj instanceof OurUint8Array$1;
}

var destroyImpl$1 = destroy_1;
var _require$1 = state,
    getHighWaterMark$1 = _require$1.getHighWaterMark;
var _require$codes$3 = errors.codes,
    ERR_INVALID_ARG_TYPE$2 = _require$codes$3.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED$2 = _require$codes$3.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK$1 = _require$codes$3.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes$3.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED$1 = _require$codes$3.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes$3.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes$3.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes$3.ERR_UNKNOWN_ENCODING;
var errorOrDestroy$1 = destroyImpl$1.errorOrDestroy;
inherits$4.exports(Writable$1, Stream$1);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex$3 = Duplex$3 || _stream_duplex;
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex$3; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark$1(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable$1, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable$1) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable$1(options) {
  Duplex$3 = Duplex$3 || _stream_duplex; // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex$3;
  if (!isDuplex && !realHasInstance.call(Writable$1, this)) return new Writable$1(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options["final"] === 'function') this._final = options["final"];
  }

  Stream$1.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable$1.prototype.pipe = function () {
  errorOrDestroy$1(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy$1(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE$2('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy$1(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable$1.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array$1(chunk);

  if (isBuf && !Buffer$3.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer$1(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable$1.prototype.cork = function () {
  this._writableState.corked++;
};

Writable$1.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable$1.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable$1.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer$3.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable$1.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED$1('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy$1(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy$1(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK$1();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable$1.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED$2('_write()'));
};

Writable$1.prototype._writev = null;

Writable$1.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable$1.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy$1(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish$1(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish$1(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable$1.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable$1.prototype.destroy = destroyImpl$1.destroy;
Writable$1.prototype._undestroy = destroyImpl$1.undestroy;

Writable$1.prototype._destroy = function (err, cb) {
  cb(err);
};

/*<replacement>*/


var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


var _stream_duplex = Duplex$2;
var Readable$1 = _stream_readable;
var Writable = _stream_writable;
inherits$4.exports(Duplex$2, Readable$1);
{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex$2.prototype[method]) Duplex$2.prototype[method] = Writable.prototype[method];
  }
}

function Duplex$2(options) {
  if (!(this instanceof Duplex$2)) return new Duplex$2(options);
  Readable$1.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex$2.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex$2.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex$2.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex$2.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

var string_decoder = {};

var safeBuffer = {exports: {}};

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

(function (module, exports) {
  /* eslint-disable node/no-deprecated-api */
  var buffer = require$$0$1;
  var Buffer = buffer.Buffer; // alternative to using Object.keys for old browsers

  function copyProps(src, dst) {
    for (var key in src) {
      dst[key] = src[key];
    }
  }

  if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
  } else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
  }

  function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
  }

  SafeBuffer.prototype = Object.create(Buffer.prototype); // Copy static methods from Buffer

  copyProps(Buffer, SafeBuffer);

  SafeBuffer.from = function (arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
      throw new TypeError('Argument must not be a number');
    }

    return Buffer(arg, encodingOrOffset, length);
  };

  SafeBuffer.alloc = function (size, fill, encoding) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number');
    }

    var buf = Buffer(size);

    if (fill !== undefined) {
      if (typeof encoding === 'string') {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
    } else {
      buf.fill(0);
    }

    return buf;
  };

  SafeBuffer.allocUnsafe = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number');
    }

    return Buffer(size);
  };

  SafeBuffer.allocUnsafeSlow = function (size) {
    if (typeof size !== 'number') {
      throw new TypeError('Argument must be a number');
    }

    return buffer.SlowBuffer(size);
  };
})(safeBuffer, safeBuffer.exports);

/*<replacement>*/


var Buffer$2 = safeBuffer.exports.Buffer;
/*</replacement>*/

var isEncoding = Buffer$2.isEncoding || function (encoding) {
  encoding = '' + encoding;

  switch (encoding && encoding.toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
    case 'raw':
      return true;

    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;

  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';

      case 'latin1':
      case 'binary':
        return 'latin1';

      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;

      default:
        if (retried) return; // undefined

        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
}
// modules monkey-patch it to support additional encodings

function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);

  if (typeof nenc !== 'string' && (Buffer$2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
} // StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.


string_decoder.StringDecoder = StringDecoder$1;

function StringDecoder$1(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;

  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;

    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;

    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;

    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }

  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer$2.allocUnsafe(nb);
}

StringDecoder$1.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;

  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }

  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder$1.prototype.end = utf8End; // Returns only complete characters in a Buffer

StringDecoder$1.prototype.text = utf8Text; // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer

StringDecoder$1.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }

  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
}; // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.


function utf8CheckByte(_byte) {
  if (_byte <= 0x7F) return 0;else if (_byte >> 5 === 0x06) return 2;else if (_byte >> 4 === 0x0E) return 3;else if (_byte >> 3 === 0x1E) return 4;
  return _byte >> 6 === 0x02 ? -1 : -2;
} // Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.


function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);

  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }

  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);

  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }

  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);

  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }

    return nb;
  }

  return 0;
} // Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.


function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return "\uFFFD";
  }

  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return "\uFFFD";
    }

    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return "\uFFFD";
      }
    }
  }
} // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.


function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf);
  if (r !== undefined) return r;

  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }

  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
} // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.


function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
} // For UTF-8, a replacement character is added when ending on a partial
// character.


function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + "\uFFFD";
  return r;
} // UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.


function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);

    if (r) {
      var c = r.charCodeAt(r.length - 1);

      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }

    return r;
  }

  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
} // For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.


function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';

  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }

  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;

  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }

  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
} // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)


function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

var ERR_STREAM_PREMATURE_CLOSE = errors.codes.ERR_STREAM_PREMATURE_CLOSE;

function once$1(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop$1() {}

function isRequest$1(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos$1(stream, opts, callback) {
  if (typeof opts === 'function') return eos$1(stream, null, opts);
  if (!opts) opts = {};
  callback = once$1(callback || noop$1);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest$1(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

var endOfStream = eos$1;

var _Object$setPrototypeO;

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var finished = endOfStream;
var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this; // if we have detected an error in the meanwhile
    // reject straight away


    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty$1(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty$1(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this; // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to


  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator$1 = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty$1(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty$1(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty$1(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty$1(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty$1(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty$1(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

var async_iterator = createReadableStreamAsyncIterator$1;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ERR_INVALID_ARG_TYPE$1 = errors.codes.ERR_INVALID_ARG_TYPE;

function from$1(Readable, iterable, opts) {
  var iterator;

  if (iterable && typeof iterable.next === 'function') {
    iterator = iterable;
  } else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();else throw new ERR_INVALID_ARG_TYPE$1('iterable', ['Iterable'], iterable);

  var readable = new Readable(_objectSpread({
    objectMode: true
  }, opts)); // Reading boolean to protect against _read
  // being called before last iteration completion.

  var reading = false;

  readable._read = function () {
    if (!reading) {
      reading = true;
      next();
    }
  };

  function next() {
    return _next2.apply(this, arguments);
  }

  function _next2() {
    _next2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref, value, done;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return iterator.next();

            case 3:
              _ref = _context.sent;
              value = _ref.value;
              done = _ref.done;

              if (!done) {
                _context.next = 10;
                break;
              }

              readable.push(null);
              _context.next = 19;
              break;

            case 10:
              _context.t0 = readable;
              _context.next = 13;
              return value;

            case 13:
              _context.t1 = _context.sent;

              if (!_context.t0.push.call(_context.t0, _context.t1)) {
                _context.next = 18;
                break;
              }

              next();
              _context.next = 19;
              break;

            case 18:
              reading = false;

            case 19:
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t2 = _context["catch"](0);
              readable.destroy(_context.t2);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 21]]);
    }));
    return _next2.apply(this, arguments);
  }

  return readable;
}

var from_1 = from$1;

var _stream_readable = Readable;
/*<replacement>*/

var Duplex$1;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

require$$0$4.EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = stream;
/*</replacement>*/

var Buffer$1 = require$$0$1.Buffer;

var OurUint8Array = commonjsGlobal.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer$1.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer$1.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = require$$1;
var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = buffer_list;
var destroyImpl = destroy_1;
var _require = state,
    getHighWaterMark = _require.getHighWaterMark;
var _require$codes$2 = errors.codes,
    ERR_INVALID_ARG_TYPE = _require$codes$2.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes$2.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED$1 = _require$codes$2.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes$2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.

var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
inherits$4.exports(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex$1 = Duplex$1 || _stream_duplex;
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex$1; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = string_decoder.StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex$1 = Duplex$1 || _stream_duplex;
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex$1;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer$1.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer$1.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = string_decoder.StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED$1('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = async_iterator;
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = from_1;
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}

var _stream_transform = Transform$3;
var _require$codes$1 = errors.codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = _stream_duplex;
inherits$4.exports(Transform$3, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform$3(options) {
  if (!(this instanceof Transform$3)) return new Transform$3(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform$3.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform$3.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform$3.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform$3.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform$3.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}

var _stream_passthrough = PassThrough;
var Transform$2 = _stream_transform;
inherits$4.exports(PassThrough, Transform$2);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform$2.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = errors.codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = endOfStream;
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

var pipeline_1 = pipeline;

(function (module, exports) {
  var Stream = require$$0$3;

  if (process.env.READABLE_STREAM === 'disable' && Stream) {
    module.exports = Stream.Readable;
    Object.assign(module.exports, Stream);
    module.exports.Stream = Stream;
  } else {
    exports = module.exports = _stream_readable;
    exports.Stream = Stream || exports;
    exports.Readable = exports;
    exports.Writable = _stream_writable;
    exports.Duplex = _stream_duplex;
    exports.Transform = _stream_transform;
    exports.PassThrough = _stream_passthrough;
    exports.finished = endOfStream;
    exports.pipeline = pipeline_1;
  }
})(readable, readable.exports);

var Transform$1 = readable.exports.Transform;

var keccak$1 = function keccak(KeccakState) {
  return /*#__PURE__*/function (_Transform) {
    _inherits(Keccak, _Transform);

    var _super = _createSuper(Keccak);

    function Keccak(rate, capacity, delimitedSuffix, hashBitLength, options) {
      var _this;

      _classCallCheck$1(this, Keccak);

      _this = _super.call(this, options);
      _this._rate = rate;
      _this._capacity = capacity;
      _this._delimitedSuffix = delimitedSuffix;
      _this._hashBitLength = hashBitLength;
      _this._options = options;
      _this._state = new KeccakState();

      _this._state.initialize(rate, capacity);

      _this._finalized = false;
      return _this;
    }

    _createClass$1(Keccak, [{
      key: "_transform",
      value: function _transform(chunk, encoding, callback) {
        var error = null;

        try {
          this.update(chunk, encoding);
        } catch (err) {
          error = err;
        }

        callback(error);
      }
    }, {
      key: "_flush",
      value: function _flush(callback) {
        var error = null;

        try {
          this.push(this.digest());
        } catch (err) {
          error = err;
        }

        callback(error);
      }
    }, {
      key: "update",
      value: function update(data, encoding) {
        if (!Buffer.isBuffer(data) && typeof data !== 'string') throw new TypeError('Data must be a string or a buffer');
        if (this._finalized) throw new Error('Digest already called');
        if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);

        this._state.absorb(data);

        return this;
      }
    }, {
      key: "digest",
      value: function digest(encoding) {
        if (this._finalized) throw new Error('Digest already called');
        this._finalized = true;
        if (this._delimitedSuffix) this._state.absorbLastFewBits(this._delimitedSuffix);

        var digest = this._state.squeeze(this._hashBitLength / 8);

        if (encoding !== undefined) digest = digest.toString(encoding);

        this._resetState();

        return digest;
      } // remove result from memory

    }, {
      key: "_resetState",
      value: function _resetState() {
        this._state.initialize(this._rate, this._capacity);

        return this;
      } // because sometimes we need hash right now and little later

    }, {
      key: "_clone",
      value: function _clone() {
        var clone = new Keccak(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);

        this._state.copy(clone._state);

        clone._finalized = this._finalized;
        return clone;
      }
    }]);

    return Keccak;
  }(Transform$1);
};

var Transform = readable.exports.Transform;

var shake = function shake(KeccakState) {
  return /*#__PURE__*/function (_Transform) {
    _inherits(Shake, _Transform);

    var _super = _createSuper(Shake);

    function Shake(rate, capacity, delimitedSuffix, options) {
      var _this;

      _classCallCheck$1(this, Shake);

      _this = _super.call(this, options);
      _this._rate = rate;
      _this._capacity = capacity;
      _this._delimitedSuffix = delimitedSuffix;
      _this._options = options;
      _this._state = new KeccakState();

      _this._state.initialize(rate, capacity);

      _this._finalized = false;
      return _this;
    }

    _createClass$1(Shake, [{
      key: "_transform",
      value: function _transform(chunk, encoding, callback) {
        var error = null;

        try {
          this.update(chunk, encoding);
        } catch (err) {
          error = err;
        }

        callback(error);
      }
    }, {
      key: "_flush",
      value: function _flush() {}
    }, {
      key: "_read",
      value: function _read(size) {
        this.push(this.squeeze(size));
      }
    }, {
      key: "update",
      value: function update(data, encoding) {
        if (!Buffer.isBuffer(data) && typeof data !== 'string') throw new TypeError('Data must be a string or a buffer');
        if (this._finalized) throw new Error('Squeeze already called');
        if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);

        this._state.absorb(data);

        return this;
      }
    }, {
      key: "squeeze",
      value: function squeeze(dataByteLength, encoding) {
        if (!this._finalized) {
          this._finalized = true;

          this._state.absorbLastFewBits(this._delimitedSuffix);
        }

        var data = this._state.squeeze(dataByteLength);

        if (encoding !== undefined) data = data.toString(encoding);
        return data;
      }
    }, {
      key: "_resetState",
      value: function _resetState() {
        this._state.initialize(this._rate, this._capacity);

        return this;
      }
    }, {
      key: "_clone",
      value: function _clone() {
        var clone = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options);

        this._state.copy(clone._state);

        clone._finalized = this._finalized;
        return clone;
      }
    }]);

    return Shake;
  }(Transform);
};

var createKeccak = keccak$1;
var createShake = shake;

var api = function api(KeccakState) {
  var Keccak = createKeccak(KeccakState);
  var Shake = createShake(KeccakState);
  return function (algorithm, options) {
    var hash = typeof algorithm === 'string' ? algorithm.toLowerCase() : algorithm;

    switch (hash) {
      case 'keccak224':
        return new Keccak(1152, 448, null, 224, options);

      case 'keccak256':
        return new Keccak(1088, 512, null, 256, options);

      case 'keccak384':
        return new Keccak(832, 768, null, 384, options);

      case 'keccak512':
        return new Keccak(576, 1024, null, 512, options);

      case 'sha3-224':
        return new Keccak(1152, 448, 0x06, 224, options);

      case 'sha3-256':
        return new Keccak(1088, 512, 0x06, 256, options);

      case 'sha3-384':
        return new Keccak(832, 768, 0x06, 384, options);

      case 'sha3-512':
        return new Keccak(576, 1024, 0x06, 512, options);

      case 'shake128':
        return new Shake(1344, 256, 0x1f, options);

      case 'shake256':
        return new Shake(1088, 512, 0x1f, options);

      default:
        throw new Error('Invald algorithm: ' + algorithm);
    }
  };
};

var keccakStateUnroll = {};

var P1600_ROUND_CONSTANTS = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];

keccakStateUnroll.p1600 = function (s) {
  for (var round = 0; round < 24; ++round) {
    // theta
    var lo0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
    var hi0 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
    var lo1 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
    var hi1 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
    var lo2 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
    var hi2 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
    var lo3 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
    var hi3 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
    var lo4 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
    var hi4 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
    var lo = lo4 ^ (lo1 << 1 | hi1 >>> 31);
    var hi = hi4 ^ (hi1 << 1 | lo1 >>> 31);
    var t1slo0 = s[0] ^ lo;
    var t1shi0 = s[1] ^ hi;
    var t1slo5 = s[10] ^ lo;
    var t1shi5 = s[11] ^ hi;
    var t1slo10 = s[20] ^ lo;
    var t1shi10 = s[21] ^ hi;
    var t1slo15 = s[30] ^ lo;
    var t1shi15 = s[31] ^ hi;
    var t1slo20 = s[40] ^ lo;
    var t1shi20 = s[41] ^ hi;
    lo = lo0 ^ (lo2 << 1 | hi2 >>> 31);
    hi = hi0 ^ (hi2 << 1 | lo2 >>> 31);
    var t1slo1 = s[2] ^ lo;
    var t1shi1 = s[3] ^ hi;
    var t1slo6 = s[12] ^ lo;
    var t1shi6 = s[13] ^ hi;
    var t1slo11 = s[22] ^ lo;
    var t1shi11 = s[23] ^ hi;
    var t1slo16 = s[32] ^ lo;
    var t1shi16 = s[33] ^ hi;
    var t1slo21 = s[42] ^ lo;
    var t1shi21 = s[43] ^ hi;
    lo = lo1 ^ (lo3 << 1 | hi3 >>> 31);
    hi = hi1 ^ (hi3 << 1 | lo3 >>> 31);
    var t1slo2 = s[4] ^ lo;
    var t1shi2 = s[5] ^ hi;
    var t1slo7 = s[14] ^ lo;
    var t1shi7 = s[15] ^ hi;
    var t1slo12 = s[24] ^ lo;
    var t1shi12 = s[25] ^ hi;
    var t1slo17 = s[34] ^ lo;
    var t1shi17 = s[35] ^ hi;
    var t1slo22 = s[44] ^ lo;
    var t1shi22 = s[45] ^ hi;
    lo = lo2 ^ (lo4 << 1 | hi4 >>> 31);
    hi = hi2 ^ (hi4 << 1 | lo4 >>> 31);
    var t1slo3 = s[6] ^ lo;
    var t1shi3 = s[7] ^ hi;
    var t1slo8 = s[16] ^ lo;
    var t1shi8 = s[17] ^ hi;
    var t1slo13 = s[26] ^ lo;
    var t1shi13 = s[27] ^ hi;
    var t1slo18 = s[36] ^ lo;
    var t1shi18 = s[37] ^ hi;
    var t1slo23 = s[46] ^ lo;
    var t1shi23 = s[47] ^ hi;
    lo = lo3 ^ (lo0 << 1 | hi0 >>> 31);
    hi = hi3 ^ (hi0 << 1 | lo0 >>> 31);
    var t1slo4 = s[8] ^ lo;
    var t1shi4 = s[9] ^ hi;
    var t1slo9 = s[18] ^ lo;
    var t1shi9 = s[19] ^ hi;
    var t1slo14 = s[28] ^ lo;
    var t1shi14 = s[29] ^ hi;
    var t1slo19 = s[38] ^ lo;
    var t1shi19 = s[39] ^ hi;
    var t1slo24 = s[48] ^ lo;
    var t1shi24 = s[49] ^ hi; // rho & pi

    var t2slo0 = t1slo0;
    var t2shi0 = t1shi0;
    var t2slo16 = t1shi5 << 4 | t1slo5 >>> 28;
    var t2shi16 = t1slo5 << 4 | t1shi5 >>> 28;
    var t2slo7 = t1slo10 << 3 | t1shi10 >>> 29;
    var t2shi7 = t1shi10 << 3 | t1slo10 >>> 29;
    var t2slo23 = t1shi15 << 9 | t1slo15 >>> 23;
    var t2shi23 = t1slo15 << 9 | t1shi15 >>> 23;
    var t2slo14 = t1slo20 << 18 | t1shi20 >>> 14;
    var t2shi14 = t1shi20 << 18 | t1slo20 >>> 14;
    var t2slo10 = t1slo1 << 1 | t1shi1 >>> 31;
    var t2shi10 = t1shi1 << 1 | t1slo1 >>> 31;
    var t2slo1 = t1shi6 << 12 | t1slo6 >>> 20;
    var t2shi1 = t1slo6 << 12 | t1shi6 >>> 20;
    var t2slo17 = t1slo11 << 10 | t1shi11 >>> 22;
    var t2shi17 = t1shi11 << 10 | t1slo11 >>> 22;
    var t2slo8 = t1shi16 << 13 | t1slo16 >>> 19;
    var t2shi8 = t1slo16 << 13 | t1shi16 >>> 19;
    var t2slo24 = t1slo21 << 2 | t1shi21 >>> 30;
    var t2shi24 = t1shi21 << 2 | t1slo21 >>> 30;
    var t2slo20 = t1shi2 << 30 | t1slo2 >>> 2;
    var t2shi20 = t1slo2 << 30 | t1shi2 >>> 2;
    var t2slo11 = t1slo7 << 6 | t1shi7 >>> 26;
    var t2shi11 = t1shi7 << 6 | t1slo7 >>> 26;
    var t2slo2 = t1shi12 << 11 | t1slo12 >>> 21;
    var t2shi2 = t1slo12 << 11 | t1shi12 >>> 21;
    var t2slo18 = t1slo17 << 15 | t1shi17 >>> 17;
    var t2shi18 = t1shi17 << 15 | t1slo17 >>> 17;
    var t2slo9 = t1shi22 << 29 | t1slo22 >>> 3;
    var t2shi9 = t1slo22 << 29 | t1shi22 >>> 3;
    var t2slo5 = t1slo3 << 28 | t1shi3 >>> 4;
    var t2shi5 = t1shi3 << 28 | t1slo3 >>> 4;
    var t2slo21 = t1shi8 << 23 | t1slo8 >>> 9;
    var t2shi21 = t1slo8 << 23 | t1shi8 >>> 9;
    var t2slo12 = t1slo13 << 25 | t1shi13 >>> 7;
    var t2shi12 = t1shi13 << 25 | t1slo13 >>> 7;
    var t2slo3 = t1slo18 << 21 | t1shi18 >>> 11;
    var t2shi3 = t1shi18 << 21 | t1slo18 >>> 11;
    var t2slo19 = t1shi23 << 24 | t1slo23 >>> 8;
    var t2shi19 = t1slo23 << 24 | t1shi23 >>> 8;
    var t2slo15 = t1slo4 << 27 | t1shi4 >>> 5;
    var t2shi15 = t1shi4 << 27 | t1slo4 >>> 5;
    var t2slo6 = t1slo9 << 20 | t1shi9 >>> 12;
    var t2shi6 = t1shi9 << 20 | t1slo9 >>> 12;
    var t2slo22 = t1shi14 << 7 | t1slo14 >>> 25;
    var t2shi22 = t1slo14 << 7 | t1shi14 >>> 25;
    var t2slo13 = t1slo19 << 8 | t1shi19 >>> 24;
    var t2shi13 = t1shi19 << 8 | t1slo19 >>> 24;
    var t2slo4 = t1slo24 << 14 | t1shi24 >>> 18;
    var t2shi4 = t1shi24 << 14 | t1slo24 >>> 18; // chi

    s[0] = t2slo0 ^ ~t2slo1 & t2slo2;
    s[1] = t2shi0 ^ ~t2shi1 & t2shi2;
    s[10] = t2slo5 ^ ~t2slo6 & t2slo7;
    s[11] = t2shi5 ^ ~t2shi6 & t2shi7;
    s[20] = t2slo10 ^ ~t2slo11 & t2slo12;
    s[21] = t2shi10 ^ ~t2shi11 & t2shi12;
    s[30] = t2slo15 ^ ~t2slo16 & t2slo17;
    s[31] = t2shi15 ^ ~t2shi16 & t2shi17;
    s[40] = t2slo20 ^ ~t2slo21 & t2slo22;
    s[41] = t2shi20 ^ ~t2shi21 & t2shi22;
    s[2] = t2slo1 ^ ~t2slo2 & t2slo3;
    s[3] = t2shi1 ^ ~t2shi2 & t2shi3;
    s[12] = t2slo6 ^ ~t2slo7 & t2slo8;
    s[13] = t2shi6 ^ ~t2shi7 & t2shi8;
    s[22] = t2slo11 ^ ~t2slo12 & t2slo13;
    s[23] = t2shi11 ^ ~t2shi12 & t2shi13;
    s[32] = t2slo16 ^ ~t2slo17 & t2slo18;
    s[33] = t2shi16 ^ ~t2shi17 & t2shi18;
    s[42] = t2slo21 ^ ~t2slo22 & t2slo23;
    s[43] = t2shi21 ^ ~t2shi22 & t2shi23;
    s[4] = t2slo2 ^ ~t2slo3 & t2slo4;
    s[5] = t2shi2 ^ ~t2shi3 & t2shi4;
    s[14] = t2slo7 ^ ~t2slo8 & t2slo9;
    s[15] = t2shi7 ^ ~t2shi8 & t2shi9;
    s[24] = t2slo12 ^ ~t2slo13 & t2slo14;
    s[25] = t2shi12 ^ ~t2shi13 & t2shi14;
    s[34] = t2slo17 ^ ~t2slo18 & t2slo19;
    s[35] = t2shi17 ^ ~t2shi18 & t2shi19;
    s[44] = t2slo22 ^ ~t2slo23 & t2slo24;
    s[45] = t2shi22 ^ ~t2shi23 & t2shi24;
    s[6] = t2slo3 ^ ~t2slo4 & t2slo0;
    s[7] = t2shi3 ^ ~t2shi4 & t2shi0;
    s[16] = t2slo8 ^ ~t2slo9 & t2slo5;
    s[17] = t2shi8 ^ ~t2shi9 & t2shi5;
    s[26] = t2slo13 ^ ~t2slo14 & t2slo10;
    s[27] = t2shi13 ^ ~t2shi14 & t2shi10;
    s[36] = t2slo18 ^ ~t2slo19 & t2slo15;
    s[37] = t2shi18 ^ ~t2shi19 & t2shi15;
    s[46] = t2slo23 ^ ~t2slo24 & t2slo20;
    s[47] = t2shi23 ^ ~t2shi24 & t2shi20;
    s[8] = t2slo4 ^ ~t2slo0 & t2slo1;
    s[9] = t2shi4 ^ ~t2shi0 & t2shi1;
    s[18] = t2slo9 ^ ~t2slo5 & t2slo6;
    s[19] = t2shi9 ^ ~t2shi5 & t2shi6;
    s[28] = t2slo14 ^ ~t2slo10 & t2slo11;
    s[29] = t2shi14 ^ ~t2shi10 & t2shi11;
    s[38] = t2slo19 ^ ~t2slo15 & t2slo16;
    s[39] = t2shi19 ^ ~t2shi15 & t2shi16;
    s[48] = t2slo24 ^ ~t2slo20 & t2slo21;
    s[49] = t2shi24 ^ ~t2shi20 & t2shi21; // iota

    s[0] ^= P1600_ROUND_CONSTANTS[round * 2];
    s[1] ^= P1600_ROUND_CONSTANTS[round * 2 + 1];
  }
};

var keccakState = keccakStateUnroll;

function Keccak() {
  // much faster than `new Array(50)`
  this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.blockSize = null;
  this.count = 0;
  this.squeezing = false;
}

Keccak.prototype.initialize = function (rate, capacity) {
  for (var i = 0; i < 50; ++i) {
    this.state[i] = 0;
  }

  this.blockSize = rate / 8;
  this.count = 0;
  this.squeezing = false;
};

Keccak.prototype.absorb = function (data) {
  for (var i = 0; i < data.length; ++i) {
    this.state[~~(this.count / 4)] ^= data[i] << 8 * (this.count % 4);
    this.count += 1;

    if (this.count === this.blockSize) {
      keccakState.p1600(this.state);
      this.count = 0;
    }
  }
};

Keccak.prototype.absorbLastFewBits = function (bits) {
  this.state[~~(this.count / 4)] ^= bits << 8 * (this.count % 4);
  if ((bits & 0x80) !== 0 && this.count === this.blockSize - 1) keccakState.p1600(this.state);
  this.state[~~((this.blockSize - 1) / 4)] ^= 0x80 << 8 * ((this.blockSize - 1) % 4);
  keccakState.p1600(this.state);
  this.count = 0;
  this.squeezing = true;
};

Keccak.prototype.squeeze = function (length) {
  if (!this.squeezing) this.absorbLastFewBits(0x01);
  var output = Buffer.alloc(length);

  for (var i = 0; i < length; ++i) {
    output[i] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 0xff;
    this.count += 1;

    if (this.count === this.blockSize) {
      keccakState.p1600(this.state);
      this.count = 0;
    }
  }

  return output;
};

Keccak.prototype.copy = function (dest) {
  for (var i = 0; i < 50; ++i) {
    dest.state[i] = this.state[i];
  }

  dest.blockSize = this.blockSize;
  dest.count = this.count;
  dest.squeezing = this.squeezing;
};

var keccak = Keccak;

var js = api(keccak);

try {
  keccak$2.exports = require('./bindings');
} catch (err) {
  keccak$2.exports = js;
}

Object.defineProperty(keccak$3, "__esModule", {
  value: true
});
var hash_utils_1 = hashUtils;
var createKeccakHash = keccak$2.exports;
keccak$3.keccak224 = hash_utils_1.createHashFunction(function () {
  return createKeccakHash("keccak224");
});
keccak$3.keccak256 = hash_utils_1.createHashFunction(function () {
  return createKeccakHash("keccak256");
});
keccak$3.keccak384 = hash_utils_1.createHashFunction(function () {
  return createKeccakHash("keccak384");
});
keccak$3.keccak512 = hash_utils_1.createHashFunction(function () {
  return createKeccakHash("keccak512");
});

var createHash = require$$0$2.createHash;

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", {
      enumerable: true,
      value: v
    });
  } : function (o, v) {
    o["default"] = v;
  });

  var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }

    __setModuleDefault(result, mod);

    return result;
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.rlphash = exports.ripemd160FromArray = exports.ripemd160FromString = exports.ripemd160 = exports.sha256FromArray = exports.sha256FromString = exports.sha256 = exports.keccakFromArray = exports.keccakFromHexString = exports.keccakFromString = exports.keccak256 = exports.keccak = void 0;
  var keccak_1 = keccak$3;
  var createHash$1 = createHash;

  var rlp = __importStar(dist_browser);

  var bytes_1 = bytes;
  var helpers_1 = helpers;
  /**
   * Creates Keccak hash of a Buffer input
   * @param a The input data (Buffer)
   * @param bits (number = 256) The Keccak width
   */

  var keccak = function keccak(a, bits) {
    if (bits === void 0) {
      bits = 256;
    }

    (0, helpers_1.assertIsBuffer)(a);

    switch (bits) {
      case 224:
        {
          return (0, keccak_1.keccak224)(a);
        }

      case 256:
        {
          return (0, keccak_1.keccak256)(a);
        }

      case 384:
        {
          return (0, keccak_1.keccak384)(a);
        }

      case 512:
        {
          return (0, keccak_1.keccak512)(a);
        }

      default:
        {
          throw new Error("Invald algorithm: keccak" + bits);
        }
    }
  };

  exports.keccak = keccak;
  /**
   * Creates Keccak-256 hash of the input, alias for keccak(a, 256).
   * @param a The input data (Buffer)
   */

  var keccak256 = function keccak256(a) {
    return (0, exports.keccak)(a);
  };

  exports.keccak256 = keccak256;
  /**
   * Creates Keccak hash of a utf-8 string input
   * @param a The input data (String)
   * @param bits (number = 256) The Keccak width
   */

  var keccakFromString = function keccakFromString(a, bits) {
    if (bits === void 0) {
      bits = 256;
    }

    (0, helpers_1.assertIsString)(a);
    var buf = Buffer.from(a, 'utf8');
    return (0, exports.keccak)(buf, bits);
  };

  exports.keccakFromString = keccakFromString;
  /**
   * Creates Keccak hash of an 0x-prefixed string input
   * @param a The input data (String)
   * @param bits (number = 256) The Keccak width
   */

  var keccakFromHexString = function keccakFromHexString(a, bits) {
    if (bits === void 0) {
      bits = 256;
    }

    (0, helpers_1.assertIsHexString)(a);
    return (0, exports.keccak)((0, bytes_1.toBuffer)(a), bits);
  };

  exports.keccakFromHexString = keccakFromHexString;
  /**
   * Creates Keccak hash of a number array input
   * @param a The input data (number[])
   * @param bits (number = 256) The Keccak width
   */

  var keccakFromArray = function keccakFromArray(a, bits) {
    if (bits === void 0) {
      bits = 256;
    }

    (0, helpers_1.assertIsArray)(a);
    return (0, exports.keccak)((0, bytes_1.toBuffer)(a), bits);
  };

  exports.keccakFromArray = keccakFromArray;
  /**
   * Creates SHA256 hash of an input.
   * @param  a The input data (Buffer|Array|String)
   */

  var _sha256 = function _sha256(a) {
    a = (0, bytes_1.toBuffer)(a);
    return createHash$1('sha256').update(a).digest();
  };
  /**
   * Creates SHA256 hash of a Buffer input.
   * @param a The input data (Buffer)
   */


  var sha256 = function sha256(a) {
    (0, helpers_1.assertIsBuffer)(a);
    return _sha256(a);
  };

  exports.sha256 = sha256;
  /**
   * Creates SHA256 hash of a string input.
   * @param a The input data (string)
   */

  var sha256FromString = function sha256FromString(a) {
    (0, helpers_1.assertIsString)(a);
    return _sha256(a);
  };

  exports.sha256FromString = sha256FromString;
  /**
   * Creates SHA256 hash of a number[] input.
   * @param a The input data (number[])
   */

  var sha256FromArray = function sha256FromArray(a) {
    (0, helpers_1.assertIsArray)(a);
    return _sha256(a);
  };

  exports.sha256FromArray = sha256FromArray;
  /**
   * Creates RIPEMD160 hash of the input.
   * @param a The input data (Buffer|Array|String|Number)
   * @param padded Whether it should be padded to 256 bits or not
   */

  var _ripemd160 = function _ripemd160(a, padded) {
    a = (0, bytes_1.toBuffer)(a);
    var hash = createHash$1('rmd160').update(a).digest();

    if (padded === true) {
      return (0, bytes_1.setLengthLeft)(hash, 32);
    } else {
      return hash;
    }
  };
  /**
   * Creates RIPEMD160 hash of a Buffer input.
   * @param a The input data (Buffer)
   * @param padded Whether it should be padded to 256 bits or not
   */


  var ripemd160 = function ripemd160(a, padded) {
    (0, helpers_1.assertIsBuffer)(a);
    return _ripemd160(a, padded);
  };

  exports.ripemd160 = ripemd160;
  /**
   * Creates RIPEMD160 hash of a string input.
   * @param a The input data (String)
   * @param padded Whether it should be padded to 256 bits or not
   */

  var ripemd160FromString = function ripemd160FromString(a, padded) {
    (0, helpers_1.assertIsString)(a);
    return _ripemd160(a, padded);
  };

  exports.ripemd160FromString = ripemd160FromString;
  /**
   * Creates RIPEMD160 hash of a number[] input.
   * @param a The input data (number[])
   * @param padded Whether it should be padded to 256 bits or not
   */

  var ripemd160FromArray = function ripemd160FromArray(a, padded) {
    (0, helpers_1.assertIsArray)(a);
    return _ripemd160(a, padded);
  };

  exports.ripemd160FromArray = ripemd160FromArray;
  /**
   * Creates SHA-3 hash of the RLP encoded version of the input.
   * @param a The input data
   */

  var rlphash = function rlphash(a) {
    return (0, exports.keccak)(rlp.encode(a));
  };

  exports.rlphash = rlphash;
})(hash);

var types = {};

(function (exports) {

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toType = exports.TypeOutput = exports.bnToRlp = exports.bnToUnpaddedBuffer = exports.bnToHex = void 0;

  var bn_js_1 = __importDefault(bn$1.exports);

  var internal_1 = internal;
  var bytes_1 = bytes;
  /**
   * Convert BN to 0x-prefixed hex string.
   */

  function bnToHex(value) {
    return "0x" + value.toString(16);
  }

  exports.bnToHex = bnToHex;
  /**
   * Convert value from BN to an unpadded Buffer
   * (useful for RLP transport)
   * @param value value to convert
   */

  function bnToUnpaddedBuffer(value) {
    // Using `bn.toArrayLike(Buffer)` instead of `bn.toBuffer()`
    // for compatibility with browserify and similar tools
    return (0, bytes_1.unpadBuffer)(value.toArrayLike(Buffer));
  }

  exports.bnToUnpaddedBuffer = bnToUnpaddedBuffer;
  /**
   * Deprecated alias for {@link bnToUnpaddedBuffer}
   * @deprecated
   */

  function bnToRlp(value) {
    return bnToUnpaddedBuffer(value);
  }

  exports.bnToRlp = bnToRlp;
  /**
   * Type output options
   */

  var TypeOutput;

  (function (TypeOutput) {
    TypeOutput[TypeOutput["Number"] = 0] = "Number";
    TypeOutput[TypeOutput["BN"] = 1] = "BN";
    TypeOutput[TypeOutput["Buffer"] = 2] = "Buffer";
    TypeOutput[TypeOutput["PrefixedHexString"] = 3] = "PrefixedHexString";
  })(TypeOutput = exports.TypeOutput || (exports.TypeOutput = {}));

  function toType(input, outputType) {
    if (input === null) {
      return null;
    }

    if (input === undefined) {
      return undefined;
    }

    if (typeof input === 'string' && !(0, internal_1.isHexString)(input)) {
      throw new Error("A string must be provided with a 0x-prefix, given: " + input);
    } else if (typeof input === 'number' && !Number.isSafeInteger(input)) {
      throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
    }

    var output = (0, bytes_1.toBuffer)(input);

    if (outputType === TypeOutput.Buffer) {
      return output;
    } else if (outputType === TypeOutput.BN) {
      return new bn_js_1["default"](output);
    } else if (outputType === TypeOutput.Number) {
      var bn = new bn_js_1["default"](output);
      var max = new bn_js_1["default"](Number.MAX_SAFE_INTEGER.toString());

      if (bn.gt(max)) {
        throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)');
      }

      return bn.toNumber();
    } else {
      // outputType === TypeOutput.PrefixedHexString
      return "0x" + output.toString('hex');
    }
  }

  exports.toType = toType;
})(types);

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
    Object.defineProperty(o, "default", {
      enumerable: true,
      value: v
    });
  } : function (o, v) {
    o["default"] = v;
  });

  var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }

    __setModuleDefault(result, mod);

    return result;
  };

  var __read = commonjsGlobal && commonjsGlobal.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  };

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isZeroAddress = exports.zeroAddress = exports.importPublic = exports.privateToAddress = exports.privateToPublic = exports.publicToAddress = exports.pubToAddress = exports.isValidPublic = exports.isValidPrivate = exports.generateAddress2 = exports.generateAddress = exports.isValidChecksumAddress = exports.toChecksumAddress = exports.isValidAddress = exports.Account = void 0;

  var assert_1 = __importDefault(require$$0$5);

  var bn_js_1 = __importDefault(bn$1.exports);

  var rlp = __importStar(dist_browser);

  var secp256k1_1 = secp256k1;
  var internal_1 = internal;
  var constants_1 = constants;
  var bytes_1 = bytes;
  var hash_1 = hash;
  var helpers_1 = helpers;
  var types_1 = types;

  var Account =
  /** @class */
  function () {
    /**
     * This constructor assigns and validates the values.
     * Use the static factory methods to assist in creating an Account from varying data types.
     */
    function Account(nonce, balance, stateRoot, codeHash) {
      if (nonce === void 0) {
        nonce = new bn_js_1["default"](0);
      }

      if (balance === void 0) {
        balance = new bn_js_1["default"](0);
      }

      if (stateRoot === void 0) {
        stateRoot = constants_1.KECCAK256_RLP;
      }

      if (codeHash === void 0) {
        codeHash = constants_1.KECCAK256_NULL;
      }

      this.nonce = nonce;
      this.balance = balance;
      this.stateRoot = stateRoot;
      this.codeHash = codeHash;

      this._validate();
    }

    Account.fromAccountData = function (accountData) {
      var nonce = accountData.nonce,
          balance = accountData.balance,
          stateRoot = accountData.stateRoot,
          codeHash = accountData.codeHash;
      return new Account(nonce ? new bn_js_1["default"]((0, bytes_1.toBuffer)(nonce)) : undefined, balance ? new bn_js_1["default"]((0, bytes_1.toBuffer)(balance)) : undefined, stateRoot ? (0, bytes_1.toBuffer)(stateRoot) : undefined, codeHash ? (0, bytes_1.toBuffer)(codeHash) : undefined);
    };

    Account.fromRlpSerializedAccount = function (serialized) {
      var values = rlp.decode(serialized);

      if (!Array.isArray(values)) {
        throw new Error('Invalid serialized account input. Must be array');
      }

      return this.fromValuesArray(values);
    };

    Account.fromValuesArray = function (values) {
      var _a = __read(values, 4),
          nonce = _a[0],
          balance = _a[1],
          stateRoot = _a[2],
          codeHash = _a[3];

      return new Account(new bn_js_1["default"](nonce), new bn_js_1["default"](balance), stateRoot, codeHash);
    };

    Account.prototype._validate = function () {
      if (this.nonce.lt(new bn_js_1["default"](0))) {
        throw new Error('nonce must be greater than zero');
      }

      if (this.balance.lt(new bn_js_1["default"](0))) {
        throw new Error('balance must be greater than zero');
      }

      if (this.stateRoot.length !== 32) {
        throw new Error('stateRoot must have a length of 32');
      }

      if (this.codeHash.length !== 32) {
        throw new Error('codeHash must have a length of 32');
      }
    };
    /**
     * Returns a Buffer Array of the raw Buffers for the account, in order.
     */


    Account.prototype.raw = function () {
      return [(0, types_1.bnToUnpaddedBuffer)(this.nonce), (0, types_1.bnToUnpaddedBuffer)(this.balance), this.stateRoot, this.codeHash];
    };
    /**
     * Returns the RLP serialization of the account as a `Buffer`.
     */


    Account.prototype.serialize = function () {
      return rlp.encode(this.raw());
    };
    /**
     * Returns a `Boolean` determining if the account is a contract.
     */


    Account.prototype.isContract = function () {
      return !this.codeHash.equals(constants_1.KECCAK256_NULL);
    };
    /**
     * Returns a `Boolean` determining if the account is empty complying to the definition of
     * account emptiness in [EIP-161](https://eips.ethereum.org/EIPS/eip-161):
     * "An account is considered empty when it has no code and zero nonce and zero balance."
     */


    Account.prototype.isEmpty = function () {
      return this.balance.isZero() && this.nonce.isZero() && this.codeHash.equals(constants_1.KECCAK256_NULL);
    };

    return Account;
  }();

  exports.Account = Account;
  /**
   * Checks if the address is a valid. Accepts checksummed addresses too.
   */

  var isValidAddress = function isValidAddress(hexAddress) {
    try {
      (0, helpers_1.assertIsString)(hexAddress);
    } catch (e) {
      return false;
    }

    return /^0x[0-9a-fA-F]{40}$/.test(hexAddress);
  };

  exports.isValidAddress = isValidAddress;
  /**
   * Returns a checksummed address.
   *
   * If an eip1191ChainId is provided, the chainId will be included in the checksum calculation. This
   * has the effect of checksummed addresses for one chain having invalid checksums for others.
   * For more details see [EIP-1191](https://eips.ethereum.org/EIPS/eip-1191).
   *
   * WARNING: Checksums with and without the chainId will differ and the EIP-1191 checksum is not
   * backwards compatible to the original widely adopted checksum format standard introduced in
   * [EIP-55](https://eips.ethereum.org/EIPS/eip-55), so this will break in existing applications.
   * Usage of this EIP is therefore discouraged unless you have a very targeted use case.
   */

  var toChecksumAddress = function toChecksumAddress(hexAddress, eip1191ChainId) {
    (0, helpers_1.assertIsHexString)(hexAddress);
    var address = (0, internal_1.stripHexPrefix)(hexAddress).toLowerCase();
    var prefix = '';

    if (eip1191ChainId) {
      var chainId = (0, types_1.toType)(eip1191ChainId, types_1.TypeOutput.BN);
      prefix = chainId.toString() + '0x';
    }

    var hash = (0, hash_1.keccakFromString)(prefix + address).toString('hex');
    var ret = '0x';

    for (var i = 0; i < address.length; i++) {
      if (parseInt(hash[i], 16) >= 8) {
        ret += address[i].toUpperCase();
      } else {
        ret += address[i];
      }
    }

    return ret;
  };

  exports.toChecksumAddress = toChecksumAddress;
  /**
   * Checks if the address is a valid checksummed address.
   *
   * See toChecksumAddress' documentation for details about the eip1191ChainId parameter.
   */

  var isValidChecksumAddress = function isValidChecksumAddress(hexAddress, eip1191ChainId) {
    return (0, exports.isValidAddress)(hexAddress) && (0, exports.toChecksumAddress)(hexAddress, eip1191ChainId) === hexAddress;
  };

  exports.isValidChecksumAddress = isValidChecksumAddress;
  /**
   * Generates an address of a newly created contract.
   * @param from The address which is creating this new address
   * @param nonce The nonce of the from account
   */

  var generateAddress = function generateAddress(from, nonce) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(nonce);
    var nonceBN = new bn_js_1["default"](nonce);

    if (nonceBN.isZero()) {
      // in RLP we want to encode null in the case of zero nonce
      // read the RLP documentation for an answer if you dare
      return (0, hash_1.rlphash)([from, null]).slice(-20);
    } // Only take the lower 160bits of the hash


    return (0, hash_1.rlphash)([from, Buffer.from(nonceBN.toArray())]).slice(-20);
  };

  exports.generateAddress = generateAddress;
  /**
   * Generates an address for a contract created using CREATE2.
   * @param from The address which is creating this new address
   * @param salt A salt
   * @param initCode The init code of the contract being created
   */

  var generateAddress2 = function generateAddress2(from, salt, initCode) {
    (0, helpers_1.assertIsBuffer)(from);
    (0, helpers_1.assertIsBuffer)(salt);
    (0, helpers_1.assertIsBuffer)(initCode);
    (0, assert_1["default"])(from.length === 20);
    (0, assert_1["default"])(salt.length === 32);
    var address = (0, hash_1.keccak256)(Buffer.concat([Buffer.from('ff', 'hex'), from, salt, (0, hash_1.keccak256)(initCode)]));
    return address.slice(-20);
  };

  exports.generateAddress2 = generateAddress2;
  /**
   * Checks if the private key satisfies the rules of the curve secp256k1.
   */

  var isValidPrivate = function isValidPrivate(privateKey) {
    return (0, secp256k1_1.privateKeyVerify)(privateKey);
  };

  exports.isValidPrivate = isValidPrivate;
  /**
   * Checks if the public key satisfies the rules of the curve secp256k1
   * and the requirements of Ethereum.
   * @param publicKey The two points of an uncompressed key, unless sanitize is enabled
   * @param sanitize Accept public keys in other formats
   */

  var isValidPublic = function isValidPublic(publicKey, sanitize) {
    if (sanitize === void 0) {
      sanitize = false;
    }

    (0, helpers_1.assertIsBuffer)(publicKey);

    if (publicKey.length === 64) {
      // Convert to SEC1 for secp256k1
      return (0, secp256k1_1.publicKeyVerify)(Buffer.concat([Buffer.from([4]), publicKey]));
    }

    if (!sanitize) {
      return false;
    }

    return (0, secp256k1_1.publicKeyVerify)(publicKey);
  };

  exports.isValidPublic = isValidPublic;
  /**
   * Returns the ethereum address of a given public key.
   * Accepts "Ethereum public keys" and SEC1 encoded keys.
   * @param pubKey The two points of an uncompressed key, unless sanitize is enabled
   * @param sanitize Accept public keys in other formats
   */

  var pubToAddress = function pubToAddress(pubKey, sanitize) {
    if (sanitize === void 0) {
      sanitize = false;
    }

    (0, helpers_1.assertIsBuffer)(pubKey);

    if (sanitize && pubKey.length !== 64) {
      pubKey = Buffer.from((0, secp256k1_1.publicKeyConvert)(pubKey, false).slice(1));
    }

    (0, assert_1["default"])(pubKey.length === 64); // Only take the lower 160bits of the hash

    return (0, hash_1.keccak)(pubKey).slice(-20);
  };

  exports.pubToAddress = pubToAddress;
  exports.publicToAddress = exports.pubToAddress;
  /**
   * Returns the ethereum public key of a given private key.
   * @param privateKey A private key must be 256 bits wide
   */

  var privateToPublic = function privateToPublic(privateKey) {
    (0, helpers_1.assertIsBuffer)(privateKey); // skip the type flag and use the X, Y points

    return Buffer.from((0, secp256k1_1.publicKeyCreate)(privateKey, false)).slice(1);
  };

  exports.privateToPublic = privateToPublic;
  /**
   * Returns the ethereum address of a given private key.
   * @param privateKey A private key must be 256 bits wide
   */

  var privateToAddress = function privateToAddress(privateKey) {
    return (0, exports.publicToAddress)((0, exports.privateToPublic)(privateKey));
  };

  exports.privateToAddress = privateToAddress;
  /**
   * Converts a public key to the Ethereum format.
   */

  var importPublic = function importPublic(publicKey) {
    (0, helpers_1.assertIsBuffer)(publicKey);

    if (publicKey.length !== 64) {
      publicKey = Buffer.from((0, secp256k1_1.publicKeyConvert)(publicKey, false).slice(1));
    }

    return publicKey;
  };

  exports.importPublic = importPublic;
  /**
   * Returns the zero address.
   */

  var zeroAddress = function zeroAddress() {
    var addressLength = 20;
    var addr = (0, bytes_1.zeros)(addressLength);
    return (0, bytes_1.bufferToHex)(addr);
  };

  exports.zeroAddress = zeroAddress;
  /**
   * Checks if a given address is the zero address.
   */

  var isZeroAddress = function isZeroAddress(hexAddress) {
    try {
      (0, helpers_1.assertIsString)(hexAddress);
    } catch (e) {
      return false;
    }

    var zeroAddr = (0, exports.zeroAddress)();
    return zeroAddr === hexAddress;
  };

  exports.isZeroAddress = isZeroAddress;
})(account);

var address = {};

var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(address, "__esModule", {
  value: true
});
address.Address = void 0;

var assert_1$1 = __importDefault$3(require$$0$5);

var bn_js_1$2 = __importDefault$3(bn$1.exports);

var bytes_1$2 = bytes;
var account_1 = account;

var Address =
/** @class */
function () {
  function Address(buf) {
    (0, assert_1$1["default"])(buf.length === 20, 'Invalid address length');
    this.buf = buf;
  }
  /**
   * Returns the zero address.
   */


  Address.zero = function () {
    return new Address((0, bytes_1$2.zeros)(20));
  };
  /**
   * Returns an Address object from a hex-encoded string.
   * @param str - Hex-encoded address
   */


  Address.fromString = function (str) {
    (0, assert_1$1["default"])((0, account_1.isValidAddress)(str), 'Invalid address');
    return new Address((0, bytes_1$2.toBuffer)(str));
  };
  /**
   * Returns an address for a given public key.
   * @param pubKey The two points of an uncompressed key
   */


  Address.fromPublicKey = function (pubKey) {
    (0, assert_1$1["default"])(Buffer.isBuffer(pubKey), 'Public key should be Buffer');
    var buf = (0, account_1.pubToAddress)(pubKey);
    return new Address(buf);
  };
  /**
   * Returns an address for a given private key.
   * @param privateKey A private key must be 256 bits wide
   */


  Address.fromPrivateKey = function (privateKey) {
    (0, assert_1$1["default"])(Buffer.isBuffer(privateKey), 'Private key should be Buffer');
    var buf = (0, account_1.privateToAddress)(privateKey);
    return new Address(buf);
  };
  /**
   * Generates an address for a newly created contract.
   * @param from The address which is creating this new address
   * @param nonce The nonce of the from account
   */


  Address.generate = function (from, nonce) {
    (0, assert_1$1["default"])(bn_js_1$2["default"].isBN(nonce));
    return new Address((0, account_1.generateAddress)(from.buf, nonce.toArrayLike(Buffer)));
  };
  /**
   * Generates an address for a contract created using CREATE2.
   * @param from The address which is creating this new address
   * @param salt A salt
   * @param initCode The init code of the contract being created
   */


  Address.generate2 = function (from, salt, initCode) {
    (0, assert_1$1["default"])(Buffer.isBuffer(salt));
    (0, assert_1$1["default"])(Buffer.isBuffer(initCode));
    return new Address((0, account_1.generateAddress2)(from.buf, salt, initCode));
  };
  /**
   * Is address equal to another.
   */


  Address.prototype.equals = function (address) {
    return this.buf.equals(address.buf);
  };
  /**
   * Is address zero.
   */


  Address.prototype.isZero = function () {
    return this.equals(Address.zero());
  };
  /**
   * True if address is in the address range defined
   * by EIP-1352
   */


  Address.prototype.isPrecompileOrSystemAddress = function () {
    var addressBN = new bn_js_1$2["default"](this.buf);
    var rangeMin = new bn_js_1$2["default"](0);
    var rangeMax = new bn_js_1$2["default"]('ffff', 'hex');
    return addressBN.gte(rangeMin) && addressBN.lte(rangeMax);
  };
  /**
   * Returns hex encoding of address.
   */


  Address.prototype.toString = function () {
    return '0x' + this.buf.toString('hex');
  };
  /**
   * Returns Buffer representation of address.
   */


  Address.prototype.toBuffer = function () {
    return Buffer.from(this.buf);
  };

  return Address;
}();

address.Address = Address;

var signature = {};

var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(signature, "__esModule", {
  value: true
});
signature.hashPersonalMessage = signature.isValidSignature = signature.fromRpcSig = signature.toCompactSig = signature.toRpcSig = signature.ecrecover = signature.ecsign = void 0;
var secp256k1_1 = secp256k1;

var bn_js_1$1 = __importDefault$2(bn$1.exports);

var bytes_1$1 = bytes;
var hash_1 = hash;
var helpers_1 = helpers;
var types_1 = types;

function ecsign(msgHash, privateKey, chainId) {
  var _a = (0, secp256k1_1.ecdsaSign)(msgHash, privateKey),
      signature = _a.signature,
      recovery = _a.recid;

  var r = Buffer.from(signature.slice(0, 32));
  var s = Buffer.from(signature.slice(32, 64));

  if (!chainId || typeof chainId === 'number') {
    // return legacy type ECDSASignature (deprecated in favor of ECDSASignatureBuffer to handle large chainIds)
    if (chainId && !Number.isSafeInteger(chainId)) {
      throw new Error('The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)');
    }

    var v_1 = chainId ? recovery + (chainId * 2 + 35) : recovery + 27;
    return {
      r: r,
      s: s,
      v: v_1
    };
  }

  var chainIdBN = (0, types_1.toType)(chainId, types_1.TypeOutput.BN);
  var v = chainIdBN.muln(2).addn(35).addn(recovery).toArrayLike(Buffer);
  return {
    r: r,
    s: s,
    v: v
  };
}

signature.ecsign = ecsign;

function calculateSigRecovery(v, chainId) {
  var vBN = (0, types_1.toType)(v, types_1.TypeOutput.BN);

  if (!chainId) {
    return vBN.subn(27);
  }

  var chainIdBN = (0, types_1.toType)(chainId, types_1.TypeOutput.BN);
  return vBN.sub(chainIdBN.muln(2).addn(35));
}

function isValidSigRecovery(recovery) {
  var rec = new bn_js_1$1["default"](recovery);
  return rec.eqn(0) || rec.eqn(1);
}
/**
 * ECDSA public key recovery from signature.
 * @returns Recovered public key
 */


var ecrecover = function ecrecover(msgHash, v, r, s, chainId) {
  var signature = Buffer.concat([(0, bytes_1$1.setLengthLeft)(r, 32), (0, bytes_1$1.setLengthLeft)(s, 32)], 64);
  var recovery = calculateSigRecovery(v, chainId);

  if (!isValidSigRecovery(recovery)) {
    throw new Error('Invalid signature v value');
  }

  var senderPubKey = (0, secp256k1_1.ecdsaRecover)(signature, recovery.toNumber(), msgHash);
  return Buffer.from((0, secp256k1_1.publicKeyConvert)(senderPubKey, false).slice(1));
};

signature.ecrecover = ecrecover;
/**
 * Convert signature parameters into the format of `eth_sign` RPC method.
 * @returns Signature
 */

var toRpcSig = function toRpcSig(v, r, s, chainId) {
  var recovery = calculateSigRecovery(v, chainId);

  if (!isValidSigRecovery(recovery)) {
    throw new Error('Invalid signature v value');
  } // geth (and the RPC eth_sign method) uses the 65 byte format used by Bitcoin


  return (0, bytes_1$1.bufferToHex)(Buffer.concat([(0, bytes_1$1.setLengthLeft)(r, 32), (0, bytes_1$1.setLengthLeft)(s, 32), (0, bytes_1$1.toBuffer)(v)]));
};

signature.toRpcSig = toRpcSig;
/**
 * Convert signature parameters into the format of Compact Signature Representation (EIP-2098).
 * @returns Signature
 */

var toCompactSig = function toCompactSig(v, r, s, chainId) {
  var recovery = calculateSigRecovery(v, chainId);

  if (!isValidSigRecovery(recovery)) {
    throw new Error('Invalid signature v value');
  }

  var vn = (0, types_1.toType)(v, types_1.TypeOutput.Number);
  var ss = s;

  if (vn > 28 && vn % 2 === 1 || vn === 1 || vn === 28) {
    ss = Buffer.from(s);
    ss[0] |= 0x80;
  }

  return (0, bytes_1$1.bufferToHex)(Buffer.concat([(0, bytes_1$1.setLengthLeft)(r, 32), (0, bytes_1$1.setLengthLeft)(ss, 32)]));
};

signature.toCompactSig = toCompactSig;
/**
 * Convert signature format of the `eth_sign` RPC method to signature parameters
 * NOTE: all because of a bug in geth: https://github.com/ethereum/go-ethereum/issues/2053
 */

var fromRpcSig = function fromRpcSig(sig) {
  var buf = (0, bytes_1$1.toBuffer)(sig);
  var r;
  var s;
  var v;

  if (buf.length >= 65) {
    r = buf.slice(0, 32);
    s = buf.slice(32, 64);
    v = (0, bytes_1$1.bufferToInt)(buf.slice(64));
  } else if (buf.length === 64) {
    // Compact Signature Representation (https://eips.ethereum.org/EIPS/eip-2098)
    r = buf.slice(0, 32);
    s = buf.slice(32, 64);
    v = (0, bytes_1$1.bufferToInt)(buf.slice(32, 33)) >> 7;
    s[0] &= 0x7f;
  } else {
    throw new Error('Invalid signature length');
  } // support both versions of `eth_sign` responses


  if (v < 27) {
    v += 27;
  }

  return {
    v: v,
    r: r,
    s: s
  };
};

signature.fromRpcSig = fromRpcSig;
/**
 * Validate a ECDSA signature.
 * @param homesteadOrLater Indicates whether this is being used on either the homestead hardfork or a later one
 */

var isValidSignature = function isValidSignature(v, r, s, homesteadOrLater, chainId) {
  if (homesteadOrLater === void 0) {
    homesteadOrLater = true;
  }

  var SECP256K1_N_DIV_2 = new bn_js_1$1["default"]('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
  var SECP256K1_N = new bn_js_1$1["default"]('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);

  if (r.length !== 32 || s.length !== 32) {
    return false;
  }

  if (!isValidSigRecovery(calculateSigRecovery(v, chainId))) {
    return false;
  }

  var rBN = new bn_js_1$1["default"](r);
  var sBN = new bn_js_1$1["default"](s);

  if (rBN.isZero() || rBN.gt(SECP256K1_N) || sBN.isZero() || sBN.gt(SECP256K1_N)) {
    return false;
  }

  if (homesteadOrLater && sBN.cmp(SECP256K1_N_DIV_2) === 1) {
    return false;
  }

  return true;
};

signature.isValidSignature = isValidSignature;
/**
 * Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
 * The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
 * call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
 * used to produce the signature.
 */

var hashPersonalMessage = function hashPersonalMessage(message) {
  (0, helpers_1.assertIsBuffer)(message);
  var prefix = Buffer.from("\x19Ethereum Signed Message:\n" + message.length, 'utf-8');
  return (0, hash_1.keccak)(Buffer.concat([prefix, message]));
};

signature.hashPersonalMessage = hashPersonalMessage;

var object = {};

var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
  }

  __setModuleDefault$1(result, mod);

  return result;
};

var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(object, "__esModule", {
  value: true
});
object.defineProperties = void 0;

var assert_1 = __importDefault$1(require$$0$5);

var internal_1 = internal;

var rlp$1 = __importStar$1(dist_browser);

var bytes_1 = bytes;
/**
 * Defines properties on a `Object`. It make the assumption that underlying data is binary.
 * @param self the `Object` to define properties on
 * @param fields an array fields to define. Fields can contain:
 * * `name` - the name of the properties
 * * `length` - the number of bytes the field can have
 * * `allowLess` - if the field can be less than the length
 * * `allowEmpty`
 * @param data data to be validated against the definitions
 * @deprecated
 */

var defineProperties = function defineProperties(self, fields, data) {
  self.raw = [];
  self._fields = []; // attach the `toJSON`

  self.toJSON = function (label) {
    if (label === void 0) {
      label = false;
    }

    if (label) {
      var obj_1 = {};

      self._fields.forEach(function (field) {
        obj_1[field] = "0x" + self[field].toString('hex');
      });

      return obj_1;
    }

    return (0, bytes_1.baToJSON)(self.raw);
  };

  self.serialize = function serialize() {
    return rlp$1.encode(self.raw);
  };

  fields.forEach(function (field, i) {
    self._fields.push(field.name);

    function getter() {
      return self.raw[i];
    }

    function setter(v) {
      v = (0, bytes_1.toBuffer)(v);

      if (v.toString('hex') === '00' && !field.allowZero) {
        v = Buffer.allocUnsafe(0);
      }

      if (field.allowLess && field.length) {
        v = (0, bytes_1.unpadBuffer)(v);
        (0, assert_1["default"])(field.length >= v.length, "The field " + field.name + " must not have more " + field.length + " bytes");
      } else if (!(field.allowZero && v.length === 0) && field.length) {
        (0, assert_1["default"])(field.length === v.length, "The field " + field.name + " must have byte length of " + field.length);
      }

      self.raw[i] = v;
    }

    Object.defineProperty(self, field.name, {
      enumerable: true,
      configurable: true,
      get: getter,
      set: setter
    });

    if (field["default"]) {
      self[field.name] = field["default"];
    } // attach alias


    if (field.alias) {
      Object.defineProperty(self, field.alias, {
        enumerable: false,
        configurable: true,
        set: setter,
        get: getter
      });
    }
  }); // if the constuctor is passed data

  if (data) {
    if (typeof data === 'string') {
      data = Buffer.from((0, internal_1.stripHexPrefix)(data), 'hex');
    }

    if (Buffer.isBuffer(data)) {
      data = rlp$1.decode(data);
    }

    if (Array.isArray(data)) {
      if (data.length > self._fields.length) {
        throw new Error('wrong number of fields in data');
      } // make sure all the items are buffers


      data.forEach(function (d, i) {
        self[self._fields[i]] = (0, bytes_1.toBuffer)(d);
      });
    } else if (_typeof(data) === 'object') {
      var keys_1 = Object.keys(data);
      fields.forEach(function (field) {
        if (keys_1.indexOf(field.name) !== -1) self[field.name] = data[field.name];
        if (keys_1.indexOf(field.alias) !== -1) self[field.alias] = data[field.alias];
      });
    } else {
      throw new Error('invalid data');
    }
  }
};

object.defineProperties = defineProperties;

var externals = {};

/**
 * Re-exports commonly used modules:
 * * Exports [`BN`](https://github.com/indutny/bn.js), [`rlp`](https://github.com/ethereumjs/rlp).
 * @packageDocumentation
 */


var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(externals, "__esModule", {
  value: true
});
externals.rlp = externals.BN = void 0;

var bn_js_1 = __importDefault(bn$1.exports);

externals.BN = bn_js_1["default"];

var rlp = __importStar(dist_browser);

externals.rlp = rlp;

(function (exports) {

  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });

  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) {
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    }
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isHexString = exports.getKeys = exports.fromAscii = exports.fromUtf8 = exports.toAscii = exports.arrayContainsArray = exports.getBinarySize = exports.padToEven = exports.stripHexPrefix = exports.isHexPrefixed = void 0;
  /**
   * Constants
   */

  __exportStar(constants, exports);
  /**
   * Account class and helper functions
   */


  __exportStar(account, exports);
  /**
   * Address type
   */


  __exportStar(address, exports);
  /**
   * Hash functions
   */


  __exportStar(hash, exports);
  /**
   * ECDSA signature
   */


  __exportStar(signature, exports);
  /**
   * Utilities for manipulating Buffers, byte arrays, etc.
   */


  __exportStar(bytes, exports);
  /**
   * Function for definining properties on an object
   */


  __exportStar(object, exports);
  /**
   * External exports (BN, rlp, secp256k1)
   */


  __exportStar(externals, exports);
  /**
   * Helpful TypeScript types
   */


  __exportStar(types, exports);
  /**
   * Export ethjs-util methods
   */


  var internal_1 = internal;
  Object.defineProperty(exports, "isHexPrefixed", {
    enumerable: true,
    get: function get() {
      return internal_1.isHexPrefixed;
    }
  });
  Object.defineProperty(exports, "stripHexPrefix", {
    enumerable: true,
    get: function get() {
      return internal_1.stripHexPrefix;
    }
  });
  Object.defineProperty(exports, "padToEven", {
    enumerable: true,
    get: function get() {
      return internal_1.padToEven;
    }
  });
  Object.defineProperty(exports, "getBinarySize", {
    enumerable: true,
    get: function get() {
      return internal_1.getBinarySize;
    }
  });
  Object.defineProperty(exports, "arrayContainsArray", {
    enumerable: true,
    get: function get() {
      return internal_1.arrayContainsArray;
    }
  });
  Object.defineProperty(exports, "toAscii", {
    enumerable: true,
    get: function get() {
      return internal_1.toAscii;
    }
  });
  Object.defineProperty(exports, "fromUtf8", {
    enumerable: true,
    get: function get() {
      return internal_1.fromUtf8;
    }
  });
  Object.defineProperty(exports, "fromAscii", {
    enumerable: true,
    get: function get() {
      return internal_1.fromAscii;
    }
  });
  Object.defineProperty(exports, "getKeys", {
    enumerable: true,
    get: function get() {
      return internal_1.getKeys;
    }
  });
  Object.defineProperty(exports, "isHexString", {
    enumerable: true,
    get: function get() {
      return internal_1.isHexString;
    }
  });
})(dist_browser$1);

var dist = {};

var utils$3 = {};

var sha3$2 = {exports: {}};

(function (module) {
  /*jslint bitwise: true */
  (function () {

    var INPUT_ERROR = 'input is invalid type';
    var FINALIZE_ERROR = 'finalize already called';
    var WINDOW = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
    var root = WINDOW ? window : {};

    if (root.JS_SHA3_NO_WINDOW) {
      WINDOW = false;
    }

    var WEB_WORKER = !WINDOW && (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object';
    var NODE_JS = !root.JS_SHA3_NO_NODE_JS && (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.versions && process.versions.node;

    if (NODE_JS) {
      root = commonjsGlobal;
    } else if (WEB_WORKER) {
      root = self;
    }

    var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && 'object' === 'object' && module.exports;
    var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
    var HEX_CHARS = '0123456789abcdef'.split('');
    var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
    var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
    var KECCAK_PADDING = [1, 256, 65536, 16777216];
    var PADDING = [6, 1536, 393216, 100663296];
    var SHIFT = [0, 8, 16, 24];
    var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
    var BITS = [224, 256, 384, 512];
    var SHAKE_BITS = [128, 256];
    var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'];
    var CSHAKE_BYTEPAD = {
      '128': 168,
      '256': 136
    };

    if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
      Array.isArray = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      };
    }

    if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
      ArrayBuffer.isView = function (obj) {
        return _typeof(obj) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
      };
    }

    var createOutputMethod = function createOutputMethod(bits, padding, outputType) {
      return function (message) {
        return new Keccak(bits, padding, bits).update(message)[outputType]();
      };
    };

    var createShakeOutputMethod = function createShakeOutputMethod(bits, padding, outputType) {
      return function (message, outputBits) {
        return new Keccak(bits, padding, outputBits).update(message)[outputType]();
      };
    };

    var createCshakeOutputMethod = function createCshakeOutputMethod(bits, padding, outputType) {
      return function (message, outputBits, n, s) {
        return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
      };
    };

    var createKmacOutputMethod = function createKmacOutputMethod(bits, padding, outputType) {
      return function (key, message, outputBits, s) {
        return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
      };
    };

    var createOutputMethods = function createOutputMethods(method, createMethod, bits, padding) {
      for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
        var type = OUTPUT_TYPES[i];
        method[type] = createMethod(bits, padding, type);
      }

      return method;
    };

    var createMethod = function createMethod(bits, padding) {
      var method = createOutputMethod(bits, padding, 'hex');

      method.create = function () {
        return new Keccak(bits, padding, bits);
      };

      method.update = function (message) {
        return method.create().update(message);
      };

      return createOutputMethods(method, createOutputMethod, bits, padding);
    };

    var createShakeMethod = function createShakeMethod(bits, padding) {
      var method = createShakeOutputMethod(bits, padding, 'hex');

      method.create = function (outputBits) {
        return new Keccak(bits, padding, outputBits);
      };

      method.update = function (message, outputBits) {
        return method.create(outputBits).update(message);
      };

      return createOutputMethods(method, createShakeOutputMethod, bits, padding);
    };

    var createCshakeMethod = function createCshakeMethod(bits, padding) {
      var w = CSHAKE_BYTEPAD[bits];
      var method = createCshakeOutputMethod(bits, padding, 'hex');

      method.create = function (outputBits, n, s) {
        if (!n && !s) {
          return methods['shake' + bits].create(outputBits);
        } else {
          return new Keccak(bits, padding, outputBits).bytepad([n, s], w);
        }
      };

      method.update = function (message, outputBits, n, s) {
        return method.create(outputBits, n, s).update(message);
      };

      return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
    };

    var createKmacMethod = function createKmacMethod(bits, padding) {
      var w = CSHAKE_BYTEPAD[bits];
      var method = createKmacOutputMethod(bits, padding, 'hex');

      method.create = function (key, outputBits, s) {
        return new Kmac(bits, padding, outputBits).bytepad(['KMAC', s], w).bytepad([key], w);
      };

      method.update = function (key, message, outputBits, s) {
        return method.create(key, outputBits, s).update(message);
      };

      return createOutputMethods(method, createKmacOutputMethod, bits, padding);
    };

    var algorithms = [{
      name: 'keccak',
      padding: KECCAK_PADDING,
      bits: BITS,
      createMethod: createMethod
    }, {
      name: 'sha3',
      padding: PADDING,
      bits: BITS,
      createMethod: createMethod
    }, {
      name: 'shake',
      padding: SHAKE_PADDING,
      bits: SHAKE_BITS,
      createMethod: createShakeMethod
    }, {
      name: 'cshake',
      padding: CSHAKE_PADDING,
      bits: SHAKE_BITS,
      createMethod: createCshakeMethod
    }, {
      name: 'kmac',
      padding: CSHAKE_PADDING,
      bits: SHAKE_BITS,
      createMethod: createKmacMethod
    }];
    var methods = {},
        methodNames = [];

    for (var i = 0; i < algorithms.length; ++i) {
      var algorithm = algorithms[i];
      var bits = algorithm.bits;

      for (var j = 0; j < bits.length; ++j) {
        var methodName = algorithm.name + '_' + bits[j];
        methodNames.push(methodName);
        methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);

        if (algorithm.name !== 'sha3') {
          var newMethodName = algorithm.name + bits[j];
          methodNames.push(newMethodName);
          methods[newMethodName] = methods[methodName];
        }
      }
    }

    function Keccak(bits, padding, outputBits) {
      this.blocks = [];
      this.s = [];
      this.padding = padding;
      this.outputBits = outputBits;
      this.reset = true;
      this.finalized = false;
      this.block = 0;
      this.start = 0;
      this.blockCount = 1600 - (bits << 1) >> 5;
      this.byteCount = this.blockCount << 2;
      this.outputBlocks = outputBits >> 5;
      this.extraBytes = (outputBits & 31) >> 3;

      for (var i = 0; i < 50; ++i) {
        this.s[i] = 0;
      }
    }

    Keccak.prototype.update = function (message) {
      if (this.finalized) {
        throw new Error(FINALIZE_ERROR);
      }

      var notString,
          type = _typeof(message);

      if (type !== 'string') {
        if (type === 'object') {
          if (message === null) {
            throw new Error(INPUT_ERROR);
          } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
            message = new Uint8Array(message);
          } else if (!Array.isArray(message)) {
            if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
              throw new Error(INPUT_ERROR);
            }
          }
        } else {
          throw new Error(INPUT_ERROR);
        }

        notString = true;
      }

      var blocks = this.blocks,
          byteCount = this.byteCount,
          length = message.length,
          blockCount = this.blockCount,
          index = 0,
          s = this.s,
          i,
          code;

      while (index < length) {
        if (this.reset) {
          this.reset = false;
          blocks[0] = this.block;

          for (i = 1; i < blockCount + 1; ++i) {
            blocks[i] = 0;
          }
        }

        if (notString) {
          for (i = this.start; index < length && i < byteCount; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        } else {
          for (i = this.start; index < length && i < byteCount; ++index) {
            code = message.charCodeAt(index);

            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            }
          }
        }

        this.lastByteIndex = i;

        if (i >= byteCount) {
          this.start = i - byteCount;
          this.block = blocks[blockCount];

          for (i = 0; i < blockCount; ++i) {
            s[i] ^= blocks[i];
          }

          f(s);
          this.reset = true;
        } else {
          this.start = i;
        }
      }

      return this;
    };

    Keccak.prototype.encode = function (x, right) {
      var o = x & 255,
          n = 1;
      var bytes = [o];
      x = x >> 8;
      o = x & 255;

      while (o > 0) {
        bytes.unshift(o);
        x = x >> 8;
        o = x & 255;
        ++n;
      }

      if (right) {
        bytes.push(n);
      } else {
        bytes.unshift(n);
      }

      this.update(bytes);
      return bytes.length;
    };

    Keccak.prototype.encodeString = function (str) {
      var notString,
          type = _typeof(str);

      if (type !== 'string') {
        if (type === 'object') {
          if (str === null) {
            throw new Error(INPUT_ERROR);
          } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
            str = new Uint8Array(str);
          } else if (!Array.isArray(str)) {
            if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
              throw new Error(INPUT_ERROR);
            }
          }
        } else {
          throw new Error(INPUT_ERROR);
        }

        notString = true;
      }

      var bytes = 0,
          length = str.length;

      if (notString) {
        bytes = length;
      } else {
        for (var i = 0; i < str.length; ++i) {
          var code = str.charCodeAt(i);

          if (code < 0x80) {
            bytes += 1;
          } else if (code < 0x800) {
            bytes += 2;
          } else if (code < 0xd800 || code >= 0xe000) {
            bytes += 3;
          } else {
            code = 0x10000 + ((code & 0x3ff) << 10 | str.charCodeAt(++i) & 0x3ff);
            bytes += 4;
          }
        }
      }

      bytes += this.encode(bytes * 8);
      this.update(str);
      return bytes;
    };

    Keccak.prototype.bytepad = function (strs, w) {
      var bytes = this.encode(w);

      for (var i = 0; i < strs.length; ++i) {
        bytes += this.encodeString(strs[i]);
      }

      var paddingBytes = w - bytes % w;
      var zeros = [];
      zeros.length = paddingBytes;
      this.update(zeros);
      return this;
    };

    Keccak.prototype.finalize = function () {
      if (this.finalized) {
        return;
      }

      this.finalized = true;
      var blocks = this.blocks,
          i = this.lastByteIndex,
          blockCount = this.blockCount,
          s = this.s;
      blocks[i >> 2] |= this.padding[i & 3];

      if (this.lastByteIndex === this.byteCount) {
        blocks[0] = blocks[blockCount];

        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
      }

      blocks[blockCount - 1] |= 0x80000000;

      for (i = 0; i < blockCount; ++i) {
        s[i] ^= blocks[i];
      }

      f(s);
    };

    Keccak.prototype.toString = Keccak.prototype.hex = function () {
      this.finalize();
      var blockCount = this.blockCount,
          s = this.s,
          outputBlocks = this.outputBlocks,
          extraBytes = this.extraBytes,
          i = 0,
          j = 0;
      var hex = '',
          block;

      while (j < outputBlocks) {
        for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
          block = s[i];
          hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F] + HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F] + HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F] + HEX_CHARS[block >> 28 & 0x0F] + HEX_CHARS[block >> 24 & 0x0F];
        }

        if (j % blockCount === 0) {
          f(s);
          i = 0;
        }
      }

      if (extraBytes) {
        block = s[i];
        hex += HEX_CHARS[block >> 4 & 0x0F] + HEX_CHARS[block & 0x0F];

        if (extraBytes > 1) {
          hex += HEX_CHARS[block >> 12 & 0x0F] + HEX_CHARS[block >> 8 & 0x0F];
        }

        if (extraBytes > 2) {
          hex += HEX_CHARS[block >> 20 & 0x0F] + HEX_CHARS[block >> 16 & 0x0F];
        }
      }

      return hex;
    };

    Keccak.prototype.arrayBuffer = function () {
      this.finalize();
      var blockCount = this.blockCount,
          s = this.s,
          outputBlocks = this.outputBlocks,
          extraBytes = this.extraBytes,
          i = 0,
          j = 0;
      var bytes = this.outputBits >> 3;
      var buffer;

      if (extraBytes) {
        buffer = new ArrayBuffer(outputBlocks + 1 << 2);
      } else {
        buffer = new ArrayBuffer(bytes);
      }

      var array = new Uint32Array(buffer);

      while (j < outputBlocks) {
        for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
          array[j] = s[i];
        }

        if (j % blockCount === 0) {
          f(s);
        }
      }

      if (extraBytes) {
        array[i] = s[i];
        buffer = buffer.slice(0, bytes);
      }

      return buffer;
    };

    Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

    Keccak.prototype.digest = Keccak.prototype.array = function () {
      this.finalize();
      var blockCount = this.blockCount,
          s = this.s,
          outputBlocks = this.outputBlocks,
          extraBytes = this.extraBytes,
          i = 0,
          j = 0;
      var array = [],
          offset,
          block;

      while (j < outputBlocks) {
        for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
          offset = j << 2;
          block = s[i];
          array[offset] = block & 0xFF;
          array[offset + 1] = block >> 8 & 0xFF;
          array[offset + 2] = block >> 16 & 0xFF;
          array[offset + 3] = block >> 24 & 0xFF;
        }

        if (j % blockCount === 0) {
          f(s);
        }
      }

      if (extraBytes) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;

        if (extraBytes > 1) {
          array[offset + 1] = block >> 8 & 0xFF;
        }

        if (extraBytes > 2) {
          array[offset + 2] = block >> 16 & 0xFF;
        }
      }

      return array;
    };

    function Kmac(bits, padding, outputBits) {
      Keccak.call(this, bits, padding, outputBits);
    }

    Kmac.prototype = new Keccak();

    Kmac.prototype.finalize = function () {
      this.encode(this.outputBits, true);
      return Keccak.prototype.finalize.call(this);
    };

    var f = function f(s) {
      var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

      for (n = 0; n < 48; n += 2) {
        c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
        c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
        c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
        c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
        c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
        c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
        c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
        c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
        c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
        c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
        h = c8 ^ (c2 << 1 | c3 >>> 31);
        l = c9 ^ (c3 << 1 | c2 >>> 31);
        s[0] ^= h;
        s[1] ^= l;
        s[10] ^= h;
        s[11] ^= l;
        s[20] ^= h;
        s[21] ^= l;
        s[30] ^= h;
        s[31] ^= l;
        s[40] ^= h;
        s[41] ^= l;
        h = c0 ^ (c4 << 1 | c5 >>> 31);
        l = c1 ^ (c5 << 1 | c4 >>> 31);
        s[2] ^= h;
        s[3] ^= l;
        s[12] ^= h;
        s[13] ^= l;
        s[22] ^= h;
        s[23] ^= l;
        s[32] ^= h;
        s[33] ^= l;
        s[42] ^= h;
        s[43] ^= l;
        h = c2 ^ (c6 << 1 | c7 >>> 31);
        l = c3 ^ (c7 << 1 | c6 >>> 31);
        s[4] ^= h;
        s[5] ^= l;
        s[14] ^= h;
        s[15] ^= l;
        s[24] ^= h;
        s[25] ^= l;
        s[34] ^= h;
        s[35] ^= l;
        s[44] ^= h;
        s[45] ^= l;
        h = c4 ^ (c8 << 1 | c9 >>> 31);
        l = c5 ^ (c9 << 1 | c8 >>> 31);
        s[6] ^= h;
        s[7] ^= l;
        s[16] ^= h;
        s[17] ^= l;
        s[26] ^= h;
        s[27] ^= l;
        s[36] ^= h;
        s[37] ^= l;
        s[46] ^= h;
        s[47] ^= l;
        h = c6 ^ (c0 << 1 | c1 >>> 31);
        l = c7 ^ (c1 << 1 | c0 >>> 31);
        s[8] ^= h;
        s[9] ^= l;
        s[18] ^= h;
        s[19] ^= l;
        s[28] ^= h;
        s[29] ^= l;
        s[38] ^= h;
        s[39] ^= l;
        s[48] ^= h;
        s[49] ^= l;
        b0 = s[0];
        b1 = s[1];
        b32 = s[11] << 4 | s[10] >>> 28;
        b33 = s[10] << 4 | s[11] >>> 28;
        b14 = s[20] << 3 | s[21] >>> 29;
        b15 = s[21] << 3 | s[20] >>> 29;
        b46 = s[31] << 9 | s[30] >>> 23;
        b47 = s[30] << 9 | s[31] >>> 23;
        b28 = s[40] << 18 | s[41] >>> 14;
        b29 = s[41] << 18 | s[40] >>> 14;
        b20 = s[2] << 1 | s[3] >>> 31;
        b21 = s[3] << 1 | s[2] >>> 31;
        b2 = s[13] << 12 | s[12] >>> 20;
        b3 = s[12] << 12 | s[13] >>> 20;
        b34 = s[22] << 10 | s[23] >>> 22;
        b35 = s[23] << 10 | s[22] >>> 22;
        b16 = s[33] << 13 | s[32] >>> 19;
        b17 = s[32] << 13 | s[33] >>> 19;
        b48 = s[42] << 2 | s[43] >>> 30;
        b49 = s[43] << 2 | s[42] >>> 30;
        b40 = s[5] << 30 | s[4] >>> 2;
        b41 = s[4] << 30 | s[5] >>> 2;
        b22 = s[14] << 6 | s[15] >>> 26;
        b23 = s[15] << 6 | s[14] >>> 26;
        b4 = s[25] << 11 | s[24] >>> 21;
        b5 = s[24] << 11 | s[25] >>> 21;
        b36 = s[34] << 15 | s[35] >>> 17;
        b37 = s[35] << 15 | s[34] >>> 17;
        b18 = s[45] << 29 | s[44] >>> 3;
        b19 = s[44] << 29 | s[45] >>> 3;
        b10 = s[6] << 28 | s[7] >>> 4;
        b11 = s[7] << 28 | s[6] >>> 4;
        b42 = s[17] << 23 | s[16] >>> 9;
        b43 = s[16] << 23 | s[17] >>> 9;
        b24 = s[26] << 25 | s[27] >>> 7;
        b25 = s[27] << 25 | s[26] >>> 7;
        b6 = s[36] << 21 | s[37] >>> 11;
        b7 = s[37] << 21 | s[36] >>> 11;
        b38 = s[47] << 24 | s[46] >>> 8;
        b39 = s[46] << 24 | s[47] >>> 8;
        b30 = s[8] << 27 | s[9] >>> 5;
        b31 = s[9] << 27 | s[8] >>> 5;
        b12 = s[18] << 20 | s[19] >>> 12;
        b13 = s[19] << 20 | s[18] >>> 12;
        b44 = s[29] << 7 | s[28] >>> 25;
        b45 = s[28] << 7 | s[29] >>> 25;
        b26 = s[38] << 8 | s[39] >>> 24;
        b27 = s[39] << 8 | s[38] >>> 24;
        b8 = s[48] << 14 | s[49] >>> 18;
        b9 = s[49] << 14 | s[48] >>> 18;
        s[0] = b0 ^ ~b2 & b4;
        s[1] = b1 ^ ~b3 & b5;
        s[10] = b10 ^ ~b12 & b14;
        s[11] = b11 ^ ~b13 & b15;
        s[20] = b20 ^ ~b22 & b24;
        s[21] = b21 ^ ~b23 & b25;
        s[30] = b30 ^ ~b32 & b34;
        s[31] = b31 ^ ~b33 & b35;
        s[40] = b40 ^ ~b42 & b44;
        s[41] = b41 ^ ~b43 & b45;
        s[2] = b2 ^ ~b4 & b6;
        s[3] = b3 ^ ~b5 & b7;
        s[12] = b12 ^ ~b14 & b16;
        s[13] = b13 ^ ~b15 & b17;
        s[22] = b22 ^ ~b24 & b26;
        s[23] = b23 ^ ~b25 & b27;
        s[32] = b32 ^ ~b34 & b36;
        s[33] = b33 ^ ~b35 & b37;
        s[42] = b42 ^ ~b44 & b46;
        s[43] = b43 ^ ~b45 & b47;
        s[4] = b4 ^ ~b6 & b8;
        s[5] = b5 ^ ~b7 & b9;
        s[14] = b14 ^ ~b16 & b18;
        s[15] = b15 ^ ~b17 & b19;
        s[24] = b24 ^ ~b26 & b28;
        s[25] = b25 ^ ~b27 & b29;
        s[34] = b34 ^ ~b36 & b38;
        s[35] = b35 ^ ~b37 & b39;
        s[44] = b44 ^ ~b46 & b48;
        s[45] = b45 ^ ~b47 & b49;
        s[6] = b6 ^ ~b8 & b0;
        s[7] = b7 ^ ~b9 & b1;
        s[16] = b16 ^ ~b18 & b10;
        s[17] = b17 ^ ~b19 & b11;
        s[26] = b26 ^ ~b28 & b20;
        s[27] = b27 ^ ~b29 & b21;
        s[36] = b36 ^ ~b38 & b30;
        s[37] = b37 ^ ~b39 & b31;
        s[46] = b46 ^ ~b48 & b40;
        s[47] = b47 ^ ~b49 & b41;
        s[8] = b8 ^ ~b0 & b2;
        s[9] = b9 ^ ~b1 & b3;
        s[18] = b18 ^ ~b10 & b12;
        s[19] = b19 ^ ~b11 & b13;
        s[28] = b28 ^ ~b20 & b22;
        s[29] = b29 ^ ~b21 & b23;
        s[38] = b38 ^ ~b30 & b32;
        s[39] = b39 ^ ~b31 & b33;
        s[48] = b48 ^ ~b40 & b42;
        s[49] = b49 ^ ~b41 & b43;
        s[0] ^= RC[n];
        s[1] ^= RC[n + 1];
      }
    };

    if (COMMON_JS) {
      module.exports = methods;
    } else {
      for (i = 0; i < methodNames.length; ++i) {
        root[methodNames[i]] = methods[methodNames[i]];
      }
    }
  })();
})(sha3$2);

Object.defineProperty(utils$3, "__esModule", {
  value: true
});
var sha3$1 = sha3$2.exports;
/**
 * Keccak256 hash
 * @param data The data
 */

function keccak256(data) {
  return '0x' + sha3$1.keccak_256(toByteArray(data));
}

utils$3.keccak256 = keccak256;
/**
 * Adding padding to string on the left
 * @param value The value
 * @param chars The chars
 */

utils$3.padLeft = function (value, chars) {
  var hasPrefix = /^0x/i.test(value) || typeof value === 'number';
  value = value.toString().replace(/^0x/i, '');
  var padding = chars - value.length + 1 >= 0 ? chars - value.length + 1 : 0;
  return (hasPrefix ? '0x' : '') + new Array(padding).join('0') + value;
};
/**
 * Convert bytes to hex
 * @param bytes The bytes
 */


function bytesToHex$1(bytes) {
  var hex = [];

  for (var i = 0; i < bytes.length; i++) {
    hex.push((bytes[i] >>> 4).toString(16));
    hex.push((bytes[i] & 0xf).toString(16));
  }

  return "0x".concat(hex.join('').replace(/^0+/, ''));
}

utils$3.bytesToHex = bytesToHex$1;
/**
 * To byte array
 * @param value The value
 */

function toByteArray(value) {
  if (value == null) {
    throw new Error('cannot convert null value to array');
  }

  if (typeof value === 'string') {
    var match = value.match(/^(0x)?[0-9a-fA-F]*$/);

    if (!match) {
      throw new Error('invalid hexidecimal string');
    }

    if (match[1] !== '0x') {
      throw new Error('hex string must have 0x prefix');
    }

    value = value.substring(2);

    if (value.length % 2) {
      value = '0' + value;
    }

    var result = [];

    for (var i = 0; i < value.length; i += 2) {
      result.push(parseInt(value.substr(i, 2), 16));
    }

    return addSlice(new Uint8Array(result));
  }

  if (isByteArray(value)) {
    return addSlice(new Uint8Array(value));
  }

  throw new Error('invalid arrayify value');
}

utils$3.toByteArray = toByteArray;
/**
 * Is byte array
 * @param value The value
 */

function isByteArray(value) {
  if (!value || // tslint:disable-next-line: radix
  parseInt(String(value.length)) != value.length || typeof value === 'string') {
    return false;
  }

  for (var i = 0; i < value.length; i++) {
    var v = value[i]; // tslint:disable-next-line: radix

    if (v < 0 || v >= 256 || parseInt(String(v)) != v) {
      return false;
    }
  }

  return true;
}
/**
 * Add slice to array
 * @param array The array
 */


function addSlice(array) {
  var _arguments = arguments;

  if (array.slice !== undefined) {
    return array;
  }

  array.slice = function () {
    var args = Array.prototype.slice.call(_arguments);
    return addSlice(new Uint8Array(Array.prototype.slice.apply(array, args)));
  };

  return array;
}

Object.defineProperty(dist, "__esModule", {
  value: true
});
var utils_1 = utils$3;
/**
 * Returns true if the bloom is a valid bloom
 * @param bloom The bloom
 */

function isBloom$1(bloom) {
  if (typeof bloom !== 'string') {
    return false;
  }

  if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
    return false;
  }

  if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
    return true;
  }

  return false;
}

dist.isBloom = isBloom$1;
/**
 * Returns true if the value is part of the given bloom
 * note: false positives are possible.
 * @param bloom encoded bloom
 * @param value The value
 */

function isInBloom$1(bloom, value) {
  if (_typeof(value) === 'object' && value.constructor === Uint8Array) {
    value = utils_1.bytesToHex(value);
  }

  var hash = utils_1.keccak256(value).replace('0x', '');

  for (var i = 0; i < 12; i += 4) {
    // calculate bit position in bloom filter that must be active
    var bitpos = (parseInt(hash.substr(i, 2), 16) << 8) + parseInt(hash.substr(i + 2, 2), 16) & 2047; // test if bitpos in bloom is active

    var code = codePointToInt(bloom.charCodeAt(bloom.length - 1 - Math.floor(bitpos / 4)));
    var offset = 1 << bitpos % 4;

    if ((code & offset) !== offset) {
      return false;
    }
  }

  return true;
}

dist.isInBloom = isInBloom$1;
/**
 * Code points to int
 * @param codePoint The code point
 */

function codePointToInt(codePoint) {
  if (codePoint >= 48 && codePoint <= 57) {
    /* ['0'..'9'] -> [0..9] */
    return codePoint - 48;
  }

  if (codePoint >= 65 && codePoint <= 70) {
    /* ['A'..'F'] -> [10..15] */
    return codePoint - 55;
  }

  if (codePoint >= 97 && codePoint <= 102) {
    /* ['a'..'f'] -> [10..15] */
    return codePoint - 87;
  }

  throw new Error('invalid bloom');
}
/**
 * Returns true if the ethereum users address is part of the given bloom.
 * note: false positives are possible.
 * @param bloom encoded bloom
 * @param address the address to test
 */


function isUserEthereumAddressInBloom$1(bloom, ethereumAddress) {
  if (!isBloom$1(bloom)) {
    throw new Error('Invalid bloom given');
  }

  if (!isAddress$1(ethereumAddress)) {
    throw new Error("Invalid ethereum address given: \"".concat(ethereumAddress, "\""));
  } // you have to pad the ethereum address to 32 bytes
  // else the bloom filter does not work
  // this is only if your matching the USERS
  // ethereum address. Contract address do not need this
  // hence why we have 2 methods
  // (0x is not in the 2nd parameter of padleft so 64 chars is fine)


  var address = utils_1.padLeft(ethereumAddress, 64);
  return isInBloom$1(bloom, address);
}

dist.isUserEthereumAddressInBloom = isUserEthereumAddressInBloom$1;
/**
 * Returns true if the contract address is part of the given bloom.
 * note: false positives are possible.
 * @param bloom encoded bloom
 * @param contractAddress the contract address to test
 */

function isContractAddressInBloom$1(bloom, contractAddress) {
  if (!isBloom$1(bloom)) {
    throw new Error('Invalid bloom given');
  }

  if (!isAddress$1(contractAddress)) {
    throw new Error("Invalid contract address given: \"".concat(contractAddress, "\""));
  }

  return isInBloom$1(bloom, contractAddress);
}

dist.isContractAddressInBloom = isContractAddressInBloom$1;
/**
 * Returns true if the topic is part of the given bloom.
 * note: false positives are possible.
 * @param bloom encoded bloom
 * @param topic the topic encoded hex
 */

function isTopicInBloom$1(bloom, topic) {
  if (!isBloom$1(bloom)) {
    throw new Error('Invalid bloom given');
  }

  if (!isTopic$1(topic)) {
    throw new Error('Invalid topic');
  }

  return isInBloom$1(bloom, topic);
}

dist.isTopicInBloom = isTopicInBloom$1;
/**
 * Checks if its a valid topic
 * @param topic encoded hex topic
 */

function isTopic$1(topic) {
  if (typeof topic !== 'string') {
    return false;
  }

  if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
    return true;
  }

  return false;
}

dist.isTopic = isTopic$1;
/**
 * Is valid address
 * @param address The address
 */

function isAddress$1(address) {
  if (typeof address !== 'string') {
    return false;
  }

  if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    return true;
  }

  if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    return true;
  }

  return false;
}

dist.isAddress = isAddress$1;

/**
 * @file utils.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var BN$3 = bn$2.exports;
var numberToBN = src;
var utf8 = utf8$1;
var ethereumjsUtil = dist_browser$1;
var ethereumBloomFilters = dist;
/**
 * Returns true if object is BN, otherwise false
 *
 * @method isBN
 * @param {Object} object
 * @return {Boolean}
 */

var isBN = function isBN(object) {
  return BN$3.isBN(object);
};
/**
 * Returns true if object is BigNumber, otherwise false
 *
 * @method isBigNumber
 * @param {Object} object
 * @return {Boolean}
 */


var isBigNumber = function isBigNumber(object) {
  return object && object.constructor && object.constructor.name === 'BigNumber';
};
/**
 * Takes an input and transforms it into an BN
 *
 * @method toBN
 * @param {Number|String|BN} number, string, HEX string or BN
 * @return {BN} BN
 */


var toBN = function toBN(number) {
  try {
    return numberToBN.apply(null, arguments);
  } catch (e) {
    throw new Error(e + ' Given value: "' + number + '"');
  }
};
/**
 * Takes and input transforms it into BN and if it is negative value, into two's complement
 *
 * @method toTwosComplement
 * @param {Number|String|BN} number
 * @return {String}
 */


var toTwosComplement = function toTwosComplement(number) {
  return '0x' + toBN(number).toTwos(256).toString(16, 64);
};
/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX address
 * @return {Boolean}
 */


var isAddress = function isAddress(address) {
  // check if it has the basic requirements of an address
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false; // If it's ALL lowercase or ALL upppercase
  } else if (/^(0x|0X)?[0-9a-f]{40}$/.test(address) || /^(0x|0X)?[0-9A-F]{40}$/.test(address)) {
    return true; // Otherwise check each case
  } else {
    return checkAddressChecksum(address);
  }
};
/**
 * Checks if the given string is a checksummed address
 *
 * @method checkAddressChecksum
 * @param {String} address the given HEX address
 * @return {Boolean}
 */


var checkAddressChecksum = function checkAddressChecksum(address) {
  // Check each case
  address = address.replace(/^0x/i, '');
  var addressHash = sha3(address.toLowerCase()).replace(/^0x/i, '');

  for (var i = 0; i < 40; i++) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
      return false;
    }
  }

  return true;
};
/**
 * Should be called to pad string to expected length
 *
 * @method leftPad
 * @param {String} string to be padded
 * @param {Number} chars that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */


var leftPad = function leftPad(string, chars, sign) {
  var hasPrefix = /^0x/i.test(string) || typeof string === 'number';
  string = string.toString(16).replace(/^0x/i, '');
  var padding = chars - string.length + 1 >= 0 ? chars - string.length + 1 : 0;
  return (hasPrefix ? '0x' : '') + new Array(padding).join(sign ? sign : "0") + string;
};
/**
 * Should be called to pad string to expected length
 *
 * @method rightPad
 * @param {String} string to be padded
 * @param {Number} chars that result string should have
 * @param {String} sign, by default 0
 * @returns {String} right aligned string
 */


var rightPad = function rightPad(string, chars, sign) {
  var hasPrefix = /^0x/i.test(string) || typeof string === 'number';
  string = string.toString(16).replace(/^0x/i, '');
  var padding = chars - string.length + 1 >= 0 ? chars - string.length + 1 : 0;
  return (hasPrefix ? '0x' : '') + string + new Array(padding).join(sign ? sign : "0");
};
/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method utf8ToHex
 * @param {String} str
 * @returns {String} hex representation of input string
 */


var utf8ToHex = function utf8ToHex(str) {
  str = utf8.encode(str);
  var hex = ""; // remove \u0000 padding from either side

  str = str.replace(/^(?:\u0000)*/, '');
  str = str.split("").reverse().join("");
  str = str.replace(/^(?:\u0000)*/, '');
  str = str.split("").reverse().join("");

  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i); // if (code !== 0) {

    var n = code.toString(16);
    hex += n.length < 2 ? '0' + n : n; // }
  }

  return "0x" + hex;
};
/**
 * Should be called to get utf8 from it's hex representation
 *
 * @method hexToUtf8
 * @param {String} hex
 * @returns {String} ascii string representation of hex value
 */


var hexToUtf8 = function hexToUtf8(hex) {
  if (!isHexStrict(hex)) throw new Error('The parameter "' + hex + '" must be a valid HEX string.');
  var str = "";
  var code = 0;
  hex = hex.replace(/^0x/i, ''); // remove 00 padding from either side

  hex = hex.replace(/^(?:00)*/, '');
  hex = hex.split("").reverse().join("");
  hex = hex.replace(/^(?:00)*/, '');
  hex = hex.split("").reverse().join("");
  var l = hex.length;

  for (var i = 0; i < l; i += 2) {
    code = parseInt(hex.substr(i, 2), 16); // if (code !== 0) {

    str += String.fromCharCode(code); // }
  }

  return utf8.decode(str);
};
/**
 * Converts value to it's number representation
 *
 * @method hexToNumber
 * @param {String|Number|BN} value
 * @return {String}
 */


var hexToNumber = function hexToNumber(value) {
  if (!value) {
    return value;
  }

  if (typeof value === 'string' && !isHexStrict(value)) {
    throw new Error('Given value "' + value + '" is not a valid hex string.');
  }

  return toBN(value).toNumber();
};
/**
 * Converts value to it's decimal representation in string
 *
 * @method hexToNumberString
 * @param {String|Number|BN} value
 * @return {String}
 */


var hexToNumberString = function hexToNumberString(value) {
  if (!value) return value;

  if (typeof value === 'string' && !isHexStrict(value)) {
    throw new Error('Given value "' + value + '" is not a valid hex string.');
  }

  return toBN(value).toString(10);
};
/**
 * Converts value to it's hex representation
 *
 * @method numberToHex
 * @param {String|Number|BN} value
 * @return {String}
 */


var numberToHex = function numberToHex(value) {
  if (value === null || value === undefined) {
    return value;
  }

  if (!isFinite(value) && !isHexStrict(value)) {
    throw new Error('Given input "' + value + '" is not a number.');
  }

  var number = toBN(value);
  var result = number.toString(16);
  return number.lt(new BN$3(0)) ? '-0x' + result.substr(1) : '0x' + result;
};
/**
 * Convert a byte array to a hex string
 *
 * Note: Implementation from crypto-js
 *
 * @method bytesToHex
 * @param {Array} bytes
 * @return {String} the hex string
 */


var bytesToHex = function bytesToHex(bytes) {
  for (var hex = [], i = 0; i < bytes.length; i++) {
    /* jshint ignore:start */
    hex.push((bytes[i] >>> 4).toString(16));
    hex.push((bytes[i] & 0xF).toString(16));
    /* jshint ignore:end */
  }

  return '0x' + hex.join("");
};
/**
 * Convert a hex string to a byte array
 *
 * Note: Implementation from crypto-js
 *
 * @method hexToBytes
 * @param {string} hex
 * @return {Array} the byte array
 */


var hexToBytes = function hexToBytes(hex) {
  hex = hex.toString(16);

  if (!isHexStrict(hex)) {
    throw new Error('Given value "' + hex + '" is not a valid hex string.');
  }

  hex = hex.replace(/^0x/i, '');

  for (var bytes = [], c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }

  return bytes;
};
/**
 * Auto converts any given value into it's hex representation.
 *
 * And even stringifys objects before.
 *
 * @method toHex
 * @param {String|Number|BN|Object|Buffer} value
 * @param {Boolean} returnType
 * @return {String}
 */


var toHex = function toHex(value, returnType) {
  /*jshint maxcomplexity: false */
  if (isAddress(value)) {
    return returnType ? 'address' : '0x' + value.toLowerCase().replace(/^0x/i, '');
  }

  if (typeof value === 'boolean') {
    return returnType ? 'bool' : value ? '0x01' : '0x00';
  }

  if (Buffer.isBuffer(value)) {
    return '0x' + value.toString('hex');
  }

  if (_typeof(value) === 'object' && !!value && !isBigNumber(value) && !isBN(value)) {
    return returnType ? 'string' : utf8ToHex(JSON.stringify(value));
  } // if its a negative number, pass it through numberToHex


  if (typeof value === 'string') {
    if (value.indexOf('-0x') === 0 || value.indexOf('-0X') === 0) {
      return returnType ? 'int256' : numberToHex(value);
    } else if (value.indexOf('0x') === 0 || value.indexOf('0X') === 0) {
      return returnType ? 'bytes' : value;
    } else if (!isFinite(value)) {
      return returnType ? 'string' : utf8ToHex(value);
    }
  }

  return returnType ? value < 0 ? 'int256' : 'uint256' : numberToHex(value);
};
/**
 * Check if string is HEX, requires a 0x in front
 *
 * @method isHexStrict
 * @param {String} hex to be checked
 * @returns {Boolean}
 */


var isHexStrict = function isHexStrict(hex) {
  return (typeof hex === 'string' || typeof hex === 'number') && /^(-)?0x[0-9a-f]*$/i.test(hex);
};
/**
 * Check if string is HEX
 *
 * @method isHex
 * @param {String} hex to be checked
 * @returns {Boolean}
 */


var isHex = function isHex(hex) {
  return (typeof hex === 'string' || typeof hex === 'number') && /^(-0x|0x)?[0-9a-f]*$/i.test(hex);
};
/**
 * Remove 0x prefix from string
 *
 * @method stripHexPrefix
 * @param {String} str to be checked
 * @returns {String}
 */


var stripHexPrefix = function stripHexPrefix(str) {
  if (str !== 0 && isHex(str)) return str.replace(/^(-)?0x/i, '$1');
  return str;
};
/**
 * Returns true if given string is a valid Ethereum block header bloom.
 *
 * @method isBloom
 * @param {String} bloom encoded bloom filter
 * @return {Boolean}
 */


var isBloom = function isBloom(bloom) {
  return ethereumBloomFilters.isBloom(bloom);
};
/**
 * Returns true if the ethereum users address is part of the given bloom
 * note: false positives are possible.
 *
 * @method isUserEthereumAddressInBloom
 * @param {String} ethereumAddress encoded bloom filter
 * @param {String} bloom ethereum addresss
 * @return {Boolean}
 */


var isUserEthereumAddressInBloom = function isUserEthereumAddressInBloom(bloom, ethereumAddress) {
  return ethereumBloomFilters.isUserEthereumAddressInBloom(bloom, ethereumAddress);
};
/**
 * Returns true if the contract address is part of the given bloom
 * note: false positives are possible.
 *
 * @method isUserEthereumAddressInBloom
 * @param {String} bloom encoded bloom filter
 * @param {String} contractAddress contract addresss
 * @return {Boolean}
 */


var isContractAddressInBloom = function isContractAddressInBloom(bloom, contractAddress) {
  return ethereumBloomFilters.isContractAddressInBloom(bloom, contractAddress);
};
/**
 * Returns true if given string is a valid log topic.
 *
 * @method isTopic
 * @param {String} topic encoded topic
 * @return {Boolean}
 */


var isTopic = function isTopic(topic) {
  return ethereumBloomFilters.isTopic(topic);
};
/**
 * Returns true if the topic is part of the given bloom
 * note: false positives are possible.
 *
 * @method isTopicInBloom
 * @param {String} bloom encoded bloom filter
 * @param {String} topic encoded topic
 * @return {Boolean}
 */


var isTopicInBloom = function isTopicInBloom(bloom, topic) {
  return ethereumBloomFilters.isTopicInBloom(bloom, topic);
};
/**
 * Returns true if the value is part of the given bloom
 * note: false positives are possible.
 *
 * @method isInBloom
 * @param {String} bloom encoded bloom filter
 * @param {String | Uint8Array} topic encoded value
 * @return {Boolean}
 */


var isInBloom = function isInBloom(bloom, topic) {
  return ethereumBloomFilters.isInBloom(bloom, topic);
};
/**
 * Hashes values to a sha3 hash using keccak 256
 *
 * To hash a HEX string the hex must have 0x in front.
 *
 * @method sha3
 * @return {String} the sha3 string
 */


var SHA3_NULL_S = '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470';

var sha3 = function sha3(value) {
  if (isBN(value)) {
    value = value.toString();
  }

  if (isHexStrict(value) && /^0x/i.test(value.toString())) {
    value = ethereumjsUtil.toBuffer(value);
  } else if (typeof value === 'string') {
    // Assume value is an arbitrary string
    value = Buffer.from(value, 'utf-8');
  }

  var returnValue = ethereumjsUtil.bufferToHex(ethereumjsUtil.keccak256(value));

  if (returnValue === SHA3_NULL_S) {
    return null;
  } else {
    return returnValue;
  }
}; // expose the under the hood keccak256


sha3._Hash = ethereumjsUtil.keccak256;
/**
 * @method sha3Raw
 *
 * @param value
 *
 * @returns {string}
 */

var sha3Raw = function sha3Raw(value) {
  value = sha3(value);

  if (value === null) {
    return SHA3_NULL_S;
  }

  return value;
};
/**
 * Auto converts any given value into it's hex representation,
 * then converts hex to number.
 *
 * @method toNumber
 * @param {String|Number|BN} value
 * @return {Number}
 */


var toNumber = function toNumber(value) {
  return typeof value === 'number' ? value : hexToNumber(toHex(value));
};

var utils$2 = {
  BN: BN$3,
  isBN: isBN,
  isBigNumber: isBigNumber,
  toBN: toBN,
  isAddress: isAddress,
  isBloom: isBloom,
  isUserEthereumAddressInBloom: isUserEthereumAddressInBloom,
  isContractAddressInBloom: isContractAddressInBloom,
  isTopic: isTopic,
  isTopicInBloom: isTopicInBloom,
  isInBloom: isInBloom,
  checkAddressChecksum: checkAddressChecksum,
  utf8ToHex: utf8ToHex,
  hexToUtf8: hexToUtf8,
  hexToNumber: hexToNumber,
  hexToNumberString: hexToNumberString,
  numberToHex: numberToHex,
  toHex: toHex,
  hexToBytes: hexToBytes,
  bytesToHex: bytesToHex,
  isHex: isHex,
  isHexStrict: isHexStrict,
  stripHexPrefix: stripHexPrefix,
  leftPad: leftPad,
  rightPad: rightPad,
  toTwosComplement: toTwosComplement,
  sha3: sha3,
  sha3Raw: sha3Raw,
  toNumber: toNumber
};

/**
 * @file soliditySha3.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var BN$2 = bn$2.exports;
var utils$1 = utils$2;

var _elementaryName = function _elementaryName(name) {
  /*jshint maxcomplexity:false */
  if (name.startsWith('int[')) {
    return 'int256' + name.slice(3);
  } else if (name === 'int') {
    return 'int256';
  } else if (name.startsWith('uint[')) {
    return 'uint256' + name.slice(4);
  } else if (name === 'uint') {
    return 'uint256';
  } else if (name.startsWith('fixed[')) {
    return 'fixed128x128' + name.slice(5);
  } else if (name === 'fixed') {
    return 'fixed128x128';
  } else if (name.startsWith('ufixed[')) {
    return 'ufixed128x128' + name.slice(6);
  } else if (name === 'ufixed') {
    return 'ufixed128x128';
  }

  return name;
}; // Parse N from type<N>


var _parseTypeN = function _parseTypeN(type) {
  var typesize = /^\D+(\d+).*$/.exec(type);
  return typesize ? parseInt(typesize[1], 10) : null;
}; // Parse N from type[<N>]


var _parseTypeNArray = function _parseTypeNArray(type) {
  var arraySize = /^\D+\d*\[(\d+)\]$/.exec(type);
  return arraySize ? parseInt(arraySize[1], 10) : null;
};

var _parseNumber = function _parseNumber(arg) {
  var type = _typeof(arg);

  if (type === 'string') {
    if (utils$1.isHexStrict(arg)) {
      return new BN$2(arg.replace(/0x/i, ''), 16);
    } else {
      return new BN$2(arg, 10);
    }
  } else if (type === 'number') {
    return new BN$2(arg);
  } else if (utils$1.isBigNumber(arg)) {
    return new BN$2(arg.toString(10));
  } else if (utils$1.isBN(arg)) {
    return arg;
  } else {
    throw new Error(arg + ' is not a number');
  }
};

var _solidityPack = function _solidityPack(type, value, arraySize) {
  /*jshint maxcomplexity:false */
  var size, num;
  type = _elementaryName(type);

  if (type === 'bytes') {
    if (value.replace(/^0x/i, '').length % 2 !== 0) {
      throw new Error('Invalid bytes characters ' + value.length);
    }

    return value;
  } else if (type === 'string') {
    return utils$1.utf8ToHex(value);
  } else if (type === 'bool') {
    return value ? '01' : '00';
  } else if (type.startsWith('address')) {
    if (arraySize) {
      size = 64;
    } else {
      size = 40;
    }

    if (!utils$1.isAddress(value)) {
      throw new Error(value + ' is not a valid address, or the checksum is invalid.');
    }

    return utils$1.leftPad(value.toLowerCase(), size);
  }

  size = _parseTypeN(type);

  if (type.startsWith('bytes')) {
    if (!size) {
      throw new Error('bytes[] not yet supported in solidity');
    } // must be 32 byte slices when in an array


    if (arraySize) {
      size = 32;
    }

    if (size < 1 || size > 32 || size < value.replace(/^0x/i, '').length / 2) {
      throw new Error('Invalid bytes' + size + ' for ' + value);
    }

    return utils$1.rightPad(value, size * 2);
  } else if (type.startsWith('uint')) {
    if (size % 8 || size < 8 || size > 256) {
      throw new Error('Invalid uint' + size + ' size');
    }

    num = _parseNumber(value);

    if (num.bitLength() > size) {
      throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength());
    }

    if (num.lt(new BN$2(0))) {
      throw new Error('Supplied uint ' + num.toString() + ' is negative');
    }

    return size ? utils$1.leftPad(num.toString('hex'), size / 8 * 2) : num;
  } else if (type.startsWith('int')) {
    if (size % 8 || size < 8 || size > 256) {
      throw new Error('Invalid int' + size + ' size');
    }

    num = _parseNumber(value);

    if (num.bitLength() > size) {
      throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength());
    }

    if (num.lt(new BN$2(0))) {
      return num.toTwos(size).toString('hex');
    } else {
      return size ? utils$1.leftPad(num.toString('hex'), size / 8 * 2) : num;
    }
  } else {
    // FIXME: support all other types
    throw new Error('Unsupported or invalid type: ' + type);
  }
};

var _processSolidityEncodePackedArgs = function _processSolidityEncodePackedArgs(arg) {
  /*jshint maxcomplexity:false */
  if (Array.isArray(arg)) {
    throw new Error('Autodetection of array types is not supported.');
  }

  var type,
      value = '';
  var hexArg, arraySize; // if type is given

  if (!!arg && _typeof(arg) === 'object' && (arg.hasOwnProperty('v') || arg.hasOwnProperty('t') || arg.hasOwnProperty('value') || arg.hasOwnProperty('type'))) {
    type = arg.hasOwnProperty('t') ? arg.t : arg.type;
    value = arg.hasOwnProperty('v') ? arg.v : arg.value; // otherwise try to guess the type
  } else {
    type = utils$1.toHex(arg, true);
    value = utils$1.toHex(arg);

    if (!type.startsWith('int') && !type.startsWith('uint')) {
      type = 'bytes';
    }
  }

  if ((type.startsWith('int') || type.startsWith('uint')) && typeof value === 'string' && !/^(-)?0x/i.test(value)) {
    value = new BN$2(value);
  } // get the array size


  if (Array.isArray(value)) {
    arraySize = _parseTypeNArray(type);

    if (arraySize && value.length !== arraySize) {
      throw new Error(type + ' is not matching the given array ' + JSON.stringify(value));
    } else {
      arraySize = value.length;
    }
  }

  if (Array.isArray(value)) {
    hexArg = value.map(function (val) {
      return _solidityPack(type, val, arraySize).toString('hex').replace('0x', '');
    });
    return hexArg.join('');
  } else {
    hexArg = _solidityPack(type, value, arraySize);
    return hexArg.toString('hex').replace('0x', '');
  }
};
/**
 * Hashes solidity values to a sha3 hash using keccak 256
 *
 * @method soliditySha3
 * @return {Object} the sha3
 */


var soliditySha3$1 = function soliditySha3() {
  /*jshint maxcomplexity:false */
  var args = Array.prototype.slice.call(arguments);
  var hexArgs = args.map(_processSolidityEncodePackedArgs); // console.log(args, hexArgs);
  // console.log('0x'+ hexArgs.join(''));

  return utils$1.sha3('0x' + hexArgs.join(''));
};
/**
 * Hashes solidity values to a sha3 hash using keccak 256 but does return the hash of value `null` instead of `null`
 *
 * @method soliditySha3Raw
 * @return {Object} the sha3
 */


var soliditySha3Raw = function soliditySha3Raw() {
  return utils$1.sha3Raw('0x' + Array.prototype.slice.call(arguments).map(_processSolidityEncodePackedArgs).join(''));
};
/**
 * Encode packed args to hex
 *
 * @method encodePacked
 * @return {String} the hex encoded arguments
 */


var encodePacked = function encodePacked() {
  /*jshint maxcomplexity:false */
  var args = Array.prototype.slice.call(arguments);
  var hexArgs = args.map(_processSolidityEncodePackedArgs);
  return '0x' + hexArgs.join('').toLowerCase();
};

var soliditySha3_1 = {
  soliditySha3: soliditySha3$1,
  soliditySha3Raw: soliditySha3Raw,
  encodePacked: encodePacked
};

/**
 * @file utils.js
 * @author Marek Kotewicz <marek@parity.io>
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var ethjsUnit = lib$2;
var utils = utils$2;
var soliditySha3 = soliditySha3_1;
var randombytes = randombytes$2;
var BN$1 = bn$2.exports;
/**
 * Fires an error in an event emitter and callback and returns the eventemitter
 *
 * @method _fireError
 * @param {Object} error a string, a error, or an object with {message, data}
 * @param {Object} emitter
 * @param {Function} reject
 * @param {Function} callback
 * @param {any} optionalData
 * @return {Object} the emitter
 */

var _fireError = function _fireError(error, emitter, reject, callback, optionalData) {
  /*jshint maxcomplexity: 10 */
  // add data if given
  if (!!error && _typeof(error) === 'object' && !(error instanceof Error) && error.data) {
    if (!!error.data && _typeof(error.data) === 'object' || Array.isArray(error.data)) {
      error.data = JSON.stringify(error.data, null, 2);
    }

    error = error.message + "\n" + error.data;
  }

  if (typeof error === 'string') {
    error = new Error(error);
  }

  if (typeof callback === 'function') {
    callback(error, optionalData);
  }

  if (typeof reject === 'function') {
    // suppress uncatched error if an error listener is present
    // OR suppress uncatched error if an callback listener is present
    if (emitter && typeof emitter.listeners === 'function' && emitter.listeners('error').length || typeof callback === 'function') {
      emitter["catch"](function () {});
    } // reject later, to be able to return emitter


    setTimeout(function () {
      reject(error);
    }, 1);
  }

  if (emitter && typeof emitter.emit === 'function') {
    // emit later, to be able to return emitter
    setTimeout(function () {
      emitter.emit('error', error, optionalData);
      emitter.removeAllListeners();
    }, 1);
  }

  return emitter;
};
/**
 * Should be used to create full function/event name from json abi
 *
 * @method _jsonInterfaceMethodToString
 * @param {Object} json
 * @return {String} full function/event name
 */


var _jsonInterfaceMethodToString = function _jsonInterfaceMethodToString(json) {
  if (!!json && _typeof(json) === 'object' && json.name && json.name.indexOf('(') !== -1) {
    return json.name;
  }

  return json.name + '(' + _flattenTypes(false, json.inputs).join(',') + ')';
};
/**
 * Should be used to flatten json abi inputs/outputs into an array of type-representing-strings
 *
 * @method _flattenTypes
 * @param {bool} includeTuple
 * @param {Object} puts
 * @return {Array} parameters as strings
 */


var _flattenTypes = function _flattenTypes(includeTuple, puts) {
  // console.log("entered _flattenTypes. inputs/outputs: " + puts)
  var types = [];
  puts.forEach(function (param) {
    if (_typeof(param.components) === 'object') {
      if (param.type.substring(0, 5) !== 'tuple') {
        throw new Error('components found but type is not tuple; report on GitHub');
      }

      var suffix = '';
      var arrayBracket = param.type.indexOf('[');

      if (arrayBracket >= 0) {
        suffix = param.type.substring(arrayBracket);
      }

      var result = _flattenTypes(includeTuple, param.components); // console.log("result should have things: " + result)


      if (Array.isArray(result) && includeTuple) {
        // console.log("include tuple word, and its an array. joining...: " + result.types)
        types.push('tuple(' + result.join(',') + ')' + suffix);
      } else if (!includeTuple) {
        // console.log("don't include tuple, but its an array. joining...: " + result)
        types.push('(' + result.join(',') + ')' + suffix);
      } else {
        // console.log("its a single type within a tuple: " + result.types)
        types.push('(' + result + ')');
      }
    } else {
      // console.log("its a type and not directly in a tuple: " + param.type)
      types.push(param.type);
    }
  });
  return types;
};
/**
 * Returns a random hex string by the given bytes size
 *
 * @param {Number} size
 * @returns {string}
 */


var randomHex = function randomHex(size) {
  return '0x' + randombytes(size).toString('hex');
};
/**
 * Should be called to get ascii from it's hex representation
 *
 * @method hexToAscii
 * @param {String} hex
 * @returns {String} ascii string representation of hex value
 */


var hexToAscii = function hexToAscii(hex) {
  if (!utils.isHexStrict(hex)) throw new Error('The parameter must be a valid HEX string.');
  var str = "";
  var i = 0,
      l = hex.length;

  if (hex.substring(0, 2) === '0x') {
    i = 2;
  }

  for (; i < l; i += 2) {
    var code = parseInt(hex.substr(i, 2), 16);
    str += String.fromCharCode(code);
  }

  return str;
};
/**
 * Should be called to get hex representation (prefixed by 0x) of ascii string
 *
 * @method asciiToHex
 * @param {String} str
 * @returns {String} hex representation of input string
 */


var asciiToHex = function asciiToHex(str) {
  if (!str) return "0x00";
  var hex = "";

  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    var n = code.toString(16);
    hex += n.length < 2 ? '0' + n : n;
  }

  return "0x" + hex;
};
/**
 * Returns value of unit in Wei
 *
 * @method getUnitValue
 * @param {String} unit the unit to convert to, default ether
 * @returns {BN} value of the unit (in Wei)
 * @throws error if the unit is not correct:w
 */


var getUnitValue = function getUnitValue(unit) {
  unit = unit ? unit.toLowerCase() : 'ether';

  if (!ethjsUnit.unitMap[unit]) {
    throw new Error('This unit "' + unit + '" doesn\'t exist, please use the one of the following units' + JSON.stringify(ethjsUnit.unitMap, null, 2));
  }

  return unit;
};
/**
 * Takes a number of wei and converts it to any other ether unit.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method fromWei
 * @param {Number|String} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert to, default ether
 * @return {String|Object} When given a BN object it returns one as well, otherwise a number
 */


var fromWei = function fromWei(number, unit) {
  unit = getUnitValue(unit);

  if (!utils.isBN(number) && !(typeof number === 'string')) {
    throw new Error('Please pass numbers as strings or BN objects to avoid precision errors.');
  }

  return utils.isBN(number) ? ethjsUnit.fromWei(number, unit) : ethjsUnit.fromWei(number, unit).toString(10);
};
/**
 * Takes a number of a unit and converts it to wei.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @method toWei
 * @param {Number|String|BN} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert from, default ether
 * @return {String|Object} When given a BN object it returns one as well, otherwise a number
 */


var toWei = function toWei(number, unit) {
  unit = getUnitValue(unit);

  if (!utils.isBN(number) && !(typeof number === 'string')) {
    throw new Error('Please pass numbers as strings or BN objects to avoid precision errors.');
  }

  return utils.isBN(number) ? ethjsUnit.toWei(number, unit) : ethjsUnit.toWei(number, unit).toString(10);
};
/**
 * Converts to a checksum address
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX address
 * @return {String}
 */


var toChecksumAddress = function toChecksumAddress(address) {
  if (typeof address === 'undefined') return '';
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) throw new Error('Given address "' + address + '" is not a valid Ethereum address.');
  address = address.toLowerCase().replace(/^0x/i, '');
  var addressHash = utils.sha3(address).replace(/^0x/i, '');
  var checksumAddress = '0x';

  for (var i = 0; i < address.length; i++) {
    // If ith character is 8 to f then make it uppercase
    if (parseInt(addressHash[i], 16) > 7) {
      checksumAddress += address[i].toUpperCase();
    } else {
      checksumAddress += address[i];
    }
  }

  return checksumAddress;
};
/**
 * Returns -1 if a<b, 1 if a>b; 0 if a == b.
 * For more details on this type of function, see
 * developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *
 * @method compareBlockNumbers
 *
 * @param {String|Number|BN} a
 *
 * @param {String|Number|BN} b
 *
 * @returns {Number} -1, 0, or 1
 */


var compareBlockNumbers = function compareBlockNumbers(a, b) {
  if (a == b) {
    return 0;
  } else if (("genesis" == a || "earliest" == a || 0 == a) && ("genesis" == b || "earliest" == b || 0 == b)) {
    return 0;
  } else if ("genesis" == a || "earliest" == a) {
    // b !== a, thus a < b
    return -1;
  } else if ("genesis" == b || "earliest" == b) {
    // b !== a, thus a > b
    return 1;
  } else if (a == "latest") {
    if (b == "pending") {
      return -1;
    } else {
      // b !== ("pending" OR "latest"), thus a > b
      return 1;
    }
  } else if (b === "latest") {
    if (a == "pending") {
      return 1;
    } else {
      // b !== ("pending" OR "latest"), thus a > b
      return -1;
    }
  } else if (a == "pending") {
    // b (== OR <) "latest", thus a > b
    return 1;
  } else if (b == "pending") {
    return -1;
  } else {
    var bnA = new BN$1(a);
    var bnB = new BN$1(b);

    if (bnA.lt(bnB)) {
      return -1;
    } else if (bnA.eq(bnB)) {
      return 0;
    } else {
      return 1;
    }
  }
};

var lib = {
  _fireError: _fireError,
  _jsonInterfaceMethodToString: _jsonInterfaceMethodToString,
  _flattenTypes: _flattenTypes,
  // extractDisplayName: extractDisplayName,
  // extractTypeName: extractTypeName,
  randomHex: randomHex,
  BN: utils.BN,
  isBN: utils.isBN,
  isBigNumber: utils.isBigNumber,
  isHex: utils.isHex,
  isHexStrict: utils.isHexStrict,
  sha3: utils.sha3,
  sha3Raw: utils.sha3Raw,
  keccak256: utils.sha3,
  soliditySha3: soliditySha3.soliditySha3,
  soliditySha3Raw: soliditySha3.soliditySha3Raw,
  encodePacked: soliditySha3.encodePacked,
  isAddress: utils.isAddress,
  checkAddressChecksum: utils.checkAddressChecksum,
  toChecksumAddress: toChecksumAddress,
  toHex: utils.toHex,
  toBN: utils.toBN,
  bytesToHex: utils.bytesToHex,
  hexToBytes: utils.hexToBytes,
  hexToNumberString: utils.hexToNumberString,
  hexToNumber: utils.hexToNumber,
  toDecimal: utils.hexToNumber,
  numberToHex: utils.numberToHex,
  fromDecimal: utils.numberToHex,
  hexToUtf8: utils.hexToUtf8,
  hexToString: utils.hexToUtf8,
  toUtf8: utils.hexToUtf8,
  stripHexPrefix: utils.stripHexPrefix,
  utf8ToHex: utils.utf8ToHex,
  stringToHex: utils.utf8ToHex,
  fromUtf8: utils.utf8ToHex,
  hexToAscii: hexToAscii,
  toAscii: hexToAscii,
  asciiToHex: asciiToHex,
  fromAscii: asciiToHex,
  unitMap: ethjsUnit.unitMap,
  toWei: toWei,
  fromWei: fromWei,
  padLeft: utils.leftPad,
  leftPad: utils.leftPad,
  padRight: utils.rightPad,
  rightPad: utils.rightPad,
  toTwosComplement: utils.toTwosComplement,
  isBloom: utils.isBloom,
  isUserEthereumAddressInBloom: utils.isUserEthereumAddressInBloom,
  isContractAddressInBloom: utils.isContractAddressInBloom,
  isTopic: utils.isTopic,
  isTopicInBloom: utils.isTopicInBloom,
  isInBloom: utils.isInBloom,
  compareBlockNumbers: compareBlockNumbers,
  toNumber: utils.toNumber
};

function typeToString(input) {
    if (input.type === 'tuple') {
        return '(' + input.components.map(typeToString).join(',') + ')';
    }
    return input.type;
}

const { BN } = require('web3-utils');
const abiCoder = require('web3-eth-abi');
class ABIDecoder {
    methodIDs;
    savedABIs;
    constructor() {
        this.methodIDs = {};
        this.savedABIs = [];
    }
    addABI(abiArray) {
        if (Array.isArray(abiArray)) {
            // Iterate new abi to generate method id"s
            abiArray.map((abi) => {
                if (abi.name) {
                    const signature = lib.sha3(abi.name + '(' + abi?.inputs?.map(typeToString).join(',') + ')');
                    if (!signature)
                        return;
                    if (abi.type === 'event') {
                        this.methodIDs[signature.slice(2)] = abi;
                    }
                    else {
                        this.methodIDs[signature.slice(2, 10)] = abi;
                    }
                }
            });
            this.savedABIs = this.savedABIs.concat(abiArray);
        }
        else {
            throw new Error('Expected ABI array, got ' + typeof abiArray);
        }
    }
    removeABI(abiArray) {
        if (Array.isArray(abiArray)) {
            // Iterate new abi to generate method id"s
            abiArray.map((abi) => {
                if (abi.name) {
                    const signature = lib.sha3(abi.name +
                        '(' +
                        abi?.inputs
                            ?.map((input) => {
                            return input.type;
                        })
                            .join(',') +
                        ')');
                    if (!signature)
                        return;
                    if (abi.type === 'event') {
                        if (this.methodIDs[signature.slice(2)]) {
                            delete this.methodIDs[signature.slice(2)];
                        }
                    }
                    else {
                        if (this.methodIDs[signature.slice(2, 10)]) {
                            delete this.methodIDs[signature.slice(2, 10)];
                        }
                    }
                }
            });
        }
        else {
            throw new Error('Expected ABI array, got ' + typeof abiArray);
        }
    }
    getABIs() {
        return this.savedABIs;
    }
    getMethodIDs() {
        return this.methodIDs;
    }
    decodeMethod(data) {
        const methodID = data.slice(2, 10);
        const abiItem = this.methodIDs[methodID];
        if (!abiItem)
            return;
        const decoded = abiCoder.decodeParameters(abiItem.inputs, data.slice(10));
        const retData = {
            name: abiItem.name,
            params: [],
        };
        for (let i = 0; i < decoded.__length__; i++) {
            const param = decoded[i];
            let parsedParam = param;
            const isUint = abiItem.inputs?.[i].type.indexOf('uint') === 0;
            const isInt = abiItem.inputs?.[i].type.indexOf('int') === 0;
            const isAddress = abiItem.inputs?.[i].type.indexOf('address') === 0;
            if (isUint || isInt) {
                const isArray = Array.isArray(param);
                if (isArray) {
                    parsedParam = param.map((val) => new BN(val).toString());
                }
                else {
                    parsedParam = new BN(param).toString();
                }
            }
            // Addresses returned by web3 are randomly cased so we need to standardize and lowercase all
            if (isAddress) {
                const isArray = Array.isArray(param);
                if (isArray) {
                    parsedParam = param.map((p) => p.toLowerCase());
                }
                else {
                    parsedParam = param.toLowerCase();
                }
            }
            retData.params.push({
                name: abiItem.inputs?.[i].name,
                value: parsedParam,
                type: abiItem.inputs?.[i].type,
            });
        }
        return retData;
    }
    decodeLogs(logs) {
        return logs
            .filter((log) => log.topics.length > 0)
            .map((logItem) => {
            const methodID = logItem.topics[0].slice(2);
            const method = this.methodIDs[methodID];
            if (method) {
                const logData = logItem.data;
                const decodedParams = [];
                let dataIndex = 0;
                let topicsIndex = 1;
                const dataTypes = [];
                method.inputs?.map(function (input) {
                    if (!input.indexed) {
                        dataTypes.push(input.type);
                    }
                });
                const decodedData = abiCoder.decodeParameters(dataTypes, logData.slice(2));
                // Loop topic and data to get the params
                method.inputs?.map((param) => {
                    const decodedP = {
                        name: param.name,
                        type: param.type,
                        value: '',
                    };
                    if (param.indexed) {
                        decodedP.value = logItem.topics[topicsIndex];
                        topicsIndex++;
                    }
                    else {
                        decodedP.value = decodedData[dataIndex];
                        dataIndex++;
                    }
                    if (param.type === 'address') {
                        decodedP.value = decodedP.value.toLowerCase();
                        // 42 because len(0x) + 40
                        if (decodedP.value.length > 42) {
                            const toRemove = decodedP.value.length - 42;
                            const temp = decodedP.value.split('');
                            temp.splice(2, toRemove);
                            decodedP.value = temp.join('');
                        }
                    }
                    if (param.type === 'uint256' || param.type === 'uint8' || param.type === 'int') {
                        // ensure to remove leading 0x for hex numbers
                        if (typeof decodedP.value === 'string' && decodedP.value.startsWith('0x')) {
                            decodedP.value = new BN(decodedP.value.slice(2), 16).toString(10);
                        }
                        else {
                            decodedP.value = new BN(decodedP.value).toString(10);
                        }
                    }
                    decodedParams.push(decodedP);
                });
                return {
                    name: method.name,
                    events: decodedParams,
                    address: logItem.address,
                };
            }
        });
    }
}
const abiDecoder = new ABIDecoder();

export { ABIDecoder, lib as __moduleExports, abiDecoder };