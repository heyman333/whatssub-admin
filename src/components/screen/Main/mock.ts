import faker from 'faker';
import { Service } from '../../../types';

// This function is being used to create below SERVICE_LIST

// const createFakeServiceList = () => {
//   let list: Array<Service> = [];
//   const length = 50;
//   for (let i = 0; i < length; i++) {
//     list.push({
//       id: faker.random.number().toString(),
//       name: faker.company.companyName(),
//       nameKr: faker.company.companyName(),
//       icon: faker.image.avatar(),
//     });
//   };
//   // you can copy the result of it and paste it to 'ServiceList'
//   console.log('fake service list', JSON.stringify(list, null, 2));
//   return list;
// };

export const SERVICE_LIST: Array<Service> = [
  {
    'id': '66326',
    'name': 'Dickinson LLC',
    'nameKr': 'Prosacco, Schowalter and Weissnat',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/kylefrost/128.jpg',
  },
  {
    'id': '96883',
    'name': 'Little, Fritsch and Schmitt',
    'nameKr': 'Williamson, Weissnat and Prosacco',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/justinrob/128.jpg',
  },
  {
    'id': '69533',
    'name': 'Franecki - Erdman',
    'nameKr': 'Bogisich and Sons',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/madewulf/128.jpg',
  },
  {
    'id': '64598',
    'name': 'Schinner LLC',
    'nameKr': 'Carroll, Walter and Heathcote',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/dahparra/128.jpg',
  },
  {
    'id': '1805',
    'name': 'Kunde - Zulauf',
    'nameKr': 'Renner, Moore and Williamson',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/stevedesigner/128.jpg',
  },
  {
    'id': '67807',
    'name': 'Maggio Inc',
    'nameKr': 'Zemlak and Sons',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/bboy1895/128.jpg',
  },
  {
    'id': '74063',
    'name': 'Kozey, Turcotte and Jerde',
    'nameKr': 'Kuhlman and Sons',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
  },
  {
    'id': '4394',
    'name': 'Dickens - Tromp',
    'nameKr': 'Becker, Nolan and Miller',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/andrea211087/128.jpg',
  },
  {
    'id': '98903',
    'name': 'Lemke - Sipes',
    'nameKr': 'Price, Sipes and Cormier',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/peejfancher/128.jpg',
  },
  {
    'id': '67264',
    'name': 'Koepp - Sporer',
    'nameKr': 'Reichel, Christiansen and Schneider',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/mrjamesnoble/128.jpg',
  },
  {
    'id': '71896',
    'name': 'Hintz Group',
    'nameKr': 'Rippin LLC',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/saarabpreet/128.jpg',
  },
  {
    'id': '64305',
    'name': 'Koch, Thiel and Vandervort',
    'nameKr': 'Hoeger, Beatty and Kessler',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg',
  },
  {
    'id': '41401',
    'name': 'Hoppe, Stoltenberg and Cremin',
    'nameKr': 'Pfeffer Inc',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg',
  },
  {
    'id': '52945',
    'name': 'Monahan - Hintz',
    'nameKr': 'Beer LLC',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg',
  },
  {
    'id': '73657',
    'name': 'Kub, Doyle and Halvorson',
    'nameKr': 'Osinski, Medhurst and Cronin',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/shesgared/128.jpg',
  },
  {
    'id': '72388',
    'name': 'Sawayn - Paucek',
    'nameKr': 'Paucek, Kuhn and Monahan',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/uxalex/128.jpg',
  },
  {
    'id': '36458',
    'name': 'Mayert, Greenfelder and Mills',
    'nameKr': 'Botsford, Emmerich and Heller',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/mattbilotti/128.jpg',
  },
  {
    'id': '93178',
    'name': 'Mohr - Marquardt',
    'nameKr': 'Langosh Inc',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/davecraige/128.jpg',
  },
  {
    'id': '29400',
    'name': 'Johnson Inc',
    'nameKr': 'Langosh, Kris and Quitzon',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/praveen_vijaya/128.jpg',
  },
  {
    'id': '8636',
    'name': 'Schroeder Inc',
    'nameKr': 'Volkman, Towne and Roob',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/VinThomas/128.jpg',
  },
  {
    'id': '18768',
    'name': 'Franecki LLC',
    'nameKr': 'Boehm - Vandervort',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/bublienko/128.jpg',
  },
  {
    'id': '1302',
    'name': 'Ferry, Schoen and Corwin',
    'nameKr': 'Mraz, Lowe and Lindgren',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/calebjoyce/128.jpg',
  },
  {
    'id': '15156',
    'name': 'Morar, Vandervort and Stark',
    'nameKr': "O'Conner Inc",
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/betraydan/128.jpg',
  },
  {
    'id': '5459',
    'name': 'Bartell - Herzog',
    'nameKr': 'Effertz, Cassin and Robel',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/cadikkara/128.jpg',
  },
  {
    'id': '17392',
    'name': 'Littel Inc',
    'nameKr': 'Prohaska LLC',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg',
  },
  {
    'id': '99635',
    'name': 'Jacobson and Sons',
    'nameKr': 'Hoeger - Daniel',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/thatonetommy/128.jpg',
  },
  {
    'id': '67587',
    'name': 'Reichert, Cole and Ratke',
    'nameKr': 'Rippin - Goyette',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/krasnoukhov/128.jpg',
  },
  {
    'id': '3266',
    'name': 'Marquardt - Denesik',
    'nameKr': 'Johnson, Streich and Gleason',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/geshan/128.jpg',
  },
  {
    'id': '29658',
    'name': 'Orn and Sons',
    'nameKr': 'Bernier Group',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/abdullindenis/128.jpg',
  },
  {
    'id': '48531',
    'name': 'Moen, Abbott and Gleason',
    'nameKr': 'Purdy - Durgan',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg',
  },
  {
    'id': '99395',
    'name': 'Corkery - Kulas',
    'nameKr': 'Satterfield, Heller and Fisher',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/kerihenare/128.jpg',
  },
  {
    'id': '83962',
    'name': 'Kiehn - Roob',
    'nameKr': 'Douglas Group',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/oscarowusu/128.jpg',
  },
  {
    'id': '60683',
    'name': 'Orn - Wiegand',
    'nameKr': "Hintz - O'Keefe",
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/derekcramer/128.jpg',
  },
  {
    'id': '96307',
    'name': 'Mills - Kuvalis',
    'nameKr': 'DuBuque - Dibbert',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/mwarkentin/128.jpg',
  },
  {
    'id': '56053',
    'name': 'Gerhold - Bartell',
    'nameKr': 'Feil - Kling',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/Skyhartman/128.jpg',
  },
  {
    'id': '40807',
    'name': 'Mitchell, Osinski and Weissnat',
    'nameKr': 'Schulist - Kozey',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg',
  },
  {
    'id': '19355',
    'name': 'Price - Zboncak',
    'nameKr': 'Becker, Corkery and Maggio',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/dicesales/128.jpg',
  },
  {
    'id': '27582',
    'name': 'McClure Group',
    'nameKr': 'Lowe, Windler and Dooley',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/bradenhamm/128.jpg',
  },
  {
    'id': '70457',
    'name': 'Wyman LLC',
    'nameKr': 'Lemke, Kub and Baumbach',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/gregkilian/128.jpg',
  },
  {
    'id': '90123',
    'name': 'Moen Group',
    'nameKr': 'Hayes - Von',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/eduardostuart/128.jpg',
  },
  {
    'id': '51747',
    'name': 'Ondricka, Smith and Abbott',
    'nameKr': 'Nader and Sons',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/vickyshits/128.jpg',
  },
  {
    'id': '87355',
    'name': 'Davis, Howell and Lindgren',
    'nameKr': 'Fahey - Bradtke',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/primozcigler/128.jpg',
  },
  {
    'id': '61474',
    'name': 'Mitchell LLC',
    'nameKr': 'Buckridge Group',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/ryandownie/128.jpg',
  },
  {
    'id': '35247',
    'name': 'MacGyver - Thompson',
    'nameKr': 'Blick - Hilll',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/magugzbrand2d/128.jpg',
  },
  {
    'id': '30366',
    'name': 'Waters - Lubowitz',
    'nameKr': 'Mills - Kohler',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/charliecwaite/128.jpg',
  },
  {
    'id': '81822',
    'name': 'Daniel - Friesen',
    'nameKr': 'Batz and Sons',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/stevedesigner/128.jpg',
  },
  {
    'id': '13399',
    'name': 'Wilderman - Hoppe',
    'nameKr': 'Stroman, Emmerich and Howell',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/brajeshwar/128.jpg',
  },
  {
    'id': '83969',
    'name': 'Lubowitz - Monahan',
    'nameKr': 'Grimes - Quigley',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/antjanus/128.jpg',
  },
  {
    'id': '61979',
    'name': 'Lemke, Bergstrom and Hane',
    'nameKr': 'Kihn LLC',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/heycamtaylor/128.jpg',
  },
  {
    'id': '99082',
    'name': 'Cummings LLC',
    'nameKr': 'Schuster and Sons',
    'icon': 'https://s3.amazonaws.com/uifaces/faces/twitter/stan/128.jpg',
  },
];
