var calculatorCommands = {
	newCard: "newcard calculator",
	sendApplet: "0x00 0xA4 0x04 0x00 0x09 0xA0 0x00 0x00 0x00 0x62 0x03 0x01 0x08 0x01 0x7F;\
0x80 0xB0 0x00 0x00 0x00 0x7F;\
0x80 0xB2 0x01 0x00 0x00 0x7F;\
0x80 0xB4 0x01 0x00 0x12 0x01 0x00 0x0F 0xDE 0xCA 0xFF 0xED 0x01 0x02 0x04 0x00 0x01 0x05 0xDD 0x02 0x03 0x04 0x05 0x7F;\
0x80 0xBC 0x01 0x00 0x00 0x7f;\
0x80 0xB2 0x02 0x00 0x00 0x7F;\
0x80 0xB4 0x02 0x00 0x23 0x02 0x00 0x1F 0x00 0x0F 0x00 0x1F 0x00 0x0A 0x00 0x15 0x00 0x5A 0x00 0x14 0x02 0x2B 0x00 0x0A 0x00 0x4D 0x00 0x00 0x00 0xCE 0x00 0x00 0x00 0x00 0x00 0x00 0x02 0x01 0x00 0x0A 0x7F;\
0x80 0xBC 0x02 0x00 0x00 0x7f;\
0x80 0xB2 0x03 0x00 0x00 0x7F;\
0x80 0xB4 0x03 0x00 0x0D 0x03 0x00 0x0A 0x01 0x06 0xDD 0x02 0x03 0x04 0x05 0x00 0x00 0x28 0x7F;\
0x80 0xBC 0x03 0x00 0x00 0x7f;\
0x80 0xB2 0x04 0x00 0x00 0x7F;\
0x80 0xB4 0x04 0x00 0x18 0x04 0x00 0x15 0x02 0x03 0x01 0x07 0xa0 0x00 0x00 0x00 0x62 0x01 0x01 0x00 0x01 0x07 0xA0 0x00 0x00 0x00 0x62 0x00 0x01 0x7F;\
0x80 0xBC 0x04 0x00 0x00 0x7f;\
0x80 0xB2 0x05 0x00 0x00 0x7F;\
0x80 0xB4 0x05 0x00 0x5D 0x05 0x00 0x5a 0x00 0x16 0x02 0x00 0x00 0x00 0x02 0x00 0x00 0x01 0x02 0x00 0x00 0x02 0x02 0x00 0x00 0x03 0x06 0x80 0x08 0x0f 0x06 0x80 0x08 0x0c 0x06 0x80 0x03 0x00 0x06 0x80 0x08 0x0d 0x03 0x80 0x03 0x01 0x01 0x00 0x00 0x00 0x06 0x00 0x00 0x01 0x03 0x80 0x0a 0x01 0x03 0x80 0x03 0x03 0x03 0x00 0x00 0x80 0x03 0x00 0x00 0x81 0x03 0x00 0x00 0x82 0x03 0x00 0x00 0x06 0x06 0x80 0x07 0x01 0x03 0x80 0x0a 0x07 0x06 0x80 0x10 0x06 0x03 0x80 0x0a 0x09 0x03 0x80 0x0a 0x04 0x7f;\
0x80 0xBC 0x05 0x00 0x00 0x7f;\
0x80 0xB2 0x06 0x00 0x00 0x7F;\
0x80 0xB4 0x06 0x00 0x17 0x06 0x00 0x14 0x00 0x80 0x03 0x04 0x00 0x03 0x06 0x02 0x00 0x03 0x00 0x31 0x00 0x4a 0x01 0x4f 0x01 0x7b 0x01 0xe9 0x7f;\
0x80 0xBC 0x06 0x00 0x00 0x7f;\
0x80 0xB2 0x07 0x00 0x00 0x7F;\
0x80 0xB4 0x07 0x00 0xA0 0x07 0x02 0x2b 0x00 0x03 0x10 0x18 0x8c 0x00 0x06 0x18 0x05 0x04 0x8d 0x00 0x04 0x87 0x00 0x18 0x04 0x04 0x8d 0x00 0x07 0x87 0x01 0x18 0x04 0x04 0x8d 0x00 0x05 0x87 0x02 0x18 0x03 0x89 0x03 0x18 0x8b 0x00 0x08 0x7a 0x01 0x30 0x8f 0x00 0x09 0x8c 0x00 0x0a 0x7a 0x03 0x10 0xad 0x00 0x03 0x03 0x39 0xad 0x00 0x04 0x03 0x39 0xad 0x01 0x03 0x10 0x3d 0x38 0xad 0x02 0x03 0x03 0x38 0x04 0x78 0x04 0x23 0x19 0x8b 0x00 0x0b 0x2d 0x1a 0x04 0x25 0x32 0x02 0x29 0x04 0x18 0x8b 0x00 0x0c 0x60 0x03 0x7a 0x1f 0x75 0x00 0xb0 0x00 0x13 0x00 0x2b 0x00 0x9b 0x00 0x2d 0x00 0x9b 0x00 0x30 0x00 0x51 0x00 0x31 0x00 0x58 0x00 0x32 0x00 0x5f 0x00 0x33 0x00 0x66 0x00 0x34 0x00 0x6d 0x00 0x35 0x00 0x74 0x00 0x36 0x00 0x7b 0x00 0x37 0x00 0x83 0x00 0x38 0x00 0x8b 0x00 0x39 0x00 0x93 0x00 0x3a 0x00 0x9b 0x00 0x3d 0x00 0x9b 0x7f;\
0x80 0xB4 0x07 0x00 0xA0 0x00 0x43 0x00 0xa9 0x00 0x4d 0x00 0xa2 0x00 0x52 0x00 0xa2 0x00 0x53 0x00 0xa2 0x00 0x78 0x00 0x9b 0x18 0x03 0x8b 0x00 0x0d 0x70 0x60 0x18 0x04 0x8b 0x00 0x0d 0x70 0x59 0x18 0x05 0x8b 0x00 0x0d 0x70 0x52 0x18 0x06 0x8b 0x00 0x0d 0x70 0x4b 0x18 0x07 0x8b 0x00 0x0d 0x70 0x44 0x18 0x08 0x8b 0x00 0x0d 0x70 0x3d 0x18 0x10 0x06 0x8b 0x00 0x0d 0x70 0x35 0x18 0x10 0x07 0x8b 0x00 0x0d 0x70 0x2d 0x18 0x10 0x08 0x8b 0x00 0x0d 0x70 0x25 0x18 0x10 0x09 0x8b 0x00 0x0d 0x70 0x1d 0x18 0x1f 0x8b 0x00 0x0e 0x70 0x16 0x18 0x1f 0x8b 0x00 0x0f 0x70 0x0f 0x18 0x8b 0x00 0x10 0x3b 0x70 0x08 0x11 0x6d 0x00 0x8d 0x00 0x11 0x19 0x8b 0x00 0x12 0x29 0x04 0x16 0x04 0x08 0x6d 0x08 0x11 0x67 0x05 0x8d 0x00 0x11 0x1a 0x03 0xaf 0x03 0x61 0x05 0x03 0x70 0x03 0x04 0x38 0x1a 0x04 0x03 0x8d 0x00 0x13 0x3b 0x1a 0x06 0xad 0x00 0x7f;\
0x80 0xB4 0x07 0x00 0xA0 0x03 0x26 0x8d 0x00 0x13 0x3b 0x19 0x08 0x8b 0x00 0x14 0x19 0x03 0x08 0x8b 0x00 0x15 0x7a 0x05 0x20 0xad 0x02 0x03 0x25 0x61 0x0f 0xad 0x00 0x04 0xad 0x00 0x03 0x26 0x39 0xad 0x00 0x03 0x03 0x39 0xad 0x00 0x03 0xad 0x00 0x03 0x26 0x10 0x0a 0x45 0x1d 0x11 0x00 0xff 0x53 0x41 0x39 0xad 0x02 0x03 0x04 0x38 0x7a 0x05 0x20 0xad 0x01 0x03 0x25 0x75 0x00 0x5d 0x00 0x04 0x00 0x2b 0x00 0x15 0x00 0x2d 0x00 0x24 0x00 0x3a 0x00 0x42 0x00 0x78 0x00 0x33 0xad 0x00 0x03 0xad 0x00 0x04 0x26 0xad 0x00 0x03 0x26 0x41 0x39 0x70 0x3b 0xad 0x00 0x03 0xad 0x00 0x04 0x26 0xad 0x00 0x03 0x26 0x43 0x39 0x70 0x2c 0xad 0x00 0x03 0xad 0x00 0x04 0x26 0xad 0x00 0x03 0x26 0x45 0x39 0x70 0x1d 0xad 0x00 0x03 0x26 0x61 0x08 0x11 0x6a 0x80 0x8d 0x00 0x11 0xad 0x00 0x03 0xad 0x00 0x04 0x26 0xad 0x00 0x03 0x26 0x47 0x39 0x70 0x7f;\
0x80 0xB4 0x07 0x00 0x4E 0x02 0xad 0x01 0x03 0x1d 0x38 0xad 0x02 0x03 0x03 0x38 0x7a 0x04 0x20 0x1d 0x73 0x00 0x39 0x00 0x4d 0x00 0x53 0x00 0x2e 0x00 0x39 0x00 0x39 0x00 0x39 0x00 0x39 0x00 0x1e 0x00 0x15 0x18 0xad 0x00 0x03 0x26 0x89 0x03 0x70 0x1d 0xad 0x00 0x04 0xad 0x00 0x03 0x26 0x39 0xad 0x00 0x03 0xaf 0x03 0x39 0x70 0x0d 0x18 0x3d 0x85 0x03 0xad 0x00 0x03 0x26 0x41 0x89 0x03 0xad 0x02 0x03 0x03 0x38 0x7a 0x7f;\
0x80 0xBC 0x07 0x00 0x00 0x7f;\
0x80 0xB2 0x08 0x00 0x00 0x7F;\
0x80 0xB4 0x08 0x00 0x0D 0x08 0x00 0x0a 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x7f;\
0x80 0xBC 0x08 0x00 0x00 0x7f;\
0x80 0xB2 0x09 0x00 0x00 0x7F;\
0x80 0xB4 0x09 0x00 0x50 0x09 0x00 0x4d 0x00 0x2b 0x0e 0x08 0x08 0x04 0x12 0x05 0x05 0x06 0xe6 0x12 0x16 0x06 0x03 0x05 0x05 0x03 0x0e 0x08 0x19 0x03 0x04 0x08 0x03 0x04 0x08 0x03 0x04 0x08 0x0c 0x03 0x04 0x08 0x05 0x1f 0x04 0x04 0x03 0x05 0x03 0x07 0x02 0x05 0x02 0x00 0x1e 0x05 0x06 0x08 0x08 0x0a 0x06 0x03 0x20 0x0c 0x5a 0x07 0x07 0x07 0x07 0x07 0x08 0x08 0x08 0x08 0x07 0x07 0x06 0x09 0x04 0x0d 0x11 0x0a 0x06 0x06 0x81 0x7f;\
0x80 0xBC 0x09 0x00 0x00 0x7f;\
0x80 0xBA 0x00 0x00 0x00 0x7F;\
0x80 0xB8 0x00 0x00 0x07 0x05 0xDD 0x02 0x03 0x04 0x05 0x00 0x7F;",
	selectApplet: "0x00 0xA4 0x04 0x00 0x06 0xDD 0x02 0x03 0x04 0x05 0x00 0x7F;",
	sendThree: "0x00 0x33 0x00 0x00 0x00 0x7F;",
	sendAddition: "0x00 0x2B 0x00 0x00 0x00 0x7F;",
	sendTwo: "0x00 0x32 0x00 0x00 0x00 0x7F;",
	sendEquals: "0x00 0x3D 0x00 0x00 0x00 0x7F;"
};