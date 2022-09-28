list1 = [[0]]

for i in range(0):
    list2 = list1
    list2[i].insert(0, 0)
    print(len(list2),'list2 length')
    for j in range(len(list2)-1):
        print(list2)
        list1.append([])
