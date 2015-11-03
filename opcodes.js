﻿
module.exports = {
    byte_s: 256,
    short_s: 65536,
    int_s: 4294967296,


    aaload: 0x24,
    aastore: 0x37,
    aconst_null: 0x01,
    aload: 0x15,
    aload_0: 0x18,
    aload_1: 0x19,
    aload_2: 0x1A,
    aload_3: 0x1B,
    anewarray: 0x91,
    areturn: 0x77,
    arraylength: 0x92,
    astore: 0x28,
    astore_0: 0x2B,
    astore_1: 0x2C,
    astore_2: 0x2D,
    astore_3: 0x2E,
    athrow: 0x93,
    baload: 0x25,
    bastore: 0x38,
    bipush: 0x12,
    bspush: 0x10,
    checkcast: 0x94,
    dup: 0x3D,
    dup_x: 0x3F,
    dup2: 0x3E,
    getfield_a: 0x83,
    getfield_a_this: 0xAD,
    getfield_a_w: 0xA9,
    getfield_b: 0x84,
    getfield_b_this: 0xAE,
    getfield_b_w: 0xAA,
    getfield_i: 0x86,
    getfield_i_this: 0xB0,
    getfield_i_w: 0xAC,
    getfield_s: 0x85,
    getfield_s_this: 0xAF,
    getfield_s_w: 0xAB,
    getstatic_a: 0x7B,
    getstatic_b: 0x7C,
    getstatic_i: 0x7E,
    getstatic_s: 0x7D,
    goto: 0x70,
    goto_w: 0xA8,
    i2b: 0x5D,
    i2s: 0x5E,
    iadd: 0x42,
    iaload: 0x27,
    iand: 0x54,
    iastore: 0x3A,
    icmp: 0x5F,
    iconst_0: 0x0A,
    iconst_1: 0x0B,
    iconst_2: 0x0C,
    iconst_3: 0x0D,
    iconst_4: 0x0E,
    iconst_5: 0x0F,
    iconst_m1: 0x09,
    idiv: 0x48,
    if_acmpeq: 0x68,
    if_acmpeq_w: 0xA0,
    if_acmpne: 0x69,
    if_acmpne_w: 0xA1,
    if_scmpeq: 0x6A,
    if_scmpeq_w: 0xA2,
    if_scmpge: 0x6D,
    if_scmpge_w: 0xA5,
    if_scmpgt: 0x6E,
    if_scmpgt_w: 0xA6,
    if_scmple: 0x6F,
    if_scmple_w: 0xA7,
    if_scmplt: 0x6C,
    if_scmplt_w: 0xA4,
    if_scmpne: 0x6B,
    if_scmpne_w: 0xA3,
    ifeq: 0x60,
    ifeq_w: 0x98,
    ifge: 0x63,
    ifge_w: 0x9B,
    ifgt: 0x64,
    ifgt_w: 0x9C,
    ifle: 0x65,
    ifle_w: 0x9D,
    iflt: 0x62,
    iflt_w: 0x9A,
    ifne: 0x61,
    ifne_w: 0x99,
    ifnonnull: 0x67,
    ifnonnull_w: 0x9F,
    ifnull: 0x66,
    ifnull_w: 0x9E,
    iinc: 0x5A,
    iinc_w: 0x97,
    iipush: 0x14,
    iload: 0x17,
    iload_0: 0x20,
    iload_1: 0x21,
    iload_2: 0x22,
    iload_3: 0x23,
    ilookupswitch: 0x76,
    imul: 0x46,
    ineg: 0x4C,
    instanceof_v: 0x95,
    invokeinterface: 0x8E,
    invokespecial: 0x8C,
    invokestatic: 0x8D,
    invokevirtual: 0x8B,
    ior: 0x56,
    irem: 0x4A,
    ireturn: 0x79,
    ishl: 0x4E,
    ishr: 0x50,
    istore: 0x2A,
    istore_0: 0x33,
    istore_1: 0x34,
    istore_2: 0x35,
    istore_3: 0x36,
    isub: 0x44,
    itableswitch: 0x74,
    iushr: 0x52,
    ixor: 0x58,
    jsr: 0x71,
    new_v: 0x8F,
    newarray: 0x90,
    nop: 0x00,
    pop: 0x3B,
    pop2: 0x3C,
    putfield_a: 0x87,
    putfield_a_this: 0xB5,
    putfield_a_w: 0xB1,
    putfield_b: 0x88,
    putfield_b_this: 0xB6,
    putfield_b_w: 0xB2,
    putfield_i: 0x8A,
    putfield_i_this: 0xB8,
    putfield_i_w: 0xB4,
    putfield_s: 0x89,
    putfield_s_this: 0xB7,
    putfield_s_w: 0xB3,
    putstatic_a: 0x7F,
    putstatic_b: 0x80,
    putstatic_i: 0x82,
    putstatic_s: 0x81,
    ret: 0x72,
    return_v: 0x7A,
    s2b: 0x5B,
    s2i: 0x5C,
    sadd: 0x41,
    saload: 0x26,
    sand: 0x53,
    sastore: 0x39,
    sconst_0: 0x03,
    sconst_1: 0x04,
    sconst_2: 0x05,
    sconst_3: 0x06,
    sconst_4: 0x07,
    sconst_5: 0x08,
    sconst_m1: 0x02,
    sdiv: 0x47,
    sinc: 0x59,
    sinc_w: 0x96,
    sipush: 0x13,
    sload: 0x16,
    sload_0: 0x1C,
    sload_1: 0x1D,
    sload_2: 0x1E,
    sload_3: 0x1F,
    slookupswitch: 0x75,
    smul: 0x45,
    sneg: 0x4B,
    sor: 0x55,
    srem: 0x49,
    sreturn: 0x78,
    sshl: 0x4D,
    sshr: 0x4F,
    sspush: 0x11,
    sstore: 0x29,
    sstore_0: 0x2F,
    sstore_1: 0x30,
    sstore_2: 0x31,
    sstore_3: 0x32,
    ssub: 0x43,
    stableswitch: 0x73,
    sushr: 0x51,
    swap_x: 0x40,
    sxor: 0x57,

    jframework: "a0000000620101",
    jlang: "a0000000620001",
    jsecurity: "a0000000620102",
    jxcrypto: "a0000000620201",

    pad: function(val) {
        var rval;
        if (val.length == 1) {
            rval = "0" + val;
        } else { rval= val }

        return rval;
    },


    numberToByte: function(val) {
        //convert byte code value to signed byte
        val = val % 256;

        if ((val >= 0) && (val < 128)) {
            return val;
        } else {
            return (val - 256);
        }
    },

    ByteToShort: function(val) {
        //Sign extends a byte to short
        if (val >= 0 && val < (byte_s/2)) {
            return val;
        } else {
            val = byte_s - val;
            return (short_s - val);
        }
    },

    ByteToInt: function(val) {
        //Sign extends a byte to int
        if (val >= 0 && val < (byte_s / 2)) {
            return val;
        } else {
            val = byte_s - val;
            return (int_s - val);
        }
    },

    ShortToInt: function(val) {
        //Sign extends a short to int
        if (val >= 0 && val < (short_s / 2)) {
            return val;
        } else {
            val = short_s - val;
            return (int_s - val);
        }
    },


    ByteToValue: function(val) {
        //Converts unsigned byte to number
        if (val >= 0 && val < (byte_s / 2)) {
            return val;
        } else {
            val = val - byte_s;
            return (val);
        }
    },
    ShortToValue: function(val) {
        //Converts unsigned short to number
        if (val >= 0 && val < (short_s / 2)) {
            return val;
        } else {
            val = val - short_s;
            return (val);
        }
    },
    IntToValue: function(val) {
        //Converts unsigned int to number
        if (val >= 0 && val < (int_s / 2)) {
            return val;
        } else {
            val = val - int_s;
            return (val);
        }
    },


    convertIntegerToWords: function(val) {

        var retvals = [];

        retvals[0] = (val >> 16) & 0xffff;
        retvals[1] = val & 0xffff;

        return retvals;
    },

    convertToBytes: function(val, size) {
        var nBytes = [];

        for (var j = 0; j < size; j++)
        { nBytes[j] = (val >> (8 * (size-j-1))) & 0xff }

        return nBytes;
    },

    convertFromBytes: function(bArr) {
        var size = bArr.length;
        var res = 0;
        for (var j = 0; j < size; j++) {
            res += (bArr[j] << (8 * (size-j-1)));
        }
        return res;

    }
}