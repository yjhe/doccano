// Rules for project label.
export const colorRules = (msg) => {
  return [
    v => !!v || msg.colorRequired
  ]
}

export const labelNameRules = (msg) => {
  return [
    v => !!v || msg.labelRequired,
    v => (v && v.length <= 30) || msg.labelLessThan30Chars
  ]
}

// Rules for project member.
export const userNameRules = (msg) => {
  return [
    v => !!v || msg.userNameRequired,
    v => (v && v.length <= 30) || msg.userNameLessThan30Chars
  ]
}

export const roleRules = (msg) => {
  return [
    v => !!v || msg.roleRequired
  ]
}

// Rules for a project.
export const projectNameRules = (msg) => {
  return [
    v => !!v || msg.projectNameRequired,
    v => (v && v.length <= 100) || msg.projectNameLessThan100Chars
  ]
}

export const descriptionRules = (msg) => {
  return [
    v => !!v || msg.descriptionRequired,
    v => (v && v.length <= 200) || msg.descriptionLessThan200Chars
  ]
}

export const projectTypeRules = (msg) => {
  return [
    v => !!v || msg.projectTypeRequired
  ]
}

// Rules for Document.
export const fileFormatRules = (msg) => {
  return [
    v => !!v || msg.fileFormatRequired
  ]
}

export const uploadFileRules = (msg) => {
  return [
    v => !!v || msg.fileRequired,
    v => !v || v.size < 10000000 || msg.fileLessThan10MB
  ]
}

// Rules for user.
export const passwordRules = (msg) => {
  return [
    v => !!v || msg.passwordRequired,
    v => (v && v.length <= 100) || msg.passwordLessThan100Chars
  ]
}
