function atualizarImagemGrafico() {

  var airline = document.querySelector('.Airline select').value;
  var flight = document.querySelector('.Flight select').value;
  var airportFrom = document.querySelector('.AirportFrom select').value;
  var airportTo = document.querySelector('.AirportTo select').value;
  var dayOfWeek = document.querySelector('.DayOfWeek select').value;
  var time = document.querySelector('.Time select').value;
  
  var imagemSrc = '';
  var imagemSrc2 = '';
  var imagemSrc3 = '';
  var imagemSrc4 = '';

  // Verificar as condições para exibir cada gráfico
  if ((airline === 'opcao1' && flight === 'opcao2') || (airline === 'opcao1' && airportFrom === 'opcao2') || (airline === 'opcao1' && airportTo === 'opcao2') ||
  (airline === 'opcao1' && dayOfWeek === 'opcao2') || (airline === 'opcao1' && time === 'opcao2')) {     
      imagemSrc = './imgs/grafico1.png'; imagemSrc2 = './imgs/grafico2.png'; imagemSrc3 = './imgs/grafico3.png'; imagemSrc4 = './imgs/grafico4.png';

  } else if ((flight === 'opcao1' && airline === 'opcao2') || (flight === 'opcao1' && airportFrom === 'opcao2') || (flight === 'opcao1' && airportTo === 'opcao2') ||
  (flight === 'opcao1' && dayOfWeek === 'opcao2') || (flight === 'opcao1' && time === 'opcao2')) {
      imagemSrc = './imgs/grafico2.png'; imagemSrc2 = './imgs/grafico3.png'; imagemSrc3 = './imgs/grafico4.png'; imagemSrc4 = './imgs/grafico5.png';

  } else if ((airportFrom === 'opcao1' && airline === 'opcao2') || (airportFrom === 'opcao1' && flight === 'opcao2') || (airportFrom === 'opcao1' && airportTo === 'opcao2') ||
  (airportFrom === 'opcao1' && dayOfWeek === 'opcao2') || (airportFrom === 'opcao1' && time === 'opcao2')) { 
    imagemSrc = './imgs/grafico3.png'; imagemSrc2 = './imgs/grafico4.png'; imagemSrc3 = './imgs/grafico5.png'; imagemSrc4 = './imgs/grafico6.png';

  } else if ((airportTo === 'opcao1' && airline === 'opcao2') || (airportTo === 'opcao1' && flight === 'opcao2') || (airportTo  === 'opcao1' && airportFrom === 'opcao2') ||
  (airportTo === 'opcao1' && dayOfWeek === 'opcao2') || (airportTo === 'opcao1' && time === 'opcao2')) {
      imagemSrc = './imgs/grafico4.png'; imagemSrc2 = './imgs/grafico5.png'; imagemSrc3 = './imgs/grafico6.png'; imagemSrc4 = './imgs/grafico7.png';

  } else if ((dayOfWeek === 'opcao1' && airline === 'opcao2') || (dayOfWeek === 'opcao1' && flight === 'opcao2') || (dayOfWeek  === 'opcao1' && airportFrom === 'opcao2') ||
  ( dayOfWeek === 'opcao1' && airportTo === 'opcao2') || (dayOfWeek === 'opcao1' && time === 'opcao2')) {
      imagemSrc = './imgs/grafico5.png'; imagemSrc2 = './imgs/grafico6.png'; imagemSrc3 = './imgs/grafico7.png'; imagemSrc4 = './imgs/grafico8.png';

  } else if ((time === 'opcao1' && airline === 'opcao2') || (time === 'opcao1' && flight === 'opcao2') || (time === 'opcao1' && airportFrom === 'opcao2') ||
  ( time === 'opcao1' && airportTo === 'opcao2') || ( time === 'opcao1' && dayOfWeek === 'opcao2')) {
      imagemSrc = './imgs/grafico6.png'; imagemSrc2 = './imgs/grafico7.png'; imagemSrc3 = './imgs/grafico8.png'; imagemSrc4 = './imgs/grafico1.png'; 

  } else if ((airline === 'opcao1') || (time === 'opcao1') || (flight === 'opcao1') || (airportFrom === 'opcao1') || ( airportTo === 'opcao1') || (dayOfWeek === 'opcao1')) {
      imagemSrc = './imgs/grafico7.png'; imagemSrc2 = './imgs/grafico8.png'; imagemSrc3 = './imgs/grafico1.png'; imagemSrc4 = './imgs/grafico2.png';

  } else if ((airline === 'opcao2') || (time === 'opcao2') || (flight === 'opcao2') || (airportFrom === 'opcao2') || ( airportTo === 'opcao2') || (dayOfWeek === 'opcao2')) {
    imagemSrc = './imgs/grafico8.png'; imagemSrc2 = './imgs/grafico1.png'; imagemSrc3 = './imgs/grafico2.png'; imagemSrc4 = './imgs/grafico3.png';

  } else {
    imagemSrc = './imgs/aviaoFiltro.png'; imagemSrc2 = './imgs/aviaoFiltro.png'; imagemSrc3 = './imgs/aviaoFiltro.png'; imagemSrc4 = './imgs/aviaoFiltro.png';
  }
  // Atualizar a src da imagem do gráfico
  document.getElementById('imagemGrafico').src = imagemSrc;
  document.getElementById('imagemGrafico2').src = imagemSrc2;
  document.getElementById('imagemGrafico3').src = imagemSrc3;
  document.getElementById('imagemGrafico4').src = imagemSrc4;
}

