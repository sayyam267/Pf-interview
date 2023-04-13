(function(m, a, i, l, e, r) {
    m['MailerLiteObject'] = e;
    function f() {
        var c = { a: arguments, q: [] };
        var r = this.push(c);
        return 'number' != typeof r ? r : f.bind(c.q);
    }
    f.q = f.q || [];
    m[e] = m[e] || f.bind(f.q);
    m[e].q = m[e].q || f.q;
    r = a.createElement(i);
    var _ = a.getElementsByTagName(i)[0];
    r.async = 1;
    r.src = l + '?v' + ~~(new Date().getTime() / 1000000);
    _.parentNode.insertBefore(r, _);
})(
    window,
    document,
    'script',
    'https://static.mailerlite.com/js/universal.js',
    'ml'
);

const ml_account = ml('accounts', '3400447', 'm0o3i7j0w1', 'load');
// const ml_webform_4625155 = ml_account('webforms', '4625155', 'q6e6f8', 'load');
// console.log(ml_webform_4625155, ml_account);
// ml_webform_4625155('animation', 'slideboxRight');

window.ml_webform_4646668 = ml_account('webforms', '4646668', 'a6q8z0', 'load');
// ml_webform_4646668('animation', 'fadeIn');
