//Licence: GPL3+ https://www.gnu.org/licenses/gpl.txt

//add something to your page that looks like an ad
document.body.innerHTML += "<div id='adTeaser' style='width:10px;'></div>"

//block usage of the site if the preceeding ad is detected
window.setTimeout(function(){
      if (document.querySelector('#adTeaser').clientWidth === 10) {
        plsblock= '<div style="text-align:center;"><span style="font-size: 20px;width: 300px;margin-top: 10%;display: inline-block;">Please turn on your <a href="https://github.com/gorhill/uBlock#ublock-origin">ad blocker</a> to continue browsing this site</span></div>';
        document.body.innerHTML=plsblock;
      }
    }, 1000)



/** just drop this snippet into your web page to get the same effect
<div id="adTeaser" style="width:10px;"></div>
<script>
    window.setTimeout(function(){
      if (document.querySelector('#adTeaser').clientWidth === 10) {
        plsblock= '<div style="text-align:center;"><span style="font-size: 20px;width: 300px;margin-top: 10%;display: inline-block;">Please turn on your <a href="https://github.com/gorhill/uBlock#ublock-origin">ad blocker</a> to continue browsing this site</span></div>';
        document.body.innerHTML=plsblock;
      }
    }, 1000)
</script>
**/