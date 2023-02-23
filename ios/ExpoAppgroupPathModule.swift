import ExpoModulesCore
import Foundation

public class ExpoAppgroupPathModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoAppgroupPath")
      
    Function("getPath") { (group: String) -> String? in
      FileManager.default.containerURL(forSecurityApplicationGroupIdentifier: group)?.absoluteString
    }
  }
}
