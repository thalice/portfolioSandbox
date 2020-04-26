const node = document.getElementById("transition")

let
  words = ['ALICE','UX Designer','adepte de montagne','contente de vous voir'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 5,
  speed = 80;

const wordflick = () => {
  setInterval(() => {
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
        console.log(part)
    	node.innerHTML = part
  },speed);
};

document.addEventListener('DOMContentLoaded', function(){
    wordflick()
});
