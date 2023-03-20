import dayjs from "dayjs";
import "dayjs/locale/pt-br";

const date = dayjs();
export const formatttDate = date.locale("pt-br").format("dddd, DD/MM");