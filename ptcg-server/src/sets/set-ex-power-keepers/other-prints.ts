import { DarknessEnergySpecial } from '../set-ex-ruby-and-sapphire/darkness-energy-special';
import { Delcatty } from '../set-ex-ruby-and-sapphire/delcatty';
import { EnergySwitch } from '../set-scarlet-and-violet/energy-switch';
import { GreatBall } from '../set-ex-firered-leafgreen/great-ball';
import { WarpEnergy } from '../set-shining-legends/warp-energy';

export class DarknessEnergySpecialPK extends DarknessEnergySpecial {
  public fullName = 'Darkness Energy Special PK';
  public set = 'PK';
  public setNumber = '87';
}

export class DelcattyPK extends Delcatty {
  public fullName = 'Delcatty PK';
  public name = 'Delcatty';
  public set = 'PK';
  public setNumber = '8';
}

export class EnergySwitchPK extends EnergySwitch {
  public fullName = 'Energy Switch PK';
  public name = 'Energy Switch';
  public set = 'PK';
  public setNumber = '75';
  public text = 'Move a basic Energy from 1 of your Pokémon to another of your Pokémon.';
}

export class GreatBallPK extends GreatBall {
  public fullName = 'Great Ball PK';
  public set = 'PK';
  public setNumber = '77';
}

export class WarpEnergyPK extends WarpEnergy {
  public fullName = 'Warp Energy PK';
  public set = 'PK';
  public setNumber = '91';
  public text = 'This card provides [C] Energy.\n\nWhen you attach this card from your hand to your Active Pokémon, switch that Pokémon with 1 of your Benched Pokémon.';
}