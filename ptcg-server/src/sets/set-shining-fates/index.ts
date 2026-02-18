import { Card } from '../../game/store/card/card';
import { Appletun } from './appletun';
import { Arctozolt } from './arctozolt';
import { Arrokuda } from './arrokuda';
import { Barraskewda } from './barraskewda';
import { Blipbug } from './blipbug';
import { Buizel } from './buizel';
import { Cacnea } from './cacnea';
import { Carkol } from './carkol';
import { Celebi } from './celebi';
import { Centiskorch } from './centiskorch';
import { Chewtle } from './chewtle';
import { Chewtle2 } from './chewtle-2';
import { Cinccino } from './cinccino';
import { Cinderace } from './cinderace';
import { CinderaceV } from './cinderace-v';
import { Coalossal } from './coalossal';
import { Copperajah } from './copperajah';
import { Cramorant2 } from './cramorant-2';
import { CramorantVmax } from './cramorant-vmax';
import { CrobatV } from './crobat-v';
import { CrobatVmax } from './crobat-vmax';
import { Cufant } from './cufant';
import { Dartrix } from './dartrix';
import { Decidueye } from './decidueye';
import { DhelmiseVmax } from './dhelmise-vmax';
import { DittoV } from './ditto-v';
import { DittoVmax } from './ditto-vmax';
import { Dracovish } from './dracovish';
import { Dragapult } from './dragapult';
import { Drednaw2 } from './drednaw-2';
import { Drizzile } from './drizzile';
import { DubwoolV } from './dubwool-v';
import { Ducklett } from './ducklett';
import { Eevee } from './eevee';
import { Eiscue } from './eiscue';
import { Eldegoss2 } from './eldegoss-2';
import { EternatusV } from './eternatus-v';
import { EternatusVmax } from './eternatus-vmax';
import { Falinks } from './falinks';
import { FalinksV } from './falinks-v';
import { Flapple } from './flapple';
import { Floatzel } from './floatzel';
import { Frosmoth } from './frosmoth';
import { ApplinSV } from './full-art';
import { GalarianCursola } from './galarian-cursola';
import { GalarianMeowth } from './galarian-meowth';
import { GalarianMrMime } from './galarian-mr-mime';
import { GalarianMrRime } from './galarian-mr-rime';
import { GalarianObstagoon } from './galarian-obstagoon';
import { GalarianPerrserker } from './galarian-perrserker';
import { GalarianRapidash } from './galarian-rapidash';
import { GalarianStunfisk } from './galarian-stunfisk';
import { GalarianWeezing } from './galarian-weezing';
import { GalarianZigzagoon } from './galarian-zigzagoon';
import { Gossifleur } from './gossifleur';
import { Gossifleur2 } from './gossifleur-2';
import { Greedent } from './greedent';
import { GreedentV } from './greedent-v';
import { Grimmsnarl } from './grimmsnarl';
import { Hatterene } from './hatterene';
import { Horsea } from './horsea';
import { Impidimp } from './impidimp';
import { Indeedee2 } from './indeedee-2';
import { IndeedeeV } from './indeedee-v';
import { Inteleon } from './inteleon';
import { Koffing } from './koffing';
import { Kyogre } from './kyogre';
import { Luxio } from './luxio';
import { Manaphy } from './manaphy';
import { Morpeko2 } from './morpeko-2';
import { Oranguru } from './oranguru';
import { Orbeetle } from './orbeetle';
import { Raboot } from './raboot';
import { Reshiram } from './reshiram';
import { Rillaboom } from './rillaboom';
import { Rolycoly } from './rolycoly';
import { Rookidee } from './rookidee';
import { Rotom } from './rotom';
import { Sinistea } from './sinistea';
import { Sizzlipede } from './sizzlipede';
import { Skwovet } from './skwovet';
import { Snom } from './snom';
import { Sobble } from './sobble';
import { Spinarak } from './spinarak';
import { Thievul2 } from './thievul-2';
import { Thwackey } from './thwackey';
import { Toxel } from './toxel';
import { Tropius } from './tropius';
import { Volcanion } from './volcanion';
import { Yanma } from './yanma';
import { Yanmega } from './yanmega';
import { Yveltal } from './yveltal';
import { Zarude } from './zarude';
import { BallGuy } from './ball-guy';
import { GymTrainer } from './gym-trainer';
import { RustedShield } from './rusted-shield';
import { RustedSword } from './rusted-sword';
import { TeamYellTowel } from './team-yell-towel';