// Adicionar event listener para os selects
var selects = document.querySelectorAll('select');
selects.forEach(function(select) {
  select.addEventListener('change', function() {
      // Chamar a função para atualizar o gráfico
      atualizarImagemGrafico();
  });
});
atualizarImagemGrafico();


function resetarSelecoes() {
  var selects = document.querySelectorAll('select');
  selects.forEach(function(select) {
      select.value = 'opcao0';
  });
  atualizarImagemGrafico();
}
document.getElementById('botaoResete').addEventListener('click', function() {
  resetarSelecoes();
});




//////////////////////////////////////////////////////*

// Array com os códigos dos aeroportos
var aeroportos = [
  'IAH', 'CLT', 'DFW', 'SEA', 'MSP', 'DTW', 'ORD', 'ATL', 'PDX',
  'JFK', 'SLC', 'HNL', 'PHX', 'MCO', 'OGG', 'LAX', 'KOA', 'ITO',
  'SFO', 'MIA', 'IAD', 'SMF', 'PHL', 'LIH', 'DEN', 'LGA', 'MEM',
  'CVG', 'YUM', 'CWA', 'MKE', 'BQN', 'FAI', 'LAS', 'ANC', 'BOS',
  'LGB', 'FLL', 'SJU', 'EWR', 'DCA', 'BWI', 'RDU', 'MCI', 'TYS',
  'SAN', 'ONT', 'OAK', 'MDW', 'BNA', 'DAL', 'CLE', 'JAX', 'JNU',
  'RNO', 'ELP', 'SAT', 'OTZ', 'MBS', 'BDL', 'STL', 'HOU', 'AUS',
  'SNA', 'SJC', 'LIT', 'TUS', 'TUL', 'CMH', 'LAN', 'IND', 'AMA',
  'CRP', 'PIT', 'RKS', 'FWA', 'TPA', 'PBI', 'JAN', 'DSM', 'ADQ',
  'GRB', 'PVD', 'ABQ', 'SDF', 'RSW', 'MSY', 'BUR', 'BOI', 'TLH',
  'BHM', 'ACV', 'ORF', 'BET', 'KTN', 'RIC', 'SRQ', 'BTR', 'XNA',
  'MHT', 'GRR', 'SBN', 'SBA', 'ROA', 'CID', 'GPT', 'MFR', 'SGU',
  'HPN', 'OMA', 'OTH', 'GSP', 'LMT', 'BUF', 'MSN', 'BFL', 'CAE',
  'HRL', 'OKC', 'SYR', 'COS', 'BTV', 'CDC', 'SCC', 'DAY', 'SJT',
  'TVC', 'ROC', 'ISP', 'MRY', 'SBP', 'MLI', 'MOB', 'CIC', 'SAV',
  'FAT', 'EKO', 'GEG', 'ECP', 'LFT', 'SUN', 'HSV', 'SHV', 'CHA',
  'CAK', 'BZN', 'MAF', 'GSO', 'MDT', 'PHF', 'ICT', 'AZO', 'RAP',
  'CHS', 'CLD', 'MKG', 'VPS', 'PIH', 'ATW', 'AGS', 'PNS', 'BIL',
  'SPI', 'FAR', 'CPR', 'PIA', 'SPS', 'TWF', 'LBB', 'ALB', 'CEC',
  'DRO', 'GJT', 'GNV', 'RST', 'AVL', 'GRK', 'PSP', 'LEX', 'TRI',
  'SGF', 'FSM', 'RDD', 'OME', 'MFE', 'LSE', 'BMI', 'MYR', 'FAY',
  'FSD', 'EUG', 'MGM', 'EVV', 'MLB', 'FNT', 'STT', 'WRG', 'ABE',
  'BIS', 'MOT', 'MLU', 'GFK', 'RDM', 'COU', 'LRD', 'PSC', 'MOD',
  'PWM', 'ILM', 'ABY', 'CRW', 'TXK', 'BRO', 'BRW', 'EYW', 'DAB',
  'ROW', 'ABI', 'EAU', 'TYR', 'MSO', 'FLG', 'CSG', 'VLD', 'DHN',
  'OAJ', 'AEX', 'CHO', 'SAF', 'GGG', 'FCA', 'ASE', 'BKG', 'MHK',
  'LNK', 'MQT', 'YAK', 'GTR', 'SMX', 'SWF', 'ITH', 'AVP', 'ELM',
  'BGM', 'SIT', 'PSG', 'CYS', 'CLL', 'SCE', 'LWB', 'LCH', 'GCC',
  'IYK', 'LWS', 'COD', 'HLN', 'BQK', 'GTF', 'DLH', 'BTM', 'EGE',
  'IDA', 'JAC', 'HDN', 'MTJ', 'CMX', 'CMI', 'CDV', 'LYH', 'ACT',
  'STX', 'IPL', 'PAH', 'HTS', 'MEI', 'BLI', 'ERI', 'EWN', 'FLO',
  'ACY', 'DBQ', 'TOL', 'GUC', 'PLN', 'BGR', 'PSE', 'PIE', 'UTM',
  'ADK', 'ABR', 'TEX', 'MMH', 'GUM'
];

// Referência ao elemento select
var select = document.getElementById("aeroportos");

// Loop para adicionar as opções ao select
for (var i = 0; i < aeroportos.length; i++) {
  var option = document.createElement("option");
  option.text = aeroportos[i];
  option.value = aeroportos[i];
  select.appendChild(option);
}