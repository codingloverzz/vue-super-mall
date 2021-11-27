import { ref } from "vue";
import { getHomeGoods } from "../network/home"
export function useHomeGoodsList() {
    const goods = ref({
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
    });

    function useHomeGoodsData(type) {
        const page = goods.value[type].page + 1;
        getHomeGoods(type, page).then((res) => {
            goods.value[type].list.push(...res.list);
            goods.value[type].page += 1;
            console.log(res);
        });
    }
    useHomeGoodsData("pop");
    useHomeGoodsData("new");
    useHomeGoodsData("sell");
    const currentType = ref("pop");

    const handleTabClick = (index) => {
        console.log(index);
        switch (index) {
            case 0:
                currentType.value = "pop";
                break;
            case 1:
                currentType.value = "new";
                break;
            case 2:
                currentType.value = "sell";
        }
    };
    return [goods, currentType, handleTabClick]
};