function calculate(recs){
    var res = 0;
    var multipleX = 0;
    for (var i = 0; i < recs.length; i++)
    {
        var rect = recs[i];
        res += (rect[2] - rect[0]) * (rect[3] - rect[1]);
        for (var j = i + 1; j < recs.length; j++)
        {
            var item = recs[j];
            var intersect = GetIntersectionArea(rect, item);
            if (intersect != null)
            {
                for (var k = j + 1; k < recs.length; k++)
                {
                    var item2 = recs[k];
                    var intersect2 = GetIntersectionArea(intersect, item2);
                    if (intersect2 != null)
                    {
                        res += (intersect2[2] - intersect2[0]) * (intersect2[3] - intersect2[1]);
                    }
                }
                multipleX += (intersect[2] - intersect[0]) * (intersect[3] - intersect[1]);
            }
        }
    }
    return res -= multipleX;
}

function GetIntersectionArea(rectangle1, rectangle2)
{
    if (rectangle1[0] < rectangle2[2] && rectangle2[0] < rectangle1[2] && rectangle1[1] < rectangle2[3] && rectangle2[1] < rectangle1[3])
    {
        var intersectionArea = 0;
        var num = Math.max(rectangle2[0], rectangle1[0]);
        var num2 = Math.min(rectangle2[0] + rectangle2[2] - rectangle2[0], rectangle1[0] + rectangle1[2] - rectangle1[0]);
        var num3 = Math.max(rectangle2[1], rectangle1[1]);
        var num4 = Math.min(rectangle2[1] + rectangle2[3] - rectangle2[1], rectangle1[1] + rectangle1[3] - rectangle1[1]);
        if (num2 >= num && num4 >= num3)
        {
            intersectionArea = (num2 - num) * (num4 - num3);
        }
        return [num, num3, num2, num4];
    }
    return null;
}

console.log(calculate([[ 1, 3, 4, 5 ], [ 2, 1, 4, 7 ],[ 3, 4, 5, 6 ]]))