import {
  BirdKeeperSHF,
  FrosmothSHF,
  RowletSHF,
  GrookeySHF,
  DottlerSHF,
  EldegossSHF,
  ApplinSHF,
  ScorbunnySHF,
  SuicuneSHF,
  GalarianDarumakaSHF,
  GalarianDarmanitanSHF,
  DrednawSHF,
  CramorantSHF,
  ArctovishSHF,
  YamperSHF,
  BoltundSHF,
  ToxtricitySHF,
  PincurchinSHF,
  MorpekoSHF,
  DracozoltSHF,
  GalarianPonytaSHF,
  GalarianCorsolaSHF,
  DedenneSHF,
  PolteageistSHF,
  HatennaSHF,
  HattremSHF,
  MilcerySHF,
  AlcremieSHF,
  IndeedeeSHF,
  DreepySHF,
  DrakloakSHF,
  GalarianFarfetchdSHF,
  GalarianSirfetchdSHF,
  GalarianYamaskSHF,
  GalarianRunerigusSHF,
  SilicobraSHF,
  SandacondaSHF,
  ClobbopusSHF,
  GrapploctSHF,
  StonjournerSHF,
  GalarianLinooneSHF,
  NickitSHF,
  ThievulSHF,
  MorgremSHF,
  CorviknightSHF,
  DuraludonSHF,
  MinccinoSHF,
  SwannaSHF,
  BunnelbySHF,
  CorvisquireSHF,
  WoolooSHF,
  DubwoolSHF,
  RillaboomVSHF,
  RillaboomVmaxSHF,
  CharizardVmaxSHF,
  CentiskorchVSHF,
  CentiskorchVmaxSHF,
  LaprasVSHF,
  LaprasVmaxSHF,
  ToxtricityVSHF,
  ToxtricityVmaxSHF,
  GrimmsnarlVSHF,
  GrimmsnarlVmaxSHF,
  Rowlet2,
  Dartrix2,
  Decidueye2,
  DhelmiseVSHF,
  Grookey2,
  Thwackey2,
  Rillaboom2,
  CinderaceVmaxSHF,
  Snom2,
  ShinxSHF,
  LuxraySHF,
  Rotom2,
  Morpeko3,
  MorpekoVSHF,
  MorpekoVmaxSHF,
  IndeedeeV2,
  TrapinchSHF,
  Koffing2,
  GalarianWeezing2,
  Nickit2,
  Cufant2,
  DittoV2,
  DittoVmax2,
  CramorantVSHF,
  BosssOrdersSHF,
  ProfessorsResearchSHF,
  AlcremieVSHF,
  BallGuy2,
  CaraLissSHF,
  GymTrainer2,
  PiersSHF,
  PokeKidSHF,
  RoseSHF,
  SkylaSHF,
  AlcremieVmaxSHF,
} from './other-prints';

