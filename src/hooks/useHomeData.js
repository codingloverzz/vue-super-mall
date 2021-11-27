import { ref } from "vue";
import { getHomeMultidata } from "../network/home";
const banner = ref({});
const recommend = ref({});
export function useHomeData() {
    getHomeMultidata().then(result => {
        banner.value = result.banner.list;
        recommend.value = result.recommend.list;
    });
    return [
        banner,
        recommend,
    ]
}