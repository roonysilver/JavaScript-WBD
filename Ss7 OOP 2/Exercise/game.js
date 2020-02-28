function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
  
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px ; position:absolute;" />';
    }
  
    this.moveRight = function(){
      this.left += 10;
      console.log('phải ok: ' + this.left);
    }
    this.moveTop = function(){
      this.top += 10;
      console.log('dưới ok: ' + this.top);
    }
    this.moveLeft = function() {
        this.left -= 10;
        console.log('trái ok: ' + this.left);
    }
    this.moveDown = function(){
      this.top -= 10;
    }

  }
  
  var hero = new Hero('1224179-0goku.jpg',20, 30, 200);
  
  function start(){
    const width=  window.innerWidth - hero.size;
    const height= window.innerHeight - hero.size;

    if (hero.left < width && hero.top <= 20) {
      hero.moveRight();
    }
    if (hero.left >= width && hero.top < height) {
    hero.moveTop()
    }
    if (hero.left > 30 && hero.top >= height){
      hero.moveLeft()
  }
  if (hero.left <= 30 && hero.top >20){
      hero.moveDown()
  }
   
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10)
  }
 
  start();