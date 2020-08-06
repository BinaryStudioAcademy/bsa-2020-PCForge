const gpus = [
  {
    name: 'FirePro 3D V3700',
    performance: 179,
    interface: 'PCIe 2.0 x16',
    opengl: 3,
    tdp: 32,
    coreClocks: 800,
    memorySize: 256
  },
  {
    name: 'FirePro 3D V5800',
    performance: 1290,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 74,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'FirePro 3D V7750',
    performance: 545,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 76,
    coreClocks: 800,
    memorySize: 1024
  },
  {
    name: 'FirePro 3D V8750',
    performance: 1272,
    interface: 'PCIe 2.1 x16',
    opengl: 3.3,
    tdp: 154,
    coreClocks: 750,
    memorySize: 2048
  },
  {
    name: 'FirePro 3D V8800',
    performance: 2438,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 208,
    coreClocks: 825,
    memorySize: 2048
  },
  {
    name: 'FirePro 3D V9800',
    performance: 2812,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 225,
    coreClocks: 850,
    memorySize: 4096
  },
  {
    name: 'FirePro V5900',
    performance: 1325,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 75,
    coreClocks: 600,
    memorySize: 2048
  },
  {
    name: 'FirePro V7900',
    performance: 2749,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 150,
    coreClocks: 725,
    memorySize: 2048
  },
  {
    name: 'FirePro W4300',
    performance: 2734,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 50,
    coreClocks: 930,
    memorySize: 4096
  },
  {
    name: 'FirePro W5000',
    performance: 3014,
    interface: 'PCIe 3.0 x16',
    opengl: 4.2,
    tdp: 75,
    coreClocks: 825,
    memorySize: 2048
  },
  {
    name: 'FirePro W5100',
    performance: 2717,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 75,
    coreClocks: 930,
    memorySize: 4096
  },
  {
    name: 'FirePro W7000',
    performance: 4423,
    interface: 'PCIe 3.0 x16',
    opengl: 4.2,
    tdp: 150,
    coreClocks: 950,
    memorySize: 4096
  },
  {
    name: 'FirePro W7100',
    performance: 4770,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 150,
    coreClocks: 920,
    memorySize: 8192
  },
  {
    name: 'FirePro W8000',
    performance: 2462,
    interface: 'PCIe 3.0 x16',
    opengl: 4.2,
    tdp: 189,
    coreClocks: 900,
    memorySize: 4096
  },
  {
    name: 'FirePro W8100',
    performance: 6986,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 220,
    coreClocks: 824,
    memorySize: 8192
  },
  {
    name: 'FirePro W9000',
    performance: 5305,
    interface: 'PCIe 3.0 x16',
    opengl: 4.2,
    tdp: 274,
    coreClocks: 975,
    memorySize: 6144
  },
  {
    name: 'FireStream 9370',
    performance: 2528,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 225,
    coreClocks: 825,
    memorySize: 4096
  },
  {
    name: 'GeForce 205',
    performance: 126,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 30.5,
    coreClocks: 589,
    memorySize: 512
  },
  {
    name: 'GeForce 210',
    performance: 98,
    interface: 'PCIe 2.0 x16,PCIe x1,PCI',
    opengl: 3.3,
    tdp: 30.5,
    coreClocks: 520,
    memorySize: 1024
  },
  {
    name: 'GeForce 305M',
    performance: 191,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 525,
    memorySize: 512
  },
  {
    name: 'GeForce 310',
    performance: 136,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 30.5,
    coreClocks: 589,
    memorySize: 512
  },
  {
    name: 'GeForce 315',
    performance: 164,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 33,
    coreClocks: 475,
    memorySize: 512
  },
  {
    name: 'GeForce 320M',
    performance: 272,
    interface: 'Integrated,PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 450,
    memorySize: 256
  },
  {
    name: 'GeForce 410M',
    performance: 247,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 12,
    coreClocks: 575,
    memorySize: 512
  },
  {
    name: 'GeForce 710A',
    performance: 538,
    interface: 'PCIe 2.0 x16',
    opengl: 4.6,
    tdp: 33,
    coreClocks: 938,
    memorySize: 2048
  },
  {
    name: 'GeForce 710M',
    performance: 418,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 12,
    coreClocks: 800,
    memorySize: 2048
  },
  {
    name: 'GeForce 820M',
    performance: 487,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 15,
    coreClocks: 954,
    memorySize: 2048
  },
  {
    name: 'GeForce 8300 GS',
    performance: 67,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 40,
    coreClocks: 450,
    memorySize: 512
  },
  {
    name: 'GeForce 830M',
    performance: 948,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 25,
    coreClocks: 1029,
    memorySize: 2048
  },
  {
    name: 'GeForce 8400M G',
    performance: 59,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 10,
    coreClocks: 400,
    memorySize: 128
  },
  {
    name: 'GeForce 8400M GS',
    performance: 82,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 11,
    coreClocks: 400,
    memorySize: 128
  },
  {
    name: 'GeForce 840M',
    performance: 1025,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 30,
    coreClocks: 1029,
    memorySize: 2048
  },
  {
    name: 'GeForce 8500 GT',
    performance: 117,
    interface: 'PCIe 1.0 x16,PCI',
    opengl: 3.3,
    tdp: 45,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'GeForce 8600M GS',
    performance: 101,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 600,
    memorySize: 256
  },
  {
    name: 'GeForce 8600M GT',
    performance: 127,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 475,
    memorySize: 256
  },
  {
    name: 'GeForce 8800 GS',
    performance: 394,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 105,
    coreClocks: 550,
    memorySize: 768
  },
  {
    name: 'GeForce 8800 Ultra',
    performance: 639,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 171,
    coreClocks: 612,
    memorySize: 768
  },
  {
    name: 'GeForce 8800M GTS',
    performance: 474,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 50,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'GeForce 9400M G',
    performance: 124,
    interface: 'Integrated(PCIe 2.0 x16)',
    opengl: 3.3,
    tdp: 12,
    coreClocks: 450,
    memorySize: 256
  },
  {
    name: 'GeForce 940M',
    performance: 1067,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 33,
    coreClocks: 1072,
    memorySize: 2048
  },
  {
    name: 'GeForce 9500M G',
    performance: 167,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'GeForce 9500M GS',
    performance: 108,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 475,
    memorySize: 512
  },
  {
    name: 'GeForce 9600 GSO',
    performance: 370,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 84,
    coreClocks: 550,
    memorySize: 1536
  },
  {
    name: 'GeForce 9600 GSO 512',
    performance: 486,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 90,
    coreClocks: 650,
    memorySize: 512
  },
  {
    name: 'GeForce 9600 GT',
    performance: 474,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 95,
    coreClocks: 650,
    memorySize: 1024
  },
  {
    name: 'GeForce 9600M GS',
    performance: 131,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 430,
    memorySize: 1024
  },
  {
    name: 'GeForce 9600M GT',
    performance: 130,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 23,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'GeForce 9650M GS',
    performance: 270,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 29,
    coreClocks: 625,
    memorySize: 512
  },
  {
    name: 'GeForce 9700M GT',
    performance: 217,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 45,
    coreClocks: 625,
    memorySize: 512
  },
  {
    name: 'GeForce 9700M GTS',
    performance: 478,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 60,
    coreClocks: 530,
    memorySize: 512
  },
  {
    name: 'GeForce 9800 GT',
    performance: 463,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 125,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'GeForce 9800 GTX',
    performance: 769,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 140,
    coreClocks: 675,
    memorySize: 512
  },
  {
    name: 'GeForce 9800 GTX+',
    performance: 746,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 141,
    coreClocks: 738,
    memorySize: 1024
  },
  {
    name: 'GeForce 9800M GTS',
    performance: 366,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 600,
    memorySize: 512
  },
  {
    name: 'GeForce G 105M',
    performance: 80,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 640,
    memorySize: 512
  },
  {
    name: 'GeForce Go 7800 GTX',
    performance: 210,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 65,
    coreClocks: 400,
    memorySize: 256
  },
  {
    name: 'GeForce GT 120',
    performance: 206,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 50,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'GeForce GT 120M',
    performance: 266,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 23,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 130',
    performance: 456,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 500,
    memorySize: 1536
  },
  {
    name: 'GeForce GT 130M',
    performance: 215,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 23,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 140',
    performance: 748,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 105,
    coreClocks: 650,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 220',
    performance: 216,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 58,
    coreClocks: 625,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 320M',
    performance: 119,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 325M',
    performance: 180,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 23,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 415M',
    performance: 318,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 12,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'GeForce GT 420M',
    performance: 427,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 23,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'GeForce GT 425M',
    performance: 533,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 23,
    coreClocks: 560,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 435M',
    performance: 668,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 35,
    coreClocks: 650,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 440',
    performance: 794,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 65,
    coreClocks: 810,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 445M',
    performance: 1055,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 35,
    coreClocks: 590,
    memorySize: 1536
  },
  {
    name: 'GeForce GT 520',
    performance: 289,
    interface: 'PCIe 2.0 x16,PCIe 2.0 x1,PCI',
    opengl: 4.5,
    tdp: 29,
    coreClocks: 810,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 540M',
    performance: 503,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 32,
    coreClocks: 672,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 610',
    performance: 293,
    interface: 'PCIe 2.0 x16, PCIe x1, PCI',
    opengl: 4.5,
    tdp: 29,
    coreClocks: 810,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 620',
    performance: 357,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 30,
    coreClocks: 700,
    memorySize: 512
  },
  {
    name: 'GeForce GT 620M',
    performance: 424,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 15,
    coreClocks: 625,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 625',
    performance: 304,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 30,
    coreClocks: 810,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 630',
    performance: 635,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 875,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 630M',
    performance: 524,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 33,
    coreClocks: 660,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 635M',
    performance: 574,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 35,
    coreClocks: 675,
    memorySize: 1536
  },
  {
    name: 'GeForce GT 640M',
    performance: 858,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 32,
    coreClocks: 625,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 640M LE',
    performance: 679,
    interface: 'PCIe 2.0 x16,PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 32,
    coreClocks: 762,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 645M',
    performance: 947,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 32,
    coreClocks: 710,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 650M',
    performance: 1129,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 45,
    coreClocks: 835,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 705',
    performance: 343,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 29,
    coreClocks: 810,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 710',
    performance: 621,
    interface: 'PCIe 2.0 x8',
    opengl: 4.5,
    tdp: 25,
    coreClocks: 823,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 720',
    performance: 578,
    interface: 'PCIe 2.0 x8',
    opengl: 4.5,
    tdp: 19,
    coreClocks: 797,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 730M',
    performance: 890,
    interface: 'PCIe 3.0 x8',
    opengl: 4.5,
    tdp: 33,
    coreClocks: 719,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 740',
    performance: 1467,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 64,
    coreClocks: 993,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 745M',
    performance: 939,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 45,
    coreClocks: 837,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 750M',
    performance: 1307,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 967,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 755M',
    performance: 1844,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 1020,
    memorySize: 2048
  },
  {
    name: 'GeForce GTS 160M',
    performance: 679,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 60,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'GeForce GTS 240',
    performance: 714,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 120,
    coreClocks: 675,
    memorySize: 1024
  },
  {
    name: 'GeForce GTS 250',
    performance: 606,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 150,
    coreClocks: 738,
    memorySize: 1024
  },
  {
    name: 'GeForce GTS 250M',
    performance: 542,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 28,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'GeForce GTS 350M',
    performance: 442,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 28,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'GeForce GTS 360M',
    performance: 630,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 38,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'GeForce GTS 450',
    performance: 1129,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 106,
    coreClocks: 783,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 1050',
    performance: 5701,
    interface: 'PCI-E 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 1354,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 1050 Ti',
    performance: 6431,
    interface: 'PCI-E 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 1290,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 1060 3GB',
    performance: 9599,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 120,
    coreClocks: 1708,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 1060 with Max-Q Design',
    performance: 7945,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 80,
    coreClocks: 1480,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 1070',
    performance: 13286,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 1506,
    memorySize: 8192
  },
  {
    name: 'GeForce GTX 1070 Ti',
    performance: 13915,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 180,
    coreClocks: 1607,
    memorySize: 8192
  },
  {
    name: 'GeForce GTX 1070 with Max-Q Design',
    performance: 10773,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 90,
    coreClocks: 1379,
    memorySize: 8192
  },
  {
    name: 'GeForce GTX 1080',
    performance: 14691,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 180,
    coreClocks: 1607,
    memorySize: 8192
  },
  {
    name: 'GeForce GTX 1080 Ti',
    performance: 17385,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 1480,
    memorySize: 11264
  },
  {
    name: 'GeForce GTX 1080 with Max-Q Design',
    performance: 11058,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 110,
    coreClocks: 1468,
    memorySize: 8192
  },
  {
    name: 'GeForce GTX 1650',
    performance: 7895,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 75,
    coreClocks: 1485,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 1650 (Mobile)',
    performance: 7002,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 50,
    coreClocks: 1395,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 1650 SUPER',
    performance: 9890,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 100,
    coreClocks: 1530,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 1650 Ti',
    performance: 7796,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 55,
    coreClocks: 1350,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 1650 with Max-Q Design',
    performance: 5869,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 35,
    coreClocks: 1020,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 1660',
    performance: 11371,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 120,
    coreClocks: 1530,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 1660 SUPER',
    performance: 12705,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 125,
    coreClocks: 1530,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 1660 Ti',
    performance: 12803,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 120,
    coreClocks: 1500,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 1660 Ti (Mobile)',
    performance: 10215,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 50,
    coreClocks: 1455,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 1660 Ti with Max-Q Design',
    performance: 8814,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 60,
    coreClocks: 1140,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 260',
    performance: 1226,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 202,
    coreClocks: 576,
    memorySize: 896
  },
  {
    name: 'GeForce GTX 260M',
    performance: 497,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 65,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 275',
    performance: 1414,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 219,
    coreClocks: 633,
    memorySize: 896
  },
  {
    name: 'GeForce GTX 280',
    performance: 1040,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 236,
    coreClocks: 602,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 280M',
    performance: 621,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 585,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 285',
    performance: 1479,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 204,
    coreClocks: 648,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 285M',
    performance: 735,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 460',
    performance: 2194,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 675,
    memorySize: 768
  },
  {
    name: 'GeForce GTX 460 SE',
    performance: 1989,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 650,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 460 v2',
    performance: 2497,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 160,
    coreClocks: 778,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 460M',
    performance: 1273,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 675,
    memorySize: 1536
  },
  {
    name: 'GeForce GTX 465',
    performance: 2946,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 200,
    coreClocks: 607,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 470',
    performance: 3112,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 215,
    coreClocks: 607,
    memorySize: 1280
  },
  {
    name: 'GeForce GTX 470M',
    performance: 1950,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 550,
    memorySize: 1536
  },
  {
    name: 'GeForce GTX 480',
    performance: 3736,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 700,
    memorySize: 1536
  },
  {
    name: 'GeForce GTX 480M',
    performance: 2051,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 425,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 485M',
    performance: 2401,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 575,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 550 Ti',
    performance: 1610,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 116,
    coreClocks: 900,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 555',
    performance: 1952,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 736,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 560',
    performance: 2731,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 810,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 560 SE',
    performance: 2201,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 736,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 560 Ti',
    performance: 3016,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 170,
    coreClocks: 822,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 560M',
    performance: 1367,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 775,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 570',
    performance: 3905,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 219,
    coreClocks: 732,
    memorySize: 2560
  },
  {
    name: 'GeForce GTX 570M',
    performance: 2024,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 575,
    memorySize: 1536
  },
  {
    name: 'GeForce GTX 580',
    performance: 4503,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 244,
    coreClocks: 772,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 580M',
    performance: 2279,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 620,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 590',
    performance: 2787,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 365,
    coreClocks: 607,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 645',
    performance: 1994,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 64,
    coreClocks: 823,
    memorySize: 1024
  },
  {
    name: 'GeForce GTX 650',
    performance: 1722,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 64,
    coreClocks: 1058,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 650 Ti',
    performance: 2490,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 110,
    coreClocks: 928,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 650 Ti BOOST',
    performance: 3182,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 134,
    coreClocks: 980,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 660',
    performance: 3954,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 140,
    coreClocks: 980,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 660 Ti',
    performance: 4363,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 915,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 660M',
    performance: 1581,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 950,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 670',
    performance: 5232,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 170,
    coreClocks: 915,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 670M',
    performance: 2012,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 620,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 670MX',
    performance: 1775,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 615,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 675M',
    performance: 2041,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 632,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 675MX',
    performance: 2675,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 667,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 680M',
    performance: 3366,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 719,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 680MX',
    performance: 4271,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 122,
    coreClocks: 719,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 690',
    performance: 5998,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 300,
    coreClocks: 915,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 745',
    performance: 2208,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 55,
    coreClocks: 1033,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 750',
    performance: 3354,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 55,
    coreClocks: 1020,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 750 Ti',
    performance: 3864,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 60,
    coreClocks: 1020,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 760',
    performance: 4660,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 170,
    coreClocks: 980,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 760 Ti',
    performance: 5119,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 170,
    coreClocks: 915,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 760M',
    performance: 1542,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 55,
    coreClocks: 719,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 765M',
    performance: 1809,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 65,
    coreClocks: 863,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 770',
    performance: 5908,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 230,
    coreClocks: 1046,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 770M',
    performance: 2664,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 797,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 780',
    performance: 7869,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 863,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 780 Ti',
    performance: 9328,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 875,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 780M',
    performance: 4073,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 122,
    coreClocks: 797,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 850M',
    performance: 2654,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 40,
    coreClocks: 876,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 860M',
    performance: 3311,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 45,
    coreClocks: 1085,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 870M',
    performance: 3394,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 110,
    coreClocks: 967,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 880M',
    performance: 3072,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 130,
    coreClocks: 993,
    memorySize: 8192
  },
  {
    name: 'GeForce GTX 950',
    performance: 5267,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 90,
    coreClocks: 1024,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 950M',
    performance: 2613,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 914,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 960',
    performance: 5927,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 120,
    coreClocks: 1127,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 960M',
    performance: 3514,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 65,
    coreClocks: 1097,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 965M',
    performance: 3889,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 60,
    coreClocks: 944,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 970',
    performance: 9567,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 145,
    coreClocks: 1050,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 970M',
    performance: 5528,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 924,
    memorySize: 3072
  },
  {
    name: 'GeForce GTX 980',
    performance: 10987,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 165,
    coreClocks: 1126,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX 980 Ti',
    performance: 13701,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 1076,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 980M',
    performance: 7513,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 1038,
    memorySize: 4096
  },
  {
    name: 'GeForce GTX TITAN Z',
    performance: 7647,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 375,
    coreClocks: 705,
    memorySize: 12288
  },
  {
    name: 'GeForce MX150',
    performance: 2382,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 25,
    coreClocks: 1468,
    memorySize: 2048
  },
  {
    name: 'GeForce RTX 2060',
    performance: 14732,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 160,
    coreClocks: 1365,
    memorySize: 6144
  },
  {
    name: 'GeForce RTX 2060 (Mobile)',
    performance: 11458,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 80,
    coreClocks: 960,
    memorySize: 6144
  },
  {
    name: 'GeForce RTX 2060 SUPER',
    performance: 16319,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 175,
    coreClocks: 1407,
    memorySize: 8192
  },
  {
    name: 'GeForce RTX 2060 with Max-Q Design',
    performance: 9620,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 65,
    coreClocks: 975,
    memorySize: 6144
  },
  {
    name: 'GeForce RTX 2070',
    performance: 16245,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 175,
    coreClocks: 1410,
    memorySize: 8192
  },
  {
    name: 'GeForce RTX 2070 (Mobile)',
    performance: 12860,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 115,
    coreClocks: 1215,
    memorySize: 8192
  },
  {
    name: 'GeForce RTX 2070 SUPER',
    performance: 18095,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 215,
    coreClocks: 1605,
    memorySize: 8192
  },
  {
    name: 'GeForce RTX 2080 Super with Max-Q Design',
    performance: 15418,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 80,
    coreClocks: 735,
    memorySize: 8192
  },
  {
    name: 'GeForce RTX 2080 with Max-Q Design',
    performance: 14326,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 90,
    coreClocks: 735,
    memorySize: 8192
  },
  {
    name: 'Mobility Radeon HD 5165',
    performance: 284,
    interface: 'PCIe x16 2.0',
    opengl: 3.3,
    tdp: 35,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'Mobility Radeon HD 5430',
    performance: 181,
    interface: 'PCIe x16 2.1',
    opengl: 4.4,
    tdp: 7,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'Mobility Radeon HD 5450',
    performance: 214,
    interface: 'PCIe x16 2.1',
    opengl: 4.4,
    tdp: 11,
    coreClocks: 675,
    memorySize: 1024
  },
  {
    name: 'Mobility Radeon HD 5470',
    performance: 236,
    interface: 'PCIe x16 2.1',
    opengl: 4.4,
    tdp: 13,
    coreClocks: 750,
    memorySize: 512
  },
  {
    name: 'Mobility Radeon HD 5650',
    performance: 460,
    interface: 'PCIe x16 2.1',
    opengl: 4.4,
    tdp: 15,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'Mobility Radeon HD 5730',
    performance: 578,
    interface: 'PCIe x16 2.1',
    opengl: 4.4,
    tdp: 26,
    coreClocks: 650,
    memorySize: 1024
  },
  {
    name: 'Mobility Radeon HD 5850',
    performance: 763,
    interface: 'PCIe x16 2.1',
    opengl: 4.4,
    tdp: 31,
    coreClocks: 625,
    memorySize: 1024
  },
  {
    name: 'Mobility Radeon HD 5870',
    performance: 1036,
    interface: 'PCIe x16 2.1',
    opengl: 4.4,
    tdp: 50,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'Mobility Radeon. HD 5470',
    performance: 215,
    interface: 'PCIe x16 2.1',
    opengl: 4.4,
    tdp: 13,
    coreClocks: 750,
    memorySize: 512
  },
  {
    name: 'NVIDIA TITAN X',
    performance: 13660,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 1417,
    memorySize: 12288
  },
  {
    name: 'NVIDIA TITAN Xp',
    performance: 17832,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 1405,
    memorySize: 12288
  },
  {
    name: 'NVS 2100M',
    performance: 185,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 535,
    memorySize: 512
  },
  {
    name: 'NVS 300',
    performance: 126,
    interface: 'PCI-Express x1,x16',
    opengl: 3.3,
    tdp: 17.5,
    coreClocks: 589,
    memorySize: 512
  },
  {
    name: 'NVS 3100M',
    performance: 120,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 600,
    memorySize: 512
  },
  {
    name: 'NVS 5100M',
    performance: 220,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 35,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'NVS 5200M',
    performance: 575,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 35,
    coreClocks: 625,
    memorySize: 1024
  },
  {
    name: 'NVS 5400M',
    performance: 641,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 35,
    coreClocks: 660,
    memorySize: 2048
  },
  {
    name: 'Quadro 1000M',
    performance: 592,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 45,
    coreClocks: 700,
    memorySize: 2048
  },
  {
    name: 'Quadro 2000',
    performance: 949,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 62,
    coreClocks: 625,
    memorySize: 1024
  },
  {
    name: 'Quadro 2000M',
    performance: 816,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 55,
    coreClocks: 550,
    memorySize: 2048
  },
  {
    name: 'Quadro 3000M',
    performance: 1124,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 450,
    memorySize: 2048
  },
  {
    name: 'Quadro 400',
    performance: 173,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 32,
    coreClocks: 450,
    memorySize: 512
  },
  {
    name: 'Quadro 4000',
    performance: 1526,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 142,
    coreClocks: 475,
    memorySize: 2048
  },
  {
    name: 'Quadro 4000M',
    performance: 1347,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 475,
    memorySize: 2048
  },
  {
    name: 'Quadro 410',
    performance: 438,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 38,
    coreClocks: 706,
    memorySize: 512
  },
  {
    name: 'Quadro 5000',
    performance: 2181,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 152,
    coreClocks: 513,
    memorySize: 2560
  },
  {
    name: 'Quadro 5000M',
    performance: 2060,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 405,
    memorySize: 2048
  },
  {
    name: 'Quadro 500M',
    performance: 664,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 35,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'Quadro 5010M',
    performance: 1833,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 450,
    memorySize: 4096
  },
  {
    name: 'Quadro 6000',
    performance: 3128,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 204,
    coreClocks: 574,
    memorySize: 6144
  },
  {
    name: 'Quadro 7000',
    performance: 4107,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 204,
    coreClocks: 651,
    memorySize: 6144
  },
  {
    name: 'Quadro FX 1300',
    performance: 34,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 55,
    coreClocks: 350,
    memorySize: 128
  },
  {
    name: 'Quadro FX 1400',
    performance: 104,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 70,
    coreClocks: 350,
    memorySize: 128
  },
  {
    name: 'Quadro FX 1500',
    performance: 183,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 65,
    coreClocks: 375,
    memorySize: 256
  },
  {
    name: 'Quadro FX 1500M',
    performance: 171,
    interface: 'PCIe 1.0 x16',
    opengl: 2.1,
    tdp: 45,
    coreClocks: 375,
    memorySize: 512
  },
  {
    name: 'Quadro FX 1600M',
    performance: 214,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 50,
    coreClocks: 625,
    memorySize: 512
  },
  {
    name: 'Quadro FX 1700',
    performance: 122,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 42,
    coreClocks: 460,
    memorySize: 512
  },
  {
    name: 'Quadro FX 1700M',
    performance: 181,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 50,
    coreClocks: 625,
    memorySize: 512
  },
  {
    name: 'Quadro FX 1800',
    performance: 402,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 59,
    coreClocks: 550,
    memorySize: 768
  },
  {
    name: 'Quadro FX 1800M',
    performance: 488,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 45,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'Quadro FX 2500M',
    performance: 218,
    interface: 'PCIe 1.0 x16',
    opengl: 2.1,
    tdp: 45,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'Quadro FX 2700M',
    performance: 397,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 65,
    coreClocks: 530,
    memorySize: 512
  },
  {
    name: 'Quadro FX 2800M',
    performance: 381,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'Quadro FX 3400/4400',
    performance: 104,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 101,
    coreClocks: 350,
    memorySize: 256
  },
  {
    name: 'Quadro FX 3450',
    performance: 149,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 83,
    coreClocks: 425,
    memorySize: 256
  },
  {
    name: 'Quadro FX 350',
    performance: 86,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 21,
    coreClocks: 550,
    memorySize: 128
  },
  {
    name: 'Quadro FX 3500',
    performance: 319,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 80,
    coreClocks: 470,
    memorySize: 256
  },
  {
    name: 'Quadro FX 3500M',
    performance: 306,
    interface: 'PCIe 1.0 x16',
    opengl: 2.1,
    tdp: 45,
    coreClocks: 575,
    memorySize: 512
  },
  {
    name: 'Quadro FX 350M',
    performance: 62,
    interface: 'PCIe 1.0 x16',
    opengl: 2.1,
    tdp: 15,
    coreClocks: 450,
    memorySize: 256
  },
  {
    name: 'Quadro FX 3600M',
    performance: 467,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 70,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'Quadro FX 360M',
    performance: 87,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 17,
    coreClocks: 400,
    memorySize: 256
  },
  {
    name: 'Quadro FX 370',
    performance: 84,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 35,
    coreClocks: 360,
    memorySize: 256
  },
  {
    name: 'Quadro FX 370 LP',
    performance: 108,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 25,
    coreClocks: 540,
    memorySize: 256
  },
  {
    name: 'Quadro FX 3700',
    performance: 384,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 78,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'Quadro FX 3700M',
    performance: 567,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'Quadro FX 370M',
    performance: 93,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 550,
    memorySize: 256
  },
  {
    name: 'Quadro FX 380',
    performance: 111,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 34,
    coreClocks: 450,
    memorySize: 256
  },
  {
    name: 'Quadro FX 380 LP',
    performance: 143,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 28,
    coreClocks: 589,
    memorySize: 512
  },
  {
    name: 'Quadro FX 3800',
    performance: 764,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 108,
    coreClocks: 602,
    memorySize: 1024
  },
  {
    name: 'Quadro FX 3800M',
    performance: 725,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 100,
    coreClocks: 675,
    memorySize: 1024
  },
  {
    name: 'Quadro FX 380M',
    performance: 165,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 25,
    coreClocks: 625,
    memorySize: 512
  },
  {
    name: 'Quadro FX 4000',
    performance: 101,
    interface: 'AGP 8x',
    opengl: 2.1,
    tdp: 142,
    coreClocks: 375,
    memorySize: 256
  },
  {
    name: 'Quadro FX 4500',
    performance: 205,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 109,
    coreClocks: 470,
    memorySize: 512
  },
  {
    name: 'Quadro FX 4600',
    performance: 448,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 134,
    coreClocks: 500,
    memorySize: 768
  },
  {
    name: 'Quadro FX 4800',
    performance: 933,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 150,
    coreClocks: 602,
    memorySize: 1536
  },
  {
    name: 'Quadro FX 540',
    performance: 81,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 35,
    coreClocks: 300,
    memorySize: 128
  },
  {
    name: 'Quadro FX 550',
    performance: 64,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 25,
    coreClocks: 360,
    memorySize: 128
  },
  {
    name: 'Quadro FX 5500',
    performance: 242,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 96,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'Quadro FX 560',
    performance: 114,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 30,
    coreClocks: 350,
    memorySize: 128
  },
  {
    name: 'Quadro FX 570',
    performance: 115,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 38,
    coreClocks: 460,
    memorySize: 256
  },
  {
    name: 'Quadro FX 570M',
    performance: 122,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 45,
    coreClocks: 475,
    memorySize: 512
  },
  {
    name: 'Quadro FX 580',
    performance: 165,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 40,
    coreClocks: 450,
    memorySize: 512
  },
  {
    name: 'Quadro FX 5800',
    performance: 1128,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 189,
    coreClocks: 648,
    memorySize: 4096
  },
  {
    name: 'Quadro FX 770M',
    performance: 297,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 35,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'Quadro FX 880M',
    performance: 223,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 35,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'Quadro GV100',
    performance: 12721,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 250,
    coreClocks: 1132,
    memorySize: 32768
  },
  {
    name: 'Quadro K1000M',
    performance: 755,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 45,
    coreClocks: 850,
    memorySize: 2048
  },
  {
    name: 'Quadro K1100M',
    performance: 1102,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 45,
    coreClocks: 716,
    memorySize: 2048
  },
  {
    name: 'Quadro K2000',
    performance: 1573,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 51,
    coreClocks: 954,
    memorySize: 2048
  },
  {
    name: 'Quadro K2000D',
    performance: 1657,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 51,
    coreClocks: 954,
    memorySize: 2048
  },
  {
    name: 'Quadro K2000M',
    performance: 1052,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 55,
    coreClocks: 745,
    memorySize: 2048
  },
  {
    name: 'Quadro K2100M',
    performance: 1401,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 55,
    coreClocks: 654,
    memorySize: 2048
  },
  {
    name: 'Quadro K2200',
    performance: 3545,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 68,
    coreClocks: 1000,
    memorySize: 4096
  },
  {
    name: 'Quadro K3000M',
    performance: 1685,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 654,
    memorySize: 2048
  },
  {
    name: 'Quadro K3100M',
    performance: 2265,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 680,
    memorySize: 4096
  },
  {
    name: 'Quadro K4000',
    performance: 2663,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 80,
    coreClocks: 810,
    memorySize: 3072
  },
  {
    name: 'Quadro K4000M',
    performance: 2146,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 600,
    memorySize: 4096
  },
  {
    name: 'Quadro K4100M',
    performance: 2501,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 706,
    memorySize: 4096
  },
  {
    name: 'Quadro K420',
    performance: 750,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 41,
    coreClocks: 780,
    memorySize: 1024
  },
  {
    name: 'Quadro K4200',
    performance: 4213,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 105,
    coreClocks: 780,
    memorySize: 4096
  },
  {
    name: 'Quadro K5000',
    performance: 3993,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 122,
    coreClocks: 706,
    memorySize: 4096
  },
  {
    name: 'Quadro K5000M',
    performance: 2572,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 706,
    memorySize: 4096
  },
  {
    name: 'Quadro K5100M',
    performance: 2899,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 771,
    memorySize: 8192
  },
  {
    name: 'Quadro K510M',
    performance: 651,
    interface: 'PCIe 3.0 x8',
    opengl: 4.5,
    tdp: 30,
    coreClocks: 850,
    memorySize: 1024
  },
  {
    name: 'Quadro K5200',
    performance: 5688,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 650,
    memorySize: 8192
  },
  {
    name: 'Quadro K600',
    performance: 754,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 41,
    coreClocks: 876,
    memorySize: 1024
  },
  {
    name: 'Quadro K6000',
    performance: 8637,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 225,
    coreClocks: 901,
    memorySize: 12288
  },
  {
    name: 'Quadro K610M',
    performance: 707,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 30,
    coreClocks: 980,
    memorySize: 1024
  },
  {
    name: 'Quadro K620',
    performance: 2275,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 45,
    coreClocks: 1000,
    memorySize: 2048
  },
  {
    name: 'Quadro M1000M',
    performance: 2912,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 40,
    coreClocks: 993,
    memorySize: 4096
  },
  {
    name: 'Quadro M2000',
    performance: 4003,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 1180,
    memorySize: 4096
  },
  {
    name: 'Quadro M2200',
    performance: 3965,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 55,
    coreClocks: 1025,
    memorySize: 4096
  },
  {
    name: 'Quadro M4000',
    performance: 6320,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 120,
    coreClocks: 800,
    memorySize: 8192
  },
  {
    name: 'Quadro M5000',
    performance: 9079,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 1050,
    memorySize: 8192
  },
  {
    name: 'Quadro M5000M',
    performance: 6134,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 962,
    memorySize: 8192
  },
  {
    name: 'Quadro M6000',
    performance: 12164,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 988,
    memorySize: 12288
  },
  {
    name: 'Quadro M6000 24GB',
    performance: 12244,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 988,
    memorySize: 24576
  },
  {
    name: 'Quadro NVS 110M',
    performance: 48,
    interface: 'PCIe 1.0 x16',
    opengl: 2.1,
    tdp: 10,
    coreClocks: 300,
    memorySize: 512
  },
  {
    name: 'Quadro NVS 120M',
    performance: 47,
    interface: 'PCIe 1.0 x16',
    opengl: 2.1,
    tdp: 10,
    coreClocks: 450,
    memorySize: 512
  },
  {
    name: 'Quadro NVS 130M',
    performance: 97,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 10,
    coreClocks: 400,
    memorySize: 256
  },
  {
    name: 'Quadro NVS 135M',
    performance: 57,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 10,
    coreClocks: 400,
    memorySize: 256
  },
  {
    name: 'Quadro NVS 140M',
    performance: 89,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 10,
    coreClocks: 400,
    memorySize: 512
  },
  {
    name: 'Quadro NVS 150M',
    performance: 93,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 10,
    coreClocks: 530,
    memorySize: 256
  },
  {
    name: 'Quadro NVS 160M',
    performance: 65,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 12,
    coreClocks: 580,
    memorySize: 256
  },
  {
    name: 'Quadro NVS 295',
    performance: 85,
    interface: 'PCI-Express x1/x16',
    opengl: 3.3,
    tdp: 23,
    coreClocks: 550,
    memorySize: 256
  },
  {
    name: 'Quadro NVS 320M',
    performance: 204,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 575,
    memorySize: 512
  },
  {
    name: 'Quadro NVS 510M',
    performance: 254,
    interface: 'PCIe 1.0 x16',
    opengl: 2.1,
    tdp: 45,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'Quadro P1000',
    performance: 4213,
    interface: 'PCI Express 3.0 x16',
    opengl: 4.5,
    tdp: 47,
    coreClocks: 1354,
    memorySize: 4096
  },
  {
    name: 'Quadro P2000',
    performance: 7232,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 1370,
    memorySize: 5120
  },
  {
    name: 'Quadro P400',
    performance: 1673,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 30,
    coreClocks: 1070,
    memorySize: 2048
  },
  {
    name: 'Quadro P4000',
    performance: 11370,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 105,
    coreClocks: 1227,
    memorySize: 8192
  },
  {
    name: 'Quadro P4200',
    performance: 12019,
    interface: 'MXM-B (3.0)',
    opengl: 4.6,
    tdp: 100,
    coreClocks: 1227,
    memorySize: 8192
  },
  {
    name: 'Quadro P5000',
    performance: 12040,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 180,
    coreClocks: 1607,
    memorySize: 16384
  },
  {
    name: 'Quadro P600',
    performance: 3246,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 40,
    coreClocks: 1354,
    memorySize: 2048
  },
  {
    name: 'Quadro P6000',
    performance: 15557,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 1417,
    memorySize: 24000
  },
  {
    name: 'Quadro P620',
    performance: 3717,
    interface: 'PCI Express 3.0 x16',
    opengl: 4.5,
    tdp: 40,
    coreClocks: 1266,
    memorySize: 2048
  },
  {
    name: 'Quadro RTX 3000',
    performance: 11376,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 80,
    coreClocks: 945,
    memorySize: 6144
  },
  {
    name: 'Quadro RTX 3000 with Max-Q Design',
    performance: 9402,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 60,
    coreClocks: 600,
    memorySize: 6144
  },
  {
    name: 'Quadro RTX 4000',
    performance: 15755,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 160,
    coreClocks: 1005,
    memorySize: 8192
  },
  {
    name: 'Quadro RTX 4000 with Max-Q Design',
    performance: 11186,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 80,
    coreClocks: 780,
    memorySize: 8192
  },
  {
    name: 'Quadro RTX 5000',
    performance: 17288,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 230,
    coreClocks: 1620,
    memorySize: 16384
  },
  {
    name: 'Quadro RTX 5000 (Mobile)',
    performance: 13705,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 110,
    coreClocks: 1035,
    memorySize: 16384
  },
  {
    name: 'Quadro RTX 5000 with Max-Q Design',
    performance: 11722,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 80,
    coreClocks: 600,
    memorySize: 16384
  },
  {
    name: 'Quadro RTX 6000',
    performance: 18351,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 295,
    coreClocks: 1440,
    memorySize: 24576
  },
  {
    name: 'Quadro RTX 8000',
    performance: 20543,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 260,
    coreClocks: 1395,
    memorySize: 49152
  },
  {
    name: 'Radeon HD 2350',
    performance: 77,
    interface: 'PCIe 1.0 x16,AGP',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 525,
    memorySize: 256
  },
  {
    name: 'Radeon HD 2400 Pro',
    performance: 114,
    interface: 'PCIe 1.0 x16,AGP,PCI',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 525,
    memorySize: 512
  },
  {
    name: 'Radeon HD 2400 XT',
    performance: 119,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 25,
    coreClocks: 650,
    memorySize: 256
  },
  {
    name: 'Radeon HD 2600 PRO',
    performance: 211,
    interface: 'PCIe 1.0 x16,AGP',
    opengl: 3.3,
    tdp: 35,
    coreClocks: 600,
    memorySize: 512
  },
  {
    name: 'Radeon HD 2600 XT',
    performance: 283,
    interface: 'PCIe 1.0 x16,AGP',
    opengl: 3.3,
    tdp: 45,
    coreClocks: 800,
    memorySize: 512
  },
  {
    name: 'Radeon HD 2900 GT',
    performance: 292,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 150,
    coreClocks: 601,
    memorySize: 512
  },
  {
    name: 'Radeon HD 2900 PRO',
    performance: 628,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 200,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 2900 XT',
    performance: 660,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 215,
    coreClocks: 743,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 3450',
    performance: 74,
    interface: 'PCIe 2.0 x16,AGP 8x',
    opengl: 3.3,
    tdp: 25,
    coreClocks: 600,
    memorySize: 512
  },
  {
    name: 'Radeon HD 3470',
    performance: 122,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 30,
    coreClocks: 800,
    memorySize: 512
  },
  {
    name: 'Radeon HD 3850',
    performance: 465,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 668,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 3850 AGP',
    performance: 444,
    interface: 'AGP 8x',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 668,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 3850 X2',
    performance: 822,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 349,
    coreClocks: 668,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 3870',
    performance: 587,
    interface: 'PCIe 2.0 x16,AGP 8x',
    opengl: 3.3,
    tdp: 106,
    coreClocks: 777,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 3870 X2',
    performance: 709,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 165,
    coreClocks: 825,
    memorySize: 512
  },
  {
    name: 'Radeon HD 4350',
    performance: 104,
    interface: 'PCIe 2.0 x16, PCIe 2.0 x1, AGP 8',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 4550',
    performance: 236,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 20,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 4650',
    performance: 257,
    interface: 'PCIe 2.0 x16,AGP 8x',
    opengl: 3.3,
    tdp: 48,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 4670',
    performance: 409,
    interface: 'PCIe 2.0 x16,AGP 8x',
    opengl: 3.3,
    tdp: 59,
    coreClocks: 750,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 4770',
    performance: 947,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 80,
    coreClocks: 750,
    memorySize: 512
  },
  {
    name: 'Radeon HD 4810',
    performance: 769,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 95,
    coreClocks: 627,
    memorySize: 512
  },
  {
    name: 'Radeon HD 4830',
    performance: 864,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 95,
    coreClocks: 575,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 4850',
    performance: 916,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 110,
    coreClocks: 625,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 4850 X2',
    performance: 1132,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 250,
    coreClocks: 625,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 4870',
    performance: 1245,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 150,
    coreClocks: 750,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 4870 X2',
    performance: 1309,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 286,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 4890',
    performance: 1535,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 190,
    coreClocks: 850,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 5450',
    performance: 180,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 19.1,
    coreClocks: 650,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 5550',
    performance: 363,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 39,
    coreClocks: 550,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 5570',
    performance: 433,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 39,
    coreClocks: 650,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 5750',
    performance: 1113,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 86,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 5770',
    performance: 1354,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 108,
    coreClocks: 650,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 5830',
    performance: 1795,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 175,
    coreClocks: 800,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 5850',
    performance: 2061,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 151,
    coreClocks: 725,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 5870',
    performance: 2368,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 228,
    coreClocks: 850,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 5970',
    performance: 2457,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 294,
    coreClocks: 725,
    memorySize: 2048
  },
  {
    name: 'RADEON HD 6350',
    performance: 141,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 19.1,
    coreClocks: 650,
    memorySize: 512
  },
  {
    name: 'Radeon HD 6370M',
    performance: 276,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 11,
    coreClocks: 750,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 6450',
    performance: 192,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 18,
    coreClocks: 627,
    memorySize: 512
  },
  {
    name: 'Radeon HD 6570',
    performance: 499,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 44,
    coreClocks: 650,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 6670',
    performance: 708,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 66,
    coreClocks: 800,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 6750',
    performance: 1128,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 86,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 6770',
    performance: 1214,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 108,
    coreClocks: 850,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 6790',
    performance: 1838,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 150,
    coreClocks: 840,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 6850',
    performance: 2015,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 127,
    coreClocks: 775,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 6870',
    performance: 2155,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 151,
    coreClocks: 900,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 6950',
    performance: 2803,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 200,
    coreClocks: 800,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 6970',
    performance: 2969,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 250,
    coreClocks: 880,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 6970M',
    performance: 2270,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 75,
    coreClocks: 680,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 6990',
    performance: 2933,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 375,
    coreClocks: 830,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7350',
    performance: 216,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 19.1,
    coreClocks: 400,
    memorySize: 512
  },
  {
    name: 'Radeon HD 7450',
    performance: 234,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 18,
    coreClocks: 627,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7450M',
    performance: 330,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 7,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7470',
    performance: 486,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 27,
    coreClocks: 627,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7470M',
    performance: 408,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 7,
    coreClocks: 750,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7550M',
    performance: 465,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 13,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7550M/7650M',
    performance: 729,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 13,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7570',
    performance: 694,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 44,
    coreClocks: 650,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7570M',
    performance: 469,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 13,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7570M/HD 7670M',
    performance: 699,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 25,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7610M',
    performance: 632,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 20,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7650M',
    performance: 508,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 20,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7670',
    performance: 961,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 66,
    coreClocks: 800,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7670M',
    performance: 450,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 20,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7690M',
    performance: 1003,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 20,
    coreClocks: 725,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7690M XT',
    performance: 1009,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 25,
    coreClocks: 725,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7730',
    performance: 1469,
    interface: 'PCIe 3.0 x16',
    opengl: 4.2,
    tdp: 47,
    coreClocks: 800,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 7730M',
    performance: 648,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 25,
    coreClocks: 575,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7750',
    performance: 1682,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 55,
    coreClocks: 800,
    memorySize: 4096
  },
  {
    name: 'Radeon HD 7750M',
    performance: 1191,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 28,
    coreClocks: 575,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7770',
    performance: 2095,
    interface: 'PCI Express 3.0 x16',
    opengl: 4.2,
    tdp: 80,
    coreClocks: 1020,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7790',
    performance: 3068,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 85,
    coreClocks: 1000,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7850',
    performance: 3768,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 130,
    coreClocks: 860,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7850M',
    performance: 1373,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 40,
    coreClocks: 675,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7870',
    performance: 4674,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 175,
    coreClocks: 1000,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7870 XT',
    performance: 4470,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 185,
    coreClocks: 925,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7870M',
    performance: 1507,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 45,
    coreClocks: 800,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 7950 / R9 280',
    performance: 4765,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 200,
    coreClocks: 850,
    memorySize: 3072
  },
  {
    name: 'Radeon HD 7970 / R9 280X',
    performance: 5248,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 250,
    coreClocks: 1000,
    memorySize: 3072
  },
  {
    name: 'Radeon HD 7970M',
    performance: 3529,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 75,
    coreClocks: 850,
    memorySize: 4096
  },
  {
    name: 'Radeon HD 7990',
    performance: 5566,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 375,
    coreClocks: 950,
    memorySize: 3072
  },
  {
    name: 'Radeon HD 8350',
    performance: 266,
    interface: 'PCIe 2.1 x16',
    opengl: 11,
    tdp: 4.4,
    coreClocks: 400,
    memorySize: 512
  },
  {
    name: 'Radeon HD 8470',
    performance: 341,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 35,
    coreClocks: 750,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 8490',
    performance: 293,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 35,
    coreClocks: 875,
    memorySize: 1024
  },
  {
    name: 'Radeon HD 8570',
    performance: 1050,
    interface: 'PCIe 3.0 x8',
    opengl: 4.4,
    tdp: 66,
    coreClocks: 730,
    memorySize: 2048
  },
  {
    name: 'Radeon HD 8950',
    performance: 2003,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 225,
    coreClocks: 850,
    memorySize: 3072
  },
  {
    name: 'Radeon HD 8970M',
    performance: 3876,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 100,
    coreClocks: 850,
    memorySize: 4096
  },
  {
    name: 'Radeon HD 8990',
    performance: 6583,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 375,
    coreClocks: 950,
    memorySize: 3072
  },
  {
    name: 'Radeon Pro 580X',
    performance: 7540,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 150,
    coreClocks: 1100,
    memorySize: 8192
  },
  {
    name: 'Radeon Pro Duo',
    performance: 9436,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 350,
    coreClocks: 1000,
    memorySize: 8192
  },
  {
    name: 'Radeon Pro W5500',
    performance: 9431,
    interface: 'PCIe 4.0 x8',
    opengl: 4.6,
    tdp: 125,
    coreClocks: 1187,
    memorySize: 8192
  },
  {
    name: 'Radeon Pro W5500M',
    performance: 1813,
    interface: 'PCIe 4.0 x8',
    opengl: 4.6,
    tdp: 85,
    coreClocks: 1000,
    memorySize: 4096
  },
  {
    name: 'Radeon Pro W5700',
    performance: 14334,
    interface: 'PCIe 4.0 x16',
    opengl: 4.6,
    tdp: 205,
    coreClocks: 1243,
    memorySize: 8192
  },
  {
    name: 'Radeon Pro WX 2100',
    performance: 1558,
    interface: 'PCIe 3.0 x8',
    opengl: 4.6,
    tdp: 35,
    coreClocks: 925,
    memorySize: 2048
  },
  {
    name: 'Radeon Pro WX 3100',
    performance: 2897,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 1219,
    memorySize: 4096
  },
  {
    name: 'Radeon Pro WX 3200',
    performance: 2592,
    interface: 'PCIe 3.0 x8',
    opengl: 4.6,
    tdp: 65,
    coreClocks: 1295,
    memorySize: 4096
  },
  {
    name: 'Radeon Pro WX 4100',
    performance: 3786,
    interface: 'PCIe 3.0 x8',
    opengl: 4.6,
    tdp: 50,
    coreClocks: 1125,
    memorySize: 4096
  },
  {
    name: 'Radeon Pro WX 4130',
    performance: 2304,
    interface: 'PCIe 3.0 x8',
    opengl: 4.6,
    tdp: 50,
    coreClocks: 1002,
    memorySize: 4096
  },
  {
    name: 'Radeon Pro WX 4150',
    performance: 1877,
    interface: 'PCIe 3.0 x8',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 1002,
    memorySize: 4096
  },
  {
    name: 'Radeon Pro WX 4170',
    performance: 1409,
    interface: 'PCIe 3.0 x8',
    opengl: 4.6,
    tdp: 50,
    coreClocks: 1002,
    memorySize: 4096
  },
  {
    name: 'Radeon Pro WX 5100',
    performance: 5328,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 926,
    memorySize: 8096
  },
  {
    name: 'Radeon Pro WX 7100',
    performance: 7348,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 130,
    coreClocks: 1188,
    memorySize: 8192
  },
  {
    name: 'Radeon Pro WX 7130',
    performance: 2763,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 130,
    coreClocks: 1188,
    memorySize: 8192
  },
  {
    name: 'Radeon Pro WX 8200',
    performance: 13903,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 230,
    coreClocks: 1200,
    memorySize: 8192
  },
  {
    name: 'Radeon Pro WX 9100',
    performance: 11771,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 230,
    coreClocks: 1200,
    memorySize: 16384
  },
  {
    name: 'Radeon Pro WX Vega M GL',
    performance: 6049,
    interface: 'Integrated',
    opengl: 4.6,
    tdp: 65,
    coreClocks: 931,
    memorySize: 4096
  },
  {
    name: 'Radeon R5 220',
    performance: 140,
    interface: 'PCIe 2.0 x16',
    opengl: 3.2,
    tdp: 19,
    coreClocks: 650,
    memorySize: 1024
  },
  {
    name: 'Radeon R5 235',
    performance: 286,
    interface: 'PCIe 2.0 x16',
    opengl: 4.4,
    tdp: 35,
    coreClocks: 775,
    memorySize: 1024
  },
  {
    name: 'Radeon R5 235X',
    performance: 368,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 18,
    coreClocks: 875,
    memorySize: 1024
  },
  {
    name: 'Radeon R5 240',
    performance: 516,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 50,
    coreClocks: 730,
    memorySize: 2048
  },
  {
    name: 'Radeon R7 240',
    performance: 833,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 30,
    coreClocks: 730,
    memorySize: 2048
  },
  {
    name: 'Radeon R7 250',
    performance: 1160,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 75,
    coreClocks: 1000,
    memorySize: 2048
  },
  {
    name: 'Radeon R7 250X',
    performance: 2269,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 95,
    coreClocks: 1000,
    memorySize: 2048
  },
  {
    name: 'Radeon R7 260',
    performance: 2892,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 95,
    coreClocks: 1000,
    memorySize: 1024
  },
  {
    name: 'Radeon R7 260X',
    performance: 3029,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 115,
    coreClocks: 1100,
    memorySize: 2048
  },
  {
    name: 'Radeon R7 360',
    performance: 2942,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 100,
    coreClocks: 1050,
    memorySize: 2048
  },
  {
    name: 'Radeon R7 450',
    performance: 1861,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 65,
    coreClocks: 1050,
    memorySize: 2048
  },
  {
    name: 'Radeon R7 A10-7850K',
    performance: 995,
    interface: 'On-Die',
    opengl: 4.3,
    tdp: 95,
    coreClocks: 720,
    memorySize: 16384
  },
  {
    name: 'Radeon R9 270 / R7 370',
    performance: 4260,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 150,
    coreClocks: 900,
    memorySize: 2048
  },
  {
    name: 'Radeon R9 270X',
    performance: 4714,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 180,
    coreClocks: 1000,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 280',
    performance: 5356,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 827,
    memorySize: 3072
  },
  {
    name: 'Radeon R9 280X',
    performance: 6330,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 850,
    memorySize: 3072
  },
  {
    name: 'Radeon R9 285 / 380',
    performance: 5550,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 190,
    coreClocks: 918,
    memorySize: 2048
  },
  {
    name: 'Radeon R9 290 / 390',
    performance: 8093,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 275,
    coreClocks: 947,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 290X / 390X',
    performance: 8118,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 290,
    coreClocks: 1000,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 295X2',
    performance: 8239,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 500,
    coreClocks: 1018,
    memorySize: 8192
  },
  {
    name: 'Radeon R9 350',
    performance: 2101,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 60,
    coreClocks: 925,
    memorySize: 2048
  },
  {
    name: 'Radeon R9 360',
    performance: 3032,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 85,
    coreClocks: 1000,
    memorySize: 2048
  },
  {
    name: 'Radeon R9 370',
    performance: 4722,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 950,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 380',
    performance: 6085,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 190,
    coreClocks: 970,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 380X',
    performance: 6354,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 190,
    coreClocks: 970,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 390',
    performance: 8762,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 275,
    coreClocks: 1000,
    memorySize: 8192
  },
  {
    name: 'Radeon R9 390X',
    performance: 9681,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 275,
    coreClocks: 1050,
    memorySize: 8192
  },
  {
    name: 'Radeon R9 Fury + Fury X',
    performance: 9681,
    interface: 'PCIe 3.0x16',
    opengl: 4.58,
    tdp: 275,
    coreClocks: 1050,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 M275X / M375',
    performance: 1205,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 50,
    coreClocks: 900,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 M280X',
    performance: 1148,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 75,
    coreClocks: 1000,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 M290X',
    performance: 2832,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 100,
    coreClocks: 850,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 M295X',
    performance: 5150,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 125,
    coreClocks: 750,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 M370X',
    performance: 1473,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 50,
    coreClocks: 800,
    memorySize: 4096
  },
  {
    name: 'Radeon R9 M390X',
    performance: 4357,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 100,
    coreClocks: 723,
    memorySize: 4096
  },
  {
    name: 'Radeon RX 460',
    performance: 4113,
    interface: 'PCIe 3.0 x8',
    opengl: 4.5,
    tdp: 75,
    coreClocks: 1090,
    memorySize: 4096
  },
  {
    name: 'Radeon RX 470',
    performance: 7907,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 120,
    coreClocks: 926,
    memorySize: 8192
  },
  {
    name: 'Radeon RX 480',
    performance: 8490,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 1266,
    memorySize: 8192
  },
  {
    name: 'Radeon RX 550',
    performance: 2434,
    interface: 'PCIe 3.0 x8',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 1100,
    memorySize: 4096
  },
  {
    name: 'Radeon RX 5500M',
    performance: 4687,
    interface: 'PCIe 4.0 x8',
    opengl: 4.6,
    tdp: 85,
    coreClocks: 1375,
    memorySize: 4096
  },
  {
    name: 'Radeon RX 550X',
    performance: 1674,
    interface: 'PCIe 3.0 x8',
    opengl: 4.6,
    tdp: 50,
    coreClocks: 1100,
    memorySize: 4096
  },
  {
    name: 'Radeon RX 560',
    performance: 3632,
    interface: 'PCIe 3.0 x8',
    opengl: 4.5,
    tdp: 80,
    coreClocks: 1175,
    memorySize: 4096
  },
  {
    name: 'Radeon RX 5600 XT',
    performance: 13009,
    interface: 'PCIe 4.0 x16',
    opengl: 4.6,
    tdp: 150,
    coreClocks: 1130,
    memorySize: 6144
  },
  {
    name: 'Radeon RX 560X',
    performance: 3520,
    interface: 'PCIe 3.0 x8',
    opengl: 4.6,
    tdp: 75,
    coreClocks: 1175,
    memorySize: 4096
  },
  {
    name: 'Radeon RX 570',
    performance: 6967,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 1168,
    memorySize: 8192
  },
  {
    name: 'Radeon RX 570X',
    performance: 1923,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 120,
    coreClocks: 1168,
    memorySize: 8192
  },
  {
    name: 'Radeon RX 580',
    performance: 8724,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 185,
    coreClocks: 1257,
    memorySize: 8192
  },
  {
    name: 'Radeon RX 580X',
    performance: 7798,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 185,
    coreClocks: 1257,
    memorySize: 8192
  },
  {
    name: 'Radeon RX 590',
    performance: 9430,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 175,
    coreClocks: 1545,
    memorySize: 8192
  },
  {
    name: 'Radeon RX 640',
    performance: 1174,
    interface: 'PCIe 3.0 x8',
    opengl: 4.6,
    tdp: 50,
    coreClocks: 1082,
    memorySize: 4096
  },
  {
    name: 'Radeon RX Vega 56',
    performance: 13281,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 210,
    coreClocks: 1471,
    memorySize: 8192
  },
  {
    name: 'Radeon RX Vega 64',
    performance: 14633,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 295,
    coreClocks: 1247,
    memorySize: 8192
  },
  {
    name: 'Radeon Vega Frontier Edition',
    performance: 14026,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 350,
    coreClocks: 1382,
    memorySize: 16384
  },
  {
    name: 'Radeon VII',
    performance: 17076,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 300,
    coreClocks: 1400,
    memorySize: 16384
  },
  {
    name: 'Radeon X1550',
    performance: 67,
    interface: 'AGP 8x, PCI, PCI-E x16',
    opengl: 2,
    tdp: 27,
    coreClocks: 550,
    memorySize: 512
  },
  {
    name: 'Radeon X1600 Pro',
    performance: 99,
    interface: 'AGP 8x,PCI-E x16',
    opengl: 2,
    tdp: 41,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'Radeon X1600 XT',
    performance: 116,
    interface: 'AGP 8x,PCI-E x16',
    opengl: 2,
    tdp: 42,
    coreClocks: 590,
    memorySize: 512
  },
  {
    name: 'Radeon X1650 Pro',
    performance: 85,
    interface: 'AGP 8x,PCI-E x16',
    opengl: 2,
    tdp: 44,
    coreClocks: 600,
    memorySize: 512
  },
  {
    name: 'Radeon X1800 GTO',
    performance: 141,
    interface: 'PCI-E x16',
    opengl: 2,
    tdp: 48,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'Radeon X1900 CrossFire Edition',
    performance: 137,
    interface: 'PCI-E x16',
    opengl: 2,
    tdp: 100,
    coreClocks: 625,
    memorySize: 512
  },
  {
    name: 'Radeon X1900 GT',
    performance: 146,
    interface: 'PCI-E x16',
    opengl: 2,
    tdp: 75,
    coreClocks: 575,
    memorySize: 256
  },
  {
    name: 'Radeon X1950 GT',
    performance: 106,
    interface: 'AGP 8x,PCI-E x16',
    opengl: 2,
    tdp: 57,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'Radeon X1950 Pro',
    performance: 113,
    interface: 'AGP 8x,PCI-E x16',
    opengl: 2,
    tdp: 66,
    coreClocks: 575,
    memorySize: 512
  },
  {
    name: 'Tesla C2070',
    performance: 3275,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 247,
    coreClocks: 575,
    memorySize: 6144
  },
  {
    name: 'TITAN RTX',
    performance: 18213,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 280,
    coreClocks: 1350,
    memorySize: 24576
  },
  {
    name: 'TITAN V',
    performance: 18793,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 250,
    coreClocks: 1200,
    memorySize: 12288
  },
  {
    name: 'TITAN Xp COLLECTORS EDITION',
    performance: 17486,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 1405,
    memorySize: 12288
  },
  {
    name: 'GeForce GT 520MX',
    performance: 316,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 20,
    coreClocks: 900,
    memorySize: 1024
  },
  {
    name: 'FireStream 9250',
    performance: 1165,
    interface: 'PCIe 2.0 x16',
    opengl: 3,
    tdp: 150,
    coreClocks: 625,
    memorySize: 1024
  },
  {
    name: 'FirePro 3D V5700',
    performance: 547,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 58,
    coreClocks: 700,
    memorySize: 512
  },
  {
    name: 'GeForce 9300M G',
    performance: 85,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 13,
    coreClocks: 400,
    memorySize: 256
  },
  {
    name: 'GeForce 9300M GS',
    performance: 83,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 13,
    coreClocks: 550,
    memorySize: 256
  },
  {
    name: 'GeForce 9800M GS',
    performance: 547,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 60,
    coreClocks: 530,
    memorySize: 512
  },
  {
    name: 'FirePro 3D V8700',
    performance: 1206,
    interface: 'PCIe 2.1 x16',
    opengl: 3.3,
    tdp: 151,
    coreClocks: 750,
    memorySize: 1024
  },
  {
    name: 'GeForce 9650M GT',
    performance: 169,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 23,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'GeForce Go 7900 GTX',
    performance: 270,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 45,
    coreClocks: 500,
    memorySize: 256
  },
  {
    name: 'FirePro 3D V3800',
    performance: 472,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 43,
    coreClocks: 650,
    memorySize: 512
  },
  {
    name: 'GeForce 9800 GX2',
    performance: 798,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 197,
    coreClocks: 600,
    memorySize: 2
  },
  {
    name: 'GeForce Go 7800',
    performance: 115,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 35,
    coreClocks: 400,
    memorySize: 256
  },
  {
    name: 'GeForce 510',
    performance: 238,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 25,
    coreClocks: 523,
    memorySize: 2048
  },
  {
    name: 'GeForce 8400M GT',
    performance: 98,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 450,
    memorySize: 256
  },
  {
    name: 'FirePro V3900',
    performance: 759,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 50,
    coreClocks: 650,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 430',
    performance: 550,
    interface: 'PCIe 2.0 x16,PCI',
    opengl: 4.5,
    tdp: 49,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'GeForce 8800 GTX',
    performance: 656,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 155,
    coreClocks: 575,
    memorySize: 768
  },
  {
    name: 'GeForce GT 525M',
    performance: 429,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 20,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'GeForce 825M',
    performance: 769,
    interface: 'PCIe 3.0 x8',
    opengl: 4.5,
    tdp: 33,
    coreClocks: 850,
    memorySize: 2048
  },
  {
    name: 'GeForce 9800M GT',
    performance: 475,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 65,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'GeForce 9400 GT',
    performance: 98,
    interface: 'PCIe 2.0 x16,PCI',
    opengl: 3.3,
    tdp: 50,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'GeForce G 103M',
    performance: 67,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 640,
    memorySize: 512
  },
  {
    name: 'FirePro W600',
    performance: 1725,
    interface: 'PCIe 3.0 x16',
    opengl: 4.2,
    tdp: 75,
    coreClocks: 750,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 420',
    performance: 394,
    interface: 'PCIe 2.0 x16',
    opengl: 4.1,
    tdp: 50,
    coreClocks: 700,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 550M',
    performance: 624,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 32,
    coreClocks: 740,
    memorySize: 1024
  },
  {
    name: 'FirePro 3D V7800',
    performance: 1867,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 138,
    coreClocks: 700,
    memorySize: 2048
  },
  {
    name: 'FirePro RG220',
    performance: 335,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 35,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'FirePro 2270',
    performance: 227,
    interface: 'PCIe 2.1 x1,x16',
    opengl: 4.1,
    tdp: 17,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 240M',
    performance: 216,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 23,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'FirePro 3D V3750',
    performance: 341,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 48,
    coreClocks: 550,
    memorySize: 256
  },
  {
    name: 'GeForce GT 230M',
    performance: 237,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 23,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'GeForce 310M',
    performance: 115,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 625,
    memorySize: 512
  },
  {
    name: 'FirePro 3D V4800',
    performance: 882,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 69,
    coreClocks: 775,
    memorySize: 1024
  },
  {
    name: 'FirePro W9100',
    performance: 7750,
    interface: 'PCIe 3.0 x16',
    opengl: 4.3,
    tdp: 275,
    coreClocks: 930,
    memorySize: 16384
  },
  {
    name: 'GeForce GT 530',
    performance: 647,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 50,
    coreClocks: 700,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 625M',
    performance: 435,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 15,
    coreClocks: 625,
    memorySize: 2048
  },
  {
    name: 'GeForce 315M',
    performance: 130,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 606,
    memorySize: 512
  },
  {
    name: 'GeForce GT 220M',
    performance: 151,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'GeForce G210M',
    performance: 198,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 14,
    coreClocks: 625,
    memorySize: 512
  },
  {
    name: 'GeForce Go 7900 GS',
    performance: 176,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 20,
    coreClocks: 375,
    memorySize: 256
  },
  {
    name: 'GeForce GT 320',
    performance: 455,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 43,
    coreClocks: 540,
    memorySize: 1024
  },
  {
    name: 'GeForce 8600 GS',
    performance: 115,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 47,
    coreClocks: 540,
    memorySize: 512
  },
  {
    name: 'GeForce 9800M GTX',
    performance: 517,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 500,
    memorySize: 1024
  },
  {
    name: 'GeForce 8600 GTS',
    performance: 284,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 75,
    coreClocks: 675,
    memorySize: 512
  },
  {
    name: 'GeForce GT 1030',
    performance: 2618,
    interface: 'PCIe 3.0 x4',
    opengl: 4.5,
    tdp: 30,
    coreClocks: 1227,
    memorySize: 2048
  },
  {
    name: 'GeForce 8700M GT',
    performance: 122,
    interface: 'PCIe x16',
    opengl: 3.3,
    tdp: 29,
    coreClocks: 625,
    memorySize: 256
  },
  {
    name: 'GeForce 8800 GTS 512',
    performance: 628,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 135,
    coreClocks: 650,
    memorySize: 512
  },
  {
    name: 'GeForce GT 330M',
    performance: 206,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 23,
    coreClocks: 575,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 335M',
    performance: 410,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 28,
    coreClocks: 450,
    memorySize: 1024
  },
  {
    name: 'GeForce 8200M G',
    performance: 57,
    interface: 'Integrated (PCIe 2.0 x16)',
    opengl: 3.3,
    tdp: 19.2,
    coreClocks: 400,
    memorySize: 256
  },
  {
    name: 'FirePro V4900',
    performance: 1310,
    interface: 'PCIe 2.1 x16',
    opengl: 4,
    tdp: 75,
    coreClocks: 800,
    memorySize: 1024
  },
  {
    name: 'FirePro S7000',
    performance: 4166,
    interface: 'PCIe 3.0 x16',
    opengl: 4.2,
    tdp: 150,
    coreClocks: 950,
    memorySize: 4096
  },
  {
    name: 'FirePro W2100',
    performance: 895,
    interface: 'PCIe 3.0 x8',
    opengl: 4.4,
    tdp: 26,
    coreClocks: 630,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 340',
    performance: 774,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 69,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'GeForce 8800 GT',
    performance: 542,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 125,
    coreClocks: 600,
    memorySize: 1024
  },
  {
    name: 'GeForce 7800 GTX',
    performance: 222,
    interface: 'PCI-E x16',
    opengl: 2.1,
    tdp: 86,
    coreClocks: 550,
    memorySize: 512
  },
  {
    name: 'GeForce 9200M GS',
    performance: 65,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 13,
    coreClocks: 550,
    memorySize: 256
  },
  {
    name: 'GeForce 9500 GT',
    performance: 144,
    interface: 'PCIe 2.0 x16,PCI',
    opengl: 3.3,
    tdp: 50,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'GeForce 8800M GTX',
    performance: 540,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 65,
    coreClocks: 500,
    memorySize: 512
  },
  {
    name: 'GeForce 8600 GT',
    performance: 114,
    interface: 'PCIe 1.0 x16,PCI',
    opengl: 3.3,
    tdp: 47,
    coreClocks: 540,
    memorySize: 1024
  },
  {
    name: 'GeForce 8400 GS',
    performance: 118,
    interface: 'PCIe 1.0 x16,PCI',
    opengl: 3.3,
    tdp: 40,
    coreClocks: 450,
    memorySize: 512
  },
  {
    name: 'GeForce GT 555M',
    performance: 680,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 30,
    coreClocks: 590,
    memorySize: 1024
  },
  {
    name: 'GeForce Go 7950 GTX',
    performance: 264,
    interface: 'PCIe x16',
    opengl: 2.1,
    tdp: 45,
    coreClocks: 575,
    memorySize: 512
  },
  {
    name: 'GeForce GT 520M',
    performance: 283,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 12,
    coreClocks: 740,
    memorySize: 1024
  },
  {
    name: 'GeForce GT 240',
    performance: 568,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 69,
    coreClocks: 550,
    memorySize: 1024
  },
  {
    name: 'GeForce 930MX',
    performance: 1367,
    interface: 'PCI Express 3.0',
    opengl: 4.5,
    tdp: 17,
    coreClocks: 952,
    memorySize: 2048
  },
  {
    name: 'FireStream 9270',
    performance: 1341,
    interface: 'PCIe 2.0 x16',
    opengl: 3,
    tdp: 160,
    coreClocks: 750,
    memorySize: 2048
  },
  {
    name: 'GeForce GT 640',
    performance: 1140,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 65,
    coreClocks: 900,
    memorySize: 4096
  },
  {
    name: 'FirePro W4100',
    performance: 1500,
    interface: 'PCIe 3.0 x16',
    opengl: 4.4,
    tdp: 50,
    coreClocks: 630,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 1060',
    performance: 10239,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 120,
    coreClocks: 1708,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX 295',
    performance: 1132,
    interface: 'PCIe 2.0 x16',
    opengl: 3.3,
    tdp: 289,
    coreClocks: 576,
    memorySize: 1792
  },
  {
    name: 'GeForce GT 730',
    performance: 807,
    interface: 'PCIe 2.0 x8 x16',
    opengl: 4.5,
    tdp: 49,
    coreClocks: 700,
    memorySize: 2048
  },
  {
    name: 'GeForce GTX 680',
    performance: 5514,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 195,
    coreClocks: 1006,
    memorySize: 4096
  },
  {
    name: 'GeForce RTX 2080 (Mobile)',
    performance: 15129,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 150,
    coreClocks: 1380,
    memorySize: 8192
  },
  {
    name: 'GeForce RTX 2080',
    performance: 18854,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 250,
    coreClocks: 1515,
    memorySize: 8096
  },
  {
    name: 'GeForce RTX 2070 with Max-Q Design',
    performance: 12444,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 80,
    coreClocks: 885,
    memorySize: 8192
  },
  {
    name: 'GeForce RTX 2080 Ti',
    performance: 21658,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 250,
    coreClocks: 1350,
    memorySize: 11264
  },
  {
    name: 'GeForce GTX TITAN Black',
    performance: 8890,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 889,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX Titan',
    performance: 8674,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 837,
    memorySize: 6144
  },
  {
    name: 'GeForce GTX TITAN X',
    performance: 12645,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 250,
    coreClocks: 1000,
    memorySize: 12288
  },
  {
    name: 'Quadro 600',
    performance: 554,
    interface: 'PCIe 2.0 x16',
    opengl: 4.5,
    tdp: 40,
    coreClocks: 640,
    memorySize: 1024
  },
  {
    name: 'Quadro M5500',
    performance: 7915,
    interface: 'PCIe 3.0 x16',
    opengl: 4.5,
    tdp: 150,
    coreClocks: 861,
    memorySize: 8192
  },
  {
    name: 'Radeon HD 5670',
    performance: 789,
    interface: 'PCIe 2.1 x16',
    opengl: 4.4,
    tdp: 64,
    coreClocks: 775,
    memorySize: 2048
  },
  {
    name: 'GeForce 8800 GTS',
    performance: 446,
    interface: 'PCIe 1.0 x16',
    opengl: 3.3,
    tdp: 146,
    coreClocks: 500,
    memorySize: 320
  },
  {
    name: 'GeForce RTX 2080 SUPER',
    performance: 19225,
    interface: 'PCIe 3.0 x16',
    opengl: 4.6,
    tdp: 250,
    coreClocks: 1650,
    memorySize: 8192
  }];

module.exports = gpus;
