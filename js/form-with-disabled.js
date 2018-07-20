(function ($) {
    'use strict';

    function emailValidate(email){
        var check = "" + email;
        if((check.search('@')>=0)&&(check.search(/\./)>=0))
            if(check.search('@')<check.split('@')[1].search(/\./)+check.search('@')) return true;
            else return false;
        else return false;
    }

    var $submitButton = $('[type="submit"]:not(.newsletter)'),
        $requiredFields = $('[aria-required="true"]'),
        formErrors = "This field is required."
    $requiredFields.on('blur',function () {
        var $this = $(this),
            id = $this.attr('id'),
            $errMsg = $('#' + id + "Err");
        if ($this.prop('type') == "checkbox"){
            if(!$(this).is(':checked')){
                $this.attr('data-ok', 'false');
                $errMsg.text("Please accept our Privacy Policy.");
                $submitButton.attr('disabled', 'disabled');
                return false;
            }
        }else if($this.prop('type') == "email"){
          if(!emailValidate($this.val())){
            $this.attr('data-ok', 'false');
            $errMsg.text("Please enter correct email");
            $submitButton.attr('disabled', 'disabled');
            return false;
          }
        }
        else{
          if ($this.val() === "") {
              $errMsg.text(formErrors);
              $this.attr('data-ok', 'false');
              $submitButton.attr('disabled', 'disabled');
              return false;
          }
        }

        $errMsg.text("");
        $this.attr('data-ok', 'true');
        if ($('[data-ok="false"]').length === 0) {
            $submitButton.removeAttr('disabled');
        }
    });
    // $('[type="checkbox"').on('change', function () {
    //     if ($(this).is(':checked')) {
    //         $('#catName').removeAttr('disabled');
    //         return true;
    //     }
    //     $('#catName').attr('disabled', 'disabled');
    // });
    $submitButton.on('click', function (evt) {
        if ($(this).attr('disabled') === "disabled") {
            evt.preventDefault();
            return false;
        }
    });

    var $newsltterButton = $('.newsletterBtn'),
        $requiredFields2 = $('[aria-checkrequired="true"]'),
        formErrors2 = "This field is required."
    $requiredFields2.on('blur',function () {
        var $this = $(this),
            id2 = $this.attr('id'),
            $errMsg2 = $('#' + id2 + "Err");
            console.log($errMsg2);
        if ($this.prop('type') == "checkbox"){
            if(!$(this).is(':checked')){
                $this.attr('data-sign', 'false');
                $errMsg2.text("Please check privacy policy");
                $newsltterButton.attr('disabled', 'disabled');
                return false;
            }
        }else if($this.prop('type') == "email"){
          if(!emailValidate($this.val())){
            $this.attr('data-sign', 'false');
            $errMsg2.text("Please enter correct email");
            $newsltterButton.attr('disabled', 'disabled');
            return false;
          }
        }
        else{
          if ($this.val() === "") {
              $errMsg2.text(formErrors2);
              $this.attr('data-sign', 'false');
              $newsltterButton.attr('disabled', 'disabled');
              return false;
          }
        }

        $errMsg2.text("");
        $this.attr('data-sign', 'true');
        if ($('[data-sign="false"]').length === 0) {
            $newsltterButton.removeAttr('disabled');
        }
    });
    // $('[type="checkbox"').on('change', function () {
    //     if ($(this).is(':checked')) {
    //         $('#catName').removeAttr('disabled');
    //         return true;
    //     }
    //     $('#catName').attr('disabled', 'disabled');
    // });
    $newsltterButton.on('click', function (evt) {
        if ($(this).attr('disabled') === "disabled") {
            evt.preventDefault();
            return false;
        }
    });
}(jQuery));
