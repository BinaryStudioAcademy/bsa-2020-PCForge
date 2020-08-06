const motherboards = [
  {
    name: 'Asus TUF B450-PRO GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450-A PRO MAX',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B450M Pro4-F',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B450M DS3H rev. 1.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-AB350M-DS3H V2 rev. 1.1',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450 TOMAHAWK MAX',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B450M S2H rev. 1.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450 GAMING PLUS MAX',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B450 AORUS ELITE rev. 1.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix B450-E GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450M PRO-VDH MAX',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B450 AORUS M rev. 1.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus H170 PRO GAMING',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B365M Pro4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME Z270-P',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B450 Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B450M-A',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B450 AORUS PRO rev. 1.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF B450M-PRO GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix B450-F GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 GAMING X',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF GAMING B550-PLUS',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B450M Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MAG B550 TOMAHAWK',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF B450-PLUS GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B450M Steel Legend',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X570 UD',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M S2 2.0 rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI X570-A PRO',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B450 Gaming X',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus M5A78L-M LX3',
    socket: 'AMD AM3+',
    ram: 'DDR3',
  },
  {
    name: 'Asus ROG STRIX B550-F GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B450 Steel Legend',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix X570-E Gaming',
    socket: 'AMD AM4',
    ram: '4 х ',
  },
  {
    name: 'MSI Z390-A PRO',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B450M H',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG X570 GAMING PLUS',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF GAMING B460-PLUS',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI A320M-A PRO',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B550M-A',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450M MORTAR MAX',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX B550-I GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450M-A PRO MAX',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME A320M-K',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME A320M-A',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X570 AORUS ELITE',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B550-PLUS',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock A320M-DVS R4.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI X470 GAMING PRO MAX',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI X470 GAMING PLUS MAX',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MAG Z390 TOMAHAWK',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG Z490 GAMING PLUS',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI H310M PRO-VD PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX B550-E GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF B450M-PLUS GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG B550 GAMING EDGE WIFI',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B450M-K',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG Z390 GAMING EDGE AC',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG X570 GAMING EDGE WIFI',
    socket: 'AMD AM4',
    ram: 'DMI',
  },
  {
    name: 'Asus TUF GAMING B550M-PLUS',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME X570-P',
    socket: 'AMD AM4',
    ram: '4 х ',
  },
  {
    name: 'MSI MPG Z490 GAMING EDGE WIFI',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H110 Pro BTC+',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Fatal1ty B450 Gaming K4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 UD',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-A320M-S2H V2 rev. 1.1',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock AB350 Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX Z490-H GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450 GAMING PRO CARBON MAX WIFI',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B460-PLUS',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG Z390 GAMING PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H410M-K',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX Z490-E GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock 760GM-HDV',
    socket: 'AMD AM3+',
    ram: 'DDR3',
  },
  {
    name: 'Gigabyte B550 AORUS PRO',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG X570 GAMING PRO CARBON WIFI',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310M-R R2.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 AORUS ELITE',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock AB350M Pro4 R2.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 AORUS MASTER',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X570 GAMING X',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X370 Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B450-PLUS',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 AORUS PRO',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar X470NH',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490 GAMING X',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M S2H 2.0 rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B450M GAMING rev. 1.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B460 Phantom Gaming 4',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B460M Pro4',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus M5A78L-M PLUS/USB3',
    socket: 'AMD AM3+',
    ram: 'DDR3',
  },
  {
    name: 'Asus PRIME B550M-K',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MAG Z490 TOMAHAWK',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B550 AORUS MASTER',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI Z490-A PRO',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Biostar A320MH Ver. 6.x',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF GAMING X570-PLUS',
    socket: 'AMD AM4',
    ram: '4 х ',
  },
  {
    name: 'Asus ROG Strix Z390-E GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X570 AORUS PRO',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X470 Master SLI',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF B360-PLUS GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX B550-F GAMING (WI-FI)',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 AORUS MASTER G2 Edition',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF GAMING B550M-PLUS (WI-FI)',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H310CM-DVS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490 AORUS ELITE AC',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG MAXIMUS XI HERO WI-FI',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME X570-PRO',
    socket: 'AMD AM4',
    ram: '4 х ',
  },
  {
    name: 'Asus PRIME B360-PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus H110M-K',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B550M Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450M PRO-M2 MAX',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B360 GAMING PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490M',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF Z390-PLUS GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix B450-I GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF GAMING H470-PRO',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus A68HM-K',
    socket: 'AMD FM2+',
    ram: 'DDR3',
  },
  {
    name: 'Asus TUF GAMING Z490-PLUS (WI-FI)',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 D',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H410M-D',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X370M-HDV',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock A320M Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H81 Pro BTC',
    socket: 'Intel LGA 1150',
    ram: 'DDR3',
  },
  {
    name: 'Asus EX-B250-V7',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'MSI B365M PRO-VDH',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B450M-A/CSM',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B360M-K',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H410M-HVS',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490 AORUS MASTER',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X570 Phantom Gaming 4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME A320M-R-SI',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME A320I-K/CSM',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG Z490 GAMING CARBON WIFI',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B365 Pro4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock AB350M-HDV',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z390 Pro4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 AORUS PRO WIFI',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG Z390 GAMING PRO CARBON AC',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X570 AORUS MASTER',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix X570-I Gaming',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310M-K R2.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus H110M-CS',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Biostar A960D+',
    socket: 'AMD AM3+',
    ram: 'DDR3',
  },
  {
    name: 'Asus TUF GAMING B460-PRO (WI-FI)',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B365 M AORUS ELITE',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX Z490-I GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI MAG B550M MORTAR',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B460 Pro4',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus Z10PR-D16',
    socket: 'Intel LGA 2011 v3',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG MAXIMUS XII HERO (WI-FI)',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME Z390-P',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI H310M PRO-VDH PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B550 AORUS PRO AC',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490 Phantom Gaming 4',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF GAMING Z490-PLUS',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG Z390I GAMING EDGE AC',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-B250M-DS3H rev. 1.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME Z490-A',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Biostar B450MH Ver. 6.x',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 AORUS ULTRA',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490M GAMING X',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X570 Taichi',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B450M-HDV R4.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX Z490-G GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG CROSSHAIR VIII FORMULA',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MAG B550M BAZOOKA',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B550M PRO-VDH WIFI',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B550 Extreme4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B365 HD3',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI B360-A PRO',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490 Pro4',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix Z390-F GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix B360-H GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B550 Phantom Gaming 4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B360M-A',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF Z390-PLUS GAMING WI-FI',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar Racing X470GTQ',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B365M Phantom Gaming 4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B360N WIFI rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX B460-H GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H270-PLUS',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310 D3 rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar A10N-8800E Ver. 6.x',
    socket: 'встроенный AMD',
    ram: 'DMI',
  },
  {
    name: 'Asus TUF GAMING B460M-PLUS (WI-FI)',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B460M-A',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 GAMING SLI',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus P8B75-M LX PLUS',
    socket: 'Intel LGA 1155',
    ram: 'DDR3',
  },
  {
    name: 'Asus PRIME H470-PLUS',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI MEG Z490I UNIFY',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B550 GAMING X',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B365M D3H',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490 Extreme4',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z390 Phantom Gaming 4S',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG CROSSHAIR VIII HERO WI-FI',
    socket: 'AMD AM4',
    ram: '4 х ',
  },
  {
    name: 'MSI PRESTIGE X570 CREATION',
    socket: 'AMD AM4',
    ram: 'M',
  },
  {
    name: 'Gigabyte Z390 M',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX Z490-F GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG MAXIMUS XII FORMULA',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B550 Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix X570-F Gaming',
    socket: 'AMD AM4',
    ram: '4 х ',
  },
  {
    name: 'Asus ROG STRIX B460-I GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG MAXIMUS XII EXTREME',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME Z390-A',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H470M-PLUS',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H410M-A',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B460M-K',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI MAG Z390M MORTAR',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar H310MHD3 Ver. V7.x',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR3',
  },
  {
    name: 'ASRock H310CM-HDV',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B550M Steel Legend',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B460 HD3',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H370 HD3',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI H110M PRO-D',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF B360-PRO GAMING WI-FI',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Zenith II Extreme',
    socket: 'AMD TRX4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX B460-G GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B550M-A (WI-FI)',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MEG X570 GODLIKE',
    socket: 'AMD AM4',
    ram: 'M',
  },
  {
    name: 'Gigabyte B550 AORUS ELITE',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock A320M-HDV R4.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X570 Steel Legend',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix B360-G GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar Racing X570GT',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus Crosshair VII Hero',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI A320M-A PRO M2',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B450 I AORUS PRO WIFI rev. 1.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF GAMING X570-PLUS Wi-Fi',
    socket: 'AMD AM4',
    ram: '4 х ',
  },
  {
    name: 'Biostar TB250-BTC Ver. 6.x',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX Z490-A GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME Z490M-PLUS',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock J5005-ITX',
    socket: 'встроенный Intel',
    ram: 'DMI',
  },
  {
    name: 'ASRock Fatal1ty B360 Gaming K4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI B460M-A PRO',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B365M-HDV',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B365M DS3H',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI A320M PRO-E',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490M-ITX/ac',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X570M Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG MAXIMUS XI HERO',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B365M-A',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Colorful BATTLE-AX B365M-D V20',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus B85M-K',
    socket: 'Intel LGA 1150',
    ram: 'DDR3',
  },
  {
    name: 'Gigabyte Z490 AORUS PRO AX',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX H470-I GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG CROSSHAIR VIII HERO',
    socket: 'AMD AM4',
    ram: '4 х ',
  },
  {
    name: 'Biostar H110MHV3 Ver. 7.x',
    socket: 'Intel LGA 1151',
    ram: 'DDR3',
  },
  {
    name: 'Gigabyte GA-H310MSTX-HD3',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock AB350M Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X570 AORUS XTREME',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix Z390-H GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME Z490-P',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME Z390M-PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI B365M PRO-VH',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X570 Extreme4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX B460-F GAMING',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus Maximus X Formula',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H410M S2H',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H410M-HDV/M.2',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock G41C-GS',
    socket: 'Intel LGA 775',
    ram: 'DDR2',
  },
  {
    name: 'Gigabyte B365M D2V',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B360M D2V rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490 Steel Legend',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME J4005I-C',
    socket: 'встроенный Intel',
    ram: 'DMI',
  },
  {
    name: 'ASRock B550 Phantom Gaming 4/ac',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B460M-ITX/ac',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B460 AORUS PRO AC',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490 UD',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z390 Steel Legend',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z390M Pro4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME X299-A',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME A320M-C R2.0',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Biostar H310MHP',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H110N rev. 1.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H110M-H rev. 1.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490 AORUS ULTRA',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX Z490-G GAMING (Wi-Fi)',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix B360-F GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B365-PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B365M-K',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI MAG B460M MORTAR',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H470M Pro4',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H310CM-ITX/ac',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock G41C-GS',
    socket: 'Intel LGA 775',
    ram: 'DDR2',
  },
  {
    name: 'ASRock B460M Steel Legend',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B360M D2V rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus A88X-PLUS/USB 3.1',
    socket: 'AMD FM2+',
    ram: 'DDR3',
  },
  {
    name: 'ASRock Z390 Phantom Gaming 4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310I-PLUS R2.0/CSM',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG Z490M GAMING EDGE WIFI',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI MPG Z390 GAMING PRO CARBON',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI MAG B365M MORTAR',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus J1900I-C',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock H81M-VG4',
    socket: 'Intel LGA 1150',
    ram: 'DDR3',
  },
  {
    name: 'Gigabyte H310M H 2.0 rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B365M H',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar A68MDE Ver. 7.x',
    socket: 'AMD FM2+',
    ram: 'DDR3',
  },
  {
    name: 'MSI A68HM-E33 V2',
    socket: 'AMD FM2+',
    ram: 'DDR3',
  },
  {
    name: 'MSI A320M BAZOOKA',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X399 AORUS PRO rev. 1.0',
    socket: 'AMD TR4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF Z390-PRO GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix H370-I GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix B360-I GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus Maximus X Hero',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H370 Pro4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M D3H',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI H110M PRO-VH PLUS',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H110M-S2H rev. 1.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490 AORUS XTREME',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 M GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X570 Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X370M Pro4',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI X299 GAMING PRO CARBON',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X10DRL-i',
    socket: 'Intel LGA 2011 v3',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF B360-PRO GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte TRX40 DESIGNARE',
    socket: 'AMD TRX4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix Z390-I GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix X399-E GAMING',
    socket: 'AMD TR4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix B365-G GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H370-PLUS/CSM',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus P10S WS',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'MSI MEG Z490 GODLIKE',
    socket: 'Intel LGA 1200',
    ram: '4 х ',
  },
  {
    name: 'ASRock H370M Pro4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI H310M PRO-M2 PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H310M-HDV/M.2',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H110M-DVS R3.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H310TN rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B460 Steel Legend',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X570 Phantom Gaming X',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI X299 SLI PLUS',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF B360M-PLUS GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Zenith II Extreme Alpha',
    socket: 'AMD TRX4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX B365-F GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG MAXIMUS XII APEX',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME Z490-V',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H410M-E',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B360M-D',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI MEG Z490 ACE',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock J4105B-ITX',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock J3355B-ITX',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'Asus J1800I-C',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock H470 Phantom Gaming 4',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H410M/ac',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus H110I-PLUS',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H61M-S2PV',
    socket: 'Intel LGA 1155',
    ram: 'DDR3',
  },
  {
    name: 'Gigabyte B550M DS3H',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490 VISION D',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z390 Phantom Gaming SLI',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z390 Phantom Gaming 6',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus Z11PA-U12',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'Asus WS X299 PRO',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF Z390M-PRO GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF B360M-E GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Zenith Extreme Alpha',
    socket: 'AMD TR4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG RAMPAGE VI EXTREME OMEGA',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Asus P11C-X',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'MSI MEG Z390 ACE',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock J3455B-ITX',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'Biostar H61MH',
    socket: 'Intel LGA 1155',
    ram: 'DDR3',
  },
  {
    name: 'Gigabyte H310M S2P 2.0 rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-J1800N-D2H',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'Gigabyte GA-A320M-H',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z490I AORUS ULTRA',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z390M-ITX/ac',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI Z370 GAMING M5',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF GAMING B460M-PLUS',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF B360M-PLUS GAMING S',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock TRX40 Creator',
    socket: 'AMD TRX4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte TRX40 AORUS MASTER',
    socket: 'AMD TRX4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix TRX40-E Gaming',
    socket: 'AMD TRX4',
    ram: '8 х ',
  },
  {
    name: 'Asus ProArt Z490-CREATOR 10G',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Asus Pro A320M-R WI-FI',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310M-E R2.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310M-C',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME A320M-E',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus P11C-I',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus Maximus IX Formula',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock J4105-ITX',
    socket: 'встроенный Intel',
    ram: 'DMI',
  },
  {
    name: 'ASRock J4005B-ITX',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock H470 Steel Legend',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H370M D3H rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H370 AORUS GAMING 3 WIFI rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI H310M PRO-VDH',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar H110MHC Ver. 7.x',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Fatal1ty H370 Performance',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B550 PG Velocita',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B460M PRO',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B460M DS3H',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B460M D2V',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B460M AORUS PRO',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450M PRO-M2',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B365 Phantom Gaming 4',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar B360MHD PRO Ver. 6.x',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI B150M NIGHT ELF',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus B150M-A/M.2',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Biostar A320MD PRO',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Z390 DESIGNARE',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X299 DESIGNARE EX',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11SPL-F',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11DPI-NT',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'Asus WS C621E SAGE',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte TRX40 AORUS XTREME',
    socket: 'AMD TRX4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG ZENITH EXTREME',
    socket: 'AMD TR4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H370M-PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310T',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310I-PLUS R2.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H270M-PLUS',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus P10S-M-DC',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'MSI MEG X570 UNIFY',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI MAG B460M MORTAR WIFI',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte J4005N D2P',
    socket: 'встроенный Intel',
    ram: 'DMI',
  },
  {
    name: 'Biostar H81MHV3',
    socket: 'Intel LGA 1150',
    ram: 'DDR3',
  },
  {
    name: 'MSI H81M-E33',
    socket: 'Intel LGA 1150',
    ram: 'DDR3',
  },
  {
    name: 'Gigabyte H470M DS3H',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H410M-HDV',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H370M D3H GSM rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M S2V 2.0 rev 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M S2H rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M M.2 2.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar H310MHD PRO Ver. 6.x',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M DS2 2.0 rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M A 2.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H310CM-HDV/M.2',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus H110M-C',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus H110M-A',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H110M-S2PV rev. 1.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock FM2A68M-DG3+',
    socket: 'AMD FM2+',
    ram: 'DDR3',
  },
  {
    name: 'ASRock Fatal1ty Z270 Gaming K6',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock D1800M',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock B460M-HDV',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Biostar B460GTQ',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Biostar B460GTA',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450M PRO-VDH V2',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI B150 GAMING M3',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock AB350M',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus A68HM-PLUS',
    socket: 'AMD FM2+',
    ram: 'DDR3',
  },
  {
    name: 'ASRock A68HM-PLUS',
    socket: 'AMD FM2+',
    ram: 'DDR3',
  },
  {
    name: 'Gigabyte Z490 VISION G',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490 Taichi',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490 Phantom Gaming-ITX/TB3',
    socket: 'AMD SP3',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490 Phantom Gaming 4/ac',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490 PG Velocita',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z490M Pro4',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Biostar Z490GTN',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Biostar Z490GTA',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Z390 Taichi',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus Z11PR-D16',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'Asus Z11PA-D8',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X570 Creator',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X399 Taichi',
    socket: 'AMD TR4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X299X AORUS MASTER',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X299-WU8',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X299 UD4 Pro',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X299 Taichi CLX',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X299 Taichi',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'ASRock X299 OC Formula',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X299 AORUS Ultra Gaming',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte X299 AORUS MASTER',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11SSM-F',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11SSL-F',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11SRM-VF',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11SRM-F',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11SPM-F',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11DPL-I',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11DPI-N',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X11DPH-I',
    socket: 'Intel LGA 3647',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X10SRi-F',
    socket: 'Intel LGA 2011 v3',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro X10DRH-C',
    socket: 'Intel LGA 2011 v3',
    ram: 'DDR4',
  },
  {
    name: 'Asus WS Z390 PRO',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus WS C246 PRO',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus WS C246M PRO',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF X470-PLUS GAMING',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF X299 MARK 2',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Asus TUF H370-PRO GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock TRX40 Taichi',
    socket: 'AMD TRX4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG STRIX TRX40-XE GAMING',
    socket: 'AMD TRX4',
    ram: 'DDR4',
  },
  {
    name: 'Asus ROG Strix H370-F GAMING',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar Racing B365GTA',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Q370M vPro',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte Q370M D3H GSM PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'ASRock Q1900M',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock Q1900B-ITX',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'Asus Pro WS C246-ACE',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus Prime TRX40-Pro',
    socket: 'AMD TRX4',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H370-PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H370-A',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310-PLUS R2.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310M-D R2.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310M-A R2.0/CSM',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME H310M-A R2.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B365M-C/CSM',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B360M-C/CSM',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B360M-C',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B250M-PLUS',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus PRIME B250M-K',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus P5Q SE/R',
    socket: 'Intel LGA 775',
    ram: 'DDR2',
  },
  {
    name: 'Asus P11C-C/4L',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus P10S-X',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus P10S-V/4L',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus P10S-C/4L',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Supermicro MBD-X11SRA-F-O',
    socket: 'Intel LGA 2066',
    ram: 'DDR4',
  },
  {
    name: 'Asus Maximus VIII Hero',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock J4205-ITX',
    socket: 'встроенный Intel',
    ram: 'DMI',
  },
  {
    name: 'ASRock J4105M',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock J4005M',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock J3455M',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock J3455-ITX',
    socket: 'встроенный Intel',
    ram: 'DMI',
  },
  {
    name: 'ASRock J3355M',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'Biostar J3160NH',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'Biostar J3060NH',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'Biostar J1900MH2',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'Biostar J1800MH2',
    socket: 'встроенный Intel',
    ram: 'H',
  },
  {
    name: 'ASRock H470M-ITX/ac',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H470 HD3',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Biostar H410MH',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H410M H',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H370M DS3H rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI H370 GAMING PLUS',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310N rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M S2P rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte H310M A rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI H270 GAMING M3',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'MSI H170A GAMING PRO',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus H110M-R',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'MSI H110M Grenade',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock H110M-DGS R3.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus H110M-A/M.2',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus H110M-A/DP',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus H110M2 D3',
    socket: 'Intel LGA 1151',
    ram: 'DDR3',
  },
  {
    name: 'Gigabyte GA-H170-D3H',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H110M-S2V rev. 1.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H110M-S2 rev. 1.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H110M-S2HP rev. 1.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-H110M-M.2 rev. 1.0',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-B150M-D2V',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte GA-AB350M-HD3',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B550 Steel Legend',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B460M D3H',
    socket: 'Intel LGA 1200',
    ram: 'DDR4',
  },
  {
    name: 'MSI B450I GAMING PLUS AC',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B365M HD3',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Biostar B365MHC',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B360M D3P rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B360 M AORUS PRO rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'Gigabyte B360 AORUS GAMING 3 WIFI rev. 1.0',
    socket: 'Intel LGA 1151 v2',
    ram: 'DDR4',
  },
  {
    name: 'MSI B250 KRAIT GAMING',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'MSI B150M PRO-VD',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'ASRock B150M-HDS',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus B150I PRO GAMING/AURA',
    socket: 'Intel LGA 1151',
    ram: 'DDR4',
  },
  {
    name: 'Asus A88XM-E/USB 3.1',
    socket: 'AMD FM2+',
    ram: 'DDR3',
  },
  {
    name: 'MSI A68HM-E33',
    socket: 'AMD FM2+',
    ram: 'DDR3',
  },
  {
    name: 'MSI A320M PRO-VD PLUS',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
  {
    name: 'MSI A320M PRO-M2',
    socket: 'AMD AM4',
    ram: 'DDR4',
  },
];

module.exports = motherboards;
