import { List } from "util/list";
import { Mode } from "./mode";
import { Prop } from "./prop";
import { ViewType } from "./view.type";

export class View {
    type: ViewType;
    modes: List<Mode> = new List<Mode>();
    props: List<Prop> = new List<Prop>();
    views: List<View> = new List<View>();
}