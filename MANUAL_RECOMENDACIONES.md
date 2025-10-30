#  MANUAL DE RECOMENDACIONES Y GUÍA COMPLETA PARA PROYECTOS ANGULAR + GIT

> Documento creado por **Camila Rivera** — Proyecto `proyectotwo-angular`
> Este manual explica el flujo completo de trabajo en Angular, el uso de Git y GitHub, comandos, estructura de archivos, solución de errores y tips importantes.

---

##  1. PREPARACIÓN INICIAL DEL PROYECTO

###  1. Node.js

**Comando:**

```bash
node -v
```

**Significa:** Muestra la versión de Node.js instalada.

**Qué es Node.js:**
Entorno que permite ejecutar JavaScript fuera del navegador; Angular necesita Node.js para funcionar.

**Ejemplo de salida correcta:**

```
v20.10.0
```

Si sale "command not found", instala Node.js desde [https://nodejs.org](https://nodejs.org)

---

### 2. npm (Node Package Manager)

**Comando:**

```bash
npm -v
```

**Sirve para:** Ver la versión del gestor de paquetes de Node que se usa para instalar librerías.

**Ejemplo:**

```
10.2.3
```

*Nota:* npm se instala automáticamente con Node.js.

---

### 3. BunJS (opcional)

**Comando:**

```bash
bun -v
```

**Qué es:** Alternativa moderna a Node.js/npm, más rápida. Opcional para Angular.

**Si aparece error:** No es obligatorio, sigue sin problemas.

**Instalación en Windows:**

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Verifica con:

```bash
bun --version
```

**Ejemplo:** `1.1.21`

**Configurar Angular para usar Bun:**

```bash
ng config -g cli.packageManager bun
```

Esto hace que Angular use Bun por defecto.

---

### 🅰️ 4. Angular CLI

**Comando:**

```bash
ng version
```

**Qué hace:** Muestra la versión de Angular CLI y permite crear, ejecutar y compilar proyectos.

**Ejemplo de salida:**

```
Angular CLI: 18.0.1
Node: 20.10.0
Package Manager: npm 10.2.3
```

**Si no reconoce `ng`:**

```bash
npm install -g @angular/cli
```

Luego prueba:

```bash
ng version
```

**Salida esperada:**

```
Angular CLI: 18.2.5
Node: 20.10.0
Package Manager: npm 11.6.1
```

### Preguntas comunes de `ng new` y explicación sencilla

* `Would you like to add Angular routing?` ➡️ **N** si no vas a crear rutas entre páginas. Si eliges **Y**, Angular crea la configuración para cambiar entre vistas.
* `Which stylesheet format would you like to use?` ➡️ Selecciona **CSS**. Otras opciones (SCSS, SASS, LESS) permiten funciones más avanzadas de estilos, pero CSS es suficiente para comenzar.
* `Do you want to enable Server-Side Rendering (SSR)?` ➡️ **N** si solo quieres una app cliente. SSR sirve para cargar contenido en el servidor, útil para SEO y rendimiento avanzado.

> Con estas opciones, la instalación será simple y funcional para la mayoría de los ejercicios.

Esto generará una estructura con archivos esenciales como:

```
src/
├── app/
│   ├── app.component.ts
│   ├── app.module.ts
│   └── ...
├── assets/
├── environments/
├── index.html
├── main.ts
└── styles.css
```
---

## 5. Git: Instalación y configuración

### ¿Por qué instalar Git?

* 💾 Guardar cambios con historial.
* 🔄 Volver atrás si algo sale mal.
* 👯‍♀️ Compartir proyectos fácilmente (GitHub).
* ☁️ Subir tu proyecto a la nube.

### Instalación en Windows

1️⃣ Ve a [https://git-scm.com/downloads](https://git-scm.com/downloads)
2️⃣ Descarga versión Windows y ejecuta con opciones por defecto.
3️⃣ Reinicia la terminal.
4️⃣ Verifica:

```bash
git --version
```

**Ejemplo:** `git version 2.47.0.windows.1` 

### Inicializar Git en tu proyecto Angular

```bash
cd mi-proyecto-angular
git init
git add .
git commit -m "Primer commit - proyecto Angular con Bun"
```

### Configurar identidad de Git

```bash
git config --global user.name "cami050"
git config --global user.email "camila.rivera@gmail.com"
git config --list
```

**Nota:** `--global` aplica para todos los proyectos futuros.

### Subir proyecto a GitHub

1️⃣ Crea un repositorio en GitHub (sin README).
2️⃣ Conecta proyecto local:

```bash
git remote add origin https://github.com/TU_USUARIO/mi-proyecto-angular-bun.git
git branch -M main
git push -u origin main
```

3️⃣ Verifica que los archivos aparezcan en GitHub.

---

## 6. Desarrollo de ejercicios y componentes Angular

### Crear un componente

```bash
ng generate component ejercicio#n
```

**Qué se crea por componente:**

| Archivo    | Propósito                       |
| ---------- | ------------------------------- |
| `.ts`      | Código TypeScript (lógica)      |
| `.html`    | Plantilla visual del componente |
| `.css`     | Estilos asociados al componente |
| `.spec.ts` | Archivo de pruebas unitarias    |

##  2. SIGNIFICADO DE LAS TERMINACIONES DE ARCHIVOS

| Extensión | Significado | Ejemplo | Descripción |
|------------|--------------|----------|--------------|
| `.ts` | TypeScript | `app.component.ts` | Lógica del componente (clases, funciones, imports). |
| `.html` | HTML | `app.component.html` | Plantilla visual del componente. |
| `.css` | CSS | `app.component.css` | Estilos específicos del componente. |
| `.spec.ts` | Test | `app.component.spec.ts` | Pruebas unitarias automáticas. |
| `.json` | Configuración | `angular.json`, `package.json` | Configura dependencias, builds, scripts. |

---

## 3. COMANDOS DE ANGULAR MÁS USADOS

| Comando | Descripción |
|----------|--------------|
| `ng serve` | Ejecuta el proyecto localmente en el navegador (`http://localhost:4200`). |
| `ng generate component nombre` o `ng g c nombre` | Crea un nuevo componente con sus archivos (`.ts`, `.html`, `.css`, `.spec.ts`). |
| `ng generate service nombre` o `ng g s nombre` | Crea un servicio para lógica compartida o conexión con APIs. |
| `ng build` | Compila el proyecto listo para producción (carpeta `/dist`). |
| `ng version` | Muestra la versión actual de Angular CLI y dependencias. |


### Ejecutar servidor local

```bash
ng serve
```

Abre navegador en `http://localhost:4200`.

### Explicación de imports en Angular

Por ejemplo:

```typescript
import { Component } from '@angular/core';
```

* `import` → Trae funcionalidades de Angular.
* `{ Component }` → Clase que permite definir un componente.
* `'@angular/core'` → Módulo principal de Angular donde se encuentra `Component`.

> Con `ng new` y `ng generate component`, Angular registra todo automáticamente, no necesitas modificar `app.module.ts`.

### Tip: Entendiendo cada parte del componente

* `ejercicioX.ts` → contiene la lógica y comportamiento del componente.
* `ejercicioX.html` → define la estructura visual que el usuario verá.
* `ejercicioX.css` → personaliza el estilo visual.
* `ejercicioX.spec.ts` → permite realizar pruebas automáticas (opcional al principio).

## 7. ERRORES COMUNES Y SOLUCIONES

| Error | Causa | Solución |
|--------|--------|-----------|
| `fatal: not a git repository` | No estás dentro del proyecto inicializado con Git. | Usa `cd` para entrar a la carpeta correcta o ejecuta `git init`. |
| `remote: repository not found` | URL del repositorio incorrecta o sin permisos. | Verifica con `git remote -v` y corrige con `git remote set-url origin URL_CORRECTA`. |
| `branch 'main' set up to track 'origin/main'` | Mensaje normal, indica sincronización correcta. | No requiere acción. |
| `nothing to commit, working tree clean` | No hay cambios nuevos en los archivos. | Realiza modificaciones antes de hacer commit. |
| `ng : File C:\Users... cannot be loaded` | Angular CLI no reconocida. | Reinstala Angular CLI: `npm install -g @angular/cli`. |

---

## 8. TIPS Y BUENAS PRÁCTICAS

- **Nombres de commits claros**: describe qué hiciste (`"Agregado componente de login"`, `"Corrección en servicio de usuarios"`).  
- **Crea ramas para nuevas funciones**:
  ```bash
  git checkout -b nueva-funcionalidad
  ```
- 🔁 **Actualiza tu rama antes de subir cambios**:
  ```bash
  git pull
  ```
- 💾 **Guarda tus cambios frecuentemente**: evita perder trabajo con commits pequeños pero constantes.
- 🌍 **Usa `.gitignore`** para evitar subir archivos innecesarios (`node_modules/`, `dist/`, etc.).
- 🔒 **Nunca subas contraseñas o claves API.**
- 🧪 **Prueba tu proyecto antes de subirlo**:
  ```bash
  ng serve
  ```
- 📂 **Organiza tus componentes** dentro de carpetas según su función (por ejemplo, `auth/`, `dashboard/`, `shared/`).

---

## 📜 9. EJEMPLO DE SESIÓN COMPLETA DE TRABAJO

```bash
# Abrir proyecto
cd C:\Users\Usuario\Documents\proyectotwo-angular

# Ejecutar servidor local
ng serve

# Crear un nuevo componente
ng g c components/login

# Guardar y preparar cambios
git add .

# Commit con descripción
git commit -m "Creado componente login con HTML y CSS"

# Subir a GitHub
git push
```

---

##  10. COMANDOS ÚTILES DE GIT

| Comando | Función |
|----------|----------|
| `git status` | Ver el estado actual de archivos. |
| `git log` | Ver el historial de commits. |
| `git diff` | Ver los cambios realizados antes de hacer commit. |
| `git remote -v` | Ver la URL del repositorio remoto. |
| `git pull` | Traer cambios del repositorio remoto. |
| `git push` | Subir tus cambios al remoto. |

---

