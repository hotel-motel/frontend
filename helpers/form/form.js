import Errors from './error.js'

class Form{
  constructor(data){
    this.isSending=false
    this.originalData=data
    this.errors=new Errors()
    for(let field in data){
      this[field]=data[field]
    }
  }
  data(){
    let data={}
    for(let property in this.originalData){
      data[property]=this[property]
    }
    return data
  }
  reset(){
    for(let field in this.originalData){
      this[field]=''
    }
  }
  submit(axios, url){
    this.isSending=true
    return new Promise((resolve, reject)=>{
      axios.$post(url, this.data())
        .then(response=>{
          resolve(response)
        })
        .catch(error=>{
          this.onFail(error.response.data.errors)
          reject(error.response.data.errors)
        })
        .finally(() => this.isSending = false)
    })
  }
  onFail(errors){
    this.errors.record(errors)
  }
  validated(v){
    v.$touch()
    return ! v.$invalid
  }
  parseError(fields, validator){
    let errors={}
    for(let fieldName in fields){
      let field=fields[fieldName]
      for(let ruleName in field){
        let ruleMessage=field[ruleName]
        if ( ! validator.form[fieldName][ruleName]){
          errors[fieldName]=[ruleMessage]
          break
        }
      }
    }
    this.errors.record(errors)
  }
}

export default Form
