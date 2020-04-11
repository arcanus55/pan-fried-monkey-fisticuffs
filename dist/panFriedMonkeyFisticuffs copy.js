// Pan Fried Monkey Fisticuffs v1.0 | Scott C. Krause

"use strict";
var _aRevAct=0, _aRevX=0, _sRevId="", _bIsOpen = false, _fOnClose=null, _d=document;
var pfmfModal = {
  eRev: 0, eRevScrim: 0,
  "init" : function() {
    _aRevX = _d.getElementsByClassName("close-reveal-modal");
    for (var i = 0, ln = _aRevX.length; i < ln; i++) {
        _aRevX[i].addEventListener("click", pfmfModal.close, false);
    }
    _aRevAct = _d.querySelectorAll("[data-rev-id]");
    for (var i = 0, ln = _aRevAct.length; i < ln; i++) {
        _aRevAct[i].addEventListener("click", pfmfModal.open, false);
    }
    pfmfModal.eRevScrim = _d.getElementById("id-reveal__scrim");
  },
  "open" : function(e){
    _bIsOpen = true;
    _sRevId = this.getAttribute("data-rev-id");
    if(_sRevId){
      pfmfModal.eRevScrim.classList.add("reveal__scrim");
      pfmfModal.eRev = _d.getElementById(_sRevId);
      pfmfModal.eRev.classList.add("reveal__box");
      pfmfModal.eRev.parentElement.classList.remove("reveal__init");
        pfmfModal.eRev.style.top = String(window.pageYOffset + 84) + "px";
        pfmfModal.eRev.style.visibility = "visible";
      pfmfModal.eRev.setAttribute("aria-hidden", "false");
      e.preventDefault();
    }
    return false;
  },
  "close" : function(e){
    _bIsOpen = false;
    pfmfModal.eRevScrim.classList.remove("reveal__scrim");
    pfmfModal.eRev.classList.remove("reveal__box");
    pfmfModal.eRev.parentElement.classList.add("reveal__init");
    pfmfModal.eRev.setAttribute("aria-hidden", "true");
    if(e){ e.preventDefault(); }
    if( _fOnClose ) _fOnClose();
  },
  "autoOpen" : function(_sId){
    _bIsOpen = true;
    _sRevId = _sId;
    if(_sRevId){
      pfmfModal.eRevScrim.classList.add("reveal__scrim");
      pfmfModal.eRev = _d.getElementById(_sRevId);
      pfmfModal.eRev.classList.add("reveal__box");
      pfmfModal.eRev.parentElement.classList.remove("reveal__init");
        pfmfModal.eRev.style.top = String(window.pageYOffset + 84) + "px";
        pfmfModal.eRev.style.visibility = "visible";
      pfmfModal.eRev.setAttribute("aria-hidden", "false");
    }
    return false;
  },
  "isOpen" : function(){
    return _bIsOpen;
  },
  "setOnClose" : function( _f ){
    if( _f ) _fOnClose = _f;
  }
}; pfmfModal.init();