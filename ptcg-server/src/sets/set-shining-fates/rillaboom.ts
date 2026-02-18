import { PokemonCard } from '../../game/store/card/pokemon-card';
import { Stage, CardType, EnergyType, SuperType } from '../../game/store/card/card-types';
import { PowerType } from '../../game/store/card/pokemon-types';
import { StoreLike, State, GameError, GameMessage, PlayerType, SlotType } from '../../game';
import { EnergyCard } from '../../game/store/card/energy-card';
import { Effect } from '../../game/store/effects/effect';
import { WAS_POWER_USED, IS_ABILITY_BLOCKED, USE_ABILITY_ONCE_PER_TURN, ABILITY_USED, REMOVE_MARKER_AT_END_OF_TURN, ATTACH_ENERGY_PROMPT } from '../../game/store/prefabs/prefabs';

export class Rillaboom extends PokemonCard {
  public stage: Stage = Stage.STAGE_2;
  public cardType: CardType = CardType.GRASS;
  public hp: number = 170;
  public retreat = [CardType.COLORLESS, CardType.COLORLESS, CardType.COLORLESS];
  public weakness = [{ type: CardType.FIRE }];
  public evolvesFrom = 'Thwackey';

  public powers = [{
    name: 'Voltage Beat',
    useWhenInPlay: true,
    powerType: PowerType.ABILITY,
    text: 'Once during your turn, you may search your deck for up to 2 [G] Energy cards and attach them to 1 of your Pokemon. Then, shuffle your deck.'
  }];
  public attacks = [{
    name: 'Hammer In',
    cost: [CardType.GRASS, CardType.GRASS, CardType.GRASS, CardType.COLORLESS],
    damage: 140,
    text: ''
  }];

  public regulationMark: string = 'D';
  public setNumber = '14';
  public set: string = 'SSH';
  public name: string = 'Rillaboom';
  public fullName: string = 'Rillaboom SSH';
  public cardImage: string = 'assets/cardback.png';

  public readonly VOLTAGE_BEAT_MARKER = 'RILLABOOM_SSH_VOLTAGE_BEAT_MARKER';

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    // Ability: Voltage Beat (once per turn - search deck for up to 2 Grass Energy, attach to 1 Pokemon)
    // Ref: set-sword-and-shield/rillaboom.ts (Voltage Beat)
    if (WAS_POWER_USED(effect, 0, this)) {
      const player = effect.player;

      if (IS_ABILITY_BLOCKED(store, state, player, this)) {
        throw new GameError(GameMessage.BLOCKED_BY_EFFECT);
      }

      const hasGrassEnergyInDeck = player.deck.cards.some(c =>
        c instanceof EnergyCard && c.energyType === EnergyType.BASIC && c.provides.includes(CardType.GRASS)
      );

      if (!hasGrassEnergyInDeck) {
        throw new GameError(GameMessage.CANNOT_USE_POWER);
      }

      USE_ABILITY_ONCE_PER_TURN(player, this.VOLTAGE_BEAT_MARKER, this);
      ABILITY_USED(player, this);

      state = ATTACH_ENERGY_PROMPT(
        store,
        state,
        player,
        PlayerType.BOTTOM_PLAYER,
        SlotType.DECK,
        [SlotType.ACTIVE, SlotType.BENCH],
        { superType: SuperType.ENERGY, energyType: EnergyType.BASIC, name: 'Grass Energy' },
        { min: 0, max: 2, allowCancel: true, sameTarget: true }
      );
    }

    REMOVE_MARKER_AT_END_OF_TURN(effect, this.VOLTAGE_BEAT_MARKER, this);

    return state;
  }

}
