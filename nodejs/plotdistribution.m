fileId = fopen('pointerdistribution.txt');
fcontents = textscan(fileId,'%f','Delimiter',',');
pointers = fcontents{1,1};
len = size(pointers);
a = 1:1:149;
plot(a,pointers);    