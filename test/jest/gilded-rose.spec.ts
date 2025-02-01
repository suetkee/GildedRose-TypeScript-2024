import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  
  it('should be foo, 0 and 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 10, 20)]);
    //const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].name).toBe('foo');
    expect(gildedRose.items[0].sellIn).toBe(10);
    expect(gildedRose.items[0].quality).toBe(20);
  });


  it('SellIn and Quality is lowered ', () => {
    const gildedRose = new GildedRose([new Item('foo', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });


  it('Once "SellIn"<0, "Quality" -2', () => {
    const gildedRose = new GildedRose([new Item('foo', -1, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(18);
  });

  it('The `Quality` of an item is never negative', () => {
    const gildedRose = new GildedRose([new Item('foo', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(0);
  });

  it('__"Aged Brie"__ actually increases in `Quality` the older it gets', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(1);
  });

  it('`Quality` of "Aged Brie" is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });

  it('`Quality` of "Backstage passes" is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });

/*
  it('`Quality` of  an item is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('apple', 10, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
  });
*/


  it('__"Sulfuras"__, being a legendary item, never has to be sold or decreases in `Quality`', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  it('__"Backstage passes"__, like aged brie, increases in `Quality` as its `SellIn` value approaches `Quality`' +
    'increases by `2` when there are `10` days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(8);
    expect(items[0].quality).toBe(42);
  });

  it('__"Backstage passes"__, like aged brie, increases in `Quality` as its `SellIn` value approaches'+
    'increases by `3` when there are `5` days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 4, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(43);
  });

  it('__"Backstage passes"__, like aged brie, increases in `Quality` as its `SellIn` value approaches'+
    '`Quality` drops to `0` after the concert', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  

  

});

