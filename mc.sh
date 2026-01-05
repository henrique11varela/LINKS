if [ ! -f ~/cloudflared_installed ]; then
	sudo apt update && sudo apt upgrade -y && sudo apt install curl vim -y
	sudo mkdir -p --mode=0755 /usr/share/keyrings
	curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null
	echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list
	sudo apt update && sudo apt install cloudflared
	touch ~/cloudflared_installed
fi
echo ""
echo "To connect use localhost:9210"
cloudflared access tcp --hostname minecraft2.henriquevarela.app --url 127.0.0.1:9210 > /dev/null
