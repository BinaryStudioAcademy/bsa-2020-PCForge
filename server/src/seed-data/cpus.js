const cpus = [
  {
    "name": "Intel Celeron D 347 @ 3.06GHz",
    "performance": 232,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 1,
    "tdp": 86,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron D 356 @ 3.33GHz",
    "performance": 251,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 1,
    "tdp": 86,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron D 352 @ 3.20GHz",
    "performance": 283,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 1,
    "tdp": 86,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron 420 @ 1.60GHz",
    "performance": 293,
    "class": "Desktop",
    "clockspeed": 1600,
    "cores": 1,
    "tdp": 35,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Sempron 140",
    "performance": 300,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 1,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron 430 @ 1.80GHz",
    "performance": 304,
    "class": "Desktop",
    "clockspeed": 1800,
    "cores": 1,
    "tdp": 35,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron D 420 @ 1.60GHz",
    "performance": 313,
    "class": "Desktop",
    "clockspeed": 1600,
    "cores": 1,
    "tdp": 35,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium D 805 @ 2.66GHz",
    "performance": 351,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron 440 @ 2.00GHz",
    "performance": 368,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 1,
    "tdp": 35,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron D 360 @ 3.46GHz",
    "performance": 372,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 1,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Sempron 145",
    "performance": 406,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 1,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium D 830 @ 3.00GHz",
    "performance": 424,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium D 915 @ 2.80GHz",
    "performance": 424,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G440 @ 1.60GHz",
    "performance": 426,
    "class": "Desktop",
    "clockspeed": 1600,
    "cores": 1,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Celeron 450 @ 2.20GHz",
    "performance": 433,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 1,
    "tdp": 35,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium D 940 @ 3.20GHz",
    "performance": 447,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 130,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium E2140 @ 1.60GHz",
    "performance": 464,
    "class": "Desktop",
    "clockspeed": 1600,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium Extreme Edition 955 @ 3.46GHz",
    "performance": 469,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 130,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Sempron 150",
    "performance": 498,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 1,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core2 Duo E4300 @ 1.80GHz",
    "performance": 507,
    "class": "Desktop",
    "clockspeed": 1800,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E6320 @ 1.86GHz",
    "performance": 524,
    "class": "Desktop",
    "clockspeed": 1900,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E6300 @ 1.86GHz",
    "performance": 526,
    "class": "Desktop",
    "clockspeed": 1900,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G460 @ 1.80GHz",
    "performance": 602,
    "class": "Desktop",
    "clockspeed": 1800,
    "cores": 1,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Athlon II X2 250u",
    "performance": 604,
    "class": "Desktop",
    "clockspeed": 1600,
    "cores": 2,
    "tdp": 25,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium E2160 @ 1.80GHz",
    "performance": 630,
    "class": "Desktop",
    "clockspeed": 1800,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium D 950 @ 3.40GHz",
    "performance": 634,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 130,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron E1500 @ 2.20GHz",
    "performance": 649,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron E1400 @ 2.00GHz",
    "performance": 654,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E4400 @ 2.00GHz",
    "performance": 660,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X2 260u",
    "performance": 663,
    "class": "Desktop",
    "clockspeed": 1800,
    "cores": 2,
    "tdp": 25,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium E2180 @ 2.00GHz",
    "performance": 670,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X2 270u",
    "performance": 675,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 2,
    "tdp": 25,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core2 Duo E4500 @ 2.20GHz",
    "performance": 690,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G470 @ 2.00GHz",
    "performance": 691,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 1,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium E2210 @ 2.20GHz",
    "performance": 702,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron E3300 @ 2.50GHz",
    "performance": 706,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron E1600 @ 2.40GHz",
    "performance": 712,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium D 960 @ 3.60GHz",
    "performance": 743,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 130,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium E2200 @ 2.20GHz",
    "performance": 750,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E4600 @ 2.40GHz",
    "performance": 761,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron E3200 @ 2.40GHz",
    "performance": 786,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Xeon 3040 @ 1.86GHz",
    "performance": 789,
    "class": "Server",
    "clockspeed": 1900,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E6400 @ 2.13GHz",
    "performance": 800,
    "class": "Desktop",
    "clockspeed": 2100,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E4700 @ 2.60GHz",
    "performance": 803,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E6420 @ 2.13GHz",
    "performance": 807,
    "class": "Desktop",
    "clockspeed": 2100,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E6540 @ 2.33GHz",
    "performance": 808,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Xeon 3050 @ 2.13GHz",
    "performance": 822,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Xeon 3065 @ 2.33GHz",
    "performance": 822,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium E5200 @ 2.50GHz",
    "performance": 831,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium E2220 @ 2.40GHz",
    "performance": 832,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X2 215",
    "performance": 840,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron E3400 @ 2.60GHz",
    "performance": 871,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E6550 @ 2.33GHz",
    "performance": 881,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium E6300 @ 2.80GHz",
    "performance": 906,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E7300 @ 2.66GHz",
    "performance": 929,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium E5400 @ 2.70GHz",
    "performance": 931,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron E3500 @ 2.70GHz",
    "performance": 935,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Xeon 3060 @ 2.40GHz",
    "performance": 939,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X2 240",
    "performance": 942,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium E5300 @ 2.60GHz",
    "performance": 952,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E7400 @ 2.80GHz",
    "performance": 957,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium G630T @ 2.30GHz",
    "performance": 959,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core2 Duo E6750 @ 2.66GHz",
    "performance": 963,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X2 240e",
    "performance": 977,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium Extreme Edition 965 @ 3.73GHz",
    "performance": 982,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 130,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E7200 @ 2.53GHz",
    "performance": 985,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium E5500 @ 2.80GHz",
    "performance": 985,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E8200 @ 2.66GHz",
    "performance": 996,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Extreme X6800 @ 2.93GHz",
    "performance": 1004,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 75,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X2 B24",
    "performance": 1006,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X2 245e",
    "performance": 1008,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X2 260",
    "performance": 1013,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X2 245",
    "performance": 1015,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A4 PRO-7350B",
    "performance": 1024,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Xeon 3070 @ 2.66GHz",
    "performance": 1025,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X2 B28",
    "performance": 1040,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X2 B22",
    "performance": 1042,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X2 235e",
    "performance": 1043,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X2 250e",
    "performance": 1046,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A4-4020 APU",
    "performance": 1054,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Celeron G530T @ 2.00GHz",
    "performance": 1055,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium E5700 @ 3.00GHz",
    "performance": 1066,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E7500 @ 2.93GHz",
    "performance": 1067,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X2 250",
    "performance": 1068,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon 3085 @ 3.00GHz",
    "performance": 1070,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD A4-5300B APU",
    "performance": 1084,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core2 Duo E6700 @ 2.66GHz",
    "performance": 1089,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G550T @ 2.20GHz",
    "performance": 1102,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Athlon II X2 255",
    "performance": 1113,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron G1820TE @ 2.20GHz",
    "performance": 1115,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Celeron G540 @ 2.50GHz",
    "performance": 1116,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium E6500 @ 2.93GHz",
    "performance": 1120,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium E6700 @ 3.20GHz",
    "performance": 1122,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E6850 @ 3.00GHz",
    "performance": 1124,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium E6800 @ 3.33GHz",
    "performance": 1127,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G530 @ 2.40GHz",
    "performance": 1131,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G640T @ 2.40GHz",
    "performance": 1139,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A4-5300 APU",
    "performance": 1143,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core2 Duo E8400 @ 3.00GHz",
    "performance": 1153,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Phenom II X2 B53",
    "performance": 1155,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 80,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A4-4000 APU",
    "performance": 1166,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Celeron G540T @ 2.10GHz",
    "performance": 1174,
    "class": "Desktop",
    "clockspeed": 2100,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Phenom II X2 545",
    "performance": 1178,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 80,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium E5800 @ 3.20GHz",
    "performance": 1179,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X2 265",
    "performance": 1182,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G640 @ 2.80GHz",
    "performance": 1194,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core2 Duo E7600 @ 3.06GHz",
    "performance": 1196,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Duo E8300 @ 2.83GHz",
    "performance": 1201,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Xeon E3110 @ 3.00GHz",
    "performance": 1201,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Phenom II X2 B55",
    "performance": 1216,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 80,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X3 705e",
    "performance": 1222,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 3,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X2 550",
    "performance": 1228,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 80,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G645T @ 2.50GHz",
    "performance": 1241,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G850 @ 2.90GHz",
    "performance": 1243,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G620 @ 2.60GHz",
    "performance": 1252,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core2 Duo E8500 @ 3.16GHz",
    "performance": 1261,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G550 @ 2.60GHz",
    "performance": 1275,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Sempron 240",
    "performance": 1278,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A6-5400K APU",
    "performance": 1280,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Athlon II X2 270",
    "performance": 1285,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G630 @ 2.70GHz",
    "performance": 1293,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G645 @ 2.90GHz",
    "performance": 1294,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G840 @ 2.80GHz",
    "performance": 1306,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Phenom II X2 555",
    "performance": 1316,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 80,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon E3120 @ 3.16GHz",
    "performance": 1320,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD A4-6300 APU",
    "performance": 1321,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Athlon II X3 400e",
    "performance": 1331,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 3,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X3 405e",
    "performance": 1331,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 3,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon L3110 @ 3.00GHz",
    "performance": 1338,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 45,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G1610T @ 2.30GHz",
    "performance": 1341,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core2 Duo E8600 @ 3.33GHz",
    "performance": 1354,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD A6-6400K APU",
    "performance": 1362,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G2010 @ 2.80GHz",
    "performance": 1363,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Phenom II X2 570",
    "performance": 1387,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 80,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X3 700e",
    "performance": 1391,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 3,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X2 565",
    "performance": 1404,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 80,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X4 910",
    "performance": 1407,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon E3-1220L v3 @ 1.10GHz",
    "performance": 1407,
    "class": "Server",
    "clockspeed": 1100,
    "cores": 2,
    "tdp": 13,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Pentium G3220T @ 2.60GHz",
    "performance": 1421,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD A6-5400B APU",
    "performance": 1422,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Xeon E3113 @ 3.00GHz",
    "performance": 1429,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G1610 @ 2.60GHz",
    "performance": 1436,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Celeron G1830 @ 2.80GHz",
    "performance": 1449,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Phenom II X3 B75",
    "performance": 1465,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G2020T @ 2.50GHz",
    "performance": 1468,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A4-6320 APU",
    "performance": 1483,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i3-2120T @ 2.60GHz",
    "performance": 1488,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Athlon II X3 420e",
    "performance": 1495,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 3,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X4 900e",
    "performance": 1505,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A6 PRO-7400B",
    "performance": 1512,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G860 @ 3.00GHz",
    "performance": 1520,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A4-7300 APU",
    "performance": 1522,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Phenom II X3 720",
    "performance": 1526,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A6-6420K APU",
    "performance": 1538,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Phenom II X3 B73",
    "performance": 1538,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A6-6420B APU",
    "performance": 1550,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G870 @ 3.10GHz",
    "performance": 1555,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Celeron G1840T @ 2.50GHz",
    "performance": 1576,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Pentium G2030T @ 2.60GHz",
    "performance": 1595,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon X3210 @ 2.13GHz",
    "performance": 1599,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 4,
    "tdp": 105,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD A6-8550",
    "performance": 1604,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G2120T @ 2.70GHz",
    "performance": 1613,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A6-6400B APU",
    "performance": 1616,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G3320TE @ 2.30GHz",
    "performance": 1623,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD A6-7400K APU",
    "performance": 1636,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G2020 @ 2.90GHz",
    "performance": 1641,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD PRO A6-9500E",
    "performance": 1645,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Athlon II X3 435",
    "performance": 1663,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron G1820 @ 2.70GHz",
    "performance": 1681,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-2100T @ 2.50GHz",
    "performance": 1694,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Phenom II X4 905e",
    "performance": 1696,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X3 445",
    "performance": 1697,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron G1840 @ 2.80GHz",
    "performance": 1699,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Athlon II X3 440",
    "performance": 1708,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X3 450",
    "performance": 1711,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X4 600e",
    "performance": 1711,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 4,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G2030 @ 3.00GHz",
    "performance": 1717,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Phenom II X4 810",
    "performance": 1744,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i3-2100 @ 3.10GHz",
    "performance": 1781,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core2 Quad Q8200 @ 2.33GHz",
    "performance": 1786,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X4 605e",
    "performance": 1790,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Opteron 1381",
    "performance": 1797,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 75,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G3240T @ 2.70GHz",
    "performance": 1798,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core2 Quad Q8300 @ 2.50GHz",
    "performance": 1802,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X3 455",
    "performance": 1803,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i3-2105 @ 3.10GHz",
    "performance": 1814,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A8-6500T APU",
    "performance": 1816,
    "class": "Desktop",
    "clockspeed": 2100,
    "cores": 4,
    "tdp": 45,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Xeon X3220 @ 2.40GHz",
    "performance": 1819,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 4,
    "tdp": 105,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium G2130 @ 3.20GHz",
    "performance": 1832,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon X3323 @ 2.50GHz",
    "performance": 1837,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium G3220 @ 3.00GHz",
    "performance": 1852,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD PRO A6-8550B",
    "performance": 1885,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Opteron 1385",
    "performance": 1898,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 115,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD PRO A6-8570",
    "performance": 1902,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Athlon II X4 620",
    "performance": 1910,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Opteron 3320 EE",
    "performance": 1918,
    "class": "Server",
    "clockspeed": 1900,
    "cores": 4,
    "tdp": 25,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G2120 @ 3.10GHz",
    "performance": 1922,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD PRO A6-9500",
    "performance": 1938,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i3-2120 @ 3.30GHz",
    "performance": 1951,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G3250 @ 3.20GHz",
    "performance": 1963,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Celeron G3900TE @ 2.30GHz",
    "performance": 1967,
    "class": "Laptop",
    "clockspeed": 2300,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Celeron G1850 @ 2.90GHz",
    "performance": 1980,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core2 Extreme Q6850 @ 3.00GHz",
    "performance": 1980,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core i3-3240T @ 2.90GHz",
    "performance": 1981,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G3420 @ 3.20GHz",
    "performance": 1981,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD A6-7480",
    "performance": 1982,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core2 Quad Q9300 @ 2.50GHz",
    "performance": 1984,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Xeon X3330 @ 2.66GHz",
    "performance": 1985,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon X4 750 Quad Core",
    "performance": 1986,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Xeon X3320 @ 2.50GHz",
    "performance": 1986,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core i3-3210 @ 3.20GHz",
    "performance": 1990,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G3260T @ 2.90GHz",
    "performance": 1993,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-3220T @ 2.80GHz",
    "performance": 2011,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G3450T @ 2.90GHz",
    "performance": 2016,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Pentium G3258 @ 3.20GHz",
    "performance": 2020,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-2102 @ 3.10GHz",
    "performance": 2029,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Phenom II X4 820",
    "performance": 2034,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core2 Quad Q8400 @ 2.66GHz",
    "performance": 2034,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Quad Q6700 @ 2.66GHz",
    "performance": 2039,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 105,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium G3420T @ 2.70GHz",
    "performance": 2044,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1220L @ 2.20GHz",
    "performance": 2050,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 2,
    "tdp": 20,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i3-2130 @ 3.40GHz",
    "performance": 2051,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core2 Quad Q9400 @ 2.66GHz",
    "performance": 2052,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Athlon II X4 630",
    "performance": 2056,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon X3230 @ 2.66GHz",
    "performance": 2056,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium G2140 @ 3.30GHz",
    "performance": 2059,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G3260 @ 3.30GHz",
    "performance": 2059,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Opteron 3250 HE",
    "performance": 2061,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core2 Quad Q9505 @ 2.83GHz",
    "performance": 2066,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Quad Q9450 @ 2.66GHz",
    "performance": 2077,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Phenom II X4 B93",
    "performance": 2091,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X4 925",
    "performance": 2102,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G3440T @ 2.80GHz",
    "performance": 2107,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Athlon II X4 645",
    "performance": 2129,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i3-3225 @ 3.30GHz",
    "performance": 2129,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G3430 @ 3.30GHz",
    "performance": 2129,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Athlon II X4 640",
    "performance": 2133,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron G3930T @ 2.70GHz",
    "performance": 2135,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Phenom II X4 960T",
    "performance": 2136,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon X3360 @ 2.83GHz",
    "performance": 2151,
    "class": "Server",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G3920 @ 2.90GHz",
    "performance": 2155,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core2 Quad Q9500 @ 2.83GHz",
    "performance": 2161,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core i3-2125 @ 3.30GHz",
    "performance": 2167,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon L3360 @ 2.83GHz",
    "performance": 2182,
    "class": "Server",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium G3440 @ 3.30GHz",
    "performance": 2193,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-3220 @ 3.30GHz",
    "performance": 2197,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G3450 @ 3.40GHz",
    "performance": 2197,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon X3353 @ 2.66GHz",
    "performance": 2203,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G3900 @ 2.80GHz",
    "performance": 2208,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Phenom II X4 945",
    "performance": 2224,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron G4900T @ 2.90GHz",
    "performance": 2255,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core2 Quad Q9550 @ 2.83GHz",
    "performance": 2260,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core2 Extreme Q6800 @ 2.93GHz",
    "performance": 2267,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 75,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Opteron 3260 HE",
    "performance": 2283,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i3-3240 @ 3.40GHz",
    "performance": 2283,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Celeron G4920 @ 3.20GHz",
    "performance": 2284,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Pentium G3460 @ 3.50GHz",
    "performance": 2286,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon X3350 @ 2.66GHz",
    "performance": 2297,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Xeon X3380 @ 3.16GHz",
    "performance": 2308,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G3930 @ 2.90GHz",
    "performance": 2309,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Phenom II X4 840",
    "performance": 2319,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i3-3250 @ 3.50GHz",
    "performance": 2326,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD FX-770K Quad-Core",
    "performance": 2334,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Xeon E5-2603 @ 1.80GHz",
    "performance": 2362,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core2 Quad Q9650 @ 3.00GHz",
    "performance": 2371,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core i5-2390T @ 2.70GHz",
    "performance": 2372,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Celeron G3950 @ 3.00GHz",
    "performance": 2389,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Celeron G4900 @ 3.10GHz",
    "performance": 2413,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Pentium G4400T @ 2.90GHz",
    "performance": 2419,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon X3370 @ 3.00GHz",
    "performance": 2419,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Phenom II X4 955",
    "performance": 2427,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X4 B97",
    "performance": 2469,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i3-4330TE @ 2.40GHz",
    "performance": 2500,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core2 Extreme X9650 @ 3.00GHz",
    "performance": 2515,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD A10-6800B APU",
    "performance": 2543,
    "class": "Desktop",
    "clockspeed": 4100,
    "cores": 4,
    "tdp": 100,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Phenom II X4 965",
    "performance": 2549,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G4500T @ 3.00GHz",
    "performance": 2562,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Pentium G4400 @ 3.30GHz",
    "performance": 2575,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD A8-5500 APU",
    "performance": 2578,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Celeron G4930 @ 3.20GHz",
    "performance": 2597,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD FX-4100 Quad-Core",
    "performance": 2602,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD FX-4130 Quad-Core",
    "performance": 2602,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD FirePro A320 APU",
    "performance": 2634,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 100,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A8-6500 APU",
    "performance": 2643,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Xeon E3-1220L V2 @ 2.30GHz",
    "performance": 2687,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 2,
    "tdp": 17,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A8 PRO-7600B APU",
    "performance": 2707,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Athlon X4 740 Quad Core",
    "performance": 2723,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i3-4150T @ 3.00GHz",
    "performance": 2726,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-2500T @ 2.30GHz",
    "performance": 2741,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Phenom II X6 1035T",
    "performance": 2812,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD FX-4300 Quad-Core",
    "performance": 2877,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X6 1075T",
    "performance": 2879,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 6,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon X4 760K Quad Core",
    "performance": 2889,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 100,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A10-6790K APU",
    "performance": 2891,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 100,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Athlon X4 830",
    "performance": 2901,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A10-5800K APU",
    "performance": 2910,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 100,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Xeon E5-2603 v2 @ 1.80GHz",
    "performance": 2921,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Phenom II X6 1045T",
    "performance": 2926,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G4520 @ 3.60GHz",
    "performance": 2942,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-3470T @ 2.90GHz",
    "performance": 2967,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium G4560T @ 2.90GHz",
    "performance": 2974,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-2405S @ 2.50GHz",
    "performance": 2980,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD PRO A8-8670E",
    "performance": 2989,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD A10 PRO-7800B APU",
    "performance": 3003,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A10-5800B APU",
    "performance": 3014,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 100,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD PRO A12-8870E",
    "performance": 3014,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD A8-6600K APU",
    "performance": 3049,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 4,
    "tdp": 100,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Xeon E5-2637 @ 3.00GHz",
    "performance": 3049,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 80,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD A10-6800K APU",
    "performance": 3058,
    "class": "Desktop",
    "clockspeed": 4100,
    "cores": 4,
    "tdp": 100,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A10-7800 APU",
    "performance": 3064,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i3-4160T @ 3.10GHz",
    "performance": 3092,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD PRO A10-8770E",
    "performance": 3094,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i3-4330T @ 3.00GHz",
    "performance": 3098,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD PRO A12-9800E",
    "performance": 3099,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD PRO A8-8650B",
    "performance": 3130,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A10-6700 APU",
    "performance": 3132,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A10-9700E",
    "performance": 3151,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD A8-7670K",
    "performance": 3155,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i5-4570TE @ 2.70GHz",
    "performance": 3158,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-4360T @ 3.20GHz",
    "performance": 3164,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Phenom II X6 1055T",
    "performance": 3205,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 6,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon X4 840",
    "performance": 3225,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i5-4570T @ 2.90GHz",
    "performance": 3232,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD A10-7700K APU",
    "performance": 3234,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD FX-4200 Quad-Core",
    "performance": 3240,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A8-8650",
    "performance": 3254,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD FX-4320",
    "performance": 3272,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD FX-4350 Quad-Core",
    "performance": 3308,
    "class": "Desktop",
    "clockspeed": 4200,
    "cores": 4,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon E3-1265L @ 2.40GHz",
    "performance": 3311,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD FX-4150 Quad-Core",
    "performance": 3327,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A10 PRO-7850B APU",
    "performance": 3329,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i5-2300 @ 2.80GHz",
    "performance": 3329,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A10-7850K APU",
    "performance": 3330,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A12-9800E",
    "performance": 3332,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Phenom II X6 1405T",
    "performance": 3335,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD PRO A8-9600",
    "performance": 3347,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD A10-8750",
    "performance": 3348,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i3-6100TE @ 2.70GHz",
    "performance": 3354,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-2500S @ 2.70GHz",
    "performance": 3355,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A8-9600",
    "performance": 3375,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i3-4370T @ 3.30GHz",
    "performance": 3390,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-4603 @ 2.00GHz",
    "performance": 3391,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Athlon X4 860K",
    "performance": 3411,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD PRO A10-8770",
    "performance": 3412,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i5-2310 @ 2.90GHz",
    "performance": 3423,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A10-9700",
    "performance": 3440,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Athlon X4 870K",
    "performance": 3468,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i3-4160 @ 3.60GHz",
    "performance": 3471,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Athlon X4 880K",
    "performance": 3492,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium Gold G5400T @ 3.10GHz",
    "performance": 3509,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-1603 @ 2.80GHz",
    "performance": 3519,
    "class": "Server",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i3-4340 @ 3.60GHz",
    "performance": 3528,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Pentium Gold G5420 @ 3.80GHz",
    "performance": 3547,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-2320 @ 3.00GHz",
    "performance": 3550,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i3-4170 @ 3.70GHz",
    "performance": 3573,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-2450P @ 3.20GHz",
    "performance": 3575,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Athlon X4 950",
    "performance": 3580,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD A8-7680",
    "performance": 3599,
    "class": "Laptop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 45,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD A10-7890K",
    "performance": 3604,
    "class": "Desktop",
    "clockspeed": 4100,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i5-4460T @ 1.90GHz",
    "performance": 3610,
    "class": "Desktop",
    "clockspeed": 1900,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-4360 @ 3.70GHz",
    "performance": 3613,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD FX-6100 Six-Core",
    "performance": 3640,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G4600 @ 3.60GHz",
    "performance": 3640,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Phenom II X6 1090T",
    "performance": 3653,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 6,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium Gold G5400 @ 3.70GHz",
    "performance": 3709,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i3-6100T @ 3.20GHz",
    "performance": 3716,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Pentium Gold G5420T @ 3.20GHz",
    "performance": 3716,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-1607 @ 3.00GHz",
    "performance": 3743,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD PRO A10-8850B",
    "performance": 3752,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i5-3335S @ 2.70GHz",
    "performance": 3754,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Opteron 3280",
    "performance": 3765,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 8,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Phenom II X6 1100T",
    "performance": 3776,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 6,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i5-2400 @ 3.10GHz",
    "performance": 3801,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD FX-6120 Six-Core",
    "performance": 3821,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon X4 845",
    "performance": 3836,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i5-3330S @ 2.70GHz",
    "performance": 3843,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD FX-8100 Eight-Core",
    "performance": 3847,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 8,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i5-3340S @ 2.80GHz",
    "performance": 3876,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium Gold G5600 @ 3.90GHz",
    "performance": 3880,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Pentium G4620 @ 3.70GHz",
    "performance": 3915,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD FX-6200 Six-Core",
    "performance": 3970,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 6,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i5-4590T @ 2.00GHz",
    "performance": 4036,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-6300T @ 3.30GHz",
    "performance": 4040,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-2500 @ 3.30GHz",
    "performance": 4061,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E5-2603 v3 @ 1.60GHz",
    "performance": 4065,
    "class": "Server",
    "clockspeed": 1600,
    "cores": 6,
    "tdp": 85,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2609 v2 @ 2.50GHz",
    "performance": 4071,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-2500K @ 3.30GHz",
    "performance": 4072,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-3450S @ 2.80GHz",
    "performance": 4097,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium Gold G5620 @ 4.00GHz",
    "performance": 4102,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-3330 @ 3.00GHz",
    "performance": 4104,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-2550K @ 3.40GHz",
    "performance": 4105,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-3570T @ 2.30GHz",
    "performance": 4120,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i3-6098P @ 3.60GHz",
    "performance": 4127,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Athlon PRO 200GE",
    "performance": 4139,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i3-7300T @ 3.50GHz",
    "performance": 4147,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i3-6100 @ 3.70GHz",
    "performance": 4157,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Pentium Gold G5600F @ 3.90GHz",
    "performance": 4161,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Athlon 200GE",
    "performance": 4213,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i5-3475S @ 2.90GHz",
    "performance": 4222,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E5-2648L @ 1.80GHz",
    "performance": 4235,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 8,
    "tdp": 70,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i3-7100 @ 3.90GHz",
    "performance": 4254,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i7-4770TE @ 2.30GHz",
    "performance": 4257,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Pentium Gold G6400 @ 4.00GHz",
    "performance": 4259,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 2,
    "tdp": 58,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Core i5-3340 @ 3.10GHz",
    "performance": 4262,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-4690T @ 2.50GHz",
    "performance": 4267,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-3350P @ 3.10GHz",
    "performance": 4287,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 69,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-3470S @ 2.90GHz",
    "performance": 4307,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-4430S @ 2.70GHz",
    "performance": 4332,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Athlon PRO 300GE",
    "performance": 4337,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E3-1235 @ 3.20GHz",
    "performance": 4347,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E5-1607 v2 @ 3.00GHz",
    "performance": 4355,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-2600S @ 2.80GHz",
    "performance": 4364,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD FX-8120 Eight-Core",
    "performance": 4379,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 8,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i5-3450 @ 3.10GHz",
    "performance": 4396,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-4670T @ 2.30GHz",
    "performance": 4404,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-6400T @ 2.20GHz",
    "performance": 4405,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i3-6320 @ 3.90GHz",
    "performance": 4421,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-4440S @ 2.80GHz",
    "performance": 4427,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-4460S @ 2.90GHz",
    "performance": 4431,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-6300 @ 3.80GHz",
    "performance": 4446,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD FX-6350 Six-Core",
    "performance": 4471,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 6,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD FX-6330 Six-Core",
    "performance": 4479,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A8-7500",
    "performance": 4488,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Athlon 220GE",
    "performance": 4509,
    "class": "Laptop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E3-1230L v3 @ 1.80GHz",
    "performance": 4548,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 4,
    "tdp": 25,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1265L V2 @ 2.50GHz",
    "performance": 4582,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-3550S @ 3.00GHz",
    "performance": 4610,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-6300HQ @ 2.30GHz",
    "performance": 4614,
    "class": "Laptop",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-3570S @ 3.10GHz",
    "performance": 4621,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Athlon 240GE",
    "performance": 4630,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i5-4440 @ 3.10GHz",
    "performance": 4648,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-3470 @ 3.20GHz",
    "performance": 4662,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E3-1225 V2 @ 3.20GHz",
    "performance": 4675,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E5-2609 v3 @ 1.90GHz",
    "performance": 4676,
    "class": "Server",
    "clockspeed": 1900,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1220 V2 @ 3.10GHz",
    "performance": 4683,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 69,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-4430 @ 3.00GHz",
    "performance": 4686,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-2603 v4 @ 1.70GHz",
    "performance": 4695,
    "class": "Server",
    "clockspeed": 1700,
    "cores": 6,
    "tdp": 85,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Athlon Silver PRO 3125GE",
    "performance": 4701,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i3-7300 @ 4.00GHz",
    "performance": 4769,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-3550 @ 3.30GHz",
    "performance": 4778,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E5-1603 v4 @ 2.80GHz",
    "performance": 4838,
    "class": "Server",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-3570 @ 3.40GHz",
    "performance": 4890,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E3-1230 @ 3.20GHz",
    "performance": 4897,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-3570K @ 3.40GHz",
    "performance": 4925,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Athlon 300GE",
    "performance": 4930,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i3-7320 @ 4.10GHz",
    "performance": 4931,
    "class": "Desktop",
    "clockspeed": 4100,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i3-7350K @ 4.20GHz",
    "performance": 4945,
    "class": "Desktop",
    "clockspeed": 4200,
    "cores": 2,
    "tdp": 60,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD FX-8140 Eight-Core",
    "performance": 4953,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i5-6500T @ 2.50GHz",
    "performance": 4959,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD FX-8150 Eight-Core",
    "performance": 4967,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon E5-1607 v3 @ 3.10GHz",
    "performance": 4985,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1290 @ 3.60GHz",
    "performance": 4988,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-4570S @ 2.90GHz",
    "performance": 5002,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1235L v5 @ 2.00GHz",
    "performance": 5013,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 4,
    "tdp": 25,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-4670K CPT @ 3.40GHz",
    "performance": 5034,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD FX-8370E Eight-Core",
    "performance": 5045,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 8,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD FX-8320E Eight-Core",
    "performance": 5053,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon E3-1240L v3 @ 2.00GHz",
    "performance": 5062,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 4,
    "tdp": 25,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-2620 @ 2.00GHz",
    "performance": 5111,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-4590S @ 3.00GHz",
    "performance": 5139,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1240 @ 3.30GHz",
    "performance": 5140,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD FX-8310 Eight-Core",
    "performance": 5144,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 8,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i5-6500TE @ 2.30GHz",
    "performance": 5155,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-4570 @ 3.20GHz",
    "performance": 5173,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-6400 @ 2.70GHz",
    "performance": 5177,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1220 v3 @ 3.10GHz",
    "performance": 5183,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1225 v3 @ 3.20GHz",
    "performance": 5215,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1275 @ 3.40GHz",
    "performance": 5232,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i7-6822EQ @ 2.00GHz",
    "performance": 5241,
    "class": "Laptop",
    "clockspeed": 2000,
    "cores": 4,
    "tdp": 25,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1220 v5 @ 3.00GHz",
    "performance": 5264,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1270 @ 3.40GHz",
    "performance": 5283,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD FX-8300 Eight-Core",
    "performance": 5284,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 8,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i5-4590 @ 3.30GHz",
    "performance": 5298,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1245 @ 3.30GHz",
    "performance": 5299,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-4670S @ 3.10GHz",
    "performance": 5303,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-4690S @ 3.20GHz",
    "performance": 5303,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD FX-8320 Eight-Core",
    "performance": 5311,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 8,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i7-2600 @ 3.40GHz",
    "performance": 5322,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E3-1268L v3 @ 2.30GHz",
    "performance": 5333,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i7-4785T @ 2.20GHz",
    "performance": 5370,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-9100T @ 3.10GHz",
    "performance": 5377,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i3-8100T @ 3.10GHz",
    "performance": 5380,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-7500T @ 2.70GHz",
    "performance": 5409,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-2630L @ 2.00GHz",
    "performance": 5435,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 6,
    "tdp": 60,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-6600T @ 2.70GHz",
    "performance": 5454,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i7-2600K @ 3.40GHz",
    "performance": 5458,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-4690K @ 3.50GHz",
    "performance": 5485,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 88,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-4670 @ 3.40GHz",
    "performance": 5487,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1226 v3 @ 3.30GHz",
    "performance": 5490,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-7400 @ 3.00GHz",
    "performance": 5507,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i7-2700K @ 3.50GHz",
    "performance": 5508,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i7-3770T @ 2.50GHz",
    "performance": 5511,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-4670K @ 3.40GHz",
    "performance": 5537,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-5575R @ 2.80GHz",
    "performance": 5550,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-2643 @ 3.30GHz",
    "performance": 5562,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-4690 @ 3.50GHz",
    "performance": 5607,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-6500 @ 3.20GHz",
    "performance": 5635,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1205 v6 @ 3.00GHz",
    "performance": 5682,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-6402P @ 2.80GHz",
    "performance": 5719,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon W-2102 @ 2.90GHz",
    "performance": 5727,
    "class": "Server",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 120,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon E5-2650L @ 1.80GHz",
    "performance": 5816,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 8,
    "tdp": 70,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-7600T @ 2.80GHz",
    "performance": 5858,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1225 v5 @ 3.30GHz",
    "performance": 5863,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i7-3820 @ 3.60GHz",
    "performance": 5871,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1240L v5 @ 2.10GHz",
    "performance": 5880,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 4,
    "tdp": 25,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1275 v3 @ 3.50GHz",
    "performance": 5889,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-1620 @ 3.60GHz",
    "performance": 5906,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD FX-8350 Eight-Core",
    "performance": 5918,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 8,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i5-5675C @ 3.10GHz",
    "performance": 5932,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i7-4770T @ 2.50GHz",
    "performance": 5946,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1275L v3 @ 2.70GHz",
    "performance": 5949,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-2609 v4 @ 1.70GHz",
    "performance": 5974,
    "class": "Server",
    "clockspeed": 1700,
    "cores": 8,
    "tdp": 85,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-6600 @ 3.30GHz",
    "performance": 5982,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1245 V2 @ 3.40GHz",
    "performance": 5998,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Ryzen 3 2200GE",
    "performance": 6011,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD FX-9370 Eight-Core",
    "performance": 6015,
    "class": "Desktop",
    "clockspeed": 4400,
    "cores": 8,
    "tdp": 220,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon E3-1265L v3 @ 2.50GHz",
    "performance": 6019,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1220 v6 @ 3.00GHz",
    "performance": 6048,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 72,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1275 V2 @ 3.50GHz",
    "performance": 6051,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E5-2658 @ 2.10GHz",
    "performance": 6073,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2630 @ 2.30GHz",
    "performance": 6074,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD FX-8370 Eight-Core",
    "performance": 6116,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 8,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i3-8100 @ 3.60GHz",
    "performance": 6180,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i7-3770S @ 3.10GHz",
    "performance": 6191,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E5-2620 v2 @ 2.10GHz",
    "performance": 6207,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E-2104G @ 3.20GHz",
    "performance": 6215,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E3-1230 V2 @ 3.30GHz",
    "performance": 6232,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 69,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E3-1225 v6 @ 3.30GHz",
    "performance": 6296,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 73,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-4617 @ 2.90GHz",
    "performance": 6298,
    "class": "Server",
    "clockspeed": 2900,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1280 V2 @ 3.60GHz",
    "performance": 6301,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 69,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i5-6600K @ 3.50GHz",
    "performance": 6302,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 91,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-1607 v4 @ 3.10GHz",
    "performance": 6308,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 3 PRO 2200GE",
    "performance": 6337,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2630L v2 @ 2.40GHz",
    "performance": 6337,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 6,
    "tdp": 60,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2640 @ 2.50GHz",
    "performance": 6342,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-3770 @ 3.40GHz",
    "performance": 6361,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon W-2104 @ 3.20GHz",
    "performance": 6362,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 120,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD Ryzen 3 PRO 1200",
    "performance": 6376,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i5-7640X @ 4.00GHz",
    "performance": 6379,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 112,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Core i7-4790T @ 2.70GHz",
    "performance": 6407,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1240 V2 @ 3.40GHz",
    "performance": 6409,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 69,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E5-2608L v3 @ 2.00GHz",
    "performance": 6415,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 6,
    "tdp": 52,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1286L v3 @ 3.20GHz",
    "performance": 6450,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-8300 @ 3.70GHz",
    "performance": 6460,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 62,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-4610 @ 2.40GHz",
    "performance": 6460,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1265L v4 @ 2.30GHz",
    "performance": 6493,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1290 V2 @ 3.70GHz",
    "performance": 6523,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 87,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Xeon E5-1620 v2 @ 3.70GHz",
    "performance": 6547,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1270 V2 @ 3.50GHz",
    "performance": 6576,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 69,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i7-4820K @ 3.70GHz",
    "performance": 6587,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-6700TE @ 2.40GHz",
    "performance": 6600,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-7600 @ 3.50GHz",
    "performance": 6612,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Ryzen 3 2200G",
    "performance": 6707,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 3 PRO 2200G",
    "performance": 6717,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-4770S @ 3.10GHz",
    "performance": 6746,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-9100 @ 3.60GHz",
    "performance": 6756,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E3-1285L v3 @ 3.10GHz",
    "performance": 6822,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-4620 @ 2.20GHz",
    "performance": 6830,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i3-9100F @ 3.60GHz",
    "performance": 6854,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i3-8350K @ 4.00GHz",
    "performance": 6877,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 91,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E3-1241 v3 @ 3.50GHz",
    "performance": 6930,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i7-4771 @ 3.50GHz",
    "performance": 6942,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i7-4790S @ 3.20GHz",
    "performance": 6976,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-4607 v2 @ 2.60GHz",
    "performance": 6986,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1245 v3 @ 3.40GHz",
    "performance": 7005,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Ryzen 3 1300X",
    "performance": 7013,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E-2124 @ 3.30GHz",
    "performance": 7014,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 71,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E3-1231 v3 @ 3.40GHz",
    "performance": 7020,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i7-4770 @ 3.40GHz",
    "performance": 7039,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i7-4770K @ 3.50GHz",
    "performance": 7042,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1240 v3 @ 3.40GHz",
    "performance": 7058,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-1620 v3 @ 3.50GHz",
    "performance": 7081,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2628L v2 @ 1.90GHz",
    "performance": 7116,
    "class": "Server",
    "clockspeed": 1900,
    "cores": 8,
    "tdp": 70,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1246 v3 @ 3.50GHz",
    "performance": 7123,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-2623 v4 @ 2.60GHz",
    "performance": 7162,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 4,
    "tdp": 85,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-4610 v3 @ 1.70GHz",
    "performance": 7229,
    "class": "Server",
    "clockspeed": 1700,
    "cores": 10,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1276 v3 @ 3.60GHz",
    "performance": 7235,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1285 v3 @ 3.60GHz",
    "performance": 7240,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1270 v3 @ 3.50GHz",
    "performance": 7257,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i7-6700T @ 2.80GHz",
    "performance": 7260,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i3-9300 @ 3.70GHz",
    "performance": 7267,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 62,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2650 @ 2.00GHz",
    "performance": 7287,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 3 PRO 3200GE",
    "performance": 7295,
    "class": "Laptop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-4640 @ 2.40GHz",
    "performance": 7308,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i3-9320 @ 3.70GHz",
    "performance": 7358,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 62,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E3-1230 v5 @ 3.40GHz",
    "performance": 7368,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-1620 v4 @ 3.50GHz",
    "performance": 7378,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1271 v3 @ 3.60GHz",
    "performance": 7391,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-2667 @ 2.90GHz",
    "performance": 7393,
    "class": "Server",
    "clockspeed": 2900,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1286 v3 @ 3.70GHz",
    "performance": 7418,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-2630 v2 @ 2.60GHz",
    "performance": 7420,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1281 v3 @ 3.70GHz",
    "performance": 7430,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 82,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-1630 v3 @ 3.70GHz",
    "performance": 7489,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1285 v4 @ 3.50GHz",
    "performance": 7533,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-8300H @ 2.30GHz",
    "performance": 7585,
    "class": "Laptop",
    "clockspeed": 2300,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i3-10100T @ 3.00GHz",
    "performance": 7589,
    "class": "Laptop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "AMD Ryzen 5 2400GE",
    "performance": 7619,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 3 3200GE",
    "performance": 7631,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 5 PRO 2400GE",
    "performance": 7644,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i5-8400T @ 1.70GHz",
    "performance": 7668,
    "class": "Desktop",
    "clockspeed": 1700,
    "cores": 6,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Athlon Gold PRO 3150G",
    "performance": 7702,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2630L v3 @ 1.80GHz",
    "performance": 7753,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 8,
    "tdp": 55,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1260L v5 @ 2.90GHz",
    "performance": 7800,
    "class": "Server",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i7-5775C @ 3.30GHz",
    "performance": 7804,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i7-5775R @ 3.30GHz",
    "performance": 7819,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-1630 v4 @ 3.70GHz",
    "performance": 7842,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-7700T @ 2.90GHz",
    "performance": 7847,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Ryzen 3 2300X",
    "performance": 7850,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i5-9400T @ 1.80GHz",
    "performance": 7864,
    "class": "Desktop",
    "clockspeed": 1800,
    "cores": 6,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2640 v2 @ 2.00GHz",
    "performance": 7888,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i3-9350KF @ 4.00GHz",
    "performance": 7912,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 91,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E-2124G @ 3.40GHz",
    "performance": 7948,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 71,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 1400",
    "performance": 7972,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E3-1285L v4 @ 3.40GHz",
    "performance": 7980,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-2637 v3 @ 3.50GHz",
    "performance": 7995,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2660 @ 2.20GHz",
    "performance": 7999,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2620 v3 @ 2.40GHz",
    "performance": 8002,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 6,
    "tdp": 85,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-8500T @ 2.10GHz",
    "performance": 8024,
    "class": "Desktop",
    "clockspeed": 2100,
    "cores": 6,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i7-6700 @ 3.40GHz",
    "performance": 8061,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i7-4790K @ 4.00GHz",
    "performance": 8070,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 88,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-4650 @ 2.70GHz",
    "performance": 8081,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 8,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1245 v5 @ 3.50GHz",
    "performance": 8130,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-1650 @ 3.20GHz",
    "performance": 8139,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-3930K @ 3.20GHz",
    "performance": 8156,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1240 v5 @ 3.50GHz",
    "performance": 8157,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Ryzen 5 PRO 3400GE",
    "performance": 8164,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E3-1230 v6 @ 3.50GHz",
    "performance": 8167,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 72,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-4650L @ 2.60GHz",
    "performance": 8167,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 8,
    "tdp": 115,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-9500T @ 2.20GHz",
    "performance": 8213,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 6,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E3-1275 v5 @ 3.60GHz",
    "performance": 8314,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Ryzen 5 PRO 2400G",
    "performance": 8349,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E3-1245 v6 @ 3.70GHz",
    "performance": 8350,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 73,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1270 v5 @ 3.60GHz",
    "performance": 8397,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-1660 @ 3.30GHz",
    "performance": 8400,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2637 v4 @ 3.50GHz",
    "performance": 8402,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2687W @ 3.10GHz",
    "performance": 8489,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 8,
    "tdp": 150,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2648L v3 @ 1.80GHz",
    "performance": 8535,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 12,
    "tdp": 75,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 5 3400GE",
    "performance": 8565,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-3970X @ 3.50GHz",
    "performance": 8568,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 6,
    "tdp": 150,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon W-2123 @ 3.60GHz",
    "performance": 8594,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 120,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon E5-2648L v2 @ 1.90GHz",
    "performance": 8611,
    "class": "Server",
    "clockspeed": 1900,
    "cores": 10,
    "tdp": 70,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-7700 @ 3.60GHz",
    "performance": 8637,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-2643 v2 @ 3.50GHz",
    "performance": 8682,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2620 v4 @ 2.10GHz",
    "performance": 8699,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 8,
    "tdp": 85,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1240 v6 @ 3.70GHz",
    "performance": 8713,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 72,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E-2134 @ 3.50GHz",
    "performance": 8744,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 71,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 2400G",
    "performance": 8811,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E3-1270 v6 @ 3.80GHz",
    "performance": 8830,
    "class": "Server",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 72,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1275 v6 @ 3.80GHz",
    "performance": 8853,
    "class": "Server",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 73,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon W-2223 @ 3.60GHz",
    "performance": 8853,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 120,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Core i7-3960X @ 3.30GHz",
    "performance": 8927,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-6700K @ 4.00GHz",
    "performance": 8968,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-1650 v2 @ 3.50GHz",
    "performance": 8978,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i3-10100 @ 3.60GHz",
    "performance": 9021,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Core i5-9500 @ 3.00GHz",
    "performance": 9034,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 1500X",
    "performance": 9049,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E3-1280 v6 @ 3.90GHz",
    "performance": 9058,
    "class": "Server",
    "clockspeed": 3900,
    "cores": 4,
    "tdp": 72,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-4648 v3 @ 1.70GHz",
    "performance": 9061,
    "class": "Server",
    "clockspeed": 1700,
    "cores": 12,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2629 v3 @ 2.40GHz",
    "performance": 9062,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 8,
    "tdp": 85,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2670 @ 2.60GHz",
    "performance": 9091,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 8,
    "tdp": 115,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-8600T @ 2.30GHz",
    "performance": 9111,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 6,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-8400 @ 2.80GHz",
    "performance": 9183,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-9500TE @ 2.20GHz",
    "performance": 9212,
    "class": "Laptop",
    "clockspeed": 2200,
    "cores": 6,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1285 v6 @ 4.10GHz",
    "performance": 9276,
    "class": "Server",
    "clockspeed": 4100,
    "cores": 4,
    "tdp": 79,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-2680 @ 2.70GHz",
    "performance": 9376,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 8,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-4655 v3 @ 2.90GHz",
    "performance": 9377,
    "class": "Server",
    "clockspeed": 2900,
    "cores": 6,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i3-10300 @ 3.70GHz",
    "performance": 9381,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Core i5-9600T @ 2.30GHz",
    "performance": 9406,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 6,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 3400G",
    "performance": 9430,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i5-8500 @ 3.00GHz",
    "performance": 9477,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E-2174G @ 3.80GHz",
    "performance": 9517,
    "class": "Server",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 71,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 PRO 3400G",
    "performance": 9555,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 5 PRO 3350G",
    "performance": 9582,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E-2144G @ 3.60GHz",
    "performance": 9597,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 71,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2630 v3 @ 2.40GHz",
    "performance": 9620,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 8,
    "tdp": 85,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-9400 @ 2.90GHz",
    "performance": 9629,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 2500X",
    "performance": 9671,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-4960X @ 3.60GHz",
    "performance": 9692,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-5820K @ 3.30GHz",
    "performance": 9696,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 6,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 5 PRO 1500",
    "performance": 9739,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-7700K @ 4.20GHz",
    "performance": 9746,
    "class": "Desktop",
    "clockspeed": 4200,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E5-2689 @ 2.60GHz",
    "performance": 9863,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 8,
    "tdp": 115,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-7740X @ 4.30GHz",
    "performance": 9888,
    "class": "Desktop",
    "clockspeed": 4300,
    "cores": 4,
    "tdp": 112,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon E5-2618L v3 @ 2.30GHz",
    "performance": 9899,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 8,
    "tdp": 75,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2628L v3 @ 2.00GHz",
    "performance": 9949,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 10,
    "tdp": 75,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2650 v2 @ 2.60GHz",
    "performance": 10014,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-8600 @ 3.10GHz",
    "performance": 10024,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E-2274G @ 4.00GHz",
    "performance": 10068,
    "class": "Server",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 83,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2690 @ 2.90GHz",
    "performance": 10081,
    "class": "Server",
    "clockspeed": 2900,
    "cores": 8,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-5930K @ 3.50GHz",
    "performance": 10194,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 6,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-8600K @ 3.60GHz",
    "performance": 10267,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E-2244G @ 3.80GHz",
    "performance": 10270,
    "class": "Server",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 71,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2658 v2 @ 2.40GHz",
    "performance": 10280,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 10,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2660 v2 @ 2.20GHz",
    "performance": 10359,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 10,
    "tdp": 95,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-1650 v3 @ 3.50GHz",
    "performance": 10371,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 6,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-4640 v3 @ 1.90GHz",
    "performance": 10372,
    "class": "Server",
    "clockspeed": 1900,
    "cores": 12,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-9500F @ 3.00GHz",
    "performance": 10384,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 PRO 1600",
    "performance": 10401,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon W-2125 @ 4.00GHz",
    "performance": 10463,
    "class": "Server",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 120,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon E5-2643 v3 @ 3.40GHz",
    "performance": 10493,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 6,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-1660 v2 @ 3.70GHz",
    "performance": 10505,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-10500T @ 2.30GHz",
    "performance": 10512,
    "class": "Desktop",
    "clockspeed": 2300,
    "cores": 6,
    "tdp": 35,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Core i7-6800K @ 3.40GHz",
    "performance": 10521,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 6,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-4620 v3 @ 2.00GHz",
    "performance": 10681,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 10,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-8700T @ 2.40GHz",
    "performance": 10718,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 6,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E-2226G @ 3.40GHz",
    "performance": 10830,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2630L v4 @ 1.80GHz",
    "performance": 10864,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 10,
    "tdp": 55,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-9700T @ 2.00GHz",
    "performance": 10882,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 8,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-9600K @ 3.70GHz",
    "performance": 10891,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-9600KF @ 3.70GHz",
    "performance": 10930,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-9600 @ 3.10GHz",
    "performance": 10937,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2640 v3 @ 2.60GHz",
    "performance": 10959,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 8,
    "tdp": 90,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2628L v4 @ 1.90GHz",
    "performance": 11079,
    "class": "Server",
    "clockspeed": 1900,
    "cores": 12,
    "tdp": 75,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E-2126G @ 3.30GHz",
    "performance": 11206,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-1650 v4 @ 3.60GHz",
    "performance": 11339,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-6850K @ 3.60GHz",
    "performance": 11343,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 3 PRO 4350GE",
    "performance": 11417,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 3 PRO 4350G",
    "performance": 11446,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-4627 v3 @ 2.60GHz",
    "performance": 11507,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 10,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-4669 v4 @ 2.20GHz",
    "performance": 11523,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 22,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2648L v4 @ 1.80GHz",
    "performance": 11547,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 14,
    "tdp": 75,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2630 v4 @ 2.20GHz",
    "performance": 11694,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 10,
    "tdp": 85,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 3 4300G",
    "performance": 11714,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 3 3100",
    "performance": 11737,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2663 v3 @ 2.80GHz",
    "performance": 11739,
    "class": "Server",
    "clockspeed": 2800,
    "cores": 10,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2649 v3 @ 2.30GHz",
    "performance": 11796,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 10,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2670 v2 @ 2.50GHz",
    "performance": 11819,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 10,
    "tdp": 115,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2650L v3 @ 1.80GHz",
    "performance": 11904,
    "class": "Server",
    "clockspeed": 1800,
    "cores": 12,
    "tdp": 65,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2650L v4 @ 1.70GHz",
    "performance": 11918,
    "class": "Server",
    "clockspeed": 1700,
    "cores": 14,
    "tdp": 65,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2673 v2 @ 3.30GHz",
    "performance": 11919,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 8,
    "tdp": 110,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E-2276G @ 3.80GHz",
    "performance": 12010,
    "class": "Server",
    "clockspeed": 3800,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2687W v2 @ 3.40GHz",
    "performance": 12018,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 8,
    "tdp": 150,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E-2278GEL @ 2.00GHz",
    "performance": 12024,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 8,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2618L v4 @ 2.20GHz",
    "performance": 12041,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 10,
    "tdp": 75,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2650 v3 @ 2.30GHz",
    "performance": 12080,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 10,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2692 v2 @ 2.20GHz",
    "performance": 12119,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 12,
    "tdp": 115,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-1680 v2 @ 3.00GHz",
    "performance": 12304,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 8,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2667 v2 @ 3.30GHz",
    "performance": 12347,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 8,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon W-2133 @ 3.60GHz",
    "performance": 12417,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon E5-1660 v3 @ 3.00GHz",
    "performance": 12481,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 8,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-7800X @ 3.50GHz",
    "performance": 12482,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 6,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD Ryzen 5 1600",
    "performance": 12493,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-4657L v2 @ 2.40GHz",
    "performance": 12495,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 12,
    "tdp": 115,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-10400F @ 2.90GHz",
    "performance": 12560,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Xeon E5-2680 v2 @ 2.80GHz",
    "performance": 12563,
    "class": "Server",
    "clockspeed": 2800,
    "cores": 10,
    "tdp": 115,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 5 3500",
    "performance": 12679,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2640 v4 @ 2.40GHz",
    "performance": 12707,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 10,
    "tdp": 90,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 3 3300X",
    "performance": 12875,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i5-10400 @ 2.90GHz",
    "performance": 12892,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Xeon E5-2667 v3 @ 3.20GHz",
    "performance": 12906,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2685 v3 @ 2.60GHz",
    "performance": 12944,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 12,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-4627 v4 @ 2.60GHz",
    "performance": 12969,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 10,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2650 v4 @ 2.20GHz",
    "performance": 13032,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 12,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-1680 v3 @ 3.20GHz",
    "performance": 13048,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-10700T @ 2.00GHz",
    "performance": 13092,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 8,
    "tdp": 35,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "AMD Ryzen 5 1600X",
    "performance": 13097,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-8700 @ 3.20GHz",
    "performance": 13114,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-4660 v3 @ 2.10GHz",
    "performance": 13191,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 14,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 5 2600",
    "performance": 13210,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2690 v2 @ 3.00GHz",
    "performance": 13305,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 10,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E-2146G @ 3.50GHz",
    "performance": 13324,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2660 v3 @ 2.60GHz",
    "performance": 13327,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 10,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon W-2225 @ 4.10GHz",
    "performance": 13364,
    "class": "Server",
    "clockspeed": 4100,
    "cores": 4,
    "tdp": 105,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD Ryzen 5 3500X",
    "performance": 13390,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-6900K @ 3.20GHz",
    "performance": 13402,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2695 v2 @ 2.40GHz",
    "performance": 13427,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 12,
    "tdp": 115,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E-2186G @ 3.80GHz",
    "performance": 13436,
    "class": "Server",
    "clockspeed": 3800,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-10500 @ 3.10GHz",
    "performance": 13470,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Xeon E5-2658 v3 @ 2.20GHz",
    "performance": 13487,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 12,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-1660 v4 @ 3.20GHz",
    "performance": 13554,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E-2136 @ 3.30GHz",
    "performance": 13564,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 PRO 2600",
    "performance": 13662,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-9700 @ 3.00GHz",
    "performance": 13673,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 8,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E-2176G @ 3.70GHz",
    "performance": 13751,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i9-9900T @ 2.10GHz",
    "performance": 13772,
    "class": "Desktop",
    "clockspeed": 2100,
    "cores": 8,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E-2236 @ 3.40GHz",
    "performance": 13777,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2670 v3 @ 2.30GHz",
    "performance": 13785,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 12,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 7 PRO 1700",
    "performance": 13831,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 8,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-8700K @ 3.70GHz",
    "performance": 13872,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i7-9700F @ 3.00GHz",
    "performance": 13894,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 8,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 2600X",
    "performance": 14074,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2667 v4 @ 3.20GHz",
    "performance": 14101,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2683 v3 @ 2.00GHz",
    "performance": 14142,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 14,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i5-10600 @ 3.30GHz",
    "performance": 14161,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 6,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Xeon E5-2658 v4 @ 2.30GHz",
    "performance": 14168,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 14,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E-2246G @ 3.60GHz",
    "performance": 14237,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 80,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2697 v2 @ 2.70GHz",
    "performance": 14282,
    "class": "Server",
    "clockspeed": 2700,
    "cores": 12,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2660 v4 @ 2.00GHz",
    "performance": 14342,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 14,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E-2286G @ 4.00GHz",
    "performance": 14388,
    "class": "Server",
    "clockspeed": 4000,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2676 v3 @ 2.40GHz",
    "performance": 14407,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 12,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-1680 v4 @ 3.40GHz",
    "performance": 14481,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 8,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2678 v3 @ 2.50GHz",
    "performance": 14585,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 12,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon W-2135 @ 3.70GHz",
    "performance": 14601,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 6,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Core i7-9700KF @ 3.60GHz",
    "performance": 14635,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i7-9700K @ 3.60GHz",
    "performance": 14651,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 7 2700E",
    "performance": 14657,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 8,
    "tdp": 45,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2687W v3 @ 3.10GHz",
    "performance": 14686,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 10,
    "tdp": 160,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-8086K @ 4.00GHz",
    "performance": 14692,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 6,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-1681 v3 @ 2.90GHz",
    "performance": 14820,
    "class": "Server",
    "clockspeed": 2900,
    "cores": 10,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2699A v4 @ 2.40GHz",
    "performance": 14917,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 22,
    "tdp": 145,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2673 v3 @ 2.40GHz",
    "performance": 14933,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 12,
    "tdp": 110,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-4667 v3 @ 2.00GHz",
    "performance": 14948,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 16,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD EPYC 7301",
    "performance": 14991,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 16,
    "tdp": 155,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD Ryzen 7 PRO 2700",
    "performance": 15223,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2680 v3 @ 2.50GHz",
    "performance": 15427,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 12,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 7 PRO 1700X",
    "performance": 15522,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 8,
    "tdp": 95,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD EPYC 7251",
    "performance": 15542,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 8,
    "tdp": 120,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD Ryzen 7 1700X",
    "performance": 15591,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 8,
    "tdp": 95,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2690 v3 @ 2.60GHz",
    "performance": 15700,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 12,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 7 2700",
    "performance": 15746,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2695 v3 @ 2.30GHz",
    "performance": 15866,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 14,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2683 v4 @ 2.10GHz",
    "performance": 15952,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 16,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-4669 v3 @ 2.10GHz",
    "performance": 16015,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 18,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2669 v3 @ 2.30GHz",
    "performance": 16107,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 12,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 7 1800X",
    "performance": 16304,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 95,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD EPYC 7232P",
    "performance": 16365,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 8,
    "tdp": 120,
    "socket": "AMD SP3"
  },
  {
    "name": "Intel Xeon E5-2689 v4 @ 3.10GHz",
    "performance": 16706,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 10,
    "tdp": 165,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2686 v4 @ 2.30GHz",
    "performance": 16745,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 18,
    "tdp": 145,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i9-10900T @ 1.90GHz",
    "performance": 16991,
    "class": "Desktop",
    "clockspeed": 1900,
    "cores": 10,
    "tdp": 35,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "AMD Ryzen 7 PRO 2700X",
    "performance": 17006,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 8,
    "tdp": 105,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 5 PRO 4650G",
    "performance": 17039,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E-2278G @ 3.40GHz",
    "performance": 17069,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 8,
    "tdp": 80,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 5 4600G",
    "performance": 17197,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E-2278GE @ 3.30GHz",
    "performance": 17210,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 8,
    "tdp": 80,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E-2288G @ 3.70GHz",
    "performance": 17320,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i9-9900 @ 3.10GHz",
    "performance": 17414,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 8,
    "tdp": 65,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i7-6950X @ 3.00GHz",
    "performance": 17439,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 10,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2697 v4 @ 2.30GHz",
    "performance": 17482,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 18,
    "tdp": 145,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2673 v4 @ 2.30GHz",
    "performance": 17533,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 20,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-7820X @ 3.60GHz",
    "performance": 17563,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon E5-2697 v3 @ 2.60GHz",
    "performance": 17564,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 14,
    "tdp": 145,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 7 2700X",
    "performance": 17590,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 8,
    "tdp": 105,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2687W v4 @ 3.00GHz",
    "performance": 17632,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 12,
    "tdp": 160,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2680 v4 @ 2.40GHz",
    "performance": 17809,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 14,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 5 3600",
    "performance": 17831,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 5 PRO 3600",
    "performance": 17892,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-10700F @ 2.90GHz",
    "performance": 18014,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 8,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Core i7-9800X @ 3.80GHz",
    "performance": 18202,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 8,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD Ryzen 5 3600X",
    "performance": 18311,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon W-2145 @ 3.70GHz",
    "performance": 18423,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 8,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon E5-2698 v3 @ 2.30GHz",
    "performance": 18429,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 16,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i9-9900KF @ 3.60GHz",
    "performance": 18795,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2676 v4 @ 2.40GHz",
    "performance": 18978,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 16,
    "tdp": 145,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2697A v4 @ 2.60GHz",
    "performance": 18996,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 16,
    "tdp": 145,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 5 3600XT",
    "performance": 19095,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E5-2695 v4 @ 2.10GHz",
    "performance": 19299,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 18,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon W-2245 @ 3.90GHz",
    "performance": 19305,
    "class": "Server",
    "clockspeed": 3900,
    "cores": 8,
    "tdp": 155,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon E5-2699 v3 @ 2.30GHz",
    "performance": 19349,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 18,
    "tdp": 145,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-7900X @ 3.30GHz",
    "performance": 19358,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 10,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Core i9-10900F @ 2.80GHz",
    "performance": 19471,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 10,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Core i7-10700KF @ 3.80GHz",
    "performance": 19545,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 8,
    "tdp": 125,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "AMD EPYC 7351P",
    "performance": 19589,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 16,
    "tdp": 155,
    "socket": "AMD SP3"
  },
  {
    "name": "Intel Xeon E5-2682 v4 @ 2.50GHz",
    "performance": 19634,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 16,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-10700K @ 3.80GHz",
    "performance": 19691,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 8,
    "tdp": 125,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Xeon E5-2699 v4 @ 2.20GHz",
    "performance": 20306,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 22,
    "tdp": 145,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 7 PRO 4750G",
    "performance": 20523,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i9-9820X @ 3.30GHz",
    "performance": 20702,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 10,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD EPYC 7451",
    "performance": 20738,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 24,
    "tdp": 180,
    "socket": "AMD SP3"
  },
  {
    "name": "Intel Xeon W-2155 @ 3.30GHz",
    "performance": 20887,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 10,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Core i9-10900 @ 2.80GHz",
    "performance": 21259,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 10,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Core i9-7900X @ 3.30GHz",
    "performance": 21314,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 10,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD Ryzen 7 PRO 3700",
    "performance": 22099,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 7 3700X",
    "performance": 22748,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen Threadripper 1920X",
    "performance": 23005,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 12,
    "tdp": 180,
    "socket": "AMD TR4"
  },
  {
    "name": "Intel Core i9-10900X @ 3.70GHz",
    "performance": 23120,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 10,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Core i9-10900KF @ 3.70GHz",
    "performance": 23246,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 10,
    "tdp": 125,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "AMD Ryzen 7 3800X",
    "performance": 23324,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 8,
    "tdp": 105,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i9-7920X @ 2.90GHz",
    "performance": 23442,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 12,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon W-2195 @ 2.30GHz",
    "performance": 23487,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 18,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon W-2175 @ 2.50GHz",
    "performance": 23561,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 14,
    "tdp": 140,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD EPYC 7351",
    "performance": 23566,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 16,
    "tdp": 155,
    "socket": "AMD SP3"
  },
  {
    "name": "Intel Xeon E5-2679 v4 @ 2.50GHz",
    "performance": 23908,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 20,
    "tdp": 200,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i9-10900K @ 3.70GHz",
    "performance": 23992,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 10,
    "tdp": 125,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "AMD Ryzen 7 3800XT",
    "performance": 24294,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 8,
    "tdp": 105,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD EPYC 7551",
    "performance": 24320,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 32,
    "tdp": 180,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD Ryzen Threadripper 2970WX",
    "performance": 24665,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 24,
    "tdp": 250,
    "socket": "AMD TR4"
  },
  {
    "name": "AMD EPYC 7501",
    "performance": 24925,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 32,
    "tdp": 155,
    "socket": "AMD SP3"
  },
  {
    "name": "Intel Core i9-9920X @ 3.50GHz",
    "performance": 25358,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 12,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD Ryzen Threadripper 2920X",
    "performance": 25606,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 12,
    "tdp": 180,
    "socket": "AMD TR4"
  },
  {
    "name": "AMD EPYC 7551P",
    "performance": 25933,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 32,
    "tdp": 180,
    "socket": "AMD SP3"
  },
  {
    "name": "Intel Core i9-10920X @ 3.50GHz",
    "performance": 26187,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 12,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD EPYC 7401P",
    "performance": 26392,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 24,
    "tdp": 155,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD EPYC 7272",
    "performance": 26454,
    "class": "Server",
    "clockspeed": 2900,
    "cores": 12,
    "tdp": 120,
    "socket": "AMD SP3"
  },
  {
    "name": "Intel Core i9-7940X @ 3.10GHz",
    "performance": 26624,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 14,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD Ryzen Threadripper 1950X",
    "performance": 26753,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 16,
    "tdp": 180,
    "socket": "AMD TR4"
  },
  {
    "name": "Intel Core i9-7960X @ 2.80GHz",
    "performance": 27264,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 16,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD EPYC 7571",
    "performance": 27445,
    "class": "Server",
    "clockspeed": 2100,
    "cores": 32,
    "tdp": 120,
    "socket": "AMD SP3"
  },
  {
    "name": "Intel Core i9-9940X @ 3.30GHz",
    "performance": 27976,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 14,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD EPYC 7262",
    "performance": 28924,
    "class": "Server",
    "clockspeed": 3200,
    "cores": 8,
    "tdp": 155,
    "socket": "AMD SP3"
  },
  {
    "name": "Intel Core i9-10940X @ 3.30GHz",
    "performance": 29472,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 14,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Core i9-9960X @ 3.10GHz",
    "performance": 30663,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 16,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD Ryzen 9 3900",
    "performance": 30737,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 12,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i9-9980XE @ 3.00GHz",
    "performance": 31395,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 18,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon W-2295 @ 3.00GHz",
    "performance": 31724,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 18,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Core i9-9990XE @ 4.00GHz",
    "performance": 31941,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 14,
    "tdp": 255,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD Ryzen 9 PRO 3900",
    "performance": 31989,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 12,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 9 3900X",
    "performance": 32862,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 12,
    "tdp": 105,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i9-10980XE @ 3.00GHz",
    "performance": 34048,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 18,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "AMD EPYC 7302P",
    "performance": 38988,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 16,
    "tdp": 155,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD EPYC 7402P",
    "performance": 39118,
    "class": "Server",
    "clockspeed": 2800,
    "cores": 24,
    "tdp": 180,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD EPYC 7502P",
    "performance": 48021,
    "class": "Server",
    "clockspeed": 2500,
    "cores": 32,
    "tdp": 180,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD EPYC 7452",
    "performance": 53478,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 32,
    "tdp": 155,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD Ryzen Threadripper 3960X",
    "performance": 55695,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 24,
    "tdp": 280,
    "socket": "AMD TRX4"
  },
  {
    "name": "AMD Ryzen Threadripper 3970X",
    "performance": 63586,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 32,
    "tdp": 280,
    "socket": "AMD TRX4"
  },
  {
    "name": "AMD EPYC 7702P",
    "performance": 64395,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 64,
    "tdp": 200,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD EPYC 7742",
    "performance": 67185,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 64,
    "tdp": 225,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD EPYC 7702",
    "performance": 71362,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 64,
    "tdp": 200,
    "socket": "AMD SP3"
  },
  {
    "name": "AMD Ryzen Threadripper 3990X",
    "performance": 80492,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 64,
    "tdp": 280,
    "socket": "AMD TRX4"
  },
  {
    "name": "AMD Athlon II 170u",
    "performance": 361,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 1,
    "tdp": 20,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron E1200 @ 1.60GHz",
    "performance": 492,
    "class": "Desktop",
    "clockspeed": 1600,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Celeron G465 @ 1.90GHz",
    "performance": 580,
    "class": "Desktop",
    "clockspeed": 1900,
    "cores": 1,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core2 Duo E6600 @ 2.40GHz",
    "performance": 867,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium G620T @ 2.20GHz",
    "performance": 896,
    "class": "Desktop",
    "clockspeed": 2200,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Athlon II X2 220",
    "performance": 954,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium E6600 @ 3.06GHz",
    "performance": 931,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Pentium G3250T @ 2.80GHz",
    "performance": 1851,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Celeron G555 @ 2.70GHz",
    "performance": 1268,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Celeron G1820T @ 2.40GHz",
    "performance": 1704,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Athlon II X4 610e",
    "performance": 1814,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 4,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core2 Quad Q6600 @ 2.40GHz",
    "performance": 1766,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 4,
    "tdp": 105,
    "socket": "Intel LGA 775"
  },
  {
    "name": "AMD Phenom II X3 710",
    "performance": 1454,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i3-4570T @ 2.90GHz",
    "performance": 3244,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1225 @ 3.10GHz",
    "performance": 3608,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A10-5700 APU",
    "performance": 2692,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i3-4330 @ 3.50GHz",
    "performance": 3575,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-7100T @ 3.40GHz",
    "performance": 3749,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1220 @ 3.10GHz",
    "performance": 3804,
    "class": "Server",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i3-4350T @ 3.10GHz",
    "performance": 2888,
    "class": "Laptop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-2400S @ 2.50GHz",
    "performance": 3176,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i3-4350 @ 3.60GHz",
    "performance": 3163,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD PRO A10-9700",
    "performance": 3516,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i3-6100E @ 2.70GHz",
    "performance": 3315,
    "class": "Laptop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Pentium G4500 @ 3.50GHz",
    "performance": 2877,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 51,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-2380P @ 3.10GHz",
    "performance": 3709,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD FX-670K Quad-Core",
    "performance": 2762,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i3-4150 @ 3.50GHz",
    "performance": 3367,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Celeron G5900 @ 3.40GHz",
    "performance": 2737,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 58,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "AMD A12-9800",
    "performance": 3598,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD A10-7870K",
    "performance": 3562,
    "class": "Desktop",
    "clockspeed": 3900,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G4600T @ 3.00GHz",
    "performance": 3185,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i3-4370 @ 3.80GHz",
    "performance": 3851,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-4130T @ 2.90GHz",
    "performance": 2830,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD PRO A10-8750B",
    "performance": 2962,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD FX-6300 Six-Core",
    "performance": 4125,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i7-4765T @ 2.00GHz",
    "performance": 4733,
    "class": "Desktop",
    "clockspeed": 2000,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-1603 v3 @ 2.80GHz",
    "performance": 4451,
    "class": "Server",
    "clockspeed": 2800,
    "cores": 4,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1230 v3 @ 3.30GHz",
    "performance": 6825,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i7-3770K @ 3.50GHz",
    "performance": 6442,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 77,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Ryzen 3 3200G",
    "performance": 7258,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E-2224 @ 3.40GHz",
    "performance": 7454,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 71,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Xeon E5-2623 v3 @ 3.00GHz",
    "performance": 7382,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 105,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2650L v2 @ 1.70GHz",
    "performance": 7475,
    "class": "Server",
    "clockspeed": 1700,
    "cores": 10,
    "tdp": 70,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen 3 PRO 3200G",
    "performance": 7372,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Xeon E-2224G @ 3.50GHz",
    "performance": 7353,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 71,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-7400T @ 2.40GHz",
    "performance": 4522,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-7600K @ 3.80GHz",
    "performance": 6780,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 91,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i3-9300T @ 3.20GHz",
    "performance": 6367,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 3 1200",
    "performance": 6387,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i5-6440HQ @ 2.60GHz",
    "performance": 5290,
    "class": "Laptop",
    "clockspeed": 2600,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i7-5675C @ 3.10GHz",
    "performance": 6089,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Athlon 3000G",
    "performance": 4471,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 3 PRO 1300",
    "performance": 7717,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i7-4930K @ 3.40GHz",
    "performance": 9507,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 6,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2665 @ 2.40GHz",
    "performance": 8637,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 8,
    "tdp": 115,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-4627 v2 @ 3.30GHz",
    "performance": 9579,
    "class": "Server",
    "clockspeed": 3300,
    "cores": 8,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2643 v4 @ 3.40GHz",
    "performance": 11335,
    "class": "Server",
    "clockspeed": 3400,
    "cores": 6,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E3-1280 v5 @ 3.70GHz",
    "performance": 8048,
    "class": "Server",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-10600K @ 4.10GHz",
    "performance": 14915,
    "class": "Desktop",
    "clockspeed": 4100,
    "cores": 6,
    "tdp": 125,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Core i9-9900K @ 3.60GHz",
    "performance": 18889,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 8,
    "tdp": 95,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen Threadripper 1900X",
    "performance": 16957,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 8,
    "tdp": 180,
    "socket": "AMD TR4"
  },
  {
    "name": "AMD Ryzen 7 1700",
    "performance": 14559,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 8,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i9-9900X @ 3.50GHz",
    "performance": 21613,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 10,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Core i9-7980XE @ 2.60GHz",
    "performance": 29832,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 18,
    "tdp": 165,
    "socket": "Intel LGA 2066"
  },
  {
    "name": "Intel Xeon E5-2686 v3 @ 2.00GHz",
    "performance": 16586,
    "class": "Server",
    "clockspeed": 2000,
    "cores": 18,
    "tdp": 120,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen Threadripper 2950X",
    "performance": 30526,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 16,
    "tdp": 180,
    "socket": "AMD TR4"
  },
  {
    "name": "Intel Core i9-9900KS @ 4.00GHz",
    "performance": 19361,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 8,
    "tdp": 127,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD Ryzen 9 3950X",
    "performance": 39253,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 16,
    "tdp": 105,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen 9 3900XT",
    "performance": 33337,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 12,
    "tdp": 105,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Ryzen Threadripper 2990WX",
    "performance": 32072,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 32,
    "tdp": 250,
    "socket": "AMD TR4"
  },
  {
    "name": "AMD Athlon II X2 210e",
    "performance": 1148,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron G1620 @ 2.70GHz",
    "performance": 1557,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A6-7470K",
    "performance": 1744,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Athlon II X4 615e",
    "performance": 1904,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G3240 @ 3.10GHz",
    "performance": 1903,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD PRO A4-8350B",
    "performance": 1733,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G2100T @ 2.60GHz",
    "performance": 1691,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Phenom II X4 805",
    "performance": 1844,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X3 425",
    "performance": 1537,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron G1630 @ 2.80GHz",
    "performance": 1646,
    "class": "Desktop",
    "clockspeed": 2800,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD Athlon II X4 635",
    "performance": 2183,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Celeron G3930TE @ 2.70GHz",
    "performance": 2218,
    "class": "Desktop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD A10-6700T APU",
    "performance": 2224,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 45,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core2 Extreme X9770 @ 3.20GHz",
    "performance": 2622,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 136,
    "socket": "Intel LGA 775"
  },
  {
    "name": "Intel Core i3-3250T @ 3.00GHz",
    "performance": 2650,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A8-5500B APU",
    "performance": 2667,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G3470 @ 3.60GHz",
    "performance": 2428,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 2,
    "tdp": 53,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "AMD Phenom II X4 B95",
    "performance": 2280,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD FX-4330",
    "performance": 3467,
    "class": "Desktop",
    "clockspeed": 4000,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Pentium G4400TE @ 2.40GHz",
    "performance": 2190,
    "class": "Laptop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD PRO A12-8870",
    "performance": 3848,
    "class": "Desktop",
    "clockspeed": 3700,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "Intel Core i3-6100H @ 2.70GHz",
    "performance": 3217,
    "class": "Laptop",
    "clockspeed": 2700,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD A8-5600K APU",
    "performance": 2710,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 100,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Core i3-4130 @ 3.40GHz",
    "performance": 3260,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i3-4170T @ 3.20GHz",
    "performance": 3218,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Pentium Gold G5500 @ 3.80GHz",
    "performance": 3775,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i5-24050S @ 2.50GHz",
    "performance": 2799,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A8-7600 APU",
    "performance": 3216,
    "class": "Desktop",
    "clockspeed": 3100,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "Intel Pentium G4560 @ 3.50GHz",
    "performance": 3561,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 54,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i3-7101TE @ 3.40GHz",
    "performance": 4003,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Xeon E3-1260L @ 2.40GHz",
    "performance": 3698,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Pentium Gold G5500T @ 3.20GHz",
    "performance": 3234,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "Intel Core i3-3245 @ 3.40GHz",
    "performance": 2946,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 2,
    "tdp": 55,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "AMD A8-7650K",
    "performance": 2901,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD FX-B4150 Quad-Core",
    "performance": 3369,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A10-7860K",
    "performance": 3266,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD Athlon Gold PRO 3150GE",
    "performance": 7578,
    "class": "Desktop",
    "clockspeed": 3300,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Phenom II X6 1065T",
    "performance": 3239,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 6,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Ryzen 3 PRO 2100GE",
    "performance": 4308,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD PRO A12-9800",
    "performance": 3920,
    "class": "Desktop",
    "clockspeed": 3800,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Opteron 3365",
    "performance": 4114,
    "class": "Server",
    "clockspeed": 2300,
    "cores": 8,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon E3-1280 @ 3.50GHz",
    "performance": 5466,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 95,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Core i3-8300T @ 3.20GHz",
    "performance": 5827,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 25,
    "socket": "Intel LGA 1151 v2"
  },
  {
    "name": "AMD FX-6130 Six-Core",
    "performance": 4353,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 6,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD FX-9590 Eight-Core",
    "performance": 6690,
    "class": "Desktop",
    "clockspeed": 4700,
    "cores": 8,
    "tdp": 220,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Core i7-4790 @ 3.60GHz",
    "performance": 7207,
    "class": "Desktop",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1270L v4 @ 3.00GHz",
    "performance": 7662,
    "class": "Server",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 45,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Core i5-7500 @ 3.40GHz",
    "performance": 6156,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 4,
    "tdp": 65,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "Intel Core i5-4460 @ 3.20GHz",
    "performance": 4779,
    "class": "Desktop",
    "clockspeed": 3200,
    "cores": 4,
    "tdp": 84,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E3-1280 v3 @ 3.60GHz",
    "performance": 6829,
    "class": "Server",
    "clockspeed": 3600,
    "cores": 4,
    "tdp": 82,
    "socket": "Intel LGA 1150"
  },
  {
    "name": "Intel Xeon E5-2637 v2 @ 3.50GHz",
    "performance": 7004,
    "class": "Server",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 130,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD Ryzen Threadripper 2990X",
    "performance": 20885,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 32,
    "tdp": 250,
    "socket": "AMD TR4"
  },
  {
    "name": "Intel Core i7-5960X @ 3.00GHz",
    "performance": 12672,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 8,
    "tdp": 140,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Core i7-10700 @ 2.90GHz",
    "performance": 17560,
    "class": "Desktop",
    "clockspeed": 2900,
    "cores": 8,
    "tdp": 65,
    "socket": "Intel LGA 1200"
  },
  {
    "name": "Intel Xeon E5-2690 v4 @ 2.60GHz",
    "performance": 17678,
    "class": "Server",
    "clockspeed": 2600,
    "cores": 14,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2698 v4 @ 2.20GHz",
    "performance": 17472,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 20,
    "tdp": 135,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Xeon E5-2696 v4 @ 2.20GHz",
    "performance": 17605,
    "class": "Server",
    "clockspeed": 2200,
    "cores": 22,
    "tdp": 145,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "AMD A6-9500E",
    "performance": 1841,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 35,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD A6-9500",
    "performance": 1866,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 2,
    "tdp": 65,
    "socket": "AMD AM4"
  },
  {
    "name": "AMD Athlon II X3 415e",
    "performance": 1441,
    "class": "Desktop",
    "clockspeed": 2500,
    "cores": 3,
    "tdp": 45,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD Athlon II X3 460",
    "performance": 1854,
    "class": "Desktop",
    "clockspeed": 3400,
    "cores": 3,
    "tdp": 95,
    "socket": "AMD AM3+"
  },
  {
    "name": "Intel Xeon E5-2609 @ 2.40GHz",
    "performance": 2874,
    "class": "Server",
    "clockspeed": 2400,
    "cores": 4,
    "tdp": 80,
    "socket": "Intel LGA 2011 v3"
  },
  {
    "name": "Intel Celeron G1620T @ 2.40GHz",
    "performance": 1507,
    "class": "Desktop",
    "clockspeed": 2400,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1155"
  },
  {
    "name": "Intel Celeron G4930T @ 3.00GHz",
    "performance": 2117,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 2,
    "tdp": 35,
    "socket": "Intel LGA 1151"
  },
  {
    "name": "AMD Phenom II X4 910e",
    "performance": 2006,
    "class": "Desktop",
    "clockspeed": 2600,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD A8-6500B APU",
    "performance": 2897,
    "class": "Desktop",
    "clockspeed": 3500,
    "cores": 4,
    "tdp": 65,
    "socket": "AMD FM2+"
  },
  {
    "name": "AMD FX-4170 Quad-Core",
    "performance": 3092,
    "class": "Desktop",
    "clockspeed": 4200,
    "cores": 4,
    "tdp": 125,
    "socket": "AMD AM3+"
  },
  {
    "name": "AMD PRO A10-9700E",
    "performance": 3195,
    "class": "Desktop",
    "clockspeed": 3000,
    "cores": 4,
    "tdp": 35,
    "socket": "AMD AM4"
  }
]

module.exports = cpus
