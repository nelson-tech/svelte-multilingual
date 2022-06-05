import { register, init, addMessages, getLocaleFromNavigator } from "svelte-i18n"

// register("en", () => import("./locales/en.json"))
// register("uk", () => import("./locales/uk.json"))
// register("pl", () => import("./locales/pl.json"))
// register("es", () => import("./locales/es.json"))

import en from "./locales/en.json"
import uk from "./locales/uk.json"
import pl from "./locales/pl.json"
import es from "./locales/es.json"

addMessages("en", en)
addMessages("uk", uk)
addMessages("pl", pl)
addMessages("es", es)

init({
	fallbackLocale: "en",
	initialLocale: getLocaleFromNavigator(),
})
