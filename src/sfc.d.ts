declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

// declare module 'vue/types/vue' {
// 	interface Vue {
//         $refs: {[k: string]: any}
// 	}
// }


declare module '*.jpg' {
    const value: any
    export default value
}
