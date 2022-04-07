!/bin/bash
for item in $(sudo find $1 -name *.java)
do 
	if [ -f $home ]; then
	echo " Ada file Java pada direktori {$home}"
	fi
done

