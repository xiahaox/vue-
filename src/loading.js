// loading.js
import LoadingComponent from '../src/components/loading.vue'

let $vm
export default {
    install(Vue, option) {
        console.log(option);
        if (!$vm) {
            const LoadingPlugin = Vue.extend(LoadingComponent);

            $vm = new LoadingPlugin();
            $vm.$mount()
            // console.log($vm);
            document.body.appendChild($vm.$el);
        }

        $vm.show = false;

        let loading = {
            show(text) {
                $vm.show = true;
                $vm.text = text;
            },
            hide() {
                $vm.show = false;
            }
        };

        // if (!Vue.$loading) {
        //     Vue.$loading = loading;
        // }
        Vue.prototype.$loading = loading;

        // Vue.mixin({
        //     created() {
        //         this.$loading = Vue.$loading;
        //     }
        // })
    }
}
