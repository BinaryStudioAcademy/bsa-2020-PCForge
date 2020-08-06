const powerSupplies = [
  { "name": "1st Player PS-500FK 500W", "power": 500 },
  { "name": "1st Player PS-600FK 600W", "power": 600 },
  { "name": "1st Player PS-700FK 700W", "power": 700 },
  { "name": "ASUS ROG Strix 750W", "power": 750 },
  { "name": "ASUS ROG Strix 800W", "power": 80 },
  { "name": "ASUS ROG Strix 850W", "power": 850 },
  { "name": "Aerocool Cylon ARGB 400W", "power": 400 },
  { "name": "Aerocool Cylon ARGB 500W", "power": 500 },
  { "name": "Aerocool Cylon ARGB 600W", "power": 600 },
  { "name": "Aerocool Cylon ARGB 700W", "power": 700 },
  { "name": "Aerocool KCAS-750G 750W", "power": 750 },
  { "name": "Aerocool KCAS-850G 850W", "power": 750 },
  { "name": "Aerocool VX Plus 400 400W", "power": 400 },
  { "name": "Aerocool VX Plus 500 500W", "power": 500 },
  { "name": "Aerocool VX Plus 600 RGB 600W", "power": 600 },
  { "name": "Aerocool VX Plus 700 RGB 700W", "power": 700 },
  { "name": "Aerocool VX Plus 750 RGB 750W", "power": 750 },
  { "name": "Asus ROG Thor 850W", "power": 850 },
  { "name": "Asus ROG Thor 1000W", "power": 1000 },
  {
    "name": "Chieftec A-135 (APS-850CB) 850W",
    "power": 850
  },
  {
    "name": "Chieftec A-135 (APS-1000CB) 1000W",
    "power": 1000
  },
  { "name": "Chieftec BDF-500S 500W", "power": 500 },
  { "name": "Chieftec BDF-600S 600W", "power": 600 },
  { "name": "Chieftec BDF-800S 800W", "power": 800 },
  { "name": "Chieftec CORE BBS-600S 600W", "power": 600 },
  { "name": "Chieftec CORE BBS-700S 700W", "power": 700 },
  { "name": "Chieftec CORE BBS-800S 800W", "power": 800 },
  { "name": "Chieftec CTG-650C 650W", "power": 650 },
  { "name": "Chieftec CTG-750C 750W", "power": 750 },
  {
    "name": "Chieftec Full-Range GPS-850C 850W",
    "power": 850
  },
  {
    "name": "Chieftec Full-Range GPS-1000C 1000W",
    "power": 1000
  },
  {
    "name": "Chieftec Full-Range GPS-1250C 1250W",
    "power": 1250
  },
  { "name": "Chieftec GPS-500A8 500W", "power": 500 },
  { "name": "Chieftec GPS-600A8 600W", "power": 600 },
  { "name": "Chieftec GPS-700A8 700W", "power": 700 },
  {
    "name": "Chieftec Polaris PPS-750FC 750W",
    "power": 750
  },
  { "name": "Chieftec Proton BDF-650C 650W", "power": 650 },
  { "name": "Chieftec Proton BDF-750C 750W", "power": 750 },
  { "name": "Chieftec Proton BDF-850C 850W", "power": 850 },
  {
    "name": "Chieftec Proton BDF-1000C 1000W",
    "power": 1000
  },
  { "name": "Chieftec Value APB-500B8 500W", "power": 500 },
  { "name": "Chieftec Value APB-550B8 550W", "power": 550 },
  { "name": "Cougar GX 400 400W", "power": 400 },
  { "name": "Cougar GX 500 500W", "power": 500 },
  { "name": "Cougar GX 600 600W", "power": 600 },
  { "name": "Cougar GX 800 800W", "power": 800 },
  { "name": "Cougar VTE600 600W", "power": 600 },
  { "name": "Crown CM-PS 500W", "power": 500 },
  { "name": "Crown CM-PS 550W", "power": 550 },
  { "name": "Crown CM-PS 600W", "power": 600 },
  { "name": "Crown CM-PS 650W", "power": 650 },
  { "name": "DeepCool 500W", "power": 500 },
  { "name": "DeepCool 550W", "power": 550 },
  { "name": "DeepCool 600W", "power": 600 },
  { "name": "DeepCool Aurora 500W", "power": 500 },
  { "name": "DeepCool Aurora 600W", "power": 600 },
  { "name": "DeepCool Aurora 650W", "power": 650 },
  { "name": "DeepCool DA700 700W", "power": 700 },
  { "name": "DeepCool DA750 750W", "power": 750 },
  { "name": "DeepCool DA800 800W", "power": 800 },
  { "name": "Enermax RevoBron 600W", "power": 600 },
  { "name": "Enermax RevoBron 800W", "power": 800 },
  { "name": "Enermax RevoBron 1000W", "power": 1000 },
  { "name": "GameMax GE-400 400W", "power": 400 },
  { "name": "GameMax GE-450 450W", "power": 450 },
  { "name": "GameMax GE-500 500W", "power": 500 },
  { "name": "GameMax GM-400-8CM 400W", "power": 400 },
  { "name": "GameMax GM-450B 450W", "power": 450 },
  { "name": "GameMax GM-500B 500W", "power": 500 },
  { "name": "GameMax GM400 OEM 400W", "power": 400 },
  { "name": "GameMax GM450 OEM 450W", "power": 450 },
  { "name": "GameMax GM500 OEM 500W", "power": 500 },
  { "name": "GameMax VP-800-M-RGB 800W", "power": 800 },
  { "name": "GameMax VP-850-M-RGB 850W", "power": 850 },
  { "name": "LogicPower ATX-400 OEM 400W", "power": 400 },
  { "name": "LogicPower ATX-450 OEM 450W", "power": 450 },
  { "name": "Riotoro Enigma G2 750 750W", "power": 750 },
  { "name": "Seasonic Focus GX-750 750W", "power": 750 },
  { "name": "Seasonic Focus GX-850 850W", "power": 850 },
  { "name": "Seasonic Focus PX-650 650W", "power": 650 },
  { "name": "Seasonic Focus PX-700 700W", "power": 700 },
  { "name": "Seasonic S12III-650 650W", "power": 650 },
  { "name": "Vinga 600W", "power": 600 },
  { "name": "Vinga 650W", "power": 650 },
  { "name": "Vinga 700W", "power": 700 },
  { "name": "Vinga 750W", "power": 750 },
  { "name": "Vinga 800W", "power": 800 },
  { "name": "Vinga 850W", "power": 850 },
  { "name": "Vinga 1000W", "power": 1000 },
  { "name": "Vinga 1200W", "power": 1200 },
  {
    "name": "Xilence Red Wing Series R7 600W",
    "power": 600
  },
  {
    "name": "Xilence Red Wing Series R7 750W",
    "power": 750
  },
  {
    "name": "Zalman GigaMax ZM550-GVII APFC 550W",
    "power": 550
  },
  {
    "name": "Zalman GigaMax ZM650-GVII APFC 650W",
    "power": 650
  },
  { "name": "Zalman WattBit 500W", "power": 500 },
  { "name": "Zalman WattBit 600W", "power": 600 },
  { "name": "Zalman WattBit 700W", "power": 700 },
  { "name": "Zalman WattBit 800W", "power": 800 },
  { "name": "Zalman ZM700-LXII 700W", "power": 700 },
  { "name": "Zalman ZM750-LXII 750W", "power": 750 }
]

module.exports = powerSupplies
