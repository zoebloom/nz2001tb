jQuery.fn.extend({
    check: function ($subCheck, $unBtn) {
        this.click(function () {
            $subCheck.prop("checked", this.checked)
        });
        if ($unBtn) {
            $unBtn.click(function () {
                $subCheck.each(function () {
                    this.checked = !this.checked;
                });
                subChangeFather();
            });
        }
        $subCheck.click(function () {
            subChangeFather();
        });
        var subChangeFather=()=> {
            let allCheck = true;
            $subCheck.each(function () {
                if (this.checked != true) {
                    allCheck = false;
                }
            });
            this.prop("checked", allCheck);
        }
    }
});