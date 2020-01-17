#!/usr/bin/python
"""
This is the most simple example to showcase Containernet.
"""
from mininet.net import Containernet
from mininet.node import Controller
from mininet.cli import CLI
from mininet.link import TCLink
from mininet.log import info, setLogLevel
setLogLevel('info')

net = Containernet(controller=Controller)
info('*** Adding controller\n')
net.addController('c0')

info('*** Adding docker containers\n')
srv = net.addDocker('srv', ip='10.0.0.30', dimage="server:latest")
gwi = net.addDocker('gwi', ip='10.0.0.31', dimage="gwi:latest")
gwf1 = net.addDocker('gwf1', ip='10.0.0.32', dimage="gwf:one")
dev1 = net.addDocker('dev1', ip='10.0.0.33', dimage="dev:one")

info('*** Adding switches\n')
s1 = net.addSwitch('s1')
s2 = net.addSwitch('s2')
s3 = net.addSwitch('s3')
s4 = net.addSwitch('s4')
s5 = net.addSwitch('s5')

info('*** Creating links\n')
net.addLink(srv, s1)
net.addLink(gwi, s1)
net.addLink(gwf1, s3)
net.addLink(dev1, s3)

net.addLink(s1, s2, cls=TCLink, delay='100ms', bw=1)
net.addLink(s2, s3, cls=TCLink, delay='100ms', bw=1)
net.addLink(s2, s4, cls=TCLink, delay='100ms', bw=1)
net.addLink(s2, s5, cls=TCLink, delay='100ms', bw=1)

info('*** Starting network\n')
net.start()
info('*** Testing connectivity\n')
net.ping([srv, dev1])
info('*** Running CLI\n')
CLI(net)
info('*** Stopping network')
net.stop()

