
var fs = require('fs')
const { argv } = require('process')
var s = require('./initiatives/AKSREF2_-_Kubernetes_cluster_pod_security_baseline_standards_for_Linux-based_workloads_1f01afd98f33414e995e3ad5/policyset.json')
console.log(s.id, process.argv)
var placeh = s.id.split('/')[2]

s.id=s.id.replace(placeh, process.argv[2]) 


console.log(s.id)

/* fs.writeFileSync(`${__dirname}/initiatives/AKSREF2_-_Kubernetes_cluster_pod_security_baseline_standards_for_Linux-based_workloads_1f01afd98f33414e995e3ad5/policyset.json`,JSON.stringify(s))

 */
