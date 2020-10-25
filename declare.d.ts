
declare module '*.css' {
    const styles: any
    export = styles
}

type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
    const content: SvgrComponent
    export default content
}
