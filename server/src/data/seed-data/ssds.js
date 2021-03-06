const ssds = [
  {
    name: 'Micron 5100 ECO MTFDDAK3T8TBY-1AR1ZABYY 3.84TB 2.5" 6Gbps TLC SSD',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell K49V9 / Intel DC S3520 SSDSC2BB800G7R / SSDSC2BB800G701 800GB 2.5" 6Gbps SATA SSD',
    capacity: 800,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Western Digital WD RED WDS200T1R0A 2TB 2.5" 6Gbps TLC NAS SSD',
    capacity: 2048,
    sata: 3,
    size: 5.25,
    m2: false,
  },
  { name: 'Samsung MZ-7LM1T9NE 1.92TB SATA 6.0Gb/s SSD', capacity: 1966.08, sata: 3, size: 2.5, m2: false },
  {
    name: 'Dell 3DCP0 / Micron 5200 ECO MTFDDAK480TDC-1AT1ZABDA 480GB 2.5 6Gbps eTLC SATA SSD',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Integral INSSD512GS625M7CR140 512GB Crypto 2.5" SATA MLC SED FIPS 140-2 Solid State Drive',
    capacity: 512,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Kingston KC600 SKC600/256G 256GB 2.5 6Gbps TLC SSD',
    capacity: 256,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel SSDSC2KB960G701 960GB SATA Solid State Drives',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Dell 3481G / Intel SSDSC2BX200G4R 200GB SATA SSD', capacity: 200, sata: 3, size: 2.5, m2: false },
  {
    name: 'Dell T1WH8 / Intel SSDSC2KG240G8R 240GB 2.5" 6Gbps TLC D3 S4610 Series Read Intensive SED SATA SSD',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell YDHYX / Samsung PM863a MZ7KH960HAJR0D3 MZ-7KH960A 2.5in SFF 960GB SSD 6Gb/s SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Intel SSD PRO 5400s SSDSC2KF512H6 512GB SSD', capacity: 512, sata: 3, size: 2.5, m2: false },
  { name: 'Seagate ZA500CM10003 500GB SATA SSD', capacity: 500, sata: 3, size: 2.5, m2: false },
  { name: 'Seagate ZA1000CM10003 1TB SATA SSD', capacity: 1024, sata: 3, size: 2.5, m2: false },
  {
    name: 'Dell Enterprise 4T7DD / Intel DC S4500 SSDSC2KB960G7R SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Intel SSDSC2BX800G4R 800GB SATA Hard Drive', capacity: 800, sata: 3, size: 2.5, m2: false },
  {
    name: 'Intel DC S3610 Series SSDSC2BX400G4R / SSDSC2BX400G4 / 65WJJ 400GB MLC SATA SSD',
    capacity: 400,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Dell MVTNM / Intel SSDSC2BB120G4R 120GB SATA SSD', capacity: 120, sata: 3, size: 2.5, m2: false },
  {
    name: 'Dell Enterprise 7VWHF / Liteon ECE-200NAS 200GB SATA SSD',
    capacity: 200,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name:
      'HPE SSDSC2BB480G7P 867213-003 Intel DC S3520 SSDSC2BB480G7 480GBIntel DC S3520 SSDSC2BB480G701 480GB SATA SSD',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel DC S3520 SSDSC2BB480G701 480GB SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell JVVX4 / SK Hynix SC300B HFS256G32MND-3210B 256GB SATA SSD',
    capacity: 256,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'EDGE Memory PE255091 500GB CLX600 1.8inch 6Gbps mSATA',
    capacity: 500,
    sata: 3,
    size: 1.8,
    m2: false,
  },
  {
    name:
      'Dell T6NF0 / SanDisk CloudSpeed Eco Gen II SDLF1DAR-960G / SDLF1DAR-960G-1H23 960GB 6Gbps 2.5" MLC Read Intensive SATA SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell DTH1X / Intel DC S3510 Series SSDSC2BB016T6R / SSDSC2BB016T6 1.6TB 6Gbps 2.5" MLC SATA SSD',
    capacity: 1638.4,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell 400-BDQG / TM19D 1.92TB 2.5" SFF 6Gbps Read-Intensive Hot-Swap TLC SATA SSD',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name:
      'Dell MWKF2 / Intel SSDSC2KG019T7R SSDSC2KG019T701 1.9TB 2.5" 6Gbps TLC DC S4600 Series Mixed Use SED SATA SSD',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel SSDSC2KG240G701 240GB SED SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name:
      'Dell P7KTJ / Intel SSDSC2KG480G7R / SSDSC2KG480G701 480GB 2.5" TLC DC S4600 Series Enterprise Mixed Use SATA SSD',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell R3J3Y  / Intel DC S3520 SSDSC2BB016T7R 1.6TB 2.5" SFF 6Gbps MLC SED SATA SSD',
    capacity: 1638.4,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell K49V9 / Intel DC S3520 SSDSC2BB800G7R / SSDSC2BB800G701 800GB 2.5" 6Gbps SATA SSD',
    capacity: 800,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell Enterprise 4T7DD / Intel DC S4500 SSDSC2KB960G7R SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell 2RGGR / Samsung PM863 MZ7KM480HMHQ0D3 / MZ-7KM480B 480GB 6Gb/s SATA Mixed Used SSD',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell DD4G0 / Samsung PM863 MZ7KM960HMJP0D3 MZ-7KM960B 960GB 6Gb/s SATA Mixed Used SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell Enterprise GYD5H / Samsung MZ7LH480HAHQ0D3 SFF 480GB SSD 6Gb/s SATA RI SSD',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell Enterprise DPD14 / Intel SSDSC2BA800G4R 800GB SATA 6Gb/s 2.5 MLC Write Intensive SSD',
    capacity: 800,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel DC S3510 SSDSC2BB120G7R/ 394XT 120GB SATA SSD',
    capacity: 120,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HPE P04474-B21 480G B MLC SATA Solid State Drive Kit 651687-001',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HPE 869580-001 / 867213-004 / Intel DC S3520 SSDSC2BB960G7P 960GB 2.5 6Gbps SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HPE 869384-B21 / 869580-001 / 867213-004 / Intel DC S3520 SSDSC2BB960G7P 960GB 2.5 6Gbps SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Intel DC S3520 SSDSC2BB960G701 / 960GB SSD', capacity: 960, sata: 3, size: 2.5, m2: false },
  {
    name: 'Samsung MZ-5S71000-0D3 100GB 2.5" SLC Enterprise SATA SSD',
    capacity: 100,
    sata: 2,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HPE 804631-B21 1.6TB MU-2 SFF Enterprise SATA SSD',
    capacity: 1638.4,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel DC S3610 Series SSDSC2BX016T4P SSDSC2BX016T4 HPE 804612-004 1.6TB 6Gbps 2.5" RI MLC SATA SSD',
    capacity: 1638.4,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco Hyperflex HX-M2-240GB= 240GB M.2 SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Kingston UV500 SUV500B/1920G 1.92TB SED SATA Solid State Drive Upgrade Kit',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Kingston UV500 SUV500B/960G 960GB SED SATA Solid State Drive Upgrade Kit',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Kingston UV500 SUV500B/120G 120GB SED SATA Solid State Drive Upgrade Kit',
    capacity: 120,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Kingston UV500 SUV500B/480G 480GB SED SATA Solid State Drive Upgrade Kit',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Kingston UV500 SUV500B/240G 240GB SED SATA Solid State Drive Upgrade Kit',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Kingston Q500 SQ500S37/480G 480GB SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Kingston Q500 SQ500S37/120G 120GB SATA Solid State Drive',
    capacity: 120,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Kingston Q500 SQ500S37/240G 240GB SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HPE 868818-B21 480GB MLC SATA Solid State Drive Kit 651687-001 Gen9',
    capacity: 480,
    sata: 1,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HPE 756657-B21 480GB eMLC SATA SSD Kit 651687-001 Gen8 / Gen9',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5200 MAX MTFDDAK960TDN-1AT1ZABYY 960GB SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAV256TDL-1AW12ABYY 256GB SED SATA M.2 Solid State Drive',
    capacity: 256,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5200 ECO MTFDDAK7T6TDC-1AT16ABYY 7.68TB SED SATA Solid State Drive',
    capacity: 7864.32,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Samsung SM863 MZ7KM480HAHP-000H3 480GB SATA SSD', capacity: 480, sata: 3, size: 2.5, m2: false },
  {
    name: 'Hewlett Packard / HPE P09716-B21 960GB MLC SATA Solid State Drive Kit 651687-001',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5200 MAX MTFDDAK240TDN-1AT1ZABYY 240GB eTLC SED TCG SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5200 MAX MTFDDAK480TDN-1AT1ZABYY 480GB eTLC SED TCG SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5200 MAX MTFDDAK1T9TDN-1AT1ZABYY 1.92TB eTLC SED TCG SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung 860DCT MZ-76E1T9E 1.9TB SED SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung 860DCT MZ-76E960E 960GB SED SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung 860DCT MZ-76E3T8E 3.84TB SED SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel DC S3610 Series SSDSC2BX016T4P / HPE 804612-004 1.6TB 6Gbps 2.5" RI MLC SATA SSD',
    capacity: 1638.4,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung 860 PRO MZ-76P1T0E 1TB MLC TCG SED SATA Solid State Drive',
    capacity: 1024,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'SanDisk SSD PLUS SDSSDA-1T00-G26 1TB SATA Solid State Drive',
    capacity: 1024,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate IronWolf 110 NAS ZA960NM10011 960GB SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate IronWolf 110 NAS ZA240NM10011 240GB SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate IronWolf 110 NAS ZA480NM10011 480GB SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate IronWolf 110 NAS ZA3840NM10011 3.84TB SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate IronWolf 110 NAS ZA1920NM10011 1.92TB SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Western Digital WDS240G2G0A 240GB SLC SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell EMC 6JGT5 / Intel SSDSC2KG480G8R D3 S4610 SSDSC2KG480G801 480GB SED SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Kingston SKC400S37/512G 512GB SATA SSD', capacity: 512, sata: 3, size: 2.5, m2: false },
  {
    name: 'Cisco UCS Series UCS-SD16TM1X-EV 1.6TB eTLC SATA Solid State Drive',
    capacity: 1638.4,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD960GM1X-EV 960GB eTLC SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD960G61X-EV 960GB eTLC SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD480GM1X-EV 480GB eTLC SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD480G61X-EV 480GB eMLC SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD240GM1X-EV 240GB eTLC SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD150G61X-EV 150GB eMLC SATA Solid State Drive',
    capacity: 150,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD120GM1X-EV 120GB eTLC SATA Solid State Drive',
    capacity: 120,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD19TM3X-EP 1.9TB SAS Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD960GM3X-EP 960GB eMLC SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD480GM3X-EP 480GB eMLC SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD19T63X-EP 1.9TB eTLC SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD960G63X-EP 960GB eTLC SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Cisco UCS Series UCS-SD480G63X-EP 480GB eTLC SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Transcend MTS600 TS128GMTS600 128GB M.2 2260 MLC SATA Solid State Drive',
    capacity: 128,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard / HPE 875480-B21 / MTFDDAK1T9TCC 1.92TB 3.5" 6Gbps TLC HS MU SATA SSD',
    capacity: 1966.08,
    sata: 3,
    size: 3.5,
    m2: false,
  },
  {
    name: 'Intel DC S3500 SSDSC2BB480G4R / Dell 7GPY7 480GB 2.5" 6Gbps MLC SED SATA SSD',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel SSDSC2BA400G401 400GB SATA Solid State Drive',
    capacity: 400,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell Enterprise 949GX / Liteon ECE-400NAS 400GB 2.5" MLC SATA SSD',
    capacity: 400,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Liteon ECT-60N9S / WC8RX 60GB 2.5" MLC SATA Solid State Drive',
    capacity: 61440,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Toshiba THNSN8240PCSE4PDET 240GB SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell W8M02 / YDHYX Samsung MZ7LM960HCHP-00003 2.5in SFF 960GB SSD 6Gb/s SATA SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ-76P4T0E 4TB SED SATA Solid State Drive',
    capacity: 4096,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ-76P2T0E 2TB SED SATA Solid State Drive',
    capacity: 2048,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ-76P256E 256GB SED SATA Solid State Drive',
    capacity: 256,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Samsung MZ-76E4T0E 4TB SED SATA SSD', capacity: 4096, sata: 3, size: 2.5, m2: false },
  {
    name: 'Samsung MZ-76E1T0E 1TB SED SATA Solid State Drive',
    capacity: 1024,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate Nytro 1551 XA240ME10043 240GB TCG OPAL SED SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate Nytro 1551 XA3840ME10083 3.84TB TCG Enterprise SED SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung PM863 MZ7LM960HCHP-00003 2.5in SFF 960GB 6Gb/s SATA SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5210 ION MTFDDAK1T9QDE-2AV1ZABYY 1.92TB SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5210 ION MTFDDAK1T9QDE-2AV16ABYY 1.92TB SED SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5210 ION MTFDDAK3T8QDE-2AV1ZABYY 3.84TB SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5210 ION MTFDDAK3T8QDE-2AV16ABYY 3.84TB SED SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5210 ION MTFDDAK7T6QDE-2AV1ZABYY 7.68TB SATA Solid State Drive',
    capacity: 7864.32,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5210 ION MTFDDAK7T6QDE-2AV16ABYY 7.68TB SED SATA Solid State Drive',
    capacity: 7864.32,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel Optane P4800X Series MDTPE21K015TA01 1.5TB SED PCIe 3.0 NVMe Solid State Drive',
    capacity: 1536,
    sata: 1,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAV256TDL-1AW1ZABYY 256GB SATA M.2 Solid State Drive',
    capacity: 256,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAK256TDL-1AW12ABYY 256GB SED SATA Solid State Drive',
    capacity: 256,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAV512TDL-1AW1ZABYY 512GB SATA M.2 Solid State Drive',
    capacity: 512,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAK512TDL-1AW1ZABYY 512GB SATA Solid State Drive',
    capacity: 512,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAV512TDL-1AW12ABYY 512GB SED SATA M.2 Solid State Drive',
    capacity: 512,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAK512TDL-1AW12ABYY 512GB SED SATA Solid State Drive',
    capacity: 512,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAV1T0TDL-1AW1ZABYY 1TB SATA M.2 Solid State Drive',
    capacity: 1024,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAK1T0TDL-1AW1ZABYY 1TB SATA Solid State Drive',
    capacity: 1024,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAV1T0TDL-1AW12ABYY 1TB SED SATA M.2 Solid State Drive',
    capacity: 1024,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAK1T0TDL-1AW12ABYY 1TB SED SATA Solid State Drive',
    capacity: 1024,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 1300 MTFDDAK2T0TDL-1AW1ZABYY 2TB SATA Solid State Drive',
    capacity: 2048,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate Barraduda Compute STGS250401 250GB SATA Solid State Drive',
    capacity: 250,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA240LE10023 240GB SED TCG Enterprise SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA3840LE10083 3.84TB SED TCG Enterprise SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA240LE10043 240GB SED TCG Opal SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA3840LE10063 3.84TB SED TCG Opal SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA3840ME10103 3.84TB SED TCG Enterprise SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA240ME10023 240GB SED TCG Enterprise SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung PM863 MZ7LM960HCHP-00003 2.5in SFF 960GB SSD 6Gb/s SATA SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel DC S3610 SSDSC2BX200G4R 200GB 2.5 inch 6Gbps MLC SATA SSD',
    capacity: 200,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5200 MAX MTFDDAK960TDN-1AT16ABYY 960GB eTLC SED TCG SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung 860 QVO MZ-76Q1T0B/AM 1TB SED SATA Solid State Drive',
    capacity: 1024,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung 860 QVO MZ-76Q2T0B/AM 2TB SED SATA Solid State Drive',
    capacity: 2048,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung 860 QVO MZ-76Q4T0B/AM 4TB SED SATA Solid State Drive',
    capacity: 4096,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel SSDSCKKB240G801 240GB TLC D3 S4510 SED SATA Solid State Drive',
    capacity: 240,
    sata: 1,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel SSDSCKKB480G801 480GB TLC D3 S4510 SED SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel SSDSCKKB960G801 960GB TLC D3 S4510 SED SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard 816985-B21 480GB Mixed Use SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate Nytro 1551 XA1920ME10083 1.92TB TCG Enterprise SED SATA Solid State Driev',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5200MAX MTFDDAK960TDN-1AT1ZAB 960GB SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HPE 804608-B21 1.6TB MLC SATA Solid State Drive Kit 651314-001 G8 / G9',
    capacity: 1638.4,
    sata: 3,
    size: 3.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard / HPE 757354-B21 1.6TB SATA Solid State Drive Kit 373211-001 for Gen7 and Lower',
    capacity: 1638.4,
    sata: 3,
    size: 3.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard 804665-B21 400GB SATA Solid State Drive',
    capacity: 400,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Hewlett / HPE 872357-B21 400GB MLC SATA Solid State Drive Kit 651314-001',
    capacity: 400,
    sata: 3,
    size: 3.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard / HPE 872355-B21 400GB MLC SATA Solid State Drive Kit 651687-001',
    capacity: 400,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HPE 730063-B21 400Gb MLC SATA Solid State Drive Kit 37843-002',
    capacity: 400,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HP 804593-B21 480GB MLC Read Intensive SATA Solid State Drive G8 G9',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell FH49G / Intel SSDSC2KB480G7R 480GB 2.5" 6Gbps TLC DC S4500 SED SATA SSD',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard / HPE 875483-B21 / 870668-001 240GB TLC SATA Solid State Drive 651687-001',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'HPE 875513-B21 / 875657-001 1.92TB TLC SATA SSD',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard / HPE 877758-B21 / 878852-001 1.92TB TLC SATA RI Solid State Drive 651687-001',
    capacity: 1966.08,
    sata: 1,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard / HPE 877790-B21 / 879020-001 1.92TB MLC SCC MU SATA Solid State Drive 651314-001',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard / HPE 877788-B21 / 879019-001 1.92TB MLC SATA MU Solid State Drive 651687-001',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Hewlett Packard / HPE 875478-B21 1.92TB TLC SATA Solid State Drive Kit 651687-001',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Intel SSDSC2BB160G401 160GB SATA SSD', capacity: 160, sata: 3, size: 2.5, m2: false },
  {
    name: 'Micron 5200 PRO MTFDDAK3T8TDD-1AT1ZABYY 3.84TB SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Micron 5200MAX MTFDDAK480TDN-1AT16ABYY 480GB SED SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ7LH3T8HMLT-00005 3.84TB SED SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Samsung MZ-7KM2400 240GB Enterprise SATA SSD', capacity: 240, sata: 3, size: 2.5, m2: false },
  {
    name: 'Samsung EVO 860 MZ-76E250E 250GB MLC SATA Solid State Drive',
    capacity: 250,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung Evo 860 MZ-76E500E 500GB MLC SATA Solid State Drive',
    capacity: 500,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel 545s Series SSDSC2KW010T8X1 1TB SATA Solid State Drive',
    capacity: 1024,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel 545s Series SSDSCKKW512G8X1 512GB SED SATA M.2 Solid State Drive',
    capacity: 512,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel 545s Series SSDSCKKW128G8X1 128GB SED SATA M.2 Solid State Drive',
    capacity: 128,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Seagate XA240ME10003 240GB SATA Solid State Drive', capacity: 240, sata: 3, size: 2.5, m2: false },
  {
    name: 'Seagate XA480ME10103 480GB TCG OPAL SED SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagaate XA480ME10083 480GB TCG Enterprise SED SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Seagate XA480ME10063 480GB SATA Solid State Drive', capacity: 480, sata: 3, size: 2.5, m2: false },
  {
    name: 'Seagate XA960ME10103 960GB TCG OPAL SED SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA960ME10083 960GB TCG Enterprise SED SATA Solid State Driev',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Seagate XA960ME10063 960GB SATA Solid State Drive', capacity: 960, sata: 3, size: 2.5, m2: false },
  {
    name: 'Seagate XA1920ME10103 1.92TB TCG OPAL SED SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA1920ME10063 1.92TB SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA3840ME10063 3.84TB SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Seagate XA240LE10003 240GB SATA Solid State Drive', capacity: 240, sata: 3, size: 2.5, m2: false },
  {
    name: 'Seagate XA480LE10103 480GB TCG OPAL SED SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA480LE10083 480GB TCG Enterprise SED SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Seagate XA480LE10063 480GB SATA Solid State Drive', capacity: 480, sata: 3, size: 2.5, m2: false },
  {
    name: 'Seagate XA960LE10103 960GB TCG OPAL SED SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA960LE10083 960GB TCG Enterprise SED SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  { name: 'Seagate XA960LE10063 960GB SATA Solid State Drive', capacity: 960, sata: 3, size: 2.5, m2: false },
  {
    name: 'Seagate XA1920LE10103 1.92TB TCG OPAL SED SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA1920LE10083 1.92TB TCG Enterprise SED SATA Solid State Drive',
    capacity: 1966.08,
    sata: 1,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA1920LE10063 1.92TB SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Seagate XA3840LE10063 3.84TB SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell DD4G0 / Samsung PM863a MZ7KM960HMJP-0D3 960GB SSD 6Gb/s 2.5in SFF SATA SSD',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Toshiba THNSF8400CCSE / VKT80 400GB 2.5" Mixed Use 6Gbps MLC SATA SSD',
    capacity: 400,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Dell Enterprise 2CC4N / Intel SSDSC2BX016T4R 1.6TB SATA SSD',
    capacity: 1638.4,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel DC S3610 Series SSDSC2BX400G4R / SSDSC2BX400G4 / 65WJJ 400GB MLC SATA SSD',
    capacity: 400,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Intel DC S3610 Series SSDSC2BX016T4 / Dell XPJDD 1.6TB 6Gbps 2.5" 3-DWPD MLC SATA SSD',
    capacity: 1638.4,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Toshiba THNSF8400CCSE / VKT80 400GB 2.5" Mixed Use 6Gbps MLC SATA SSD',
    capacity: 400,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ-7LH240NE 240GB SED SATA Solid State Drive',
    capacity: 240,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ-7LH480NE 480GB SED SATA Solid State Drive',
    capacity: 480,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ-7LH960NE 960GB SED SATA Solid State Drive',
    capacity: 960,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ-LH1T9NE 1.9TB SED SATA Solid State Drive',
    capacity: 1966.08,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ-7LH3T8NE 3.84TB SED SATA Solid State Drive',
    capacity: 3932.16,
    sata: 3,
    size: 2.5,
    m2: false,
  },
  {
    name: 'Samsung MZ-VLB256A / MZVLB256HAHQ-000D7 PM981 256GB M.2 2280 MLC PCIe 3.0 NVMe SED SSD',
    capacity: 256,
    sata: 0,
    size: 80,
    m2: true,
  },
  {
    name: 'Micron 2200 MTFDHBA512TCK-2AS1AABDA 512GB M.2 2280 NAND PCIe NVMe Solid State Drive',
    capacity: 512,
    sata: 0,
    size: 80,
    m2: true,
  },
  {
    name: 'Hynix PC601A HFS001TD9TNG-L2A0B 1TB M.2 2280 S2 TLC PCIe Gen3 NVMe Solid State Drive JWNFR',
    capacity: 1024,
    sata: 0,
    size: 80,
    m2: true,
  },
  {
    name: 'Hynix HFS512GD9MNE-6200A / 7HPFD PC400 512GB M.2 2280 PCIe NVMe Solid State Drive',
    capacity: 512,
    sata: 0,
    size: 80,
    m2: true,
  },
  {
    name: 'Toshiba / Kioxia BG4 Series KBG40ZNS256G / FWJTG 256GB M.2 2230 PCI-e Gen3 x4 NVMe Solid State Drive',
    capacity: 256,
    sata: 0,
    size: 30,
    m2: true,
  },
  {
    name: 'Toshiba / Kioxia XG6 KXG60ZNV256G 256GB M.2 2280 3D PCIe 3.1a NVMe Solid State Drive',
    capacity: 256,
    sata: 0,
    size: 80,
    m2: true,
  },
  {
    name: 'Western Digital PC SN520 SDAPTUW-512G-1012 512GB M.2 2230 NVMe SSD',
    capacity: 512,
    sata: 0,
    size: 30,
    m2: true,
  },
  {
    name: 'Samsung MZ-V7S2T0B/AM 2TB SED PCIe Solid State Drive',
    capacity: 2048,
    sata: 0,
    size: 80,
    m2: true,
  },
  {
    name: 'Micron 2200 MTFDHBA512TCK-1AS15ABYY 512GB TLC SED PCIe NVMe Solid State Drive',
    capacity: 512,
    sata: 0,
    size: 80,
    m2: true,
  },
  {
    name: 'Intel 660p Series SSDPEKNW020T8X1 2TB QLC SED PCIe NVMe Solid State Drive',
    capacity: 2048,
    sata: 0,
    size: 80,
    m2: true,
  },
];

module.exports = ssds;
