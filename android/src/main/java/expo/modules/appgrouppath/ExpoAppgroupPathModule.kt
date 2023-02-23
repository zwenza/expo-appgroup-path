package expo.modules.appgrouppath

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAppgroupPathModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoAppgroupPath")

    Function("getPath") {
      "Unsupported"
    }
  }
}