export const setShiningFates: Card[] = [
  // Pokemon
  new Appletun(),
  new Arctozolt(),
  new Arrokuda(),
  new Barraskewda(),
  new Blipbug(),
  new Buizel(),
  new Cacnea(),
  new Carkol(),
  new Celebi(),
  new Centiskorch(),
  new Chewtle(),
  new Chewtle2(),
  new Cinccino(),
  new Cinderace(),
  new CinderaceV(),
  new Coalossal(),
  new Copperajah(),
  new Cramorant2(),
  new CramorantVmax(),
  new CrobatV(),
  new CrobatVmax(),
  new Cufant(),
  new Dartrix(),
  new Decidueye(),
  new DhelmiseVmax(),
  new DittoV(),
  new DittoVmax(),
  new Dracovish(),
  new Dragapult(),
  new Drednaw2(),
  new Drizzile(),
  new DubwoolV(),
  new Ducklett(),
  new Eevee(),
  new Eiscue(),
  new Eldegoss2(),
  new EternatusV(),
  new EternatusVmax(),
  new Falinks(),
  new FalinksV(),
  new Flapple(),
  new Floatzel(),
  new Frosmoth(),
  new ApplinSV(),
  new GalarianCursola(),
  new GalarianMeowth(),
  new GalarianMrMime(),
  new GalarianMrRime(),
  new GalarianObstagoon(),
  new GalarianPerrserker(),
  new GalarianRapidash(),
  new GalarianStunfisk(),
  new GalarianWeezing(),
  new GalarianZigzagoon(),
  new Gossifleur(),
  new Gossifleur2(),
  new Greedent(),
  new GreedentV(),
  new Grimmsnarl(),
  new Hatterene(),
  new Horsea(),
  new Impidimp(),
  new Indeedee2(),
  new IndeedeeV(),
  new Inteleon(),
  new Koffing(),
  new Kyogre(),
  new Luxio(),
  new Manaphy(),
  new Morpeko2(),
  new Oranguru(),
  new Orbeetle(),
  new Raboot(),
  new Reshiram(),
  new Rillaboom(),
  new Rolycoly(),
  new Rookidee(),
  new Rotom(),
  new Sinistea(),
  new Sizzlipede(),
  new Skwovet(),
  new Snom(),
  new Sobble(),
  new Spinarak(),
  new Thievul2(),
  new Thwackey(),
  new Toxel(),
  new Tropius(),
  new Volcanion(),
  new Yanma(),
  new Yanmega(),
  new Yveltal(),
  new Zarude(),

  // Trainers
  new BallGuy(),
  new GymTrainer(),
  new RustedShield(),
  new RustedSword(),
  new TeamYellTowel(),

  // Other Prints (Reprints & Alt Arts)
  new BirdKeeperSHF(),
  new FrosmothSHF(),
  new RowletSHF(),
  new GrookeySHF(),
  new DottlerSHF(),
  new EldegossSHF(),
  new ApplinSHF(),
  new ScorbunnySHF(),
  new SuicuneSHF(),
  new GalarianDarumakaSHF(),
  new GalarianDarmanitanSHF(),
  new DrednawSHF(),
  new CramorantSHF(),
  new ArctovishSHF(),
  new YamperSHF(),
  new BoltundSHF(),
  new ToxtricitySHF(),
  new PincurchinSHF(),
  new MorpekoSHF(),
  new DracozoltSHF(),
  new GalarianPonytaSHF(),
  new GalarianCorsolaSHF(),
  new DedenneSHF(),
  new PolteageistSHF(),
  new HatennaSHF(),
  new HattremSHF(),
  new MilcerySHF(),
  new AlcremieSHF(),
  new IndeedeeSHF(),
  new DreepySHF(),
  new DrakloakSHF(),
  new GalarianFarfetchdSHF(),
  new GalarianSirfetchdSHF(),
  new GalarianYamaskSHF(),
  new GalarianRunerigusSHF(),
  new SilicobraSHF(),
  new SandacondaSHF(),
  new ClobbopusSHF(),
  new GrapploctSHF(),
  new StonjournerSHF(),
  new GalarianLinooneSHF(),
  new NickitSHF(),
  new ThievulSHF(),
  new MorgremSHF(),
  new CorviknightSHF(),
  new DuraludonSHF(),
  new MinccinoSHF(),
  new SwannaSHF(),
  new BunnelbySHF(),
  new CorvisquireSHF(),
  new WoolooSHF(),
  new DubwoolSHF(),
  new RillaboomVSHF(),
  new RillaboomVmaxSHF(),
  new CharizardVmaxSHF(),
  new CentiskorchVSHF(),
  new CentiskorchVmaxSHF(),
  new LaprasVSHF(),
  new LaprasVmaxSHF(),
  new ToxtricityVSHF(),
  new ToxtricityVmaxSHF(),
  new GrimmsnarlVSHF(),
  new GrimmsnarlVmaxSHF(),
  new Rowlet2(),
  new Dartrix2(),
  new Decidueye2(),
  new DhelmiseVSHF(),
  new Grookey2(),
  new Thwackey2(),
  new Rillaboom2(),
  new CinderaceVmaxSHF(),
  new Snom2(),
  new ShinxSHF(),
  new LuxraySHF(),
  new Rotom2(),
  new Morpeko3(),
  new MorpekoVSHF(),
  new MorpekoVmaxSHF(),
  new IndeedeeV2(),
  new TrapinchSHF(),
  new Koffing2(),
  new GalarianWeezing2(),
  new Nickit2(),
  new Cufant2(),
  new DittoV2(),
  new DittoVmax2(),
  new CramorantVSHF(),
  new BosssOrdersSHF(),
  new ProfessorsResearchSHF(),
  new AlcremieVSHF(),
  new BallGuy2(),
  new CaraLissSHF(),
  new GymTrainer2(),
  new PiersSHF(),
  new PokeKidSHF(),
  new RoseSHF(),
  new SkylaSHF(),
  new AlcremieVmaxSHF(),
];
