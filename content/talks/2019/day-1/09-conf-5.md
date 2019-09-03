+++
name = "Building Resilient Event-Driven Services"
type = "microphone"
schedule = "14:25 - 15:15"
speakers = ["James Watson"]
+++

At Adaptive we've spent a lot of our time building trading systems which have complex business requirements but also need to be fast and resilient.

The core of our system is a clustered service which uses the Raft consensus algorithm to reliably replicate state between the different nodes and hosts our application logic. 
We will take a quick look at Raft and then at the benefits of this design compared to more "mainstream" architectures. 
This architecture offers a clean separation of concerns between the infrastructure – which takes care of the concurrency, I/O and high availability aspects – and the application logic. 
The clean architecture is a great fit for domain-driven design.

If you fancy building fast, resilient services you should come to this talk!