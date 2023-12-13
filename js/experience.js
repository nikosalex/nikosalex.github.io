function setProgressBar(skillClass, yearsOfExperience) {
const width = yearsOfExperience * 6; // Each year corresponds to 10%
$(`.bar-expand.${skillClass}`).css('width', `${width}%`);
}

// Call the function for each skill with the corresponding years of experience
$(document).ready(function() {
setProgressBar('kubernetes', 2);       // 2 years of Kubernetes experience
setProgressBar('helm', 2);             // 2 years of Helm experience
setProgressBar('docker', 2);           // 2 years of Docker experience
setProgressBar('jenkins', 6);          // 6 years of Jenkins experience
setProgressBar('github-actions', 2);   // 2 years of GitHub Actions experience
setProgressBar('argocd', 1);           // 1 years of ArgoCD experience
setProgressBar('istio', 1);            // 1 year of Istio experience
setProgressBar('ambassador', 1);       // 1 years of Ambassador experience
setProgressBar('mongodb', 2);          // 2 years of MongoDB experience
setProgressBar('arangodb', 1);         // 1 years of ArangoDB experience
setProgressBar('rabbitmq', 1);         // 1 years of RabbitMQ experience
setProgressBar('nats', 1);             // 1 year of NATS experience
setProgressBar('circleci', 1);         // 1 years of CircleCI experience
setProgressBar('prometheus', 2);       // 2 years of Prometheus experience
setProgressBar('grafana', 2);          // 2 years of Grafana experience
setProgressBar('cloudflare', 2);       // 2 years of Cloudflare experience
setProgressBar('github', 5);           // 5 years of GitHub experience
setProgressBar('nginx', 3);            // 3 years of Nginx experience
setProgressBar('document-procedures', 6); // 6 years of Document Procedures experience
setProgressBar('coaching', 4);          // 4 years of Coaching experience
// Add similar lines for other skills
});