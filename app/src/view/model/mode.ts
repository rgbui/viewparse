import { List } from "util/list";
import { Prop } from "./prop";
import { View } from "./view";

export class Mode {
    private view: View;
    props: List<Prop> = new List<Prop>();
}