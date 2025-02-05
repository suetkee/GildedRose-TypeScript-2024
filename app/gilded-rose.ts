export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }  

  updateQuality() {

  const updateAgedBrieQuality = (quality) => {
    return quality <50 ? quality + 1 : quality;
    };
  

  const updateBackstagePassesQuality = (quality, sellIn) => {
  
    if(quality<50){
     quality+=1;
    }
    if(sellIn <11 && quality <50){
      quality+=1;
    }
    if(sellIn<6 && quality <50){
      quality+=1;
    }        
    if(sellIn<0){
      quality = 0;
    }   
    return quality;
  }

  const updatedItemQuality = (quality, SellIn) => {
    if(quality>0){
      quality-=1;
     }
     if(SellIn <0 && quality >0){
      quality-=1;
    }
    return quality;
  }

  const updatedSulfurasQuality = (quality) => {
    return quality!==80?quality=80:quality;    
  }

  const updateSellIn = (sellIn)=>{
    return sellIn-1;
  }
         
        for (const item of this.items) {
          switch(item.name){

            case 'Aged Brie':
              item.quality = updateAgedBrieQuality(item.quality);
              item.sellIn = updateSellIn(item.sellIn); 
              break;     

            case 'Backstage passes to a TAFKAL80ETC concert':
              item.quality = updateBackstagePassesQuality(item.quality, item.sellIn);
              item.sellIn = updateSellIn(item.sellIn);
              //return item
              break;
            
            case 'Sulfuras, Hand of Ragnaros': 
              item.quality = updatedSulfurasQuality(item.quality);  
              //return item
              break;

            default:
              item.quality = updatedItemQuality(item.quality, item.sellIn);
              item.sellIn = updateSellIn(item.sellIn);
             //return item
              break;
          }
           
        }

   
return this.items
 ///////////////////////////////////////////////////////////   
    /*


for (let i = 0; i < this.items.length; i++) {
  if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    if (this.items[i].quality > 0) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].quality = this.items[i].quality - 1
      }
    }
  } else {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1
      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn < 11) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
        if (this.items[i].sellIn < 6) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }
  }
  if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }
  if (this.items[i].sellIn < 0) {
    if (this.items[i].name != 'Aged Brie') {
      if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        this.items[i].quality = this.items[i].quality - this.items[i].quality
      }
    } else {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1
      }
    }
  }
}

return this.items;


*/
}
}