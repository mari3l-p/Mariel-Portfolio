// Esto le dice a TypeScript que está bien importar archivos .css
// (para importaciones "side-effect" como en tu layout.tsx)
declare module '*.css';

// Esto es para los Módulos CSS (ej. MiComponente.module.css)
// Es bueno tenerlo para que TypeScript entienda también esos.
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Puedes agregar otros tipos de archivo aquí si los usas (ej. .scss)
declare module '*.scss';
declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